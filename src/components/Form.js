import React, { useState } from "react";
import { View, Modal, StyleSheet, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, } from "react-native";

import { ModalWindow } from "./ModalWindow";

import { Formik } from "formik";

export const Form = () => {
  const [modalView, setModalView] = useState(false);

  return (
    <View style={{width: '100%', marginTop: 36}}>
      
      <Formik 
        initialValues={{userName: '', userPhone: ''}}
        onSubmit={(values) => {
          setModalView(true);
          console.log(values);
        }}
      >
        {(props) => (
          <KeyboardAvoidingView>
            <View>
              <Modal visible={modalView} transparent={true}>
                <ModalWindow name={props.values.userName} func={() => setModalView(false)} />
              </Modal>
              <TextInput 
                style={style.textInput}
                value={props.values.userName} 
                placeholder='Enter your name' 
                name='userName'
                onChangeText={props.handleChange('userName')} />
              
              <TextInput 
                style={style.textInput}
                value={props.values.userPhone} 
                placeholder='+375 (__) ___-__-__' 
                keyboardType="phone-pad"
                name='userPhone'
                onChangeText={props.handleChange('userPhone')} />

              {
                (props.values.userName && props.values.userPhone) ?
                <TouchableOpacity onPress={props.handleSubmit} style={style.orderButton}>
                  <Text style={style.orderButtonText}>Order</Text>
                </TouchableOpacity> :
                <TouchableOpacity disabled onPress={props.handleSubmit} style={style.disabledOrderButton}>
                  <Text style={style.orderButtonText}>Order</Text>
                </TouchableOpacity>
              }
              
            </View>
          </KeyboardAvoidingView>
        )}
      </Formik>
    </View>
  )
}

const style = StyleSheet.create({
  orderButton: {
    width: '100%', 
    justifyContent: 'center', 
    paddingVertical: 12, 
    backgroundColor: '#317AE8', 
    borderRadius: 12,
  },
  disabledOrderButton: {
    width: '100%', 
    justifyContent: 'center', 
    paddingVertical: 12, 
    backgroundColor: '#c7c7c7', 
    borderRadius: 12,
  },
  orderButtonText: {
    fontFamily: 'l_light', 
    textAlign: 'center', 
    fontSize: 16, 
    lineHeight: 22, 
    letterSpacing: 0.16, 
    color: 'white',
  },
  textInput: {
    marginBottom: 24, 
    paddingVertical: 8, 
    borderBottomWidth: 1, 
    borderBottomColor: '#e7e7e7', 
    fontFamily: 'l_light', 
    fontSize: 16, 
    lineHeight: 22, 
    fontStyle: 'normal',
  }
})