import React, { Fragment, useEffect, useState, useRef } from "react";
import { View, Image, TouchableOpacity, StyleSheet, Animated, ScrollView } from "react-native";
import { connect } from 'react-redux';
import BaseText from 'constants/BaseText';
import BaseStyle from 'constants/BaseStyle';
import Images from 'constants/Images';
import Colors from 'constants/Colors';
import ENV from 'env/index';
import {
    RLText,
    RLButton,
    RLFlatList,
    RLOptions
} from "basecomponent";
import buttonStyle from 'theme/component/ButtonStyle';

import LiveIcon from 'assets/svg/liveicon.js'
import HumanModel from 'assets/svg/humanmodel.js';

import _ from 'lodash';

const AdmissionTest = ({ route, navigation, props }) => {

    const [engQues, SetEngQues] = useState([
        {
            "id": 0,
            "ques": "How to learn?",
            "options": [
                {
                    "id": 0,
                    "text": "Answer 1",
                    "image": "",
                },
                {
                    "id": 1,
                    "text": "Answer 2",
                    "image": "",
                },
                {
                    "id": 2,
                    "text": "Answer 3",
                    "image": "",
                },
                {
                    "id": 3,
                    "text": "Answer 4",
                    "image": "",
                }
            ],
            "selectedOption": -1,
            "isChangeable": true,
        },
        {
            "id": 1,
            "ques": "How to learn?",
            "options": [
                {
                    "id": 0,
                    "text": "Answer 1",
                    "image": "",
                },
                {
                    "id": 1,
                    "text": "Answer 2",
                    "image": "",
                },
                {
                    "id": 2,
                    "text": "Answer 3",
                    "image": "",
                },
                {
                    "id": 3,
                    "text": "Answer 4",
                    "image": "",
                }
            ],
            "selectedOption": -1,
            "isChangeable": true,
        },
        {
            "id": 2,
            "ques": "How to learn?",
            "options": [
                {
                    "id": 0,
                    "text": "Answer 1",
                    "image": "",
                },
                {
                    "id": 1,
                    "text": "Answer 2",
                    "image": "",
                },
                {
                    "id": 2,
                    "text": "Answer 3",
                    "image": "",
                },
                {
                    "id": 3,
                    "text": "Answer 4",
                    "image": "",
                }
            ],
            "selectedOption": -1,
            "isChangeable": true,
        },
        {
            "id": 3,
            "ques": "How to learn?",
            "options": [
                {
                    "id": 0,
                    "text": "Answer 1",
                    "image": "",
                },
                {
                    "id": 1,
                    "text": "Answer 2",
                    "image": "",
                },
                {
                    "id": 2,
                    "text": "Answer 3",
                    "image": "",
                },
                {
                    "id": 3,
                    "text": "Answer 4",
                    "image": "",
                }
            ],
            "selectedOption": -1,
            "isChangeable": true,
        },
        {
            "id": 4,
            "ques": "How to learn?",
            "options": [
                {
                    "id": 0,
                    "text": "Answer 1",
                    "image": "",
                },
                {
                    "id": 1,
                    "text": "Answer 2",
                    "image": "",
                },
                {
                    "id": 2,
                    "text": "Answer 3",
                    "image": "",
                },
                {
                    "id": 3,
                    "text": "Answer 4",
                    "image": "",
                }
            ],
            "selectedOption": -1,
            "isChangeable": true,
        },
        // {
        //     "id": 5,
        //     "ques": "How to learn?",
        //     "options": [
        //         {
        //             "id": 0,
        //             "text": "Answer 1",
        //             "image": "",
        //         },
        //         {
        //             "id": 1,
        //             "text": "Answer 2",
        //             "image": "",
        //         },
        //         {
        //             "id": 2,
        //             "text": "Answer 3",
        //             "image": "",
        //         },
        //         {
        //             "id": 3,
        //             "text": "Answer 4",
        //             "image": "",
        //         }
        //     ],
        //     "selectedOption": -1,
        //     "isChangeable": true,
        // },
        // {
        //     "id": 6,
        //     "ques": "How to learn?",
        //     "options": [
        //         {
        //             "id": 0,
        //             "text": "Answer 1",
        //             "image": "",
        //         },
        //         {
        //             "id": 1,
        //             "text": "Answer 2",
        //             "image": "",
        //         },
        //         {
        //             "id": 2,
        //             "text": "Answer 3",
        //             "image": "",
        //         },
        //         {
        //             "id": 3,
        //             "text": "Answer 4",
        //             "image": "",
        //         }
        //     ],
        //     "selectedOption": -1,
        //     "isChangeable": true,
        // },
        // {
        //     "id": 7,
        //     "ques": "How to learn?",
        //     "options": [
        //         {
        //             "id": 0,
        //             "text": "Answer 1",
        //             "image": "",
        //         },
        //         {
        //             "id": 1,
        //             "text": "Answer 2",
        //             "image": "",
        //         },
        //         {
        //             "id": 2,
        //             "text": "Answer 3",
        //             "image": "",
        //         },
        //         {
        //             "id": 3,
        //             "text": "Answer 4",
        //             "image": "",
        //         }
        //     ],
        //     "selectedOption": -1,
        //     "isChangeable": true,
        // },
        // {
        //     "id": 8,
        //     "ques": "How to learn?",
        //     "options": [
        //         {
        //             "id": 0,
        //             "text": "Answer 1",
        //             "image": "",
        //         },
        //         {
        //             "id": 1,
        //             "text": "Answer 2",
        //             "image": "",
        //         },
        //         {
        //             "id": 2,
        //             "text": "Answer 3",
        //             "image": "",
        //         },
        //         {
        //             "id": 3,
        //             "text": "Answer 4",
        //             "image": "",
        //         }
        //     ],
        //     "selectedOption": -1,
        //     "isChangeable": true,
        // },
        // {
        //     "id": 9,
        //     "ques": "How to learn?",
        //     "options": [
        //         {
        //             "id": 0,
        //             "text": "Answer 1",
        //             "image": "",
        //         },
        //         {
        //             "id": 1,
        //             "text": "Answer 2",
        //             "image": "",
        //         },
        //         {
        //             "id": 2,
        //             "text": "Answer 3",
        //             "image": "",
        //         },
        //         {
        //             "id": 3,
        //             "text": "Answer 4",
        //             "image": "",
        //         }
        //     ],
        //     "selectedOption": -1,
        //     "isChangeable": true,
        // },
        // {
        //     "id": 10,
        //     "ques": "How to learn?",
        //     "options": [
        //         {
        //             "id": 0,
        //             "text": "Answer 1",
        //             "image": "",
        //         },
        //         {
        //             "id": 1,
        //             "text": "Answer 2",
        //             "image": "",
        //         },
        //         {
        //             "id": 2,
        //             "text": "Answer 3",
        //             "image": "",
        //         },
        //         {
        //             "id": 3,
        //             "text": "Answer 4",
        //             "image": "",
        //         }
        //     ],
        //     "selectedOption": -1,
        //     "isChangeable": true,
        // },
        // {
        //     "id": 11,
        //     "ques": "How to learn?",
        //     "options": [
        //         {
        //             "id": 0,
        //             "text": "Answer 1",
        //             "image": "",
        //         },
        //         {
        //             "id": 1,
        //             "text": "Answer 2",
        //             "image": "",
        //         },
        //         {
        //             "id": 2,
        //             "text": "Answer 3",
        //             "image": "",
        //         },
        //         {
        //             "id": 3,
        //             "text": "Answer 4",
        //             "image": "",
        //         }
        //     ],
        //     "selectedOption": -1,
        //     "isChangeable": true,
        // },
        // {
        //     "id": 12,
        //     "ques": "How to learn?",
        //     "options": [
        //         {
        //             "id": 0,
        //             "text": "Answer 1",
        //             "image": "",
        //         },
        //         {
        //             "id": 1,
        //             "text": "Answer 2",
        //             "image": "",
        //         },
        //         {
        //             "id": 2,
        //             "text": "Answer 3",
        //             "image": "",
        //         },
        //         {
        //             "id": 3,
        //             "text": "Answer 4",
        //             "image": "",
        //         }
        //     ],
        //     "selectedOption": -1,
        //     "isChangeable": true,
        // },
        // {
        //     "id": 13,
        //     "ques": "How to learn?",
        //     "options": [
        //         {
        //             "id": 0,
        //             "text": "Answer 1",
        //             "image": "",
        //         },
        //         {
        //             "id": 1,
        //             "text": "Answer 2",
        //             "image": "",
        //         },
        //         {
        //             "id": 2,
        //             "text": "Answer 3",
        //             "image": "",
        //         },
        //         {
        //             "id": 3,
        //             "text": "Answer 4",
        //             "image": "",
        //         }
        //     ],
        //     "selectedOption": -1,
        //     "isChangeable": true,
        // },
        // {
        //     "id": 14,
        //     "ques": "How to learn?",
        //     "options": [
        //         {
        //             "id": 0,
        //             "text": "Answer 1",
        //             "image": "",
        //         },
        //         {
        //             "id": 1,
        //             "text": "Answer 2",
        //             "image": "",
        //         },
        //         {
        //             "id": 2,
        //             "text": "Answer 3",
        //             "image": "",
        //         },
        //         {
        //             "id": 3,
        //             "text": "Answer 4",
        //             "image": "",
        //         }
        //     ],
        //     "selectedOption": -1,
        //     "isChangeable": true,
        // }
    ]);

    const [mathQues, SetMathQues] = useState([
        {
            "id": 0,
            "ques": "Add 0.1 + 05",
            "options": [
                {
                    "id": 0,
                    "text": "Answer 1",
                    "image": "",
                },
                {
                    "id": 1,
                    "text": "Answer 2",
                    "image": "",
                },
                {
                    "id": 2,
                    "text": "Answer 3",
                    "image": "",
                },
                {
                    "id": 3,
                    "text": "Answer 4",
                    "image": "",
                }
            ],
            "selectedOption": -1,
            "isChangeable": true,
        },
        {
            "id": 1,
            "ques": "Add 0.1 + 05",
            "options": [
                {
                    "id": 0,
                    "text": "Answer 1",
                    "image": "",
                },
                {
                    "id": 1,
                    "text": "Answer 2",
                    "image": "",
                },
                {
                    "id": 2,
                    "text": "Answer 3",
                    "image": "",
                },
                {
                    "id": 3,
                    "text": "Answer 4",
                    "image": "",
                }
            ],
            "selectedOption": -1,
            "isChangeable": true,
        },
        {
            "id": 2,
            "ques": "Add 0.1 + 05",
            "options": [
                {
                    "id": 0,
                    "text": "Answer 1",
                    "image": "",
                },
                {
                    "id": 1,
                    "text": "Answer 2",
                    "image": "",
                },
                {
                    "id": 2,
                    "text": "Answer 3",
                    "image": "",
                },
                {
                    "id": 3,
                    "text": "Answer 4",
                    "image": "",
                }
            ],
            "selectedOption": -1,
            "isChangeable": true,
        },
        {
            "id": 3,
            "ques": "Add 0.1 + 05",
            "options": [
                {
                    "id": 0,
                    "text": "Answer 1",
                    "image": "",
                },
                {
                    "id": 1,
                    "text": "Answer 2",
                    "image": "",
                },
                {
                    "id": 2,
                    "text": "Answer 3",
                    "image": "",
                },
                {
                    "id": 3,
                    "text": "Answer 4",
                    "image": "",
                }
            ],
            "selectedOption": -1,
            "isChangeable": true,
        },
        {
            "id": 4,
            "ques": "Add 0.1 + 05",
            "options": [
                {
                    "id": 0,
                    "text": "Answer 1",
                    "image": "",
                },
                {
                    "id": 1,
                    "text": "Answer 2",
                    "image": "",
                },
                {
                    "id": 2,
                    "text": "Answer 3",
                    "image": "",
                },
                {
                    "id": 3,
                    "text": "Answer 4",
                    "image": "",
                }
            ],
            "selectedOption": -1,
            "isChangeable": true,
        },
        // {
        //     "id": 5,
        //     "ques": "Add 0.1 + 05",
        //     "options": [
        //         {
        //             "id": 0,
        //             "text": "Answer 1",
        //             "image": "",
        //         },
        //         {
        //             "id": 1,
        //             "text": "Answer 2",
        //             "image": "",
        //         },
        //         {
        //             "id": 2,
        //             "text": "Answer 3",
        //             "image": "",
        //         },
        //         {
        //             "id": 3,
        //             "text": "Answer 4",
        //             "image": "",
        //         }
        //     ],
        //     "selectedOption": -1,
        //     "isChangeable": true,
        // },
        // {
        //     "id": 6,
        //     "ques": "Add 0.1 + 05",
        //     "options": [
        //         {
        //             "id": 0,
        //             "text": "Answer 1",
        //             "image": "",
        //         },
        //         {
        //             "id": 1,
        //             "text": "Answer 2",
        //             "image": "",
        //         },
        //         {
        //             "id": 2,
        //             "text": "Answer 3",
        //             "image": "",
        //         },
        //         {
        //             "id": 3,
        //             "text": "Answer 4",
        //             "image": "",
        //         }
        //     ],
        //     "selectedOption": -1,
        //     "isChangeable": true,
        // },
        // {
        //     "id": 7,
        //     "ques": "Add 0.1 + 05",
        //     "options": [
        //         {
        //             "id": 0,
        //             "text": "Answer 1",
        //             "image": "",
        //         },
        //         {
        //             "id": 1,
        //             "text": "Answer 2",
        //             "image": "",
        //         },
        //         {
        //             "id": 2,
        //             "text": "Answer 3",
        //             "image": "",
        //         },
        //         {
        //             "id": 3,
        //             "text": "Answer 4",
        //             "image": "",
        //         }
        //     ],
        //     "selectedOption": -1,
        //     "isChangeable": true,
        // },
        // {
        //     "id": 8,
        //     "ques": "Add 0.1 + 05",
        //     "options": [
        //         {
        //             "id": 0,
        //             "text": "Answer 1",
        //             "image": "",
        //         },
        //         {
        //             "id": 1,
        //             "text": "Answer 2",
        //             "image": "",
        //         },
        //         {
        //             "id": 2,
        //             "text": "Answer 3",
        //             "image": "",
        //         },
        //         {
        //             "id": 3,
        //             "text": "Answer 4",
        //             "image": "",
        //         }
        //     ],
        //     "selectedOption": -1,
        //     "isChangeable": true,
        // },
        // {
        //     "id": 9,
        //     "ques": "Add 0.1 + 05",
        //     "options": [
        //         {
        //             "id": 0,
        //             "text": "Answer 1",
        //             "image": "",
        //         },
        //         {
        //             "id": 1,
        //             "text": "Answer 2",
        //             "image": "",
        //         },
        //         {
        //             "id": 2,
        //             "text": "Answer 3",
        //             "image": "",
        //         },
        //         {
        //             "id": 3,
        //             "text": "Answer 4",
        //             "image": "",
        //         }
        //     ],
        //     "selectedOption": -1,
        //     "isChangeable": true,
        // },
        // {
        //     "id": 10,
        //     "ques": "Add 0.1 + 05",
        //     "options": [
        //         {
        //             "id": 0,
        //             "text": "Answer 1",
        //             "image": "",
        //         },
        //         {
        //             "id": 1,
        //             "text": "Answer 2",
        //             "image": "",
        //         },
        //         {
        //             "id": 2,
        //             "text": "Answer 3",
        //             "image": "",
        //         },
        //         {
        //             "id": 3,
        //             "text": "Answer 4",
        //             "image": "",
        //         }
        //     ],
        //     "selectedOption": -1,
        //     "isChangeable": true,
        // },
        // {
        //     "id": 11,
        //     "ques": "Add 0.1 + 05",
        //     "options": [
        //         {
        //             "id": 0,
        //             "text": "Answer 1",
        //             "image": "",
        //         },
        //         {
        //             "id": 1,
        //             "text": "Answer 2",
        //             "image": "",
        //         },
        //         {
        //             "id": 2,
        //             "text": "Answer 3",
        //             "image": "",
        //         },
        //         {
        //             "id": 3,
        //             "text": "Answer 4",
        //             "image": "",
        //         }
        //     ],
        //     "selectedOption": -1,
        //     "isChangeable": true,
        // },
        // {
        //     "id": 12,
        //     "ques": "Add 0.1 + 05",
        //     "options": [
        //         {
        //             "id": 0,
        //             "text": "Answer 1",
        //             "image": "",
        //         },
        //         {
        //             "id": 1,
        //             "text": "Answer 2",
        //             "image": "",
        //         },
        //         {
        //             "id": 2,
        //             "text": "Answer 3",
        //             "image": "",
        //         },
        //         {
        //             "id": 3,
        //             "text": "Answer 4",
        //             "image": "",
        //         }
        //     ],
        //     "selectedOption": -1,
        //     "isChangeable": true,
        // },
        // {
        //     "id": 13,
        //     "ques": "Add 0.1 + 05",
        //     "options": [
        //         {
        //             "id": 0,
        //             "text": "Answer 1",
        //             "image": "",
        //         },
        //         {
        //             "id": 1,
        //             "text": "Answer 2",
        //             "image": "",
        //         },
        //         {
        //             "id": 2,
        //             "text": "Answer 3",
        //             "image": "",
        //         },
        //         {
        //             "id": 3,
        //             "text": "Answer 4",
        //             "image": "",
        //         }
        //     ],
        //     "selectedOption": -1,
        //     "isChangeable": true,
        // },
        // {
        //     "id": 14,
        //     "ques": "Add 0.1 + 05",
        //     "options": [
        //         {
        //             "id": 0,
        //             "text": "Answer 1",
        //             "image": "",
        //         },
        //         {
        //             "id": 1,
        //             "text": "Answer 2",
        //             "image": "",
        //         },
        //         {
        //             "id": 2,
        //             "text": "Answer 3",
        //             "image": "",
        //         },
        //         {
        //             "id": 3,
        //             "text": "Answer 4",
        //             "image": "",
        //         }
        //     ],
        //     "selectedOption": -1,
        //     "isChangeable": true,
        // }
    ]);

    const [sciQues, SetSciQues] = useState([
        {
            "id": 0,
            "ques": "What is Science",
            "options": [
                {
                    "id": 0,
                    "text": "Answer 1",
                    "image": "",
                },
                {
                    "id": 1,
                    "text": "Answer 2",
                    "image": "",
                },
                {
                    "id": 2,
                    "text": "Answer 3",
                    "image": "",
                },
                {
                    "id": 3,
                    "text": "Answer 4",
                    "image": "",
                }
            ],
            "selectedOption": -1,
            "isChangeable": true,
        },
        {
            "id": 1,
            "ques": "What is Science",
            "options": [
                {
                    "id": 0,
                    "text": "Answer 1",
                    "image": "",
                },
                {
                    "id": 1,
                    "text": "Answer 2",
                    "image": "",
                },
                {
                    "id": 2,
                    "text": "Answer 3",
                    "image": "",
                },
                {
                    "id": 3,
                    "text": "Answer 4",
                    "image": "",
                }
            ],
            "selectedOption": -1,
            "isChangeable": true,
        },
        {
            "id": 2,
            "ques": "What is Science",
            "options": [
                {
                    "id": 0,
                    "text": "Answer 1",
                    "image": "",
                },
                {
                    "id": 1,
                    "text": "Answer 2",
                    "image": "",
                },
                {
                    "id": 2,
                    "text": "Answer 3",
                    "image": "",
                },
                {
                    "id": 3,
                    "text": "Answer 4",
                    "image": "",
                }
            ],
            "selectedOption": -1,
            "isChangeable": true,
        },
        {
            "id": 3,
            "ques": "What is Science",
            "options": [
                {
                    "id": 0,
                    "text": "Answer 1",
                    "image": "",
                },
                {
                    "id": 1,
                    "text": "Answer 2",
                    "image": "",
                },
                {
                    "id": 2,
                    "text": "Answer 3",
                    "image": "",
                },
                {
                    "id": 3,
                    "text": "Answer 4",
                    "image": "",
                }
            ],
            "selectedOption": -1,
            "isChangeable": true,
        },
        {
            "id": 4,
            "ques": "What is Science",
            "options": [
                {
                    "id": 0,
                    "text": "Answer 1",
                    "image": "",
                },
                {
                    "id": 1,
                    "text": "Answer 2",
                    "image": "",
                },
                {
                    "id": 2,
                    "text": "Answer 3",
                    "image": "",
                },
                {
                    "id": 3,
                    "text": "Answer 4",
                    "image": "",
                }
            ],
            "selectedOption": -1,
            "isChangeable": true,
        },
        // {
        //     "id": 5,
        //     "ques": "What is Science",
        //     "options": [
        //         {
        //             "id": 0,
        //             "text": "Answer 1",
        //             "image": "",
        //         },
        //         {
        //             "id": 1,
        //             "text": "Answer 2",
        //             "image": "",
        //         },
        //         {
        //             "id": 2,
        //             "text": "Answer 3",
        //             "image": "",
        //         },
        //         {
        //             "id": 3,
        //             "text": "Answer 4",
        //             "image": "",
        //         }
        //     ],
        //     "selectedOption": -1,
        //     "isChangeable": true,
        // },
        // {
        //     "id": 6,
        //     "ques": "What is Science",
        //     "options": [
        //         {
        //             "id": 0,
        //             "text": "Answer 1",
        //             "image": "",
        //         },
        //         {
        //             "id": 1,
        //             "text": "Answer 2",
        //             "image": "",
        //         },
        //         {
        //             "id": 2,
        //             "text": "Answer 3",
        //             "image": "",
        //         },
        //         {
        //             "id": 3,
        //             "text": "Answer 4",
        //             "image": "",
        //         }
        //     ],
        //     "selectedOption": -1,
        //     "isChangeable": true,
        // },
        // {
        //     "id": 7,
        //     "ques": "What is Science",
        //     "options": [
        //         {
        //             "id": 0,
        //             "text": "Answer 1",
        //             "image": "",
        //         },
        //         {
        //             "id": 1,
        //             "text": "Answer 2",
        //             "image": "",
        //         },
        //         {
        //             "id": 2,
        //             "text": "Answer 3",
        //             "image": "",
        //         },
        //         {
        //             "id": 3,
        //             "text": "Answer 4",
        //             "image": "",
        //         }
        //     ],
        //     "selectedOption": -1,
        //     "isChangeable": true,
        // },
        // {
        //     "id": 8,
        //     "ques": "What is Science",
        //     "options": [
        //         {
        //             "id": 0,
        //             "text": "Answer 1",
        //             "image": "",
        //         },
        //         {
        //             "id": 1,
        //             "text": "Answer 2",
        //             "image": "",
        //         },
        //         {
        //             "id": 2,
        //             "text": "Answer 3",
        //             "image": "",
        //         },
        //         {
        //             "id": 3,
        //             "text": "Answer 4",
        //             "image": "",
        //         }
        //     ],
        //     "selectedOption": -1,
        //     "isChangeable": true,
        // },
        // {
        //     "id": 9,
        //     "ques": "What is Science",
        //     "options": [
        //         {
        //             "id": 0,
        //             "text": "Answer 1",
        //             "image": "",
        //         },
        //         {
        //             "id": 1,
        //             "text": "Answer 2",
        //             "image": "",
        //         },
        //         {
        //             "id": 2,
        //             "text": "Answer 3",
        //             "image": "",
        //         },
        //         {
        //             "id": 3,
        //             "text": "Answer 4",
        //             "image": "",
        //         }
        //     ],
        //     "selectedOption": -1,
        //     "isChangeable": true,
        // },
        // {
        //     "id": 10,
        //     "ques": "What is Science",
        //     "options": [
        //         {
        //             "id": 0,
        //             "text": "Answer 1",
        //             "image": "",
        //         },
        //         {
        //             "id": 1,
        //             "text": "Answer 2",
        //             "image": "",
        //         },
        //         {
        //             "id": 2,
        //             "text": "Answer 3",
        //             "image": "",
        //         },
        //         {
        //             "id": 3,
        //             "text": "Answer 4",
        //             "image": "",
        //         }
        //     ],
        //     "selectedOption": -1,
        //     "isChangeable": true,
        // },
        // {
        //     "id": 11,
        //     "ques": "What is Science",
        //     "options": [
        //         {
        //             "id": 0,
        //             "text": "Answer 1",
        //             "image": "",
        //         },
        //         {
        //             "id": 1,
        //             "text": "Answer 2",
        //             "image": "",
        //         },
        //         {
        //             "id": 2,
        //             "text": "Answer 3",
        //             "image": "",
        //         },
        //         {
        //             "id": 3,
        //             "text": "Answer 4",
        //             "image": "",
        //         }
        //     ],
        //     "selectedOption": -1,
        //     "isChangeable": true,
        // },
        // {
        //     "id": 12,
        //     "ques": "What is Science",
        //     "options": [
        //         {
        //             "id": 0,
        //             "text": "Answer 1",
        //             "image": "",
        //         },
        //         {
        //             "id": 1,
        //             "text": "Answer 2",
        //             "image": "",
        //         },
        //         {
        //             "id": 2,
        //             "text": "Answer 3",
        //             "image": "",
        //         },
        //         {
        //             "id": 3,
        //             "text": "Answer 4",
        //             "image": "",
        //         }
        //     ],
        //     "selectedOption": -1,
        //     "isChangeable": true,
        // },
        // {
        //     "id": 13,
        //     "ques": "What is Science",
        //     "options": [
        //         {
        //             "id": 0,
        //             "text": "Answer 1",
        //             "image": "",
        //         },
        //         {
        //             "id": 1,
        //             "text": "Answer 2",
        //             "image": "",
        //         },
        //         {
        //             "id": 2,
        //             "text": "Answer 3",
        //             "image": "",
        //         },
        //         {
        //             "id": 3,
        //             "text": "Answer 4",
        //             "image": "",
        //         }
        //     ],
        //     "selectedOption": -1,
        //     "isChangeable": true,
        // },
        // {
        //     "id": 14,
        //     "ques": "What is Science",
        //     "options": [
        //         {
        //             "id": 0,
        //             "text": "Answer 1",
        //             "image": "",
        //         },
        //         {
        //             "id": 1,
        //             "text": "Answer 2",
        //             "image": "",
        //         },
        //         {
        //             "id": 2,
        //             "text": "Answer 3",
        //             "image": "",
        //         },
        //         {
        //             "id": 3,
        //             "text": "Answer 4",
        //             "image": "",
        //         }
        //     ],
        //     "selectedOption": -1,
        //     "isChangeable": true,
        // }
    ]);

    const [subjects, SetSubjects] = useState([
        {
            "id": 0,
            "subject": "English",
            "image": Images.englishIcon,
        },
        {
            "id": 1,
            "subject": "Math",
            "image": Images.mathsIcon,
        },
        {
            "id": 2,
            "subject": "Science",
            "image": Images.scienceIcon,
        }
    ]);
    const [selectedSub, SetSelectedSub] = useState(0);
    const [timer, SetTimer] = useState(60);
    const [quesNo, SetQuesNo] = useState(0);
    const [questions, SetQuestions] = useState(engQues);
    const [quesUpdate, SetQuestionUpdate] = useState(false)
    const [animatedValue, SetAnimatedValue] = useState(new Animated.Value(0));
    const [isComplete, SetIsComplete] = useState(false);

    const quesRef = useRef();

    useEffect(() => {
        // console.log(route.params);

        //Set Selected Subject from previous screen
        if (!_.isUndefined(route.params)) {
            if (!_.isUndefined(route.params.sub)) {
                const { sub } = route.params;
                SetSelectedSub(sub.id);
                if (sub.id == 0) {
                    SetQuestions(engQues)
                }
                if (sub.id == 1) {
                    SetQuestions(mathQues)
                }
                if (sub.id == 2) {
                    SetQuestions(sciQues)
                }
                // timerCountdown();
            }
        }
        else {
            // timerCountdown();
        }
        //Set Selected Subject from previous screen

    }, [])

    //================================ Start common Function ===========================================

    //Option Click Event
    const _onOptionSelected = (index, item, selectedOp) => {
        // console.log(index, item, selectedOp);
        var qus = questions;
        qus[index].selectedOption = selectedOp.id;
        // console.log(qus);
        SetQuestionUpdate(!quesUpdate);
        SetQuestions(qus);
    }
    //Option CLick Event

    //Timer countdown
    useEffect(() => {
        var t = (timer - 1) < 9 ? "0" + (timer - 1) : (timer - 1)
        const timerr =
            timer > 0 && setInterval(() => SetTimer(t), 1000);
        return () => clearInterval(timerr);
    }, [timer]);
    //Timer countdown

    const boxInterpolation = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [Colors.yellowUnderline, Colors.pink],
    });

    //================================ Start common componenet ===========================================

    //Render Method for Displaying Questions
    const _renderQuestions = ({ item, index }) => {
        // console.log(item);
        return (
            <View
                key={"Ques" + item.id}
                style={[styles.quesWrapper, {
                    // marginRight: index != questions.length - 1 ? 10 : 0, 
                }]}
            >
                <View style={styles.quesRow}>
                    <RLText
                        text={"Q" + (quesNo + 1) + ". " + item.ques}
                        style={styles.quesText}
                    />
                    <RLText
                        text={(quesNo + 1) + "/" + questions.length}
                        style={styles.quesCount}
                    />
                </View>
                <RLOptions
                    options={item.options}
                    selectedOption={item.selectedOption}
                    isChangeable={item.isChangeable}
                    onSelect={(selectedOp) => _onOptionSelected(index, item, selectedOp)}
                />
            </View>
        );
    }
    //Render Method for Displaying Questions

    return (
        <Fragment>
            <View style={{ backgroundColor: Colors.white, flex: 1, }}>
                <View style={styles.topSectionWrapper}>
                    <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 80, }}>
                        <RLFlatList
                            data={subjects}
                            horizontal={true}
                            renderItem={({ item, index }) => {
                                // console.log(item);
                                return (
                                    <TouchableOpacity
                                        key={"Subject" + index}
                                        style={[styles.atSubjectWrapper]}
                                        onPress={() => {
                                            // SetSelectedSub(item.id);
                                            // SetIsComplete(false);
                                            // if (item.id == 0) {
                                            //     SetQuestions(engQues)
                                            //     SetQuesNo(0);
                                            // }
                                            // if (item.id == 1) {
                                            //     SetQuestions(mathQues)
                                            //     SetQuesNo(0);
                                            // }
                                            // if (item.id == 2) {
                                            //     SetQuestions(sciQues)
                                            //     SetQuesNo(0);
                                            // }
                                            // SetTimer(60);
                                        }}
                                    >
                                        <RLText
                                            text={item.subject}
                                            style={[styles.atSubject,]}
                                        />
                                        {selectedSub == item.id && <View style={styles.atSubjectUnderline} />}
                                    </TouchableOpacity>
                                );
                            }}
                        />
                    </View>
                    <View style={styles.timerMainWrapper}>
                        <Animated.View style={[styles.timerWrapper, {
                            borderColor: boxInterpolation,
                        }]}>
                            <RLText
                                text={timer}
                                style={styles.timerText}
                            />
                        </Animated.View>
                    </View>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View style={{ backgroundColor: Colors.lightViolet, paddingHorizontal: 20, }}>
                        <View style={{ alignSelf: 'flex-end', marginTop: 20, marginRight: 15, }}>
                            <LiveIcon />
                        </View>
                        <View style={{ alignSelf: 'center', }}>
                            {/* <HumanModel /> */}
                            <Image source={Images.humanModelImage} style={{
                                height: 262, width: 145,
                            }} />
                        </View>
                    </View>
                    <View style={{ marginBottom: 50, }}>
                        {isComplete ?
                            <View style={{ paddingHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 8 }}>
                                <View style={styles.compImageWrapper}>
                                    <Image source={subjects[selectedSub].image} style={styles.compImageStyle} />
                                </View>
                                <RLText
                                    text={BaseText.tCompMsg1 + subjects[selectedSub].subject + BaseText.tCompMsg2}
                                    style={[styles.completeMsgText,]}
                                />
                            </View>
                            :
                            <RLFlatList
                                // scrollEnabled={(questions[quesNo].selectedOption != -1) ? true : false}
                                scrollEnabled={false}
                                style={{
                                    // width: BaseStyle.DEVICE_WIDTH - 50,
                                    width: BaseStyle.DEVICE_WIDTH,
                                    // backgroundColor: 'orange',
                                }}
                                fref={quesRef}
                                horizontal={true}
                                data={questions}
                                pagingEnabled={true}
                                // contentContainerStyle={{ flex: 1 }}
                                extraData={quesUpdate}
                                renderItem={({ item, index }) => _renderQuestions({ item, index })}
                            />
                        }
                    </View>
                </ScrollView>
                <View style={[styles.btnWrapper]}>
                    <RLButton
                        SimpleButton
                        simplebuttontext={BaseText.tBtnBack}
                        simplebuttontextStyle={buttonStyle.simpleButtonBackTextStyle}
                        simplebuttonStyle={[buttonStyle.simpleButtonBack,]}
                        onpress={() => {
                            if (quesNo > 0 && !isComplete) {
                                var next = quesNo > 0;
                                var nextNo = quesNo - 1;
                                if (next) {
                                    quesRef.current.scrollToIndex({ animated: true, index: (nextNo), viewOffset: 0, viewPosition: 0.5, });
                                    SetQuesNo(nextNo);
                                }
                            }
                            else if (quesNo == 0 && selectedSub > 0) {
                                SetIsComplete(false);
                                SetSelectedSub(selectedSub - 1);
                                if ((selectedSub) == 1) {
                                    SetQuestions(engQues)
                                    SetQuesNo(0);
                                }
                                if ((selectedSub) == 2) {
                                    SetQuestions(mathQues)
                                    SetQuesNo(0);
                                }
                                SetTimer(60);
                                SetQuesNo(0);
                            }
                        }}
                    />
                    <RLButton
                        SimpleButton
                        simplebuttontext={isComplete ? BaseText.tCompBtnNext : ((quesNo == questions.length - 1) ? BaseText.tBtnSubmit : BaseText.tBtnNext)}
                        simplebuttontextStyle={buttonStyle.simpleButtonNextTextStyle}
                        simplebuttonStyle={[buttonStyle.simpleButtonNext, { backgroundColor: questions[quesNo].selectedOption != -1 ? Colors.pink : Colors.violet, }]}
                        onpress={() => {
                            // console.log(quesRef.current);
                            if (isComplete) {
                                // console.log(engQues);
                                if (selectedSub < subjects.length - 1) {
                                    SetIsComplete(false);
                                    SetSelectedSub(selectedSub + 1);
                                    if ((selectedSub) == 0) {
                                        SetQuestions(mathQues)
                                    }
                                    if ((selectedSub) == 1) {
                                        SetQuestions(sciQues)
                                    }
                                    SetTimer(60);
                                    SetQuesNo(0);
                                }
                            }
                            else if (quesNo == questions.length - 1 && questions[quesNo].selectedOption != -1) {
                                if (selectedSub == 0) {
                                    SetEngQues(questions);
                                    // console.log(engQues);
                                }
                                if (selectedSub == 1) {
                                    SetMathQues(questions);
                                }
                                if (selectedSub == 2) {
                                    SetSciQues(questions);
                                }
                                if ((selectedSub) == subjects.length - 1) {
                                    // console.log("All Subjects Done");
                                    navigation.navigate("AllSubjectsDone");
                                }
                                else {
                                    SetIsComplete(true);
                                }
                            }
                            else if (questions[quesNo].selectedOption != -1) {
                                var next = quesNo < questions.length - 1;
                                var nextNo = quesNo + 1;
                                if (next) {
                                    quesRef.current.scrollToIndex({ animated: true, index: (nextNo), viewOffset: 0, viewPosition: 0.5, });
                                    SetQuesNo(nextNo);
                                }
                            }
                        }}
                    />
                </View>
            </View>
        </Fragment >
    );
};

