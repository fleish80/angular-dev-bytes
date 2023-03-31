import {formatFiles, Tree} from '@nrwl/devkit';
import {libraryGenerator} from '@nrwl/angular/generators';
// import { libraryGenerator } from '@nrwl/workspace/generators';

export default async function (tree: Tree, schema: any) {
  // await libraryGenerator(tree, { name: schema.name });
  await libraryGenerator(tree, {
    name: schema.name,
    publishable: true,
    importPath: `dev-bytes/${schema.name}`,
    style: 'scss',
    prefix: 'byt',
    strict: true,
    standalone: true,

  })
  await formatFiles(tree);
  // return () => {
  //   installPackagesTask(tree);
  // };
}

interface Schema {

}
