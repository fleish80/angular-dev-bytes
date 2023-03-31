import * as ts from 'typescript';


export function prefixIdentifier(): ts.TransformerFactory<ts.SourceFile> {
  return context => {
    return sourceFile => {
      const visitor: ts.Visitor = node => {
        return ts.visitEachChild(node, visitor, context);
      };
      return ts.visitNode(sourceFile, visitor);
    }
  };
}
