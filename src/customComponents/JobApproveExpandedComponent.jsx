import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import CustomText from './CustomText';
import CustomButton from './CustomButton';
import { useSelector, useDispatch } from 'react-redux'
import FontDirectory from '../assets/FontDirectory';
import commonStyles from '../assets/styles/commonStyles';
import StarRating from './StarRating';


const windowWidth = Dimensions.get( 'window' ).width;
const windowHeight = Dimensions.get( 'window' ).height;
const JobApproveExpandedComponent = ( props ) => {
    const theme = useSelector( ( state ) => state.theme?.theme )


    const tagList = ["8 hrs", "Monday", "200 per hour", "10AM - 10PM"]

    const PROFILE_PIC = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAIDBQYHAQj/xAA8EAABBAEBBQQGBwcFAAAAAAABAAIDBBEFBhIhMUEHE1GhFiJhcYGRFCMyU5PB0RVCUmJysfAlQ4KS0v/EABsBAQACAwEBAAAAAAAAAAAAAAABAgMEBQYH/8QALxEAAgICAQIEBAUFAQAAAAAAAAECAwQREiExBUFRkRMVIqEGQmGBsRQjMlJx0f/aAAwDAQACEQMRAD8A62uEbwQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEBS9zWNLnuDWgZJJwAFKTfYN6OdbSdq1ClI6DRYm3HtODYecRD+kDi7yHvW5Xht9ZmCVvoaRc7UtYleSb0jAf3YGNYB5Z81sxx6o9NGNzkymp2lam1w/1O23j+8Wv/uCrOit+RHOXqbpoXaTPIWi7FFbi6vh9SQfDkfJYJ4cX/iy8bWu50HTNSqarVFmhM2WInBxwLT4EcwVozg4PTM8Zb7EtULBAEAQBAEAQBAEAQBAEAQHKO1raf6QW6Bpdnfbx+mdycuc7pGMc+uQPd4hdDGq0ucjXsly6I0CtsTtRqQBraNZjjPJ1gd0Pk7j5Lb5Iqq5PyMjF2Q7VSgF/wBBiz0fO78mlV5ot8JlbuxragDIm00+6d//AIRTQ+GyNJ2a7a6ae8hptmwf9idpPyOFbkirizIbL7T6lsxrcA1ynapd44RzNmicwSN9x5kcwR+apbWrI6Ii+LO7Vp4rMDJ68jZIpBvMe05DguQ04vTNpPaLqgkIAgCAIAgCAIAgCAIDVe0faX0Z2bmsQuAuTfV1/EHq74DzwtnGq5y2+yMdktIg9neysez2kRz3Y2yatZHeWJXjLmZ4hgJ48Bz8TlbspbYrhpG4B45qu0X0eiQJsaKw8KdlWisPU7I0R9W06lrOnzUNSrsnrytLXNeOXtB6EcwVbZVo0HYC5Z0DX72x+pyuk7l29Vlfn12kbzT8Rz9oKw5NfOPNd0VrfF8To65psBAEAQBAEAQBAEAQHiA5btADtR2o0NMwZKmm/Wyt6eqN7zcWj4FdSmPCpfqYH9Vhvt+7XowyT2pmxxsG89zjyTWzPtLqzQrXazpsVnu62mahPGDjvNzdz7QOfzwr/CZid69DeKGox3qkNmMPayVjXhrxhwBGcEdCsXVGddUSxKMcThNkaNN1TtP0/TdXmoSaddeIX7jpg31Sf5fEfJZVBtGCViT0bVoO0On67X76jNnGN5juDm+8I00SmpdjSu16KXTLejbT1gWurydxO4cy0neYT7iHD4q0OvRlLFrqdGpWWXKcFqI5ZNG17fcRlcmyPGTiZ4va2X1QkIAgCAIAgCAIAgKXvbG0vkIa0cST0UpNvSDOZbN04NU2a1S5pneftnU55mWrOXARgSu3WA9PVIPq+PFdrlGKSZqxhKXY45Y0+5TuWat/e+kwSGOQF29xCbHH1LJyH4wo2RovV6s1q1DDXkeySaVsbcOIAJzx4eHNN9Nk8dvSJuu6He0ixXZbuOsMmBLXte4jhzHFVjNSW0WnW4PTMfI4NIGOHVTsq9FZhjI+04Z5EHkp2TpHSOzerENAtUtqvpVvS9RYxwgDZH9yASQct4gngeHgp5x3ofCnx2b72XWorGx1VkE3exVpZoI3k8XRtkcGE/8AHC52XFqzZlq/xNtWqZAgCAIAgCAIAgCAwm1bpP2eGxk4J44WzjpbMlaXLqax2RDOycoAwRfnz5Len3NapaWjV+1XZ6avqz9ZrV5H17IBncwb3dvADePgCAOPLmpT2iJrT2c4kEZfvb7fmp6lHo3DYTZ21PdGo2oHxQt9WASN3S8nm7j0A/usVkunE2ceG5cmbFtrox1GqGVIyXweu1o4b3AgtHtxxHtCpCXGWjPk18o7Xc5dNF3UhZKCxwOC143SPgeKznOf6mS0PQrm0F6KnQY4sc4CWwB6kLepJ5ZxyHVTvXUsly6I+iK1aGpU7qGMNjjj3QPBoCwrqzYfRGgdir5W6PXxncc549/+YUZPZkVL+yjqq5xIUAIAgCAIAgCAIC3PEyeIxyDLSrRk4vaJT09kaCnHTgLIvsl5ceHUreqnziRKW2Uv9iuyUQpa0LnbxiZveO6MqpZEG7NUpAOtO7tp67hIHy5KNb7Fm9EEW6F54jq2O9f/ACNOB8ccFDiwrEy9DQaXgyMa7H8QyiJemZeFoY0NaAB4BWK6JkI7zLfEYVt6Wykuh7p2mQUB9WMuxjO6AAPYFozsciZScicsRUIAgCAIAgCAIAgCA8cN4ELYx56np+ZDIcowcLda0WRHesZYjyHGSFBYjueepPxTQAeAmgXGS55KyQMtQb6u+R0WPIlwhrzZifVktaICAIAgCAIAgCAIAgCAIC1NHvjIW/TcpLjLuV7GOlyMhbHAyJkaRyrxLJkSRycBstbxJwFdVjZkNOqPmdk53R1UWShUtsxuW+xnWNDGhreQXLnNzlyYRUqAIAgCAIAgCAIAgCAIAgCAiajGBD3jWkuH8IyulR8T4fJ9isZLlxNbs34mP3S7B8CMFX+J6mwobIM+pNYQBlxPLAzlPiaJ4GV0KrLdm37MMkcPTeGMrKpTkvp6M17JRj5mztYGDdaAAOgXIm5OX1dyVryPVQBAEAQBAEAQBAEAQBAEB4gKJZo4W70r2tHiVlqpsteoLZjsthWtyejW9V2sr1p2tYx0kY+0W/ovS4fhVqq+t9fQ4OR4zUrlFLoYjV9ptKuUJW731hacAsIOenTxVMjBsrg5NdjfxM+q2cVGXcg6LrsGnxzPmYDK/Hd4YSccc/ktXCxp374o3fEcmuhLm9bMtV2pmsWGAxFsWeOeHBdb5a+L29Hm7fG6VNRj1Nuq3YbTd6J49oPNeYyMK+h/Wunqd/Hzab19L6+hJWmbYQBAEAQBAEAQBAEAQFmzYjrRGSU4aPNZ6MezIlwgjBkZNePDnNmt6htMQS2t6o+ZXpsbwSqHWfVnlsr8QSk9V9DW7up2LBO893vXaqx4VrUVo4lubZa9tmJlBcc8VsGJSPI4Gue3eGRlUtXKDi/NGxj3OFsZLya/kofM5mpmvHWe6Ml2ZW/ZZjouP4TyhWlx7t9f+He/EajZa256cUtL13syMZwuyeQkT61p8WMOKxTgmXryZ1mcpa5KzALt5vgeK5eT4XRb3idzF8atr0t7RsFHUIrYAB3XeBXnMzw6zG+rvE9RheJVZK12ZMXOOkEAQBAEAQBAEAQGjbTag6zefEx31UR3Rjqeq9v4TiKihNrq+p898bzpZGS4Rf0x6GCK6xyEUOUli0QpLHrefBQyU9PZDZDO6+6ybDmxbzh3G7wPE8crn4NE4Qi22l16fuzueL5lNtklGKbfH6v27Gbo6dduxmSpWfKwO3S5uMArZtyKqnqctHLpwMi+PKuO0TmaFqo50ZP+w/VYf63H/wBi0vCMz/T+P/SGx+ORWycvrFkmvdkrytfG7GDlYrKY2RcZdmZ6sqymanDyN9pzts1Y5m8ntyvBZVLoulW/I+nYeQsiiNq80XlrmyEAQBAEAQBAWbUwgrSzH9xhd8gs2PX8S2MPVmDKtVNMrH5Js5pM8ueXHiSclfRYrS0fLHJye33ZYcVYlItucpSLpFJKkkZQk8LkGiRoeuXqDZ4q0wbH3xduloOTgfote7FqtfKa6nSjnZGNCMa3pGXdtVqj8YnYz+iMLAvDqF5fcT8ZzJL/AC1+xiY5M5yeq3NJHJsW3svByaMWjctkZzJQfE48Y38Pcf8ACvIeP1cb4z9V/B7j8M3csaVb/K/szPLhHpQgCAIAgCAIDGbRvLNHskfwgeYXS8JjyzIHJ8bk44FmvPS+5z15Xuz50kWHuU6MqRaL1JdIp30LaPN72oNFLncOaEpESOcwPl+rc7edn1VJsyrU0upcbdkcRiB/Hxx+qgo6Ir8xNheQOKaNacSQ16rowuJtWxLyZ7LOhYD5rzv4hj/ag/1PS/hhtW2L9EbcvKHtAgCAIAgCAICLqVX6ZSmr5AL24BPQ9PPC2cS/4F0bPRmpnY/9Tjzq9Uc1uwS1ZnRTsLHt5gr6BTbC6KnB7R84tosom4WLTRAkcVmEUWiShk0U5KE6PMlCdHhJQnR5xUg8yQgPRKQoHFMuMs4IHU8MeKFfg77HRdi9Nnq1JLNqMxvnxusdzDR4+C8d45mwvmq63tL+T1vgWBLHhKya05fwbIuCegCAIAgCAIAgCAs2ate03cswxyt8Htys1V9tL3XJr/hhtx6rlqyKZi5dltHlJJqbv9Mjh+a34+M5sfz/AGRoS8Fwm98Puy16H6N9zL+KVf57m+q9ivyPD9H7nnodo33Mv4pU/Pcz1XsPkeJ6P3PPQ3Rvu5vxSnz3M9V7EfI8T0fuPQ3RvupvxSnz3M9V7E/I8T0fuPQ3RvupvxSnz3M9V7D5Hiej9x6GaL9zL+KU+e5nqvYfJMT0fuVN2O0MHjVc73yu/VVfjea/zL2RZeDYi/L92ZClo2m0Xh9SlDG8cnbuXfM8Vp3Z+TctTmzbqwqKesIJE9ahtBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEB/9k="


    return (
        <ScrollView style={styles.scrollViewContainer}>

            <View
                style={[styles.container, { backgroundColor: theme?.SecondaryBackground }]}>
                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={styles.userDetailsTopContainer}>
                        <Image source={{ uri: PROFILE_PIC }} style={styles.profilePic} />
                        <CustomText title="Saikat Sarkar" color={theme.PrimaryText} fontSize={16} style={styles.textStyle} fontFamily={FontDirectory.PoppinsMedium} />
                        <CustomText title="20 Yrs | Male" color={theme.PrimaryText} fontSize={10} style={styles.textStyle} fontFamily={FontDirectory.PoppinsMedium} />
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                        <CustomText title="100 %" fontSize={27} fontFamily={FontDirectory.poppinsSemiBold} />
                        <CustomText title="Profile updated" fontSize={8} style={{ marginTop: -12 }} />
                    </View>
                </View>
                <View style={styles.locationRow}>
                    <FontAwesome6 name="location-dot" size={12} color={theme.Primary} style={{ marginRight: 4 }} />
                    <CustomText title="10 MTC, Pune, 6058" color={theme.Primary} fontSize={10} />
                    <CustomText title=" More Detail" color={theme.Primary} fontSize={10} />
                </View>
                <View style={[commonStyles.rowSpaceBetween, styles.ratinAndButtonContainer]}>
                    <StarRating rating={4.2} style={{ flex: 3 }} />

                    <View style={styles.collapsedModeActionButtonContainer}>
                        <CustomButton title={"Approve"} cardButton style={styles.approveButtonContainer} />
                        <CustomButton title={"Reject"} cardButton style={styles.approveButtonContainer} backgroundColor={theme.Error} textColor={theme.PrimaryText} />
                    </View>
                </View>
                <View style={styles.collapsibleSectionContainer}>
                    {/* <View style={styles.actionButtonsContainer}>
                        <TouchableOpacity style={[styles.actionButtonContainer, { backgroundColor: theme.MenuNavigatorBottom }]}>
                            <Ionicons name="chevron-back" size={14} color={theme.PrimaryText} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.actionButtonContainer, { backgroundColor: theme.MenuNavigatorBottom }]}>
                            <FontAwesome name="bookmark-o" size={14} color={theme.PrimaryText} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => { setIsExpanded( false ) }}
                            style={[styles.actionButtonContainer, { backgroundColor: theme.MenuNavigatorBottom }]}>
                            <Entypo name="cross" size={14} color={theme.PrimaryText} />
                        </TouchableOpacity>
                    </View> */}

                    <View style={styles.tagsContainer}>
                        {tagList?.map( ( eachTag ) => {
                            return (
                                <View
                                    style={[styles.eachTagContainer, { backgroundColor: theme.MenuNavigatorBottom }]}
                                    key={eachTag}>
                                    <CustomText title={eachTag} fontFamily={FontDirectory.PoppinsLight} fontSize={14} />
                                </View>
                            )
                        } )
                        }
                    </View>


                    <View style={styles.descriptionSection}>
                        <CustomText title="About Me" style={styles.sectionTitle} fontFamily={FontDirectory.PoppinsMedium} size={16} />
                        <CustomText title="As a Business Development Executive, you play a pivotal role in our
                    organization's growth and success by identifying new market
                    opportunities, fostering partnerships, and enhancing brand presence." style={styles.descriptionText} fontFamily={FontDirectory.PoppinsRegular} size={12} />
                    </View>
                    <View style={styles.descriptionSection}>
                        <CustomText title="Previous work" style={styles.sectionTitle} fontFamily={FontDirectory.PoppinsMedium} size={16} />
                        <CustomText title="As a Business Development Executive, you play a pivotal role in our organization's growth and success.  identify and capitalize on new business opportunities, foster partnerships, and enhance our market presence." style={styles.descriptionText} fontFamily={FontDirectory.PoppinsRegular} size={12} />
                    </View>

                    <View style={styles.collapsedModeActionButtonContainerBottom}>
                        <CustomButton title={"Approve"} cardButton style={styles.approveButtonContainer} />
                        <CustomButton title={"Reject"} cardButton style={styles.approveButtonContainer} backgroundColor={theme.Error} textColor={theme.PrimaryText} />
                    </View>

                </View>
            </View >
            <View style={styles.bottomShade} />
        </ScrollView>
    );
};

