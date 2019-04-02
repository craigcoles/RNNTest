//@flow
import { Dimensions } from "react-native";
import { Navigation } from "react-native-navigation";
import Screens, { registerScreens } from "NavigationTest/App/Screens";

const { width, height } = Dimensions.get('window');
const menuWidth = width - 100;

registerScreens();

export const ModalScreen = () => {
  Navigation.showModal({
    stack: {
      children: [{
        component: {
          name: Screens.MODAL_SCREEN,
          options: {
            topBar: {
              title: {
                text: 'Modal'
              },
            },
            rightButtons: [
              {
                id: "modal_close",
                color: "white",
                systemItem: "cancel"
              },
            ]
          },
        },
      }],
    }
  });
}

export const TabsScreen = () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            component: {
              name: Screens.TAB_SCREEN,
              passProps: {
                number: 1
              },
              options: {
                topBar: {
                  title: {
                    text: "Tab 1"
                  }
                },
                bottomTab: {
                  text: 'Tab 1',
                }
              }
            }
          },
          {
            component: {
              name: Screens.TAB_SCREEN,
              passProps: {
                number: 2
              },
              options: {
                topBar: {
                  title: {
                    text: "Tab 2"
                  }
                },
                bottomTab: {
                  text: 'Tab 2',
                }
              }
            },
          }
        ],
      }
    }
  });
}

export const SideMenuScreen = (id) => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            name: Screens.LEFT_SCREEN,
          }
        },
        center: {
          stack: {
            children: [{
              component: {
                name: Screens.CENTER_SCREEN,
              }
            }]
          }
        },
        right: {
          component: {
            name: Screens.RIGHT_SCREEN,
          }
        }
      }
    }
  });
};

export const HomeScreen = (id) => {
  Navigation.setRoot({
    root: {
      stack: {
        options: {
          topBar: {
            visible: false
          }
        },
        children: [
          {
            component: {
              name: Screens.HOME_SCREEN
            }
          }
        ]
      }
    }
  });
};

export const LaunchApp = () => {
  Navigation.setDefaultOptions({
    topBar: {
      background: {
        color: '#ec2a16'
      },
      title: {
        color: 'white',
      },
      backButton: {
        title: '', // Remove previous screen name from back button
        color: 'white'
      },
      buttonColor: 'white',
    },
    statusBar: {
      style: 'light'
    },
    layout: {
      orientation: ['portrait']
    },
    bottomTabs: {
      titleDisplayMode: 'alwaysShow'
    },
    sideMenu: {
      left: {
        width: menuWidth,
        height: height,
        visible: false,
        enabled: true
      },
      right: {
        width: menuWidth,
        height: height,
        visible: false,
        enabled: true
      }
    },
    bottomTab: {
      textColor: 'gray',
      selectedTextColor: 'black',
      iconColor: 'gray',
      selectedIconColor: 'black',
    }
  });

  Navigation.setRoot({
    root: {
      stack: {
        options: {
          topBar: {
            visible: false
          }
        },
        children: [
          {
            component: {
              name: Screens.LOADING_SCREEN
            }
          }
        ]
      }
    }
  });
};
