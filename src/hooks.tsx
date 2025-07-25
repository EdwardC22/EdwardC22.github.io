export const useExtendStyle =
  (classNames: string) =>
  (base: TemplateStringsArray, ...strExprs: (string | undefined)[]) => {
    const res = `${classNames} ${base.join(" ")} ${strExprs
      .filter((s) => !!s)
      .join(" ")}`;
    return res.trim();
  };