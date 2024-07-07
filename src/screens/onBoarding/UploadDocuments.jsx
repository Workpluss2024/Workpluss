/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useCallback } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
    FlatList,
    SafeAreaView
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux'

import commonStyles from '../../assets/styles/commonStyles';
import CustomButton from '../../customComponents/CustomButton';
import CustomText from '../../customComponents/CustomText';
import ImageDirectory from '../../assets/ImageDirectory';
import SegmentedControl from '../../customComponents/SegmentControl';
import { Ionicons, MaterialIcons } from 'react-native-vector-icons';
import JobPostingComponent from '../../customComponents/JobPostingComponent';
import JobPostingComponentTopCard from '../../customComponents/JobPostingComponentTopCard';
import FontDirectory from '../../assets/FontDirectory';
import CustomDots from '../../customComponents/CustomDots';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import Fontisto from 'react-native-vector-icons/Fontisto'

import { RadioButton, TouchableRipple } from 'react-native-paper';

import DropDownPicker from 'react-native-dropdown-picker';


import { Searchbar } from 'react-native-paper';
import SkipForNowComponent from '../../customComponents/SkipForNowComponent';
import TopProgressBar from '../../customComponents/TopProgressBar';

const windowWidth = Dimensions.get( 'window' ).width;
const windowHeight = Dimensions.get( 'window' ).height;

const DOCUMENT_LIST = [
    {
        id: 1,
        label: "12th certificate",
        value: 0,
        uploaded: true,
    },
    {
        id: 2,
        label: "10th certificate",
        value: 1,
        uploaded: true,
    },
    {
        id: 3,
        label: "Driving license",
        value: 2,
        uploaded: true,
    },
    {
        id: 4,
        label: "Education",
        value: 3,
        uploaded: true,
    },
    {
        id: 5,
        label: "Resume",
        value: 4,
        uploaded: true,
    },
    {
        id: 5,
        label: "Professional",
        value: 5,
        uploaded: true,
    },
    {
        id: 6,
        label: "Skills",
        value: 6,
        uploaded: true,
    },
    {
        id: 6,
        label: "Skills4",
        value: 7,
        uploaded: true,
    },
    {
        id: 6,
        label: "Skills5",
        value: 8,
        uploaded: true,
    },
    {
        id: 6,
        label: "Skills6",
        value: 9,
        uploaded: false,
    },
    {
        id: 6,
        label: "Skills+",
        value: 10,
        uploaded: false,
    },
]


