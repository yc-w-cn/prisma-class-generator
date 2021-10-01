import { generatorHandler, GeneratorOptions } from '@prisma/generator-helper'
import { PrismaClassGenerator } from './classes/prisma-class-generator'

generatorHandler({
	onManifest: () => ({
		defaultOutput: '../src/_gen/prisma-class',
		prettyName: 'Prisma Class Generator',
	}),
	onGenerate: async (options: GeneratorOptions) => {
		PrismaClassGenerator.getInstance().run(options)
	},
})