const styles = StyleSheet.create({
    atRowItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: BaseStyle.DEVICE_WIDTH / 100 * 1.5,
    },
    atSubjectWrapper: {
        alignItems: 'flex-start',
        marginHorizontal: 20,
        marginVertical: 15,
        alignContent: 'center',
    },
    atSubject: {
        fontFamily: ENV.mfontFamilyExtraBold,
        fontSize: 15,
        color: Colors.white,
    },
    atSubjectUnderline: {
        backgroundColor: Colors.yellowUnderline,
        borderRadius: 50,
        marginVertical: 2,
        height: 2,
        width: '100%',
    },
    timerWrapper: {
        borderRadius: 500,
        // borderWidth: 2,
        backgroundColor: Colors.violet,
        // padding: 5,
        height: 22,
        width: 22,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    timerMainWrapper: {
        borderRadius: 500,
        // borderWidth: 2,
        backgroundColor: Colors.yellowUnderline,
        padding: 2,
        marginLeft: 10,
        height: 26,
        width: 26,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    timerText: {
        fontFamily: ENV.mfontFamilyBold,
        fontSize: 11,
        color: Colors.white,
    },
    topSectionWrapper: {
        backgroundColor: Colors.violet,
        flexDirection: 'row',
        alignItems: 'center',
    },
    btnWrapper: {
        paddingVertical: BaseStyle.DEVICE_WIDTH / 100 * 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: Colors.white,
        // flex: 1,
        // height: BaseStyle.DEVICE_HEIGHT / 100 * 9,
        bottom: 0,
        position: 'absolute',
        width: BaseStyle.DEVICE_WIDTH,
    },
    optionWrapper: {
        borderColor: Colors.pink,
        justifyContent: 'center',
        borderRadius: 7,
        height: 19,
        width: 19,
        borderWidth: 1,
    },
    selectedOptionWrapper: {
        borderColor: Colors.violet,
        justifyContent: 'center',
        borderRadius: 7,
        height: 19,
        width: 19,
        borderWidth: 1,
    },
    option: {
        backgroundColor: Colors.violet,
        borderRadius: 4,
        height: 11,
        width: 11,
        alignSelf: 'center',
    },
    optionText: {
        fontFamily: ENV.mfontFamilyMedium,
        fontSize: 15,
        color: Colors.pink,
        marginLeft: 10,
    },
    selectedOptionText: {
        fontFamily: ENV.mfontFamilyMedium,
        fontSize: 15,
        color: Colors.violet,
        marginLeft: 10,
    },
    quesCount: {
        fontFamily: ENV.mfontFamilyBlackItalic,
        fontSize: 13,
        color: Colors.violet,
    },
    quesText: {
        fontFamily: ENV.mfontFamilyBold,
        fontSize: 19,
        color: Colors.pink,
        marginBottom: 0,
    },
    quesRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        marginVertical: BaseStyle.DEVICE_WIDTH / 100 * 5,
    },
    quesWrapper: {
        // width: '98%',
        width: BaseStyle.DEVICE_WIDTH / 100 * 80,
        // marginRight: 7.5
        // backgroundColor: 'yellow',
        alignSelf: 'center',
        marginHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 10,
    },
    completeMsgText: {
        fontFamily: ENV.mfontFamilyMedium,
        fontSize: 13,
        color: Colors.violet,
        textAlign: 'center',
        marginTop: 10,
    },
    compImageStyle: {
        height: 110,
        width: 103,
        resizeMode: 'contain',
    },
    compImageWrapper: {
        backgroundColor: Colors.white,
        alignSelf: 'center',
        marginTop: 20,
    }
});

const select = (store) => {
    return store;
}
export default connect(select)(AdmissionTest);