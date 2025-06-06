import { useEffect } from "react";

export function useKeys(key, action) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase === key.toLowerCase) {
          action();
        }
      }
      document.addEventListener("keydown", callback);

      return function () {
        return document.removeEventListener("keydown", callback);
      };
    },
    [action, key]
  );
}
