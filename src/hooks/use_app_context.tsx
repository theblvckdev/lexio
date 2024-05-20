import { AppContext, ContextValue } from "@/context/app_context";
import { useContext } from "react";

const useAppContext = (): ContextValue => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }

  return context;
};

export default useAppContext;
