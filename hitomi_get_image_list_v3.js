// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

function create_download_url(id) {
  return "https://ltn.hitomi.la/galleries/" + id + ".js";
}

var gg = {};
var window = {};
var document = {};
var name = {};
var location = {};
var customElements = {};
var history = {};
var locationbar = {};
var menubar = {};
var personalbar = {};
var scrollbars = {};
var statusbar = {};
var toolbar = {};
var status = {};
var closed = {};
var frames = {};
var length = {};
var top = {};
var opener = {};
var parent = {};
var frameElement = {};
var navigator = {};
var origin = {};
var external = {};
var screen = {};
var innerWidth = {};
var innerHeight = {};
var scrollX = {};
var pageXOffset = {};
var scrollY = {};
var pageYOffset = {};
var visualViewport = {};
var screenX = {};
var screenY = {};
var outerWidth = {};
var outerHeight = {};
var devicePixelRatio = {};
var clientInformation = {};
var screenLeft = {};
var screenTop = {};
var defaultStatus = {};
var defaultstatus = {};
var styleMedia = {};
var onsearch = {};
var isSecureContext = {};
var performance = {};
var onappinstalled = {};
var onbeforeinstallprompt = {};
var crypto = {};
var indexedDB = {};
var webkitStorageInfo = {};
var sessionStorage = {};
var localStorage = {};
var onbeforexrselect = {};
var onabort = {};
var onblur = {};
var oncancel = {};
var oncanplay = {};
var oncanplaythrough = {};
var onchange = {};
var onclick = {};
var onclose = {};
var oncontextmenu = {};
var oncuechange = {};
var ondblclick = {};
var ondrag = {};
var ondragend = {};
var ondragenter = {};
var ondragleave = {};
var ondragover = {};
var ondragstart = {};
var ondrop = {};
var ondurationchange = {};
var onemptied = {};
var onended = {};
var onerror = {};
var onfocus = {};
var onformdata = {};
var oninput = {};
var oninvalid = {};
var onkeydown = {};
var onkeypress = {};
var onkeyup = {};
var onload = {};
var onloadeddata = {};
var onloadedmetadata = {};
var onloadstart = {};
var onmousedown = {};
var onmouseenter = {};
var onmouseleave = {};
var onmousemove = {};
var onmouseout = {};
var onmouseover = {};
var onmouseup = {};
var onmousewheel = {};
var onpause = {};
var onplay = {};
var onplaying = {};
var onprogress = {};
var onratechange = {};
var onreset = {};
var onresize = {};
var onscroll = {};
var onseeked = {};
var onseeking = {};
var onselect = {};
var onstalled = {};
var onsubmit = {};
var onsuspend = {};
var ontimeupdate = {};
var ontoggle = {};
var onvolumechange = {};
var onwaiting = {};
var onwebkitanimationend = {};
var onwebkitanimationiteration = {};
var onwebkitanimationstart = {};
var onwebkittransitionend = {};
var onwheel = {};
var onauxclick = {};
var ongotpointercapture = {};
var onlostpointercapture = {};
var onpointerdown = {};
var onpointermove = {};
var onpointerup = {};
var onpointercancel = {};
var onpointerover = {};
var onpointerout = {};
var onpointerenter = {};
var onpointerleave = {};
var onselectstart = {};
var onselectionchange = {};
var onanimationend = {};
var onanimationiteration = {};
var onanimationstart = {};
var ontransitionrun = {};
var ontransitionstart = {};
var ontransitionend = {};
var ontransitioncancel = {};
var onafterprint = {};
var onbeforeprint = {};
var onbeforeunload = {};
var onhashchange = {};
var onlanguagechange = {};
var onmessage = {};
var onmessageerror = {};
var onoffline = {};
var ononline = {};
var onpagehide = {};
var onpageshow = {};
var onpopstate = {};
var onrejectionhandled = {};
var onstorage = {};
var onunhandledrejection = {};
var onunload = {};
var alert = {};
var atob = {};
var blur = {};
var btoa = {};
var cancelAnimationFrame = {};
var cancelIdleCallback = {};
var captureEvents = {};
var clearInterval = {};
var clearTimeout = {};
var close = {};
var confirm = {};
var createImageBitmap = {};
var fetch = {};
var find = {};
var focus = {};
var getComputedStyle = {};
var getSelection = {};
var matchMedia = {};
var moveBy = {};
var moveTo = {};
var open = {};
var postMessage = {};
var print = {};
var prompt = {};
var queueMicrotask = {};
var releaseEvents = {};
var reportError = {};
var requestAnimationFrame = {};
var requestIdleCallback = {};
var resizeBy = {};
var resizeTo = {};
var scroll = {};
var scrollBy = {};
var scrollTo = {};
var setInterval = {};
var setTimeout = {};
var stop = {};
var webkitCancelAnimationFrame = {};
var webkitRequestAnimationFrame = {};
var chrome = {};
var caches = {};
var cookieStore = {};
var ondevicemotion = {};
var ondeviceorientation = {};
var ondeviceorientationabsolute = {};
var showDirectoryPicker = {};
var showOpenFilePicker = {};
var showSaveFilePicker = {};
var originAgentCluster = {};
var trustedTypes = {};
var speechSynthesis = {};
var onpointerrawupdate = {};
var crossOriginIsolated = {};
var scheduler = {};
var openDatabase = {};
var webkitRequestFileSystem = {};
var webkitResolveLocalFileSystemURL = {};
var cr = {};


