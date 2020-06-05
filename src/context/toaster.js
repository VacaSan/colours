import React from "react";
import { Portal } from "components/portal";

/**
 * @typedef {object} ToasterContext
 * @property {(message: React.ReactNode) => void} toast
 * @property {() => void} dismiss
 */

/** @type {React.Context<ToasterContext>} */
const Context = React.createContext(undefined);

const not = x => !x;

const createId = () => Math.round(Math.random() * Date.now());

function Toaster({ children, timeout = 1200 }) {
  const [item, setItem] = React.useState(undefined);

  const dismiss = React.useCallback(() => setItem(undefined), []);

  const toast = React.useCallback(element => {
    setItem({ element, id: createId() });
  }, []);

  const id = item?.id;
  React.useEffect(() => {
    if (not(id)) return void 0;

    const timeoutId = setTimeout(dismiss, timeout);
    return () => clearTimeout(timeoutId);
  }, [id, dismiss, timeout]);

  const value = React.useMemo(
    () => ({
      toast,
      dismiss,
    }),
    [toast, dismiss]
  );

  return (
    <Context.Provider value={value}>
      {item && <Portal>{item?.element}</Portal>}
      {children}
    </Context.Provider>
  );
}

function useToaster() {
  const context = React.useContext(Context);
  if (context === undefined) {
    throw new Error("useToaster must be used within ToasterContext");
  }
  return context;
}

export { Toaster, useToaster };
