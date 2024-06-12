import React, { SetStateAction, useRef } from 'react';
import { Modal, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Icon from '../Icon'
import { Text, View } from '@/components/Themed';
import { FONT, SIZES } from '@/constants/themes';

type Props = {
    visible: boolean,
    onClose: React.Dispatch<SetStateAction<boolean>>,
    children: React.ReactNode,
    title: string,
    canClose?: boolean
}

const BottomSheetCard = ({ visible, onClose, children, title, canClose= true }: Props) => {
  const translateY = useSharedValue(0);
  const opacity = useSharedValue(0);

  const modalStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
      opacity: opacity.value,
    };
  });

  const openBottomSheet = () => {
    translateY.value = withSpring(0);
    opacity.value = withTiming(1, { duration: 300 });
  };

  const closeBottomSheet = () => {
    if(canClose){
      translateY.value = withSpring(100);
      opacity.value = withTiming(0, { duration: 300 });
      setTimeout(() => onClose(prev=>!prev), 300);
    }
  };

  const handleModalShow = () => {
    openBottomSheet();
  };

  const handleModalHide = () => {
    if(canClose){
      translateY.value = 100;
    opacity.value = 0;
  }
  };

  const handleBackdropPress = () => {
    if(canClose){
    closeBottomSheet();
  }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      onShow={handleModalShow}
      onDismiss={handleModalHide}
      onRequestClose={handleBackdropPress}
    >
      <View style={styles.modalContainer}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.backdrop}
          onPress={handleBackdropPress}
        />
        <Animated.View style={[styles.bottomSheet, modalStyle]}>
          <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
          </View>
          <ScrollView style={styles.content}>
            {children}
          </ScrollView>
          {/* { canClose && <TouchableOpacity style={styles.closeButton} onPress={closeBottomSheet}>
            <Icon iconType='ionicons' name="close-circle-sharp" size={38} color={'#FFF'} />
          </TouchableOpacity>} */}
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  backdrop: {
    flex: 1,
  },
  bottomSheet: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    padding: 16,
    minHeight: 210,
    marginHorizontal: 0
  },
  header: {
    alignItems: 'center',
    marginBottom: 12,
  },
  headerText: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium
  },
  content: {
    marginBottom: 16,
  },
  closeButton: {
    backgroundColor: '#E6E6E6',
    height: 42,
    width: 42,
    position: 'absolute',
    right: 7, 
    top: 7,    borderRadius: 60,
    justifyContent: "center", 
    alignItems: 'center',
    flexDirection: 'row'
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default BottomSheetCard;