gg = { m: function(g) {
var o = 0;
switch (g) {
case 1005:
case 269:
case 2165:
case 1947:
case 3650:
case 3528:
case 2747:
case 2199:
case 2962:
case 294:
case 2482:
case 1772:
case 3917:
case 3943:
case 3160:
case 224:
case 1561:
case 90:
case 652:
case 3835:
case 3572:
case 2946:
case 2519:
case 1394:
case 1274:
case 1834:
case 430:
case 3245:
case 3821:
case 3421:
case 988:
case 3744:
case 1097:
case 1783:
case 1222:
case 2513:
case 100:
case 628:
case 1066:
case 812:
case 1014:
case 1819:
case 1414:
case 349:
case 1289:
case 2351:
case 1211:
case 69:
case 1525:
case 3824:
case 2039:
case 250:
case 253:
case 563:
case 1070:
case 305:
case 2091:
case 799:
case 1218:
case 3925:
case 1142:
case 3055:
case 3771:
case 1497:
case 1403:
case 1629:
case 166:
case 986:
case 3759:
case 159:
case 2712:
case 3793:
case 2434:
case 2441:
case 949:
case 4018:
case 758:
case 4013:
case 621:
case 1454:
case 3451:
case 1991:
case 4082:
case 2794:
case 2107:
case 2503:
case 59:
case 2771:
case 3559:
case 387:
case 1880:
case 3130:
case 3941:
case 1444:
case 1028:
case 1581:
case 2716:
case 980:
case 1339:
case 2235:
case 3920:
case 1558:
case 3764:
case 3015:
case 642:
case 13:
case 1570:
case 2615:
case 293:
case 2906:
case 1119:
case 366:
case 1658:
case 3769:
case 3558:
case 3526:
case 778:
case 2118:
case 3993:
case 3224:
case 750:
case 884:
case 1411:
case 1813:
case 2099:
case 2247:
case 3285:
case 1546:
case 2891:
case 3891:
case 2494:
case 2795:
case 1734:
case 1910:
case 3357:
case 3978:
case 2983:
case 3196:
case 2221:
case 251:
case 142:
case 3155:
case 931:
case 1518:
case 16:
case 3479:
case 325:
case 659:
case 1946:
case 3818:
case 2948:
case 2958:
case 1337:
case 1264:
case 3958:
case 2450:
case 158:
case 40:
case 429:
case 2896:
case 57:
case 1869:
case 3375:
case 3019:
case 1612:
case 3000:
case 3981:
case 1876:
case 3717:
case 1099:
case 752:
case 3029:
case 4047:
case 208:
case 555:
case 611:
case 3195:
case 2971:
case 1470:
case 3059:
case 1077:
case 2123:
case 2338:
case 1860:
case 474:
case 1168:
case 2243:
case 3274:
case 3611:
case 333:
case 2183:
case 2745:
case 1:
case 3605:
case 3310:
case 433:
case 3672:
case 1675:
case 2212:
case 176:
case 2509:
case 4049:
case 3520:
case 2901:
case 1321:
case 1545:
case 2483:
case 2978:
case 3889:
case 3219:
case 2751:
case 1387:
case 2325:
case 732:
case 1288:
case 3838:
case 3184:
case 1628:
case 510:
case 1749:
case 917:
case 2078:
case 871:
case 3345:
case 1090:
case 637:
case 416:
case 1491:
case 410:
case 3695:
case 103:
case 2270:
case 1139:
case 348:
case 3873:
case 3798:
case 189:
case 742:
case 1336:
case 2634:
case 766:
case 468:
case 644:
case 603:
case 944:
case 1791:
case 2657:
case 2304:
case 1136:
case 1790:
case 1437:
case 1690:
case 141:
case 1502:
case 2940:
case 3796:
case 891:
case 285:
case 2830:
case 1057:
case 2739:
case 1357:
case 536:
case 3959:
case 3496:
case 3398:
case 3452:
case 3370:
case 569:
case 635:
case 1098:
case 2886:
case 511:
case 2012:
case 1933:
case 2967:
case 2302:
case 12:
case 2255:
case 825:
case 2130:
case 3803:
case 68:
case 3215:
case 2439:
case 2392:
case 2461:
case 995:
case 3591:
case 3411:
case 2556:
case 3138:
case 2852:
case 587:
case 697:
case 1144:
case 1515:
case 2834:
case 150:
case 3782:
case 2117:
case 309:
case 3797:
case 3294:
case 927:
case 3581:
case 648:
case 3103:
case 3741:
case 1180:
case 312:
case 2394:
case 129:
case 122:
case 1185:
case 1794:
case 2006:
case 3271:
case 3946:
case 3517:
case 896:
case 87:
case 515:
case 1010:
case 1355:
case 3940:
case 3227:
case 3610:
case 574:
case 618:
case 1342:
case 400:
case 3438:
case 531:
case 2576:
case 955:
case 2196:
case 992:
case 2301:
case 2763:
case 1075:
case 3596:
case 3045:
case 3494:
case 2242:
case 3703:
case 213:
case 1112:
case 1250:
case 2260:
case 3210:
case 3300:
case 2475:
case 2647:
case 1352:
case 4058:
case 1645:
case 990:
case 769:
case 3198:
case 2137:
case 375:
case 1140:
case 2575:
case 4016:
case 3348:
case 3680:
case 2129:
case 1562:
case 624:
case 1918:
case 786:
case 1374:
case 2061:
case 2477:
case 2010:
case 1121:
case 877:
case 3694:
case 2225:
case 1713:
case 2193:
case 559:
case 2764:
case 1475:
case 2775:
case 3542:
case 3381:
case 204:
case 3990:
case 669:
case 901:
case 3962:
case 3944:
case 2298:
case 1402:
case 1435:
case 1684:
case 2128:
case 1152:
case 2521:
case 2173:
case 2478:
case 2593:
case 1047:
case 3235:
case 1447:
case 2470:
case 2167:
case 2693:
case 3731:
case 1172:
case 3851:
case 2086:
case 1197:
case 1329:
case 1455:
case 3839:
case 1078:
case 2239:
case 1285:
case 1775:
case 3775:
case 475:
case 592:
case 2846:
case 3075:
case 105:
case 3233:
case 2580:
case 2489:
case 1879:
case 1853:
case 1207:
case 3522:
case 1506:
case 369:
case 3332:
case 3859:
case 1378:
case 2884:
case 3681:
case 3099:
case 397:
case 450:
case 3866:
case 1243:
case 3552:
case 1278:
case 2867:
case 483:
case 2542:
case 307:
case 3011:
case 63:
case 1012:
case 1389:
case 545:
case 1333:
case 3449:
case 1509:
case 3525:
case 842:
case 3937:
case 908:
case 880:
case 539:
case 3214:
case 3031:
case 3916:
case 3134:
case 2680:
case 3545:
case 2464:
case 1082:
case 2568:
case 1231:
case 172:
case 795:
case 2023:
case 2373:
case 3181:
case 1131:
case 3289:
case 1757:
case 3197:
case 1181:
case 1472:
case 1381:
case 996:
case 2762:
case 2172:
case 1870:
case 1377:
case 2531:
case 3498:
case 1962:
case 1236:
case 2105:
case 584:
case 1763:
case 3291:
case 2864:
case 3230:
case 1644:
case 828:
case 1657:
case 2232:
case 2966:
case 119:
case 1308:
case 2835:
case 442:
case 1610:
case 3096:
case 3690:
case 1412:
case 2707:
case 1965:
case 3814:
case 3146:
case 2148:
case 445:
case 1677:
case 3023:
case 1695:
case 1822:
case 1992:
case 1347:
case 3044:
case 3673:
case 2175:
case 3309:
case 1161:
case 872:
case 241:
case 1863:
case 3541:
case 3996:
case 292:
case 3112:
case 1030:
case 2272:
case 2131:
case 2942:
case 467:
case 1840:
case 1242:
case 1332:
case 1249:
case 1726:
case 1130:
case 2719:
case 782:
case 2166:
case 2754:
case 2907:
case 764:
case 2715:
case 1526:
case 2797:
case 1818:
case 3655:
case 362:
case 3770:
case 3456:
case 1699:
case 1379:
case 976:
case 2621:
case 1313:
case 2059:
case 3688:
case 1094:
case 518:
case 183:
case 417:
case 456:
case 1237:
case 2142:
case 1618:
case 3624:
case 452:
case 3740:
case 2244:
case 2567:
case 2824:
case 686:
case 967:
case 1396:
case 966:
case 2676:
case 1889:
case 589:
case 956:
case 3595:
case 1452:
case 2856:
case 4038:
case 3211:
case 2020:
case 674:
case 2252:
case 3313:
case 3813:
case 3379:
case 1429:
case 3430:
case 929:
case 1286:
case 1257:
case 3408:
case 62:
case 1715:
case 3088:
case 507:
case 2890:
case 2496:
case 1936:
case 3757:
case 1212:
case 3485:
case 1147:
case 3810:
case 1293:
case 3488:
case 625:
case 3232:
case 2014:
case 1980:
case 3151:
case 2577:
case 1800:
case 2882:
case 1857:
case 1154:
case 1200:
case 4063:
case 2546:
case 168:
case 1320:
case 858:
case 939:
case 3393:
case 2818:
case 2502:
case 1608:
case 794:
case 3013:
case 1978:
case 1188:
case 411:
case 3202:
case 3710:
case 1270:
case 3339:
case 3961:
case 1848:
case 3281:
case 1662:
case 3932:
case 2273:
case 3620:
case 2956:
case 538:
case 2498:
case 994:
case 3322:
case 140:
case 768:
case 1115:
case 2326:
case 3564:
case 851:
case 1903:
case 3306:
case 508:
case 2328:
case 170:
case 298:
case 2980:
case 2308:
case 334:
case 1804:
case 3823:
case 2065:
case 3652:
case 1769:
case 113:
case 2851:
case 2943:
case 1345:
case 4027:
case 1626:
case 1590:
case 1640:
case 2226:
case 2793:
case 1364:
case 2108:
case 1916:
case 506:
case 2446:
case 1103:
case 1814:
case 3123:
case 3391:
case 3865:
case 1513:
case 3201:
case 810:
case 1601:
case 3095:
case 1230:
case 1003:
case 765:
case 1462:
case 1862:
case 798:
case 3033:
case 287:
case 4051:
case 889:
case 51:
case 1560:
case 2726:
case 3186:
case 2964:
case 240:
case 3128:
case 802:
case 3687:
case 2064:
case 3918:
case 3244:
case 1476:
case 4015:
case 672:
case 3093:
case 2067:
case 42:
case 3240:
case 3709:
case 3038:
case 974:
case 2820:
case 2722:
case 2905:
case 2710:
case 1145:
case 2721:
case 3474:
case 600:
case 1179:
case 3995:
case 1225:
case 2109:
case 1971:
case 2300:
case 3795:
case 3616:
case 1096:
case 1100:
case 2466:
case 2088:
case 3296:
case 2781:
case 351:
case 1702:
case 2561:
case 2786:
case 3121:
case 3363:
case 3457:
case 1327:
case 2836:
case 3598:
case 3758:
case 2283:
case 3726:
case 3921:
case 1894:
case 2678:
case 2553:
case 557:
case 1688:
case 2157:
case 2230:
case 1530:
case 632:
case 2755:
case 3820:
case 2122:
case 4072:
case 146:
case 968:
case 301:
case 1226:
case 346:
case 1175:
case 2472:
case 3006:
case 2945:
case 2629:
case 3628:
case 1771:
case 3654:
case 402:
case 2384:
case 2803:
case 2253:
case 205:
case 2784:
case 3727:
case 1646:
case 2084:
case 3765:
case 274:
case 3947:
case 3562:
case 2027:
case 1277:
case 2263:
case 264:
case 1265:
case 2093:
case 124:
case 868:
case 2709:
case 2048:
case 2536:
case 3604:
case 1361:
case 1680:
case 3590:
case 915:
case 4004:
case 484:
case 2467:
case 1738:
case 2603:
case 4060:
case 1985:
case 1961:
case 2050:
case 3974:
case 1830:
case 72:
case 3975:
case 894:
case 2973:
case 427:
case 1032:
case 275:
case 2322:
case 3863:
case 3708:
case 2871:
case 3168:
case 3171:
case 684:
case 829:
case 3384:
case 388:
case 2583:
case 2063:
case 1312:
case 3580:
case 613:
case 1356:
case 2501:
case 3005:
case 2652:
case 1368:
case 3218:
case 1302:
case 748:
case 286:
case 1668:
case 3507:
case 2849:
case 1297:
case 3226:
case 1895:
case 194:
case 3656:
case 3955:
case 2240:
case 3327:
case 1842:
case 3711:
case 336:
case 712:
case 381:
case 2703:
case 3312:
case 3248:
case 2360:
case 946:
case 1483:
case 1006:
case 1254:
case 1986:
case 2248:
case 2287:
case 1531:
case 3638:
case 566:
case 280:
case 3588:
case 1892:
case 573:
case 97:
case 2261:
case 2431:
case 3809:
case 1801:
case 606:
case 3516:
case 2262:
case 2597:
case 2119:
case 890:
case 3133:
case 1782:
case 2780:
case 135:
case 1913:
case 2535:
case 3949:
case 2588:
case 1319:
case 1793:
case 1213:
case 3369:
case 3256:
case 1638:
case 2920:
case 2934:
case 76:
case 2609:
case 2730:
case 2649:
case 1367:
case 2258:
case 2865:
case 3329:
case 2454:
case 1969:
case 1887:
case 3966:
case 3050:
case 3868:
case 1826:
case 3593:
case 3293:
case 1149:
case 2518:
case 132:
case 689:
case 2532:
case 14:
case 645:
case 2486:
case 2760:
case 2336:
case 1220:
case 1431:
case 3318:
case 1269:
case 3702:
case 1850:
case 1460:
case 1461:
case 3069:
case 1888:
case 3565:
case 455:
case 2132:
case 2074:
case 2559:
case 749:
case 3325:
case 3965:
case 1941:
case 2342:
case 3070:
case 1591:
case 2191:
case 1547:
case 2673:
case 553:
case 3288:
case 2405:
case 713:
case 581:
case 3174:
case 2806:
case 2433:
case 3713:
case 1839:
case 1380:
case 3149:
case 3178:
case 2594:
case 2121:
case 501:
case 3701:
case 3679:
case 2265:
case 2432:
case 1424:
case 3561:
case 1182:
case 3911:
case 143:
case 2113:
case 2523:
case 3506:
case 3467:
case 3627:
case 1635:
case 169:
case 3979:
case 1797:
case 3867:
case 1110:
case 2315:
case 3385:
case 1843:
case 318:
case 3899:
case 2796:
case 1935:
case 1538:
case 3287:
case 726:
case 2388:
case 3478:
case 3157:
case 288:
case 3788:
case 1748:
case 680:
case 2662:
case 3253:
case 431:
case 979:
case 3844:
case 3906:
case 1703:
case 2585:
case 2042:
case 2866:
case 1263:
case 2560:
case 3041:
case 3733:
case 3014:
case 2281:
case 2843:
case 788:
case 747:
case 2103:
case 1311:
case 4085:
case 284:
case 3450:
case 2044:
case 3024:
case 3284:
case 1828:
case 2337:
case 2236:
case 3335:
case 3509:
case 3645:
case 3463:
case 2899:
case 1434:
case 4092:
case 3799:
case 899:
case 1926:
case 3850:
case 3194:
case 567:
case 2627:
case 4024:
case 534:
case 4019:
case 258:
case 3396:
case 3443:
case 2877:
case 2798:
case 2147:
case 2241:
case 1240:
case 607:
case 2600:
case 1676:
case 963:
case 3723:
case 1856:
case 1216:
case 438:
case 3043:
case 735:
case 1056:
case 4048:
case 3903:
case 2804:
case 757:
case 399:
case 1768:
case 1529:
case 1247:
case 2140:
case 734:
case 1765:
case 3458:
case 3441:
case 1597:
case 60:
case 717:
case 3534:
case 2557:
case 490:
case 2671:
case 972:
case 1820:
case 938:
case 155:
case 1723:
case 3749:
case 451:
case 1683:
case 3685:
case 270:
case 2371:
case 1305:
case 3521:
case 1542:
case 3364:
case 2912:
case 2924:
case 3247:
case 818:
case 3094:
case 1484:
case 88:
case 1360:
case 2348:
case 2527:
case 1925:
case 3919:
case 1902:
case 1641:
case 3147:
case 714:
case 53:
case 4006:
case 1198:
case 2043:
case 3773:
case 2179:
case 1292:
case 2779:
case 2845:
case 2541:
case 3412:
case 671:
case 1866:
case 2286:
case 554:
case 1555:
case 3871:
case 3413:
case 1615:
case 565:
case 229:
case 2984:
case 2052:
case 2271:
case 2437:
case 1573:
case 1021:
case 3323:
case 1915:
case 1410:
case 1678:
case 3097:
case 3047:
case 1375:
case 1906:
case 1966:
case 564:
case 4022:
case 2879:
case 1698:
case 2318:
case 1954:
case 2412:
case 167:
case 3445:
case 2419:
case 203:
case 1232:
case 1973:
case 1838:
case 3177:
case 1068:
case 2190:
case 1621:
case 964:
case 1190:
case 3915:
case 1258:
case 3365:
case 3854:
case 2451:
case 3540:
case 271:
case 2968:
case 3907:
case 2720:
case 3079:
case 789:
case 2195:
case 1898:
case 2011:
case 2155:
case 2601:
case 3856:
case 1073:
case 1492:
case 3607:
case 651:
case 1849:
case 239:
case 3603:
case 3222:
case 1666:
case 3619:
case 954:
case 819:
case 552:
case 1157:
case 2801:
case 2977:
case 3819:
case 820:
case 2533:
case 1622:
case 3602:
case 2192:
case 182:
case 272:
case 2505:
case 96:
case 3243:
case 1959:
case 2565:
case 612:
case 1105:
case 705:
case 1298:
case 2389:
case 1371:
case 776:
case 813:
case 1373:
case 3658:
case 2031:
case 677:
case 1051:
case 2808:
case 888:
case 582:
case 2850:
case 1948:
case 2863:
case 2599:
case 579:
case 981:
case 983:
case 1485:
case 492:
case 3874:
case 110:
case 916:
case 3922:
case 706:
case 1541:
case 1322:
case 3192:
case 1614:
case 708:
case 1002:
case 761:
case 3592:
case 711:
case 1052:
case 3732:
case 1721:
case 656:
case 835:
case 3586:
case 268:
case 1478:
case 770:
case 3615:
case 840:
case 1024:
case 1983:
case 1718:
case 1034:
case 2623:
case 2606:
case 3051:
case 376:
case 1054:
case 544:
case 1114:
case 1426:
case 2368:
case 1534:
case 1013:
case 382:
case 551:
case 2862:
case 2257:
case 1505:
case 1141:
case 10:
case 3084:
case 3700:
case 3557:
case 2025:
case 3110:
case 1063:
case 3139:
case 1074:
case 3984:
case 719:
case 273:
case 4041:
case 1323:
case 2960:
case 3737:
case 1861:
case 2246:
case 1494:
case 638:
case 3190:
case 885:
case 2335:
case 1365:
case 254:
case 4073:
case 4083:
case 4021:
case 3298:
case 1578:
case 22:
case 1442:
case 3052:
case 3286:
case 1512:
case 1061:
case 30:
case 77:
case 771:
case 630:
case 2282:
case 74:
case 2711:
case 887:
case 470:
case 797:
case 2748:
case 730:
case 783:
case 2073:
case 3037:
case 1719:
case 957:
case 993:
case 283:
case 3518:
case 3707:
case 3250:
case 2663:
case 3927:
case 3481:
case 823:
case 3010:
case 1406:
case 3152:
case 3842:
case 937:
case 161:
case 344:
case 863:
case 694:
case 1464:
case 616:
case 1548:
case 1417:
case 3262:
case 2815:
case 46:
case 1055:
case 2095:
case 164:
case 2145:
case 3003:
case 3311:
case 238:
case 1937:
case 1930:
case 2334:
case 3763:
case 1627:
case 1104:
case 4012:
case 2279:
case 1436:
case 3064:
case 1846:
case 295:
case 361:
case 1586:
case 3532:
case 391:
case 4067:
case 1909:
case 1661:
case 1438:
case 1031:
case 2578:
case 3886:
case 3213:
case 1998:
case 1679:
case 83:
case 2411:
case 859:
case 1758:
case 2352:
case 3342:
case 81:
case 3670:
case 3142:
case 831:
case 3470:
case 691:
case 1836:
case 2740:
case 2782:
case 4030:
case 560:
case 3969:
case 3720:
case 39:
case 1604:
case 3554:
case 2307:
case 1037:
case 504:
case 3747:
case 2789:
case 3585:
case 2688:
case 236:
case 193:
case 2681:
case 2928:
case 3083:
case 1989:
case 237:
case 1817:
case 2428:
case 1756:
case 3490:
case 1704:
case 657:
case 2465:
case 3712:
case 1391:
case 3180:
case 941:
case 3304:
case 721:
case 252:
case 495:
case 2811:
case 2499:
case 833:
case 3169:
case 3326:
case 244:
case 3787:
case 2773:
case 2382:
case 3734:
case 209:
case 3221:
case 138:
case 594:
case 1245:
case 2695:
case 1762:
case 2749:
case 3402:
case 3623:
case 2765:
case 2408:
case 864:
case 886:
case 3674:
case 2612:
case 1722:
case 597:
case 34:
case 3307:
case 615:
case 55:
case 1982:
case 3777:
case 1318:
case 1376:
case 1408:
case 359:
case 261:
case 1362:
case 3419:
case 3:
case 463:
case 1404:
case 2672:
case 1778:
case 314:
case 480:
case 1174:
case 2116:
case 4029:
case 1803:
case 2256:
case 2152:
case 3258:
case 157:
case 913:
case 528:
case 1712:
case 3125:
case 2213:
case 991:
case 1811:
case 4050:
case 2933:
case 2294:
case 3399:
case 3436:
case 2517:
case 1166:
case 924:
case 486:
case 1606:
case 1326:
case 4037:
case 3913:
case 3355:
case 3238:
case 3952:
case 1751:
case 3845:
case 2743:
case 2667:
case 3206:
case 2959:
case 500:
case 3667:
case 3439:
case 2592:
case 3053:
case 1798:
case 4068:
case 806:
case 3785:
case 1300:
case 2323:
case 231:
case 3805:
case 3807:
case 1351:
case 154:
case 2750:
case 878:
case 2406:
case 1449:
case 2659:
case 1239:
case 370:
case 3999:
case 2951:
case 2528:
case 583:
case 1701:
case 1877:
case 1810:
case 364:
case 126:
case 3884:
case 3825:
case 2370:
case 1979:
case 2202:
case 2319:
case 1186:
case 1085:
case 2989:
case 2727:
case 2347:
case 2403:
case 1430:
case 1788:
case 1967:
case 1062:
case 1176:
case 1043:
case 943:
case 412:
case 3894:
case 1201:
case 436:
case 626:
case 2013:
case 836:
case 2047:
case 2957:
case 1432:
case 372:
case 413:
case 3531:
case 196:
case 1567:
case 2656:
case 2367:
case 1156:
case 2154:
case 3808:
case 3453:
case 2053:
case 2206:
case 2051:
case 3338:
case 4026:
case 3914:
case 1824:
case 3794:
case 3599:
case 80:
case 951:
case 693:
case 3444:
case 114:
case 1904:
case 1728:
case 3735:
case 1958:
case 262:
case 1694:
case 1896:
case 1900:
case 3036:
case 3729:
case 1246:
case 942:
case 212:
case 3205:
case 2555:
case 2127:
case 1022:
case 2617:
case 3131:
case 962:
case 2356:
case 419:
case 2054:
case 596:
case 1673:
case 3651:
case 2436:
case 3183:
case 3343:
case 3187:
case 3136:
case 3543:
case 2290:
case 4055:
case 532:
case 945:
case 876:
case 1111:
case 1742:
case 2904:
case 3671:
case 421:
case 2359:
case 862:
case 1623:
case 2988:
case 1169:
case 1170:
case 2007:
case 2311:
case 3354:
case 102:
case 171:
case 2675:
case 1643:
case 3315:
case 3158:
case 1474:
case 2207:
case 106:
case 906:
case 1189:
case 4052:
case 2569:
case 3912:
case 2346:
case 1344:
case 1572:
case 2150:
case 289:
case 1217:
case 223:
case 1833:
case 1553:
case 830:
case 2692:
case 2758:
case 1812:
case 156:
case 811:
case 115:
case 1256:
case 3633:
case 1162:
case 3492:
case 1520:
case 3356:
case 3977:
case 3476:
case 1248:
case 2701:
case 634:
case 2787:
case 3878:
case 2759:
case 3987:
case 3766:
case 2146:
case 2276:
case 423:
case 2096:
case 2823:
case 519:
case 1348:
case 2474:
case 1372:
case 3664:
case 211:
case 1120:
case 434:
case 1122:
case 3071:
case 3837:
case 488:
case 952:
case 2417:
case 342:
case 3060:
case 2168:
case 1467:
case 2524:
case 3857:
case 3392:
case 1841:
case 3515:
case 622:
case 3361:
case 2950:
case 526:
case 1598:
case 2914:
case 3753:
case 2708:
case 210:
case 1521:
case 2036:
case 1600:
case 2651:
case 1465:
case 3601:
case 2425:
case 3007:
case 3400:
case 449:
case 1960:
case 3570:
case 1214:
case 3791:
case 2562:
case 3350:
case 1133:
case 1262:
case 1441:
case 853:
case 3317:
case 1241:
case 1033:
case 3678:
case 3972:
case 3675:
case 827:
case 260:
case 2590:
case 1183:
case 2473:
case 1071:
case 1209:
case 1395:
case 953:
case 729:
case 2245:
case 3144:
case 2516:
case 1693:
case 2493:
case 3022:
case 162:
case 2607:
case 1091:
case 780:
case 3426:
case 1468:
case 623:
case 17:
case 177:
case 1579:
case 3802:
case 1687:
case 1194:
case 1276:
case 1872:
case 2333:
case 2143:
case 148:
case 322:
case 1453:
case 3484:
case 3446:
case 882:
case 2616:
case 745:
case 398:
case 595:
case 1882:
case 744:
case 2691:
case 54:
case 44:
case 654:
case 2919:
case 2888:
case 3231:
case 1652:
case 2545:
case 3012:
case 4065:
case 350:
case 1126:
case 1952:
case 2756:
case 2156:
case 48:
case 3228:
case 4054:
case 710:
case 1227:
case 479:
case 2552:
case 3909:
case 1682:
case 2810:
case 19:
case 1939:
case 3971:
case 3087:
case 3395:
case 3386:
case 2395:
case 360:
case 2161:
case 558:
case 3390:
case 377:
case 1611:
case 3511:
case 1058:
case 521:
case 854:
case 277:
case 961:
case 2188:
case 1568:
case 3217:
case 696:
case 473:
case 1158:
case 3282:
case 1137:
case 2916:
case 3976:
case 1039:
case 4011:
case 1883:
case 2800:
case 67:
case 3132:
case 2288:
case 2631:
case 2046:
case 3933:
case 3881:
case 923:
case 2358:
case 3699:
case 41:
case 1448:
case 2582:
case 670:
case 2409:
case 1576:
case 1035:
case 2952:
case 71:
case 3779:
case 33:
case 2696:
case 3760:
case 2087:
case 3465:
case 683:
case 3860:
case 3716:
case 3472:
case 2981:
case 327:
case 2340:
case 2083:
case 24:
case 2339:
case 958:
case 1773:
case 2731:
case 4084:
case 3372:
case 1781:
case 3091:
case 904:
case 2816:
case 1539:
case 556:
case 1369:
case 1228:
case 1594:
case 1583:
case 3642:
case 3266:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1660064402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,];
var gg_b = "1660064402/";

function hitomi_get_image_list() {
  files = galleryinfo["files"];
  // function test(id, files) {
  number_of_frontends = 3;
  subdomain = "a";
  btresult = [];
  stresult = [];
  result = [];
  for (var rr of files) {
    hash = rr["hash"];
    postfix = hash.substr(hash.length - 3);
    subdomainx = subdomain;
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) subdomainx = "b";
    x = parseInt(postfix[2] + postfix[0] + postfix[1], 16);
    if (!isNaN(x)) {
      if (x < 4096) subdomainx = String.fromCharCode(97 + gg_m[x]);
      else subdomainx = String.fromCharCode(97 + 0);
    }
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) {
      result.push(
        `https://${subdomainx}b.hitomi.la/images/${gg_b + gg.s(hash)}/${hash}.${
          rr["name"].split(".").slice(-1)[0]
        }`
      );
    } else if (hash == "")
      result.push(`https://${subdomainx}a.hitomi.la/webp/${rr["name"]}.webp`);
    else if (hash.length < 3)
      result.push(`https://${subdomainx}a.hitomi.la/webp/${hash}.webp`);
    else {
      result.push(
        `https://${subdomainx}a.hitomi.la/webp/${
            gg.b + gg.s(hash)
        }/${hash}.webp`
      );
    }
    if (rr["haswebp"] == 1)
    {
      btresult.push(
        `https://tn.hitomi.la/webpbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/webpsmalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
    }
    // else if (rr["hasavif"] == 1)
    // {
    //   btresult.push(
    //     `https://tn.hitomi.la/avifbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    //   stresult.push(
    //     `https://${subdomainx}tn.hitomi.la/avifsmallbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    // }
    else 
    {
      btresult.push(
        `https://tn.hitomi.la/bigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/smalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
    }
  }
  return JSON.stringify({
    btresult: btresult,
    stresult: stresult,
    result: result,
  });
}

function hitomi_get_header_content(id) {
  return JSON.stringify({
      'referer': `https://hitomi.la/reader/${id}.html`,
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.3',
  });
}
