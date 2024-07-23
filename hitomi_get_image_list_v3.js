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
case 275:
case 3151:
case 786:
case 3622:
case 2426:
case 2568:
case 1349:
case 473:
case 1796:
case 2101:
case 2775:
case 2274:
case 1281:
case 2516:
case 2383:
case 2804:
case 2384:
case 961:
case 2393:
case 664:
case 833:
case 2692:
case 2088:
case 4057:
case 407:
case 2398:
case 3872:
case 3185:
case 3822:
case 2358:
case 651:
case 315:
case 2652:
case 2616:
case 3831:
case 2026:
case 3777:
case 2791:
case 1807:
case 2584:
case 3012:
case 997:
case 3660:
case 3744:
case 180:
case 3024:
case 813:
case 3941:
case 3218:
case 2916:
case 1063:
case 1881:
case 2235:
case 3830:
case 3447:
case 3286:
case 2292:
case 2131:
case 2403:
case 39:
case 971:
case 3495:
case 1022:
case 3504:
case 3196:
case 1651:
case 1592:
case 627:
case 793:
case 2583:
case 3407:
case 3915:
case 1530:
case 3925:
case 940:
case 3921:
case 812:
case 2104:
case 1557:
case 2325:
case 2530:
case 3791:
case 59:
case 3274:
case 1696:
case 175:
case 1376:
case 3914:
case 265:
case 3244:
case 2855:
case 1549:
case 1491:
case 2054:
case 2574:
case 3087:
case 979:
case 875:
case 1995:
case 2736:
case 1536:
case 2282:
case 1215:
case 1949:
case 957:
case 4019:
case 3372:
case 766:
case 2831:
case 3171:
case 2827:
case 681:
case 1633:
case 707:
case 229:
case 3682:
case 3805:
case 2242:
case 3028:
case 593:
case 2172:
case 231:
case 938:
case 2458:
case 2598:
case 3665:
case 501:
case 2227:
case 2862:
case 1784:
case 1884:
case 3461:
case 2563:
case 1381:
case 1321:
case 3641:
case 3538:
case 3208:
case 213:
case 4053:
case 800:
case 3909:
case 506:
case 1969:
case 2899:
case 539:
case 2048:
case 3397:
case 1978:
case 1305:
case 1101:
case 2278:
case 3802:
case 343:
case 3118:
case 1736:
case 3293:
case 4046:
case 3343:
case 749:
case 700:
case 1086:
case 711:
case 3282:
case 2649:
case 656:
case 741:
case 2577:
case 3858:
case 1282:
case 1534:
case 350:
case 3705:
case 1091:
case 3849:
case 1093:
case 830:
case 3037:
case 4058:
case 3934:
case 20:
case 2687:
case 244:
case 739:
case 1410:
case 899:
case 409:
case 1634:
case 2058:
case 2023:
case 2723:
case 3128:
case 360:
case 151:
case 2044:
case 3501:
case 3342:
case 3290:
case 1196:
case 883:
case 3000:
case 1008:
case 3443:
case 3595:
case 1951:
case 353:
case 291:
case 2206:
case 3455:
case 492:
case 1415:
case 634:
case 3679:
case 3221:
case 3253:
case 2181:
case 1654:
case 2003:
case 3677:
case 566:
case 526:
case 1366:
case 1119:
case 873:
case 3694:
case 3783:
case 1074:
case 1094:
case 598:
case 416:
case 2821:
case 71:
case 110:
case 910:
case 304:
case 1011:
case 66:
case 120:
case 1457:
case 1918:
case 906:
case 3732:
case 3524:
case 418:
case 160:
case 1866:
case 1482:
case 2390:
case 1568:
case 2087:
case 3438:
case 2762:
case 3232:
case 67:
case 4033:
case 3165:
case 1414:
case 1425:
case 1853:
case 3079:
case 2318:
case 1830:
case 2287:
case 131:
case 3436:
case 445:
case 3868:
case 3529:
case 1210:
case 2813:
case 3953:
case 3548:
case 1967:
case 2519:
case 586:
case 3785:
case 1070:
case 2522:
case 676:
case 3545:
case 954:
case 1320:
case 1895:
case 2017:
case 468:
case 2544:
case 2409:
case 1520:
case 2467:
case 1925:
case 2938:
case 2872:
case 1936:
case 849:
case 2533:
case 0:
case 1480:
case 734:
case 273:
case 362:
case 185:
case 2378:
case 2013:
case 917:
case 3393:
case 4004:
case 1218:
case 1275:
case 3543:
case 2859:
case 3780:
case 2600:
case 2980:
case 1581:
case 1996:
case 2433:
case 1863:
case 569:
case 1147:
case 2144:
case 1485:
case 3970:
case 195:
case 3940:
case 4017:
case 1922:
case 2354:
case 4074:
case 111:
case 780:
case 3664:
case 2297:
case 2360:
case 64:
case 2046:
case 2202:
case 1230:
case 570:
case 2025:
case 2848:
case 698:
case 2586:
case 968:
case 3250:
case 1559:
case 1754:
case 869:
case 1333:
case 888:
case 46:
case 3247:
case 70:
case 3322:
case 863:
case 2908:
case 3901:
case 2930:
case 243:
case 768:
case 3650:
case 1771:
case 2733:
case 1319:
case 3189:
case 1856:
case 564:
case 352:
case 3816:
case 1246:
case 1330:
case 3462:
case 3701:
case 3818:
case 1461:
case 2363:
case 3562:
case 3564:
case 218:
case 3689:
case 965:
case 3329:
case 149:
case 2353:
case 1129:
case 1775:
case 750:
case 1054:
case 885:
case 973:
case 1873:
case 3142:
case 1355:
case 237:
case 2624:
case 3326:
case 1391:
case 11:
case 2765:
case 3096:
case 3906:
case 1851:
case 3718:
case 1462:
case 688:
case 3550:
case 1182:
case 1636:
case 1787:
case 69:
case 2069:
case 199:
case 1857:
case 854:
case 2954:
case 238:
case 3779:
case 2520:
case 1631:
case 1106:
case 2801:
case 3245:
case 795:
case 2234:
case 1844:
case 1367:
case 2509:
case 2832:
case 3727:
case 682:
case 2677:
case 1733:
case 332:
case 2518:
case 27:
case 3294:
case 2907:
case 2947:
case 430:
case 3933:
case 1066:
case 2952:
case 592:
case 295:
case 1823:
case 1712:
case 4056:
case 706:
case 1647:
case 4011:
case 759:
case 2359:
case 1007:
case 1826:
case 19:
case 1964:
case 3817:
case 712:
case 32:
case 3661:
case 1460:
case 2207:
case 496:
case 1593:
case 1427:
case 60:
case 3950:
case 3298:
case 2332:
case 3427:
case 666:
case 3627:
case 3766:
case 3129:
case 1867:
case 272:
case 1749:
case 3728:
case 2773:
case 3014:
case 1658:
case 2464:
case 4085:
case 1572:
case 3121:
case 2045:
case 2653:
case 3630:
case 3211:
case 3296:
case 158:
case 3091:
case 897:
case 2484:
case 2083:
case 2314:
case 1737:
case 2622:
case 1221:
case 891:
case 1287:
case 3889:
case 422:
case 1566:
case 1600:
case 747:
case 9:
case 2572:
case 2729:
case 346:
case 1139:
case 2715:
case 2065:
case 1313:
case 561:
case 1084:
case 2541:
case 3007:
case 1954:
case 1800:
case 3389:
case 1883:
case 2408:
case 3312:
case 955:
case 988:
case 221:
case 1794:
case 2055:
case 3625:
case 716:
case 3532:
case 3414:
case 3202:
case 3228:
case 2470:
case 2633:
case 2774:
case 543:
case 3599:
case 44:
case 1947:
case 290:
case 116:
case 2794:
case 3258:
case 3560:
case 1643:
case 206:
case 2460:
case 3224:
case 3951:
case 1500:
case 818:
case 1429:
case 1081:
case 2828:
case 2680:
case 3596:
case 1077:
case 587:
case 3349:
case 56:
case 1529:
case 113:
case 3620:
case 2945:
case 2193:
case 2699:
case 784:
case 2166:
case 2878:
case 2822:
case 1777:
case 660:
case 1652:
case 2924:
case 3055:
case 1421:
case 2760:
case 3716:
case 1668:
case 2503:
case 1338:
case 3778:
case 258:
case 1828:
case 1228:
case 2152:
case 862:
case 2718:
case 1372:
case 694:
case 2630:
case 3277:
case 3252:
case 2111:
case 3148:
case 249:
case 194:
case 3633:
case 2316:
case 581:
case 1579:
case 1265:
case 363:
case 1031:
case 3774:
case 3278:
case 538:
case 3155:
case 3910:
case 2665:
case 3713:
case 3746:
case 2988:
case 1204:
case 1365:
case 3267:
case 2730:
case 2208:
case 2454:
case 3169:
case 641:
case 1164:
case 1080:
case 4086:
case 2150:
case 3004:
case 2911:
case 1760:
case 3266:
case 1332:
case 1899:
case 2259:
case 4084:
case 2712:
case 3857:
case 2802:
case 3652:
case 3510:
case 992:
case 3873:
case 1342:
case 3676:
case 2162:
case 204:
case 1937:
case 1116:
case 2344:
case 1773:
case 1586:
case 2491:
case 1970:
case 3295:
case 2818:
case 3879:
case 3355:
case 1141:
case 2008:
case 2262:
case 2469:
case 2108:
case 3428:
case 327:
case 2639:
case 1713:
case 1214:
case 3511:
case 2660:
case 2805:
case 3938:
case 3153:
case 1512:
case 1490:
case 366:
case 2809:
case 3056:
case 4036:
case 161:
case 3748:
case 1259:
case 1050:
case 3635:
case 228:
case 2935:
case 3772:
case 2815:
case 817:
case 453:
case 3238:
case 1032:
case 102:
case 123:
case 2120:
case 584:
case 474:
case 553:
case 1707:
case 1083:
case 3364:
case 937:
case 2636:
case 262:
case 23:
case 2190:
case 2910:
case 2852:
case 3307:
case 3883:
case 1154:
case 3025:
case 122:
case 520:
case 2657:
case 2215:
case 1483:
case 1458:
case 669:
case 3033:
case 1661:
case 933:
case 1563:
case 119:
case 115:
case 2010:
case 1571:
case 2095:
case 2379:
case 3099:
case 2445:
case 1701:
case 1590:
case 3261:
case 1336:
case 1334:
case 2798:
case 2446:
case 563:
case 2934:
case 165:
case 2613:
case 1150:
case 282:
case 1791:
case 1142:
case 1339:
case 267:
case 2196:
case 2124:
case 391:
case 2281:
case 3018:
case 832:
case 251:
case 2260:
case 493:
case 1957:
case 3812:
case 3878:
case 2602:
case 385:
case 3105:
case 613:
case 4080:
case 1982:
case 3628:
case 3573:
case 3715:
case 3886:
case 3323:
case 3693:
case 443:
case 2793:
case 2939:
case 2707:
case 1143:
case 3044:
case 489:
case 637:
case 2049:
case 227:
case 1543:
case 3932:
case 470:
case 15:
case 3918:
case 3486:
case 3083:
case 3861:
case 1576:
case 96:
case 3248:
case 3421:
case 1000:
case 3964:
case 2724:
case 3636:
case 3094:
case 3983:
case 3073:
case 924:
case 361:
case 347:
case 4075:
case 1596:
case 1322:
case 1762:
case 1622:
case 210:
case 423:
case 685:
case 3549:
case 3604:
case 2395:
case 28:
case 1695:
case 1024:
case 2324:
case 1345:
case 1795:
case 3968:
case 2475:
case 3725:
case 1669:
case 2386:
case 1917:
case 3880:
case 2741:
case 3678:
case 2195:
case 2123:
case 946:
case 2098:
case 1711:
case 1551:
case 675:
case 1560:
case 619:
case 2113:
case 3333:
case 953:
case 3731:
case 3610:
case 2647:
case 3041:
case 2497:
case 928:
case 2998:
case 383:
case 2811:
case 646:
case 1128:
case 3847:
case 3175:
case 3913:
case 1238:
case 3449:
case 1138:
case 792:
case 1430:
case 2059:
case 658:
case 2185:
case 2991:
case 3032:
case 808:
case 662:
case 2301:
case 1834:
case 354:
case 2132:
case 1117:
case 33:
case 449:
case 3125:
case 16:
case 1239:
case 1060:
case 3472:
case 994:
case 2629:
case 3824:
case 2588:
case 1729:
case 2711:
case 203:
case 2019:
case 2487:
case 3512:
case 103:
case 3763:
case 1890:
case 3181:
case 3551:
case 2126:
case 1107:
case 2732:
case 4044:
case 890:
case 1959:
case 1653:
case 2614:
case 3519:
case 3309:
case 2958:
case 762:
case 574:
case 62:
case 38:
case 183:
case 2619:
case 3133:
case 2151:
case 232:
case 1926:
case 3754:
case 3283:
case 1535:
case 2053:
case 2082:
case 3078:
case 3735:
case 3399:
case 1310:
case 1992:
case 3743:
case 1719:
case 2450:
case 3865:
case 3409:
case 1409:
case 1307:
case 1226:
case 3916:
case 177:
case 1854:
case 294:
case 3149:
case 148:
case 3980:
case 2879:
case 720:
case 3481:
case 4014:
case 2654:
case 2263:
case 1206:
case 3464:
case 424:
case 558:
case 2425:
case 936:
case 505:
case 3166:
case 730:
case 1346:
case 2117:
case 2970:
case 1212:
case 3178:
case 2902:
case 778:
case 3570:
case 3904:
case 97:
case 1818:
case 2641:
case 3132:
case 3908:
case 3452:
case 2245:
case 1662:
case 77:
case 1179:
case 3104:
case 983:
case 1977:
case 733:
case 1955:
case 1511:
case 433:
case 490:
case 93:
case 1271:
case 2050:
case 2847:
case 2264:
case 1021:
case 1069:
case 1685:
case 785:
case 458:
case 1481:
case 1151:
case 1369:
case 1533:
case 907:
case 3734:
case 3996:
case 2086:
case 1408:
case 531:
case 3795:
case 1309:
case 2389:
case 1102:
case 857:
case 603:
case 1442:
case 3855:
case 3527:
case 2759:
case 1109:
case 495:
case 2387:
case 630:
case 1255:
case 264:
case 2753:
case 283:
case 481:
case 2926:
case 1603:
case 621:
case 518:
case 1002:
case 1750:
case 3685:
case 3363:
case 2500:
case 3136:
case 3711:
case 2593:
case 1203:
case 1073:
case 2745:
case 1098:
case 1236:
case 2941:
case 1068:
case 1910:
case 683:
case 477:
case 321:
case 2179:
case 2819:
case 542:
case 2535:
case 2499:
case 893:
case 1505:
case 1882:
case 1555:
case 168:
case 3907:
case 2169:
case 86:
case 1231:
case 3806:
case 3176:
case 2434:
case 3194:
case 3841:
case 188:
case 964:
case 633:
case 444:
case 554:
case 298:
case 336:
case 1859:
case 3517:
case 2560:
case 3167:
case 1591:
case 1284:
case 3419:
case 1604:
case 2761:
case 1814:
case 2950:
case 1306:
case 1608:
case 1190:
case 3912:
case 596:
case 2431:
case 3281:
case 3751:
case 1708:
case 455:
case 1715:
case 2137:
case 1145:
case 274:
case 2085:
case 1827:
case 1185:
case 2880:
case 3923:
case 1793:
case 150:
case 985:
case 3089:
case 1545:
case 2726:
case 3839:
case 1051:
case 1699:
case 631:
case 4018:
case 1768:
case 1089:
case 30:
case 3039:
case 3617:
case 1130:
case 2296:
case 1679:
case 704:
case 266:
case 545:
case 2874:
case 3289:
case 191:
case 2590:
case 2352:
case 186:
case 922:
case 1751:
case 3348:
case 867:
case 981:
case 3798:
case 3843:
case 2485:
case 3053:
case 1764:
case 691:
case 3156:
case 306:
case 2432:
case 2299:
case 3893:
case 21:
case 3453:
case 2963:
case 3578:
case 1329:
case 642:
case 3632:
case 2148:
case 1897:
case 1251:
case 2554:
case 412:
case 1689:
case 1627:
case 2478:
case 767:
case 3624:
case 1447:
case 2455:
case 2679:
case 705:
case 3048:
case 4016:
case 2423:
case 351:
case 756:
case 913:
case 2228:
case 3335:
case 3977:
case 1168:
case 312:
case 951:
case 388:
case 3997:
case 464:
case 3542:
case 459:
case 3458:
case 311:
case 223:
case 1:
case 364:
case 2553:
case 1258:
case 2725:
case 76:
case 4064:
case 565:
case 2757:
case 222:
case 1267:
case 816:
case 3640:
case 173:
case 52:
case 2597:
case 2203:
case 2534:
case 1657:
case 217:
case 2336:
case 1720:
case 1396:
case 3448:
case 3615:
case 693:
case 1905:
case 3584:
case 625:
case 1602:
case 1805:
case 509:
case 387:
case 1337:
case 3722:
case 2709:
case 728:
case 2594:
case 3405:
case 779:
case 3703:
case 3541:
case 2011:
case 3546:
case 1380:
case 3318:
case 1167:
case 547:
case 3072:
case 2727:
case 1488:
case 2096:
case 1256:
case 1547:
case 4015:
case 1638:
case 958:
case 1671:
case 2295:
case 2889:
case 3386:
case 2236:
case 2062:
case 3231:
case 2972:
case 207:
case 2355:
case 597:
case 2501:
case 2835:
case 3353:
case 5:
case 3340:
case 2252:
case 822:
case 513:
case 2985:
case 3313:
case 3738:
case 1906:
case 344:
case 2495:
case 841:
case 156:
case 8:
case 2176:
case 479:
case 2909:
case 2462:
case 3605:
case 2579:
case 1202:
case 167:
case 2312:
case 3867:
case 50:
case 2133:
case 1371:
case 2200:
case 635:
case 3064:
case 1810:
case 3686:
case 2440:
case 3796:
case 3222:
case 2573:
case 2012:
case 1839:
case 454:
case 1891:
case 796:
case 2022:
case 4088:
case 2351:
case 3003:
case 1295:
case 724:
case 2402:
case 665:
case 2447:
case 3670:
case 2036:
case 1411:
case 3866:
case 1494:
case 919:
case 1004:
case 3895:
case 3958:
case 2556:
case 2103:
case 645:
case 540:
case 1087:
case 2391:
case 1424:
case 1176:
case 2212:
case 1550:
case 1620:
case 2035:
case 2267:
case 2109:
case 3781:
case 2424:
case 2173:
case 3119:
case 980:
case 1344:
case 2241:
case 1935:
case 2645:
case 369:
case 840:
case 2465:
case 3488:
case 134:
case 3229:
case 153:
case 2052:
case 3158:
case 1527:
case 4027:
case 3002:
case 1809:
case 3102:
case 3897:
case 3471:
case 2840:
case 494:
case 3359:
case 1531:
case 2089:
case 3799:
case 2825:
case 738:
case 661:
case 3736:
case 319:
case 1710:
case 1961:
case 3093:
case 2091:
case 622:
case 1789:
case 567:
case 247:
case 2914:
case 2928:
case 292:
case 2561:
case 3651:
case 2892:
case 2397:
case 3742:
case 3666:
case 602:
case 3216:
case 2189:
case 879:
case 3571:
case 1601:
case 1042:
case 2504:
case 368:
case 456:
case 3719:
case 226:
case 302:
case 2138:
case 2527:
case 196:
case 240:
case 3015:
case 1188:
case 3408:
case 2513:
case 233:
case 2644:
case 3457:
case 2231:
case 1934:
case 2511:
case 679:
case 1438:
case 1913:
case 1615:
case 3522:
case 3370:
case 2413:
case 2604:
case 1144:
case 287:
case 2320:
case 2064:
case 1788:
case 3284:
case 3150:
case 2060:
case 2381:
case 1515:
case 2311:
case 1361:
case 2020:
case 708:
case 1476:
case 3016:
case 2742:
case 1693:
case 3021:
case 671:
case 2122:
case 870:
case 2854:
case 3063:
case 3717:
case 2978:
case 2685:
case 2042:
case 2080:
case 3681:
case 3894:
case 3588:
case 109:
case 2608:
case 744:
case 3887:
case 1419:
case 2689:
case 717:
case 2284:
case 727:
case 1912:
case 552:
case 1759:
case 255:
case 2557:
case 205:
case 2448:
case 435:
case 2271:
case 775:
case 1018:
case 198:
case 2192:
case 1765:
case 1907:
case 2585:
case 2615:
case 2339:
case 2217:
case 4061:
case 108:
case 1373:
case 2348:
case 2869:
case 2373:
case 3955:
case 58:
case 544:
case 2165:
case 480:
case 1552:
case 1872:
case 2170:
case 1880:
case 3845:
case 2216:
case 659:
case 1613:
case 2623:
case 3581:
case 396:
case 528:
case 3246:
case 2606:
case 3832:
case 3929:
case 723:
case 1201:
case 460:
case 61:
case 1386:
case 990:
case 3291:
case 3800:
case 948:
case 1293:
case 1046:
case 1268:
case 3567:
case 1118:
case 202:
case 1820:
case 1076:
case 3008:
case 2146:
case 3829:
case 1678:
case 3706:
case 3815:
case 2900:
case 871:
case 2015:
case 2214:
case 3623:
case 3668:
case 2221:
case 1865:
case 3314:
case 3702:
case 2114:
case 384:
case 2345:
case 3597:
case 1723:
case 68:
case 2984:
case 1064:
case 3013:
case 1725:
case 1504:
case 3999:
case 856:
case 1303:
case 2918:
case 142:
case 2747:
case 550:
case 2955:
case 125:
case 640:
case 815:
case 1718:
case 2021:
case 1892:
case 1915:
case 2648:
case 3454:
case 107:
case 1538:
case 3124:
case 365:
case 1157:
case 3203:
case 1220:
case 858:
case 2396:
case 1585:
case 1122:
case 500:
case 3969:
case 3899:
case 2266:
case 4091:
case 4079:
case 246:
case 3876:
case 1665:
case 887:
case 3659:
case 3769:
case 99:
case 4047:
case 3902:
case 941:
case 1942:
case 3311:
case 3365:
case 2898:
case 1370:
case 1296:
case 2839:
case 754:
case 2575:
case 3648:
case 618:
case 1027:
case 1914:
case 3249:
case 674:
case 2:
case 1614:
case 503:
case 1431:
case 3698:
case 166:
case 3788:
case 1894:
case 1953:
case 3302:
case 1318:
case 3420:
case 1300:
case 372:
case 3520:
case 129:
case 3315:
case 2785:
case 843:
case 467:
case 2306:
case 2135:
case 3987:
case 1887:
case 2399:
case 861:
case 2943:
case 3823:
case 2887:
case 3558:
case 1896:
case 1690:
case 2567:
case 1085:
case 3034:
case 278:
case 515:
case 3080:
case 2894:
case 2860:
case 2163:
case 1716:
case 95:
case 4049:
case 2047:
case 466:
case 3371:
case 1492:
case 1392:
case 3862:
case 2612:
case 2763:
case 2920:
case 638:
case 1676:
case 3801:
case 1811:
case 2790:
case 1808:
case 1053:
case 2989:
case 2708:
case 329:
case 1059:
case 1704:
case 403:
case 2441:
case 1450:
case 2539:
case 3525:
case 1673:
case 22:
case 2895:
case 3009:
case 2871:
case 1944:
case 908:
case 1998:
case 530:
case 610:
case 393:
case 1688:
case 760:
case 357:
case 2891:
case 1741:
case 281:
case 252:
case 2738:
case 2716:
case 3639:
case 853:
case 2368:
case 1177:
case 1449:
case 3771:
case 41:
case 1503:
case 2549:
case 2569:
case 783:
case 2921:
case 3442:
case 1837:
case 1169:
case 475:
case 1683:
case 1444:
case 1382:
case 1299:
case 3275:
case 2744:
case 2239:
case 3381:
case 394:
case 2302:
case 3931:
case 7:
case 2428:
case 2230:
case 548:
case 2416:
case 1886:
case 340:
case 2851:
case 2650:
case 1539:
case 3084:
case 1034:
case 4026:
case 3948:
case 2414:
case 3819:
case 3465:
case 3310:
case 268:
case 2037:
case 810:
case 1474:
case 2637:
case 2000:
case 825:
case 2377:
case 714:
case 1639:
case 3854:
case 882:
case 1292:
case 514:
case 73:
case 510:
case 2286:
case 2655:
case 3859:
case 3838:
case 972:
case 3416:
case 1772:
case 1640:
case 3379:
case 1301:
case 355:
case 1216:
case 1952:
case 335:
case 2701:
case 3212:
case 1667:
case 1469:
case 406:
case 1273:
case 2792:
case 3513:
case 2929:
case 345:
case 3956:
case 3170:
case 3927:
case 1939:
case 2342:
case 2307:
case 1876:
case 1562:
case 2754:
case 868:
case 3271:
case 2940:
case 2861:
case 2041:
case 839:
case 1501:
case 1061:
case 3787:
case 2093:
case 3768:
case 2642:
case 1126:
case 1666:
case 3152:
case 2174:
case 710:
case 3544:
case 541:
case 3767:
case 214:
case 2300:
case 1930:
case 3898:
case 2672:
case 2936:
case 534:
case 3487:
case 3680:
case 1521:
case 1570:
case 2550:
case 3373:
case 771:
case 2632:
case 446:
case 2240:
case 256:
case 836:
case 2072:
case 112:
case 1090:
case 1350:
case 2580:
case 1030:
case 3708:
case 1782:
case 2789:
case 3209:
case 2570:
case 3959:
case 3173:
case 1250:
case 3316:
case 2971:
case 128:
case 3827:
case 1398:
case 3793:
case 1632:
case 1726:
case 3206:
case 2180:
case 3919:
case 3813:
case 2417:
case 2068:
case 3797:
case 774:
case 36:
case 2868:
case 1040:
case 3141:
case 3086:
case 1575:
case 260:
case 3030:
case 1587:
case 3147:
case 2110:
case 1840:
case 318:
case 3569:
case 1858:
case 2341:
case 864:
case 3270:
case 3644:
case 35:
case 4062:
case 525:
case 3137:
case 2881:
case 230:
case 4077:
case 184:
case 190:
case 2635:
case 3750:
case 371:
case 2291:
case 2476:
case 245:
case 3190:
case 2405:
case 3836:
case 1270:
case 1561:
case 2127:
case 3090:
case 3834:
case 2435:
case 3139:
case 2197:
case 3469:
case 2233:
case 1432:
case 3058:
case 3444:
case 1193:
case 3341:
case 4082:
case 993:
case 208:
case 1724:
case 3269:
case 169:
case 1413:
case 944:
case 1946:
case 4092:
case 3837:
case 3038:
case 2507:
case 2261:
case 1746:
case 604:
case 878:
case 3350:
case 797:
case 4021:
case 1565:
case 137:
case 3619:
case 3840:
case 2070:
case 1804:
case 3131:
case 1976:
case 636:
case 3662:
case 1621:
case 533:
case 1181:
case 1331:
case 2061:
case 2946:
case 427:
case 2959:
case 1383:
case 1260:
case 2187:
case 3456:
case 1686:
case 595:
case 1385:
case 1933:
case 1595:
case 970:
case 1184:
case 4025:
case 1541:
case 2481:
case 2751:
case 3092:
case 1819:
case 382:
case 3954:
case 1163:
case 1297:
case 157:
case 3559:
case 1798:
case 1941:
case 1451:
case 3292:
case 47:
case 623:
case 1248:
case 930:
case 147:
case 3985:
case 3675:
case 154:
case 271:
case 3516:
case 568:
case 1799:
case 532:
case 286:
case 2777:
case 654:
case 1756:
case 3191:
case 571:
case 3556:
case 608:
case 1945:
case 1526:
case 3814:
case 2289:
case 557:
case 1780:
case 2581:
case 2772:
case 3046:
case 929:
case 934:
case 3871:
case 517:
case 3808:
case 2942:
case 3077:
case 3994:
case 3198:
case 3383:
case 1378:
case 1199:
case 2808:
case 212:
case 1340:
case 146:
case 3846:
case 1983:
case 3582:
case 2969:
case 4068:
case 628:
case 2269:
case 421:
case 3509:
case 2837:
case 1121:
case 536:
case 3930:
case 121:
case 991:
case 719:
case 1684:
case 2255:
case 1071:
case 1855:
case 317:
case 3699:
case 900:
case 3613:
case 439:
case 809:
case 3116:
case 1133:
case 1113:
case 2691:
case 2421:
case 794:
case 3741:
case 4087:
case 1223:
case 1394:
case 3747:
case 3508:
case 3590:
case 876:
case 1348:
case 1848:
case 174:
case 2532:
case 49:
case 4037:
case 1727:
case 624:
case 3260:
case 3749:
case 2739:
case 1459:
case 1039:
case 3391:
case 1956:
case 215:
case 1569:
case 3327:
case 1343:
case 12:
case 48:
case 3498:
case 2016:
case 2755:
case 2903:
case 575:
case 1323:
case 3773:
case 1523:
case 2756:
case 1648:
case 1283:
case 594:
case 3531:
case 78:
case 2525:
case 2143:
case 2427:
case 1824:
case 486:
case 296:
case 742:
case 2512:
case 2906:
case 2873:
case 1703:
case 3352:
case 1544:
case 1971:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1721764802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,];
var gg_b = "1721764802/";

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
