import { SafeAreaView, Platform, Pressable, StyleSheet } from "react-native";
import React, { useRef } from "react";
import { WebView, WebViewNavigation } from "react-native-webview";
import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router";
import { WebViewProgressEvent } from "react-native-webview/lib/WebViewTypes";
import WebViewLoading from "@/components/WebViewLoading";
import WebviewControls from "@/components/WebviewControls";
import WebviewHeader from "@/components/WebviewHeader";
import BottomSheetCard from "@/components/common/BottomSheet";
import Button from "@/components/common/Button";
import Icon from "@/components/common/Icon";
import { Text } from "@/components/Themed";
import { FONT, SIZES } from "@/constants/themes";

type Props = {};

const Webview = (props: Props) => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [progress, setProgress] = React.useState<number>(0);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [visible, setVisible] = React.useState<boolean>(false);
  const [navState, setNavState] = React.useState<WebViewNavigation>(
    {} as WebViewNavigation
  );
  const { url } = params;
  const ref = useRef<WebView>();
  

  const handleWebViewNavigationStateChange = (
    newNavState: WebViewNavigation
  ) => {
    // newNavState looks something like this:
    // {
    //   url?: string;
    //   title?: string;
    //   progress?: boolean;
    //   canGoBack?: boolean;
    //   canGoForward?: boolean;
    // }
    const { url } = newNavState;
    setNavState(newNavState);
    if (url.includes("add-address")) {
      setVisible(true);
    }
  };

  // handle more action press on shipping info screen
  const handleMorePress = () => {
    if (navState.url.includes("add-address")) {
      setVisible(true);
    }
  };

  // IIFE to inject script
  const injectedJavaScript = `
  (function() { 
    document.getElementById('firstName').value = "TGV’Airwabo";
    document.getElementById('lastName').value = "Mansa_jonesbaba";
    document.getElementById('contactNumber').value = "0749040127";
    document.getElementById('address1').value = "12 Place Georges Pompidou";
    document.getElementById('address2').value = "650185727DLA";
    document.getElementById('locality').value = "Noisy-le-grand";
    document.getElementById('postalCode').value = "93160";
  })();
`;

  const handleInjectScript = () => {
    ref.current?.injectJavaScript(injectedJavaScript);
    setVisible(false);
  };

  const handleUseKeyboardPress = () => {
    setVisible(false);
  };

  const handleShouldStartLoad = (navState: any) => {
    // Handle navigation here, e.g., return true to allow navigation, false to block

    return true;
  };

  return (
    <SafeAreaView style={styles.container}>
      { progress >= 1 && <WebviewHeader />}
      <WebView
        source={{ uri: url }}
        ref={ref}
        onNavigationStateChange={handleWebViewNavigationStateChange}
        onShouldStartLoadWithRequest={handleShouldStartLoad}
        startInLoadingState={true}
        style={{ zIndex: 10 }}
        onLoadProgress={(event: WebViewProgressEvent) => {
         if ( progress !== 1 ) setProgress(event.nativeEvent.progress);
        }}
        onLoadStart={() => {
          setLoading(true);
        }}
        onLoadEnd={() => {
          setLoading(false);
        }}
        renderLoading={() => <WebViewLoading progress={progress} />}
        javaScriptEnabled={true}
        userAgent={`Mozilla/5.0 (Linux; Android 10; Android SDK built for x86 Build/LMY48X) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/81.0.4044.117 Mobile Safari/608.2.11`}
      />
      { progress >= 1 && <WebviewControls
        onReload={() => ref.current?.reload()}
        onBack={() => {
          if (navState.canGoBack) {
            ref.current?.goBack();
          } else {
            router.back();
          }
        }}
        onForward={() => {
          if (navState.canGoForward) {
            ref.current?.goForward();
          }
        }}
        onMore={() => handleMorePress()}
      />}
      <BottomSheetCard
        canClose
        visible={visible}
        onClose={() => setVisible(false)}
        title="Autofill your details"
      >
        <Button
          onPress={handleInjectScript}
          title="Tap to autofill shipping address"
        />
        <Pressable onPress = {handleUseKeyboardPress} style={styles.pressable}>
          <Icon
            iconType="fontawesome5"
            name="keyboard"
            color="#000"
            size={18}
          />
          <Text style={styles.txt}>Use Keyboard</Text>
        </Pressable>
      </BottomSheetCard>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    paddingTop: Platform.OS === "android" ? 40 : 0, 
    backgroundColor: '#F1F5F9',
   },
  pressable: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 12,
    marginVertical: 8,
  },
  txt: {
    color: "#020617",
    fontFamily: FONT.medium,
    fontSize: SIZES.small,
  },
});

export default Webview;