const UploadDocuments = () => {

    const theme = useSelector( ( state ) => state.theme?.theme )




    const [documentUploadStatus, setDocumentUploadStatus] = useState( DOCUMENT_LIST )


    const [selectedSection, setSelectedSection] = useState( "R" )



    const [documentPickedOpen, setDocumentPickerOpen] = useState( false )
    const [selectedDocument, setSelectedDocument] = useState( null )


    return (
        <ImageBackground
            style={commonStyles.container}
            source={ImageDirectory.full_background}
            imageStyle={{ resizeMode: 'stretch', height: windowHeight, width: windowWidth }}
        >
            <SafeAreaView style={{ flex: 1 }}>
                <View style={commonStyles.headerContainer}>
                    <TouchableOpacity>
                        <FontAwesome5 name="chevron-left" color={theme.Primary} size={24} style={commonStyles.headerLeftArrow} />
                    </TouchableOpacity>
                    <CustomText title="Work Preference" fontFamily={FontDirectory.poppinsBold} color={theme.Primary} fontSize={24} />
                </View>
                <TopProgressBar totalPageCount={10} completedPage={10} />
                {/* <ScrollView style={commonStyles.scrollViewContainer}> */}

                <View style={[commonStyles.contentContainer, { flex: 1 }]}>


                    <View style={styles.sectionControllerContainer}>
                        <TouchableOpacity
                            onPress={() => setSelectedSection( "R" )}
                            style={[styles.sectionControllerButtonContainer, { borderBottomColor: selectedSection === "R" ? theme.Primary : 'transparent' }]}>
                            <CustomText title="Required" fontFamily={FontDirectory.interRegular} fontSize={14} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setSelectedSection( "U" )}
                            style={[styles.sectionControllerButtonContainer, { borderBottomColor: selectedSection === "U" ? theme.Primary : 'transparent' }]}>
                            <CustomText title="Uploads" fontFamily={FontDirectory.interRegular} fontSize={14} />
                        </TouchableOpacity>
                    </View>


                    {selectedSection === "R" &&

                        <View style={styles.eachSectionContainer}>
                            <DropDownPicker
                                style={{
                                    width: windowWidth * 0.7,
                                    borderWidth: 0,
                                    backgroundColor: 'transparent',
                                }}
                                open={documentPickedOpen}
                                value={selectedDocument}
                                items={documentUploadStatus}
                                placeholder='Select Certificate'
                                setOpen={setDocumentPickerOpen}
                                setValue={( e ) => setSelectedDocument( e )}
                                labelProps={{
                                    color: theme.Primary,
                                    fontFamily: FontDirectory.PoppinsLight,
                                    fontSize: 16
                                }}
                                itemProps={{
                                    style: {
                                        paddingLeft: 8,
                                        paddingVertical: 4,
                                    }
                                }}
                                containerProps={{
                                    style: {
                                        width: windowWidth * 0.7,
                                        borderWidth: 0
                                    }
                                }}
                                maxHeight={400}
                            />
                            <ScrollView>

                                <View style={{ alignItems: 'center' }}>


                                    <CustomText
                                        style={{
                                            alignSelf: 'flex-start',
                                            marginTop: 36
                                        }}
                                        title="Upload"
                                        fontSize={16}
                                        fontFamily={FontDirectory.PoppinsMedium} />

                                    <TouchableOpacity style={{
                                        width: windowWidth * 0.92,
                                        backgroundColor: theme.SecondaryBackground,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        paddingVertical: 22,
                                        borderRadius: 6,
                                        marginTop: 18
                                    }}>
                                        <MaterialCommunityIcons name='file-upload-outline' size={24} color={theme.Primary} />
                                        <CustomText
                                            style={{
                                                marginTop: 18
                                            }}
                                            title="Click to Upload"
                                            fontSize={14}
                                            fontFamily={FontDirectory.PoppinsMedium} />
                                        <CustomText
                                            style={{

                                            }}
                                            title="(Max. File size: 25 MB)"
                                            fontSize={14}
                                            fontFamily={FontDirectory.PoppinsMedium} />


                                    </TouchableOpacity>
                                    <CustomText
                                        style={{
                                            paddingVertical: 22,
                                        }}
                                        color={theme.Accent5}
                                        title="Upload all the documents for perfect math"
                                        fontSize={12}

                                        fontFamily={FontDirectory.PoppinsLight} />







                                    <View style={{
                                        width: windowWidth * 0.75,
                                        flexDirection: 'row',
                                        flexWrap: 'wrap',

                                    }}>
                                        {documentUploadStatus?.map( ( eachDocument ) => {
                                            return (
                                                <View style={styles.documentStatusContainer}>
                                                    <Entypo name={eachDocument?.uploaded ? 'check' : 'cross'} color={eachDocument?.uploaded ? theme.Accent6 : theme.Accent5} size={12} />
                                                    <CustomText
                                                        style={styles.documentStatusText}
                                                        color={theme.PrimaryText}
                                                        title={eachDocument?.label}
                                                        fontSize={12}
                                                        fontFamily={FontDirectory.PoppinsLight} />
                                                </View>
                                            )
                                        } )}
                                    </View>
                                </View>

                                <View style={{
                                    flexDirection: 'row',
                                    marginTop: 36,
                                    width: windowWidth * 0.8,
                                    alignSelf: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Fontisto name='locked' color={theme.PrimaryText} size={20} />
                                    <CustomText
                                        style={{ marginLeft: 20 }}
                                        color={theme.Primary}
                                        title={'Data protection and privacy are important to us, so your information is transfered securely via https.'}
                                        fontSize={12}
                                        fontFamily={FontDirectory.interRegular} />
                                </View>

                            </ScrollView>
                        </View>}

                    {selectedSection === "U" &&

                        <View style={styles.eachSectionContainer}>
                            <ScrollView>
                                <View>
                                    {documentUploadStatus?.map( ( eachDocument ) => {
                                        return (
                                            <View style={[styles.uploadDocumentContainer, { backgroundColor: theme.SecondaryBackground }]}>
                                                <CustomText
                                                    style={styles.uploadedDocumentText}
                                                    color={theme.Primary}
                                                    title={eachDocument?.label}
                                                    fontSize={14}
                                                    fontFamily={FontDirectory.interRegular} />
                                                <TouchableOpacity style={styles.documentActionButton}>
                                                    <Feather name='download' color={theme.Primary} size={18} />
                                                </TouchableOpacity>
                                                <TouchableOpacity style={styles.documentActionButton}>
                                                    <Feather name='eye' color={theme.Primary} size={18} />
                                                </TouchableOpacity>
                                                <TouchableOpacity style={styles.documentActionButton}>
                                                    <Feather name='trash-2' color={theme.Primary} size={18} />
                                                </TouchableOpacity>
                                            </View>
                                        )
                                    } )}
                                </View>
                                <View style={{ height: 24 }} />
                            </ScrollView>
                        </View>}



                </View>
                {/* </ScrollView> */}




            </SafeAreaView>
        </ImageBackground>
    );
}



export default UploadDocuments;




const styles = StyleSheet.create( {
    sectionControllerContainer: {
        flexDirection: 'row',
        marginTop: 12
    },
    sectionControllerButtonContainer: {
        flex: 1,
        height: 50,
        justifyContent: 'center',
        alignItems: "center",
        borderBottomWidth: 2
    },
    eachSectionContainer: {
        flex: 1,
        paddingTop: 24,
        width: windowWidth * 0.92,
        alignItems: 'center'
    },
    documentStatusContainer: {
        flexDirection: 'row',
        width: windowWidth * 0.37,
    },
    documentStatusText: {
        marginLeft: 6
    },
    documentActionButton: {
        flex: 1,
        marginHorizontal: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    uploadedDocumentText: {
        flex: 7
    },
    uploadDocumentContainer: {
        flexDirection: 'row',
        width: windowWidth * 0.9,
        height: 50,
        paddingHorizontal: 12,
        marginVertical: 4,
        alignItems: 'center',
        borderRadius: 10,
    }
} );