export default JobApproveExpandedComponent;

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        paddingLeft: 8,
        paddingRight: 16,
        paddingVertical: 12,
        borderRadius: 12,
        width: windowWidth * 0.94,
        alignSelf: 'center',
        marginVertical: 8,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    applyButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 32,
        marginTop: -12
    },
    detailsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    descriptionSection: {
        marginTop: 6,
        alignItems: 'center',
        marginBottom: 8
    },
    sectionTitle: {
        marginBottom: 8,
    },
    descriptionText: {
        textAlign: 'center',
        maxWidth: windowWidth * 0.75
    },
    aboutSection: {
        // Add styles for the "About" section
    },
    actionButtonsContainer: {
        flexDirection: 'row',
        width: "92%",
        justifyContent: 'space-between'
    },
    actionButtonContainer: {
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        // elevation: 1,
        borderRadius: 8,
        marginTop: 24
    },
    collapsibleSectionContainer: {
        alignItems: 'center'
    },
    tagsContainer: {
        flexDirection: 'row',
        maxWidth: windowWidth * 0.8,
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginTop: 14
    },
    eachTagContainer: {
        marginHorizontal: 4,
        borderRadius: 100,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 2,
    },
    bottomApplyButton: {
        width: windowWidth * 0.5,
        marginTop: 18
    },
    avatarsContainer: {
        flexDirection: 'row',
        paddingLeft: 12,
        marginRight: 12
    },
    profileAvatar: {
        height: 22,
        width: 22,
        borderRadius: 22,
        marginLeft: -9
    },



    approveButtonContainer: {
        width: windowWidth * 0.22,

        alignItems: 'center',
        justifyContent: 'center',
        height: 32,
        borderRadius: 10,
        marginHorizontal: 4

    },

    profilePic: {
        height: 30,
        width: 30,
        resizeMode: 'contain',
        borderRadius: 50
    },



    userDetailsTopContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textStyle: {
        marginLeft: 4
    },
    ratinAndButtonContainer: {
        width: windowWidth * 0.8,
        alignSelf: 'flex-end',
        marginTop: 4
    },

    collapsedModeActionButtonContainer: {
        flexDirection: 'row',
        flex: 4,
    },
    collapsedModeActionButtonContainerBottom: {
        flexDirection: 'row',
        width: windowWidth * 0.6,
        justifyContent: 'space-between',
    },

    bottomShade: {
        height: 80
    },
    scrollViewContainer: {
        marginRight: 1,
        width: windowWidth
    }
} );

