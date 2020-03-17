// Core
import merge from 'webpack-merge';

// Configurations
import getCommonConfig from './webpack.common';

// Modules
import * as modules from '../modules';

export default () => {
    return merge(
        getCommonConfig(),
        {
            mode:    'production',
            devtool: false,
        },
        modules.cleanDirectories(),
        modules.connectBuildProgressIndicator(),
        modules.loadProdCss(),
        modules.optimizeBuild(),
        modules.optimizeImages(),
        modules.optimizeFonts(),
        modules.connectBundleAnalyzer(),
        modules.lodashModuleReplacement(),
    );
};
