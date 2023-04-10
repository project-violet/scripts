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
var o = 1;
switch (g) {
case 2960:
case 2017:
case 3023:
case 547:
case 349:
case 1445:
case 1391:
case 30:
case 786:
case 3685:
case 2166:
case 3945:
case 2076:
case 3607:
case 2669:
case 1674:
case 2374:
case 489:
case 1153:
case 1626:
case 2356:
case 2463:
case 3138:
case 3494:
case 2318:
case 3870:
case 3679:
case 1818:
case 1726:
case 2235:
case 3873:
case 1356:
case 2904:
case 3703:
case 2338:
case 4027:
case 3010:
case 3823:
case 2116:
case 2734:
case 2127:
case 1670:
case 1785:
case 2188:
case 3834:
case 3380:
case 1639:
case 2261:
case 1294:
case 3239:
case 3612:
case 2439:
case 1393:
case 2992:
case 2798:
case 1567:
case 1831:
case 3946:
case 1900:
case 1571:
case 769:
case 3743:
case 3829:
case 2977:
case 1240:
case 494:
case 3027:
case 179:
case 1548:
case 3778:
case 1446:
case 1433:
case 644:
case 3218:
case 2457:
case 2994:
case 1384:
case 2264:
case 3556:
case 3135:
case 1845:
case 2962:
case 993:
case 3804:
case 3646:
case 1778:
case 3780:
case 1181:
case 2894:
case 211:
case 2040:
case 1543:
case 1207:
case 3709:
case 3104:
case 1123:
case 932:
case 3266:
case 3920:
case 3522:
case 2041:
case 1368:
case 601:
case 1178:
case 2430:
case 1287:
case 3356:
case 1485:
case 1051:
case 57:
case 3269:
case 3794:
case 526:
case 749:
case 2788:
case 3443:
case 3535:
case 3581:
case 3869:
case 3619:
case 1656:
case 831:
case 1043:
case 351:
case 3318:
case 1218:
case 2039:
case 182:
case 23:
case 3940:
case 2251:
case 773:
case 2028:
case 2769:
case 1327:
case 2002:
case 1572:
case 2157:
case 3058:
case 3688:
case 2491:
case 2896:
case 239:
case 931:
case 3378:
case 1193:
case 2851:
case 3852:
case 734:
case 3821:
case 3559:
case 3684:
case 2547:
case 1651:
case 2347:
case 3043:
case 228:
case 2886:
case 2809:
case 1928:
case 3284:
case 1187:
case 1760:
case 2093:
case 553:
case 3009:
case 2556:
case 735:
case 1323:
case 2194:
case 853:
case 729:
case 2976:
case 1229:
case 3718:
case 1248:
case 397:
case 3682:
case 1865:
case 3678:
case 275:
case 2877:
case 1493:
case 2095:
case 728:
case 3957:
case 3805:
case 796:
case 2273:
case 1687:
case 1426:
case 2341:
case 3644:
case 1630:
case 2602:
case 2045:
case 2312:
case 230:
case 2948:
case 2268:
case 352:
case 2285:
case 1769:
case 561:
case 3847:
case 1553:
case 587:
case 1282:
case 408:
case 2141:
case 3201:
case 4047:
case 698:
case 684:
case 405:
case 3303:
case 1166:
case 3938:
case 920:
case 2272:
case 50:
case 3143:
case 1328:
case 1648:
case 708:
case 2626:
case 2812:
case 2455:
case 1989:
case 3095:
case 624:
case 1771:
case 1783:
case 702:
case 1510:
case 172:
case 3474:
case 1068:
case 2299:
case 1032:
case 3379:
case 119:
case 516:
case 3520:
case 1474:
case 1256:
case 1546:
case 1163:
case 3183:
case 879:
case 1167:
case 3202:
case 218:
case 1100:
case 2874:
case 1441:
case 3223:
case 3674:
case 976:
case 2880:
case 4000:
case 375:
case 2398:
case 3205:
case 811:
case 2160:
case 3728:
case 4038:
case 902:
case 1669:
case 2938:
case 3615:
case 2359:
case 1695:
case 2973:
case 537:
case 3008:
case 3779:
case 407:
case 1692:
case 1343:
case 1859:
case 396:
case 1855:
case 2823:
case 2395:
case 3413:
case 2670:
case 563:
case 1666:
case 3473:
case 2035:
case 3451:
case 2175:
case 2424:
case 3720:
case 2906:
case 78:
case 3246:
case 3717:
case 3115:
case 2532:
case 1506:
case 1792:
case 2644:
case 3753:
case 1392:
case 4089:
case 847:
case 1678:
case 3402:
case 2310:
case 2580:
case 2934:
case 3081:
case 2397:
case 270:
case 1895:
case 2646:
case 778:
case 196:
case 1255:
case 187:
case 813:
case 3404:
case 1355:
case 833:
case 2980:
case 1981:
case 1455:
case 3441:
case 3681:
case 3007:
case 3962:
case 2209:
case 2139:
case 1766:
case 2065:
case 3751:
case 3865:
case 3887:
case 326:
case 3971:
case 1837:
case 2595:
case 2337:
case 3848:
case 1053:
case 1221:
case 2614:
case 2623:
case 3364:
case 3981:
case 3132:
case 2259:
case 3133:
case 764:
case 2899:
case 2589:
case 371:
case 985:
case 4046:
case 1863:
case 207:
case 302:
case 1214:
case 4021:
case 3370:
case 3840:
case 3838:
case 1582:
case 3389:
case 2385:
case 3803:
case 2169:
case 645:
case 1265:
case 59:
case 534:
case 1293:
case 1642:
case 4037:
case 1775:
case 603:
case 3800:
case 3672:
case 3243:
case 152:
case 1636:
case 3254:
case 488:
case 551:
case 2783:
case 3312:
case 1303:
case 2610:
case 2308:
case 964:
case 583:
case 2419:
case 2242:
case 2697:
case 2733:
case 2389:
case 48:
case 3165:
case 2434:
case 672:
case 2067:
case 3991:
case 260:
case 855:
case 303:
case 1104:
case 3074:
case 257:
case 1225:
case 3309:
case 3101:
case 2119:
case 1644:
case 2822:
case 3485:
case 3593:
case 185:
case 1979:
case 2452:
case 377:
case 3630:
case 1723:
case 2913:
case 1496:
case 2210:
case 1824:
case 3580:
case 1947:
case 3310:
case 1012:
case 2334:
case 2706:
case 3208:
case 1537:
case 2650:
case 3809:
case 3489:
case 1063:
case 3211:
case 2810:
case 3799:
case 3849:
case 1840:
case 221:
case 3162:
case 1277:
case 2766:
case 2606:
case 2767:
case 1045:
case 3347:
case 2223:
case 1048:
case 1491:
case 3130:
case 3126:
case 2363:
case 1538:
case 2537:
case 3542:
case 310:
case 3856:
case 3314:
case 2174:
case 1545:
case 3497:
case 1772:
case 2140:
case 3928:
case 1273:
case 2797:
case 3475:
case 3518:
case 3368:
case 3775:
case 2676:
case 577:
case 3171:
case 1549:
case 180:
case 3719:
case 3102:
case 836:
case 4055:
case 1140:
case 1316:
case 1664:
case 732:
case 276:
case 3582:
case 2129:
case 3680:
case 660:
case 1969:
case 3394:
case 1469:
case 1735:
case 1517:
case 195:
case 821:
case 2015:
case 3737:
case 3827:
case 777:
case 767:
case 2394:
case 1149:
case 90:
case 3021:
case 590:
case 1389:
case 3316:
case 2515:
case 1489:
case 1773:
case 2531:
case 2479:
case 3003:
case 3001:
case 2729:
case 1324:
case 157:
case 3194:
case 3606:
case 1732:
case 2695:
case 1437:
case 851:
case 419:
case 4058:
case 2172:
case 2884:
case 1719:
case 2489:
case 1266:
case 1135:
case 543:
case 2426:
case 4070:
case 1290:
case 3158:
case 3421:
case 3022:
case 3653:
case 3741:
case 2384:
case 1377:
case 1935:
case 4040:
case 357:
case 899:
case 2536:
case 2744:
case 2914:
case 1168:
case 3000:
case 238:
case 2893:
case 3990:
case 878:
case 3635:
case 1124:
case 1089:
case 292:
case 1959:
case 1425:
case 2961:
case 763:
case 125:
case 2373:
case 383:
case 1914:
case 1030:
case 2525:
case 2402:
case 3119:
case 19:
case 33:
case 2932:
case 4019:
case 2674:
case 2001:
case 3241:
case 2413:
case 888:
case 637:
case 2295:
case 896:
case 263:
case 3724:
case 785:
case 800:
case 2919:
case 3257:
case 1997:
case 863:
case 3072:
case 1497:
case 1589:
case 2594:
case 1173:
case 1960:
case 1262:
case 2266:
case 3258:
case 51:
case 1082:
case 2757:
case 2336:
case 2790:
case 3426:
case 2988:
case 3108:
case 1289:
case 3777:
case 1499:
case 3903:
case 2841:
case 3925:
case 3964:
case 1984:
case 1888:
case 1823:
case 1563:
case 4071:
case 2433:
case 107:
case 919:
case 3854:
case 1002:
case 1010:
case 1594:
case 1974:
case 3409:
case 3826:
case 4091:
case 226:
case 1106:
case 536:
case 834:
case 1060:
case 2664:
case 3687:
case 1291:
case 145:
case 2263:
case 2376:
case 754:
case 3696:
case 233:
case 1786:
case 2921:
case 2925:
case 2609:
case 2365:
case 1673:
case 3147:
case 2416:
case 3298:
case 1400:
case 2534:
case 1856:
case 3050:
case 269:
case 1429:
case 3245:
case 441:
case 720:
case 829:
case 3736:
case 1119:
case 2056:
case 595:
case 3390:
case 3219:
case 1972:
case 2410:
case 3097:
case 1809:
case 3958:
case 1889:
case 1306:
case 2290:
case 2382:
case 2638:
case 1155:
case 2737:
case 727:
case 3526:
case 3663:
case 252:
case 3337:
case 1358:
case 1835:
case 374:
case 2989:
case 127:
case 1744:
case 2120:
case 2097:
case 2701:
case 571:
case 2393:
case 669:
case 4090:
case 2154:
case 92:
case 3084:
case 4022:
case 1912:
case 200:
case 955:
case 3655:
case 781:
case 3628:
case 2:
case 2718:
case 2254:
case 3107:
case 1520:
case 3548:
case 1139:
case 3089:
case 3565:
case 527:
case 1503:
case 501:
case 115:
case 809:
case 390:
case 1460:
case 3911:
case 3320:
case 3651:
case 676:
case 356:
case 1603:
case 111:
case 2601:
case 4060:
case 908:
case 1794:
case 333:
case 1586:
case 483:
case 3637:
case 898:
case 2888:
case 779:
case 3588:
case 1342:
case 2061:
case 2993:
case 2292:
case 3116:
case 849:
case 1934:
case 2474:
case 255:
case 2073:
case 1741:
case 41:
case 2778:
case 2019:
case 340:
case 1280:
case 126:
case 909:
case 1480:
case 740:
case 1609:
case 2315:
case 967:
case 3510:
case 254:
case 331:
case 3649:
case 1352:
case 1828:
case 731:
case 1956:
case 456:
case 2571:
case 3798:
case 2293:
case 129:
case 930:
case 2148:
case 2649:
case 3206:
case 2496:
case 3353:
case 4024:
case 2645:
case 3934:
case 2583:
case 95:
case 3161:
case 979:
case 528:
case 1521:
case 2328:
case 1712:
case 4072:
case 2868:
case 3506:
case 2456:
case 345:
case 803:
case 2672:
case 674:
case 2920:
case 130:
case 542:
case 458:
case 2487:
case 3792:
case 1270:
case 2125:
case 3282:
case 1033:
case 291:
case 1283:
case 379:
case 3579:
case 1174:
case 1649:
case 2842:
case 3296:
case 3841:
case 2037:
case 3587:
case 453:
case 3519:
case 1417:
case 2696:
case 1663:
case 2195:
case 1802:
case 1044:
case 1427:
case 2679:
case 3871:
case 6:
case 191:
case 1147:
case 3488:
case 498:
case 2911:
case 1448:
case 3686:
case 274:
case 766:
case 2156:
case 3527:
case 399:
case 974:
case 2171:
case 3660:
case 3812:
case 1953:
case 1820:
case 838:
case 1077:
case 2205:
case 3731:
case 184:
case 2550:
case 1968:
case 981:
case 3822:
case 3237:
case 873:
case 2451:
case 2301:
case 2671:
case 1108:
case 2951:
case 1975:
case 1251:
case 3502:
case 2086:
case 2848:
case 149:
case 3442:
case 685:
case 1110:
case 1378:
case 2524:
case 495:
case 413:
case 3326:
case 1781:
case 2952:
case 1758:
case 3384:
case 80:
case 1194:
case 3577:
case 3512:
case 3481:
case 1868:
case 1827:
case 755:
case 342:
case 2908:
case 4039:
case 2044:
case 3315:
case 1645:
case 1841:
case 3358:
case 2991:
case 2099:
case 2928:
case 3179:
case 1921:
case 2923:
case 2940:
case 3438:
case 164:
case 1995:
case 2207:
case 2351:
case 27:
case 1340:
case 236:
case 1422:
case 1232:
case 3285:
case 1994:
case 2270:
case 3815:
case 3860:
case 597:
case 406:
case 79:
case 411:
case 2091:
case 1779:
case 2813:
case 2414:
case 205:
case 3396:
case 3689:
case 1432:
case 1056:
case 427:
case 3210:
case 1095:
case 1621:
case 2717:
case 1839:
case 3349:
case 1515:
case 2947:
case 140:
case 2858:
case 1998:
case 3773:
case 1686:
case 3757:
case 744:
case 395:
case 3608:
case 1755:
case 1271:
case 142:
case 3808:
case 373:
case 2122:
case 4008:
case 1300:
case 330:
case 210:
case 1498:
case 3087:
case 100:
case 3837:
case 2763:
case 709:
case 2107:
case 3896:
case 1278:
case 2964:
case 304:
case 3088:
case 2346:
case 1313:
case 4011:
case 3936:
case 1647:
case 1808:
case 1344:
case 3610:
case 1782:
case 3015:
case 98:
case 4032:
case 3399:
case 1698:
case 2231:
case 343:
case 3825:
case 2910:
case 86:
case 1484:
case 266:
case 741:
case 1689:
case 46:
case 2401:
case 281:
case 1209:
case 4056:
case 1338:
case 2942:
case 1093:
case 1354:
case 639:
case 1877:
case 3336:
case 4023:
case 525:
case 1152:
case 3623:
case 1602:
case 436:
case 1519:
case 3694:
case 1028:
case 3648:
case 1189:
case 2090:
case 818:
case 2142:
case 2283:
case 1640:
case 562:
case 3493:
case 1420:
case 3524:
case 2080:
case 2555:
case 2144:
case 4050:
case 250:
case 1580:
case 3885:
case 610:
case 3516:
case 3782:
case 3422:
case 3950:
case 317:
case 3392:
case 2786:
case 3057:
case 3291:
case 52:
case 1133:
case 793:
case 2660:
case 2092:
case 2662:
case 3024:
case 1319:
case 1001:
case 962:
case 1348:
case 559:
case 203:
case 2201:
case 1922:
case 1500:
case 3250:
case 2613:
case 2033:
case 2642:
case 2494:
case 156:
case 1784:
case 2343:
case 2707:
case 72:
case 1733:
case 942:
case 75:
case 2860:
case 62:
case 3742:
case 3998:
case 694:
case 2572:
case 1592:
case 1039:
case 3496:
case 545:
case 933:
case 158:
case 386:
case 508:
case 2519:
case 209:
case 3374:
case 2147:
case 94:
case 3056:
case 1641:
case 762:
case 409:
case 1142:
case 1727:
case 688:
case 2486:
case 3733:
case 3546:
case 1457:
case 232:
case 439:
case 3571:
case 1179:
case 1164:
case 2775:
case 1305:
case 2592:
case 3105:
case 3763:
case 518:
case 680:
case 2190:
case 3144:
case 983:
case 2916:
case 1226:
case 760:
case 1449:
case 1205:
case 3595:
case 3222:
case 3701:
case 3227:
case 2675:
case 3819:
case 2163:
case 600:
case 1917:
case 963:
case 314:
case 4006:
case 2115:
case 1458:
case 2153:
case 1198:
case 848:
case 1143:
case 3730:
case 424:
case 486:
case 2779:
case 1252:
case 3228:
case 2776:
case 3583:
case 3923:
case 2573:
case 1643:
case 2281:
case 1555:
case 2909:
case 1317:
case 1473:
case 1516:
case 1217:
case 533:
case 448:
case 3664:
case 3695:
case 247:
case 47:
case 2350:
case 2500:
case 1560:
case 1637:
case 470:
case 234:
case 956:
case 3063:
case 2518:
case 1369:
case 2968:
case 2428:
case 3974:
case 74:
case 3191:
case 4029:
case 3913:
case 602:
case 3385:
case 2685:
case 3195:
case 1527:
case 404:
case 3793:
case 3025:
case 765:
case 3395:
case 137:
case 895:
case 2728:
case 612:
case 1533:
case 643:
case 235:
case 2280:
case 2215:
case 2196:
case 658:
case 2625:
case 1763:
case 3204:
case 4084:
case 3972:
case 966:
case 3129:
case 903:
case 3286:
case 2473:
case 631:
case 705:
case 2514:
case 1734:
case 3226:
case 256:
case 2569:
case 1103:
case 1807:
case 3867:
case 2371:
case 3670:
case 1165:
case 2219:
case 2197:
case 2516:
case 2946:
case 3652:
case 1116:
case 3319:
case 2440:
case 1099:
case 1632:
case 467:
case 245:
case 1246:
case 1349:
case 4086:
case 402:
case 4078:
case 2016:
case 1096:
case 1466:
case 2353:
case 816:
case 2839:
case 1899:
case 1608:
case 2597:
case 1259:
case 3180:
case 3281:
case 3540:
case 2158:
case 2636:
case 132:
case 3700:
case 3267:
case 3868:
case 621:
case 2333:
case 3956:
case 2146:
case 3901:
case 150:
case 1409:
case 2741:
case 2252:
case 2806:
case 3970:
case 3238:
case 884:
case 2360:
case 759:
case 1413:
case 2773:
case 711:
case 2185:
case 1739:
case 3734:
case 3301:
case 1752:
case 511:
case 2905:
case 2214:
case 1844:
case 529:
case 3430:
case 2448:
case 2585:
case 2756:
case 617:
case 3037:
case 58:
case 2508:
case 82:
case 2808:
case 1406:
case 3750:
case 2563:
case 3924:
case 3295:
case 3417:
case 1944:
case 2432:
case 462:
case 2043:
case 3062:
case 391:
case 3103:
case 2652:
case 382:
case 4088:
case 3345:
case 1130:
case 324:
case 2313:
case 3169:
case 3866:
case 219:
case 174:
case 1443:
case 1834:
case 3738:
case 1113:
case 2723:
case 3046:
case 3843:
case 2564:
case 105:
case 790:
case 2117:
case 1577:
case 1114:
case 3590:
case 2468:
case 3599:
case 2025:
case 286:
case 87:
case 2136:
case 88:
case 3405:
case 96:
case 2367:
case 1295:
case 2850:
case 3665:
case 1879:
case 652:
case 3760:
case 3071:
case 503:
case 2181:
case 938:
case 1847:
case 1908:
case 500:
case 1711:
case 3069:
case 2380:
case 1658:
case 1444:
case 1197:
case 3428:
case 1138:
case 2005:
case 1718:
case 3343:
case 2225:
case 2873:
case 3260:
case 215:
case 3601:
case 1702:
case 2879:
case 378:
case 36:
case 3360:
case 2876:
case 2922:
case 1398:
case 3469:
case 845:
case 478:
case 2381:
case 3560:
case 2405:
case 2238:
case 3495:
case 521:
case 522:
case 1550:
case 2287:
case 1079:
case 671:
case 665:
case 3955:
case 231:
case 2557:
case 3675:
case 2244:
case 3525:
case 1740:
case 799:
case 3363:
case 2865:
case 311:
case 1285:
case 869:
case 2558:
case 1184:
case 2159:
case 3721:
case 1243:
case 805:
case 689:
case 659:
case 325:
case 1629:
case 264:
case 2657:
case 1535:
case 387:
case 2078:
case 3365:
case 968:
case 2462:
case 3549:
case 3240:
case 3059:
case 2635:
case 810:
case 2364:
case 1876:
case 1125:
case 2634:
case 3935:
case 1267:
case 393:
case 2995:
case 3880:
case 2832:
case 519:
case 451:
case 2277:
case 3128:
case 3323:
case 569:
case 3091:
case 2511:
case 3271:
case 3977:
case 3776:
case 3523:
case 120:
case 830:
case 1061:
case 3019:
case 3988:
case 3918:
case 1200:
case 614:
case 178:
case 3154:
case 2891:
case 1700:
case 1716:
case 1933:
case 1176:
case 2945:
case 1622:
case 1435:
case 3424:
case 618:
case 2034:
case 619:
case 309:
case 2150:
case 1363:
case 2392:
case 3270:
case 2726:
case 2591:
case 2180:
case 854:
case 1476:
case 654:
case 3373:
case 3042:
case 2987:
case 466:
case 423:
case 3953:
case 186:
case 2082:
case 3124:
case 2836:
case 4007:
case 1880:
case 3806:
case 1253:
case 1736:
case 4094:
case 2087:
case 1345:
case 1236:
case 2213:
case 3289:
case 3341:
case 81:
case 163:
case 2375:
case 3425:
case 2027:
case 2400:
case 1069:
case 1829:
case 273:
case 2442:
case 567:
case 3960:
case 1451:
case 40:
case 301:
case 283:
case 2189:
case 3650:
case 2276:
case 2931:
case 2739:
case 3503:
case 1084:
case 2681:
case 894:
case 3816:
case 262:
case 2759:
case 2342:
case 557:
case 2765:
case 3272:
case 3006:
case 4005:
case 3845:
case 1452:
case 782:
case 1874:
case 148:
case 3997:
case 433:
case 1920:
case 1671:
case 918:
case 907:
case 167:
case 2560:
case 4017:
case 649:
case 973:
case 2629:
case 1204:
case 997:
case 1593:
case 1182:
case 3592:
case 3979:
case 984:
case 2643:
case 2984:
case 2344:
case 1745:
case 2575:
case 2493:
case 1873:
case 3536:
case 312:
case 1691:
case 3338:
case 315:
case 616:
case 3178:
case 2542:
case 1241:
case 1585:
case 4066:
case 876:
case 4093:
case 2543:
case 1803:
case 1693:
case 3578:
case 1544:
case 3762:
case 2648:
case 2929:
case 2267:
case 3187:
case 2825:
case 1107:
case 2666:
case 1697:
case 3863:
case 3706:
case 2692:
case 2481:
case 2008:
case 1101:
case 128:
case 1321:
case 1076:
case 431:
case 3627:
case 3306:
case 3487:
case 2327:
case 3639:
case 2063:
case 802:
case 43:
case 3624:
case 1408:
case 2198:
case 2561:
case 24:
case 3461:
case 1040:
case 3439:
case 3831:
case 1983:
case 261:
case 76:
case 1991:
case 2939:
case 2703:
case 3902:
case 1611:
case 445:
case 2450:
case 64:
case 35:
case 3151:
case 843:
case 3906:
case 1790:
case 1180:
case 2926:
case 1595:
case 2878:
case 2872:
case 593:
case 296:
case 3898:
case 2895:
case 977:
case 2208:
case 1339:
case 3947:
case 3259:
case 484:
case 3892:
case 926:
case 1628:
case 2576:
case 3352:
case 177:
case 2124:
case 2206:
case 2184:
case 1464:
case 1483:
case 403:
case 3397:
case 1564:
case 885:
case 2791:
case 1019:
case 3055:
case 3209:
case 2083:
case 795:
case 1150:
case 1531:
case 320:
case 3334:
case 1025:
case 3200:
case 3620:
case 246:
case 2892:
case 469:
case 3035:
case 1332:
case 1359:
case 1599:
case 3038:
case 437:
case 1211:
case 244:
case 2396:
case 657:
case 1177:
case 3657:
case 9:
case 1747:
case 3767:
case 2470:
case 116:
case 1591:
case 1911:
case 1797:
case 1337:
case 1331:
case 1421:
case 3073:
case 1887:
case 2647:
case 1932:
case 3904:
case 882:
case 1690:
case 638:
case 359:
case 321:
case 1263:
case 3462:
case 2228:
case 3061:
case 889:
case 584:
case 2258:
case 3739:
case 7:
case 3145:
case 541:
case 4043:
case 954:
case 807:
case 1990:
case 3699:
case 2409:
case 4087:
case 37:
case 3012:
case 4010:
case 3041:
case 861:
case 2271:
case 1459:
case 339:
case 183:
case 376:
case 3894:
case 4031:
case 1909:
case 1132:
case 3333:
case 629:
case 3453:
case 2265:
case 783:
case 1962:
case 1467:
case 2849:
case 656:
case 2126:
case 945:
case 3478:
case 662:
case 548:
case 2262:
case 1118:
case 426:
case 1434:
case 1858:
case 3967:
case 957:
case 2655:
case 3969:
case 2055:
case 464:
case 123:
case 1326:
case 3348:
case 2805:
case 2912:
case 504:
case 2943:
case 2352:
case 4063:
case 2483:
case 162:
case 3060:
case 1482:
case 801:
case 1330:
case 280:
case 2260:
case 3:
case 1453:
case 625:
case 3662:
case 3987:
case 510:
case 739:
case 2379:
case 3909:
case 1018:
case 3591:
case 3817:
case 1341:
case 1657:
case 2024:
case 1504:
case 1980:
case 1206:
case 3020:
case 3921:
case 1870:
case 3861:
case 2391:
case 3973:
case 2956:
case 2071:
case 3114:
case 2998:
case 258:
case 2221:
case 3697:
case 3764:
case 1276:
case 155:
case 316:
case 199:
case 3788:
case 2234:
case 3642:
case 2834:
case 124:
case 22:
case 3550:
case 3594:
case 686:
case 2022:
case 1308:
case 2111:
case 1565:
case 860:
case 716:
case 4074:
case 2449:
case 3633:
case 1062:
case 1172:
case 449:
case 3386:
case 2574:
case 1020:
case 389:
case 2727:
case 3789:
case 32:
case 636:
case 2226:
case 5:
case 1866:
case 3068:
case 2715:
case 3698:
case 3851:
case 2724:
case 3846:
case 13:
case 1910:
case 3153:
case 4014:
case 667:
case 2291:
case 3836:
case 1943:
case 2031:
case 2355:
case 1231:
case 3586:
case 347:
case 410:
case 970:
case 3939:
case 2369:
case 3031:
case 858:
case 794:
case 1281:
case 479:
case 133:
case 3028:
case 34:
case 2447:
case 10:
case 2789:
case 3152:
case 3371:
case 1662:
case 3878:
case 2957:
case 2693:
case 2758:
case 826:
case 3436:
case 2953:
case 971:
case 475:
case 384:
case 3658:
case 1085:
case 748:
case 1021:
case 564:
case 3978:
case 2882:
case 1793:
case 2731:
case 3212:
case 2924:
case 1918:
case 4016:
case 3121:
case 2029:
case 604:
case 3908:
case 823:
case 3932:
case 1416:
case 3274:
case 3299:
case 1737:
case 106:
case 2755:
case 306:
case 2819:
case 929:
case 3490:
case 3134:
case 2068:
case 3874:
case 3814:
case 497:
case 1235:
case 3446:
case 3216:
case 1159:
case 2077:
case 2435:
case 3293:
case 2109:
case 3297:
case 1144:
case 3156:
case 473:
case 1202:
case 2477:
case 1072:
case 4020:
case 1347:
case 1514:
case 2114:
case 1707:
case 3605:
case 568:
case 3317:
case 1009:
case 531:
case 2683:
case 1219:
case 871:
case 1590:
case 3768:
case 881:
case 237:
case 3330:
case 420:
case 825:
case 1428:
case 1518:
case 450:
case 442:
case 2138:
case 2588:
case 2217:
case 893:
case 1275:
case 1404:
case 282:
case 1415:
case 1987:
case 1208:
case 3233:
case 757:
case 1945:
case 1224:
case 523:
case 1379:
case 751:
case 3078:
case 2444:
case 1583:
case 2245:
case 585:
case 1907:
case 3026:
case 2066:
case 1946:
case 1631:
case 1087:
case 3828:
case 1399:
case 1924:
case 2216:
case 1301:
case 206:
case 2167:
case 2501:
case 3641:
case 1812:
case 2298:
case 2620:
case 576:
case 1454:
case 2322:
case 2411:
case 3986:
case 3016:
case 322:
case 1625:
case 611:
case 3797:
case 910:
case 1055:
case 1623:
case 628:
case 2551:
case 2714:
case 2781:
case 2690:
case 25:
case 3340:
case 2227:
case 1524:
case 3248:
case 3242:
case 400:
case 3066:
case 1258:
case 3532:
case 3182:
case 3530:
case 3112:
case 606:
case 725:
case 1170:
case 3278:
case 2742:
case 953:
case 3234:
case 3051:
case 2069:
case 3500:
case 787:
case 520:
case 868:
case 3704:
case 832:
case 723:
case 3014:
case 3855:
case 3292:
case 554:
case 2777:
case 1993:
case 2548:
case 2705:
case 3551:
case 3045:
case 917:
case 3802:
case 3423:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1681117202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,];
var gg_b = "1681117202/";

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
      subdomainx = String.fromCharCode(97 + gg_m[x]);
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
