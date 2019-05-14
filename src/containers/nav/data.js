import MyColor from '../../components/contentlist/Colors/colors.js';
import MyIconography from '../../components/contentlist/Iconography/iconograpy.js';
import MyHome from '../../components/contentlist/Home/home.js';
import Error from '../../components/contentlist/Error/error.js';
import MyButtons from '../../components/contentlist/Components/Buttons/buttons.js';
import MyTables from '../../components/contentlist/Components/Tables/tables.js';
import MyTabs from '../../components/contentlist/Components/Tabs/tabs.js';
import MySpinner from '../../components/contentlist/Components/Spinner/spinner.js';
import MyProgress from '../../components/contentlist/Components/Progress/progress.js';
import MyMessageBar from '../../components/contentlist/Components/MessageBar/messageBar.js';
import MyDialog from '../../components/contentlist/Components/Dialog/dialog.js';
import MyNotification from '../../components/contentlist/Components/Notification/notification.js';
import MyLine from '../../components/contentlist/Charts/Line/line.js';
//import MyBar from '../../components/contentlist/Charts/Bar/bar.js';
import MyStackedBar from '../../components/contentlist/Charts/StackedBar/stackedBar.js';
import MyArea from '../../components/contentlist/Charts/Area/area.js';
import MyPie from '../../components/contentlist/Charts/Pie/pie.js';
import MyScatterplot from '../../components/contentlist/Charts/Scatterplot/scatterplot.js';
import MyAvatar from '../../components/contentlist/Components/Avatar/avatar.js';
import MyMarkdown from '../../components/contentlist/Components/Markdown/markdown.js';

const BASE_URL = '/';

const navItems = [
    {
      label: 'Home',
      url: BASE_URL,
      icon: 'Home',
      component: MyHome
    },
    {
      label: 'Colors',
      url: BASE_URL + 'colors',
      icon: 'Palette',
      component: MyColor
    },
    {
      label: 'Components',
      url: BASE_URL + 'components',
      icon: 'Widgets',
      subNavItems: [
        {
          label: 'Avatar',
          url: BASE_URL + 'components/avatar',
          icon: 'NavigateNext',
          component: MyAvatar
        },
        {
          label: 'Button',
          url: BASE_URL + 'components/button',
          icon: 'NavigateNext',
          component: MyButtons
        },
        {
          label: 'Dialog',
          url: BASE_URL + 'components/dialog',
          icon: 'NavigateNext',
          component: MyDialog
        },
        {
          label: 'Expend Panel',
          url: BASE_URL + 'components/panel',
          icon: 'NavigateNext',
        },
        {
          label: 'Markdown',
          url: BASE_URL + 'components/markdown',
          icon: 'NavigateNext',
          component: MyMarkdown
        },
        {
          label: 'MessageBar',
          url: BASE_URL + 'components/messagebar',
          icon: 'NavigateNext',
          component: MyMessageBar
        },
        {
          label: 'Notification',
          url: BASE_URL + 'components/notification',
          icon: 'NavigateNext',
          component: MyNotification
        },
        {
          label: 'Progress',
          url: BASE_URL + 'components/progress',
          icon: 'NavigateNext',
          component: MyProgress
        },
        {
          label: 'Spinner',
          url: BASE_URL + 'components/spinner',
          icon: 'NavigateNext',
          component: MySpinner
        },
        {
          label: 'Table',
          url: BASE_URL + 'components/table',
          icon: 'NavigateNext',
          component: MyTables
        },
        {
          label: 'Tabs',
          url: BASE_URL + 'components/tabs',
          icon: 'NavigateNext',
          component: MyTabs
        },
      ]
    },
    {
      label: 'Charts',
      url: BASE_URL + 'charts',
      icon: 'Timeline',
      subNavItems: [
        {
          label: 'Area',
          url: BASE_URL + 'charts/area',
          icon: 'NavigateNext',
          component: MyArea
        },
        {
          label: 'Horizontal Bar',
          url: BASE_URL + 'charts/horizontalbar',
          icon: 'NavigateNext',

        },
        {
          label: 'Line',
          url: BASE_URL + 'charts/line',
          icon: 'NavigateNext',
          component: MyLine
        },
        {
          label: 'Pie',
          url: BASE_URL + 'charts/pie',
          icon: 'NavigateNext',
          component: MyPie
        },
        {
          label: 'Scatter Plot',
          url: BASE_URL + 'charts/scatterplot',
          icon: 'NavigateNext',
          component: MyScatterplot
        },
        {
          label: 'Stacked Bar',
          url: BASE_URL + 'charts/stackbar',
          icon: 'NavigateNext',
          component: MyStackedBar
        },
        {
          label: 'Vertical Bar',
          url: BASE_URL + 'charts/verticalbar',
          icon: 'NavigateNext'
        },
      ]
    },
    {
      label: 'Iconography',
      url: BASE_URL + 'icons',
      icon: 'BlurOn',
      component: MyIconography
    }
];


export default {navItems}
