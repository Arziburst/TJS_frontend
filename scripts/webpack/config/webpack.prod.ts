// Core
import merge from 'webpack-merge';

// Configurations
import { getCommonConfig } from './webpack.common';

// Modules
import * as modules from '../modules';

export const getProdConfig = () => {
    return merge(
        getCommonConfig(),
        {
            mode:    'production', // none to remove bundle chunk size warning
            devtool: false,
        },
        modules.cleanDirectories(),
        modules.loadImagesProd(),
        modules.connectBuildProgressIndicator(),
        modules.optimizeBuild(),
        modules.connectBundleAnalyzer(),
        modules.generateServiceWorker(),
    );
};
