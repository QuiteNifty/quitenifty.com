import Typography from 'typography';
import stAnnesTheme from 'typography-theme-st-annes';
import * as theme from '../components/theme';

stAnnesTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'a,a:visited': {
    color: theme.color.highlight2,
  },
});

const typography = new Typography(stAnnesTheme);
const { rhythm, scale } = typography;
export { rhythm, scale, typography as default };
