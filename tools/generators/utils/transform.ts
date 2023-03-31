import {Tree} from '@nrwl/devkit';
import * as ts from 'typescript';

export function transform(tree: Tree, path: string, transformers: ts.TransformerFactory<ts.SourceFile>[]): void {
  const contents = tree.read(path)?.toString();
  if (!contents) {
    throw new Error('File does not exist');
  }
  const sourceFile = ts.createSourceFile(path, contents, ts.ScriptTarget.Latest, true);
  const output = ts.transform(sourceFile, transformers);
  const printer = ts.createPrinter();
  tree.write(path, printer.printFile(output.transformed[0]));
}
