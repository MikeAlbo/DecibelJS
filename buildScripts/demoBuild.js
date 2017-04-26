/* eslint-disable no-console */

import webpack from 'webpack';
import webpackConfig from '../webpackConfigFiles/.webpack.config.productionMin';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue("Generating production Min Build"));

webpack(webpackConfig).run((err, stats)=> {
	if(err){
		console.log(chalk.red(err));
		return 1;
	}

	const jsonStats = stats.toJson();

	if(jsonStats.hasErrors){
		return jsonStats.errors.map(error => console.log(chalk.red(error)));
	}

	if(jsonStats.hasWarnings){
		console.log(chalk.yellow("Webpack Generated the following warnings: "));
		return jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
	}

	console.log(`Webpack Stats: ${stats}`);

	//build success
	console.log(chalk.green("Build success, /dist"));
	return 0;
});
