// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

const domain2 = 'gold-usergeneratedcontent.net';

function create_download_url(id) {
  return "https://ltn.gold-usergeneratedcontent.net/galleries/" + id + ".js";
}

function gg_s(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); }

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
case 2806:
case 285:
case 399:
case 3297:
case 2054:
case 1073:
case 270:
case 969:
case 490:
case 2756:
case 2404:
case 2286:
case 2634:
case 787:
case 1939:
case 659:
case 301:
case 1648:
case 629:
case 1986:
case 2893:
case 751:
case 1122:
case 1992:
case 1571:
case 2829:
case 3549:
case 3597:
case 3644:
case 3467:
case 1857:
case 2592:
case 956:
case 2130:
case 3250:
case 3616:
case 2434:
case 1103:
case 2604:
case 3780:
case 1742:
case 1312:
case 1715:
case 3140:
case 2526:
case 4060:
case 3479:
case 892:
case 331:
case 374:
case 1441:
case 1890:
case 1196:
case 96:
case 2889:
case 926:
case 3550:
case 2354:
case 3102:
case 3290:
case 3936:
case 3743:
case 461:
case 3313:
case 824:
case 900:
case 2085:
case 1246:
case 2722:
case 137:
case 3727:
case 2688:
case 2946:
case 4044:
case 3164:
case 2377:
case 1546:
case 3965:
case 3372:
case 2733:
case 815:
case 1156:
case 1676:
case 3590:
case 4079:
case 3989:
case 289:
case 3511:
case 577:
case 614:
case 3132:
case 2796:
case 441:
case 917:
case 2137:
case 903:
case 2077:
case 3787:
case 655:
case 2782:
case 1619:
case 2385:
case 3993:
case 2488:
case 625:
case 2628:
case 3147:
case 113:
case 3660:
case 3218:
case 847:
case 3929:
case 2369:
case 3878:
case 1730:
case 3123:
case 772:
case 360:
case 3210:
case 1731:
case 1585:
case 1683:
case 3176:
case 2184:
case 469:
case 1738:
case 1423:
case 4022:
case 3661:
case 1569:
case 536:
case 1664:
case 2480:
case 2620:
case 1447:
case 5:
case 3036:
case 3329:
case 1499:
case 1755:
case 3089:
case 335:
case 3306:
case 1269:
case 44:
case 4033:
case 3065:
case 1285:
case 3510:
case 1577:
case 281:
case 1858:
case 3468:
case 340:
case 3591:
case 3972:
case 4082:
case 778:
case 2124:
case 993:
case 1623:
case 3854:
case 1464:
case 725:
case 2680:
case 2994:
case 3389:
case 3006:
case 1699:
case 2420:
case 2195:
case 1647:
case 1294:
case 264:
case 506:
case 1052:
case 755:
case 1402:
case 1225:
case 1632:
case 2767:
case 4003:
case 3291:
case 3093:
case 426:
case 1277:
case 832:
case 3551:
case 391:
case 2643:
case 2545:
case 3496:
case 2212:
case 1144:
case 1326:
case 1945:
case 1891:
case 3558:
case 400:
case 3482:
case 3148:
case 4068:
case 3894:
case 4056:
case 1440:
case 2954:
case 2627:
case 33:
case 1973:
case 729:
case 2675:
case 1554:
case 3235:
case 4061:
case 3403:
case 2813:
case 746:
case 621:
case 433:
case 984:
case 759:
case 2078:
case 1092:
case 3517:
case 2138:
case 1912:
case 550:
case 1086:
case 3251:
case 808:
case 3696:
case 1009:
case 941:
case 838:
case 1167:
case 3885:
case 1640:
case 2427:
case 2371:
case 3682:
case 1392:
case 2378:
case 3205:
case 2687:
case 766:
case 3728:
case 30:
case 1795:
case 142:
case 72:
case 1270:
case 216:
case 1026:
case 802:
case 1339:
case 1724:
case 553:
case 2760:
case 2101:
case 1366:
case 3209:
case 494:
case 274:
case 231:
case 1358:
case 1351:
case 2846:
case 3526:
case 1732:
case 3354:
case 2550:
case 3889:
case 3662:
case 1950:
case 12:
case 1431:
case 1723:
case 2616:
case 2250:
case 1335:
case 166:
case 3070:
case 2780:
case 3509:
case 3434:
case 2679:
case 1175:
case 1655:
case 3893:
case 2953:
case 1949:
case 3592:
case 3971:
case 4081:
case 2467:
case 1997:
case 2644:
case 129:
case 1143:
case 2597:
case 2549:
case 3462:
case 4088:
case 2249:
case 3756:
case 1401:
case 370:
case 748:
case 1408:
case 146:
case 3761:
case 3806:
case 3100:
case 1638:
case 479:
case 1058:
case 201:
case 806:
case 1066:
case 212:
case 2274:
case 3286:
case 3634:
case 1051:
case 2814:
case 3539:
case 1593:
case 1695:
case 776:
case 3488:
case 3142:
case 613:
case 1463:
case 1180:
case 2993:
case 2123:
case 2211:
case 1957:
case 532:
case 2013:
case 1892:
case 2878:
case 1206:
case 3369:
case 2929:
case 125:
case 904:
case 2218:
case 1911:
case 1506:
case 3796:
case 2132:
case 508:
case 1229:
case 475:
case 2906:
case 4004:
case 2511:
case 389:
case 428:
case 1098:
case 1310:
case 1740:
case 1091:
case 2787:
case 3077:
case 114:
case 797:
case 1293:
case 1010:
case 3733:
case 882:
case 3428:
case 1495:
case 1120:
case 1826:
case 3377:
case 1663:
case 610:
case 3688:
case 172:
case 2989:
case 1236:
case 1684:
case 2460:
case 1589:
case 823:
case 538:
case 1289:
case 637:
case 853:
case 2743:
case 1536:
case 511:
case 1809:
case 1759:
case 3722:
case 2775:
case 2336:
case 2119:
case 1615:
case 1513:
case 2913:
case 697:
case 364:
case 1057:
case 1637:
case 2762:
case 2298:
case 3767:
case 51:
case 1845:
case 707:
case 3124:
case 3716:
case 3014:
case 2598:
case 2461:
case 240:
case 381:
case 2365:
case 263:
case 3420:
case 3195:
case 598:
case 2006:
case 1642:
case 1011:
case 3994:
case 713:
case 2306:
case 1318:
case 1090:
case 1311:
case 1741:
case 344:
case 3744:
case 1607:
case 2065:
case 1910:
case 519:
case 4075:
case 2393:
case 2870:
case 2176:
case 3184:
case 243:
case 2656:
case 2668:
case 1181:
case 3969:
case 2734:
case 2329:
case 2036:
case 3620:
case 1357:
case 710:
case 1188:
case 1050:
case 2505:
case 958:
case 20:
case 2433:
case 2728:
case 642:
case 1400:
case 668:
case 316:
case 404:
case 567:
case 515:
case 975:
case 3443:
case 3970:
case 4080:
case 3475:
case 2869:
case 3378:
case 2205:
case 1349:
case 2682:
case 3371:
case 3427:
case 3078:
case 1935:
case 952:
case 3273:
case 2535:
case 2633:
case 2781:
case 2403:
case 1776:
case 3131:
case 1917:
case 877:
case 3245:
case 1074:
case 3512:
case 187:
case 1430:
case 648:
case 1600:
case 3138:
case 151:
case 1951:
case 2217:
case 4020:
case 2825:
case 1958:
case 896:
case 3573:
case 3675:
case 209:
case 1350:
case 2235:
case 3954:
case 3627:
case 23:
case 2894:
case 922:
case 2349:
case 1682:
case 3640:
case 1422:
case 1869:
case 3392:
case 2162:
case 869:
case 91:
case 1696:
case 1885:
case 4047:
case 2374:
case 3386:
case 57:
case 2400:
case 3810:
case 3339:
case 3724:
case 3026:
case 2630:
case 2104:
case 1505:
case 1603:
case 368:
case 1433:
case 1728:
case 2050:
case 342:
case 773:
case 13:
case 1894:
case 1141:
case 3179:
case 2350:
case 3554:
case 1235:
case 3144:
case 3326:
case 191:
case 3898:
case 251:
case 486:
case 1877:
case 3945:
case 1266:
case 287:
case 3309:
case 3912:
case 579:
case 2430:
case 2600:
case 1258:
case 1517:
case 826:
case 1251:
case 2776:
case 86:
case 919:
case 1053:
case 2074:
case 3086:
case 348:
case 3254:
case 4002:
case 1633:
case 1403:
case 770:
case 1389:
case 627:
case 558:
case 2121:
case 2873:
case 681:
case 3464:
case 2018:
case 3594:
case 105:
case 3647:
case 140:
case 2998:
case 1468:
case 3858:
case 3577:
case 1365:
case 4040:
case 163:
case 3483:
case 3525:
case 1598:
case 3851:
case 1461:
case 376:
case 1298:
case 664:
case 3632:
case 575:
case 397:
case 3402:
case 915:
case 2637:
case 580:
case 3277:
case 967:
case 1913:
case 3294:
case 954:
case 789:
case 1119:
case 3835:
case 3052:
case 657:
case 528:
case 3569:
case 1329:
case 1734:
case 803:
case 78:
case 3447:
case 1176:
case 1656:
case 143:
case 3683:
case 3585:
case 3731:
case 160:
case 865:
case 817:
case 1668:
case 4059:
case 3738:
case 3602:
case 2607:
case 583:
case 2437:
case 947:
case 3285:
case 2741:
case 1089:
case 522:
case 3755:
case 3805:
case 830:
case 2318:
case 2748:
case 2293:
case 3619:
case 757:
case 2098:
case 2310:
case 1072:
case 2918:
case 195:
case 764:
case 255:
case 2911:
case 1257:
case 2506:
case 1878:
case 3952:
case 1929:
case 2484:
case 1557:
case 313:
case 1660:
case 1123:
case 1211:
case 2624:
case 1013:
case 3730:
case 3214:
case 781:
case 3874:
case 1993:
case 2593:
case 278:
case 337:
case 744:
case 1936:
case 1102:
case 1743:
case 1313:
case 2536:
case 986:
case 2236:
case 2684:
case 1183:
case 3850:
case 310:
case 2589:
case 4048:
case 3168:
case 4041:
case 3700:
case 419:
case 2565:
case 2010:
case 2398:
case 68:
case 1965:
case 2495:
case 2826:
case 3103:
case 3909:
case 424:
case 673:
case 3312:
case 1616:
case 2438:
case 861:
case 1250:
case 266:
case 22:
case 2431:
case 3737:
case 2005:
case 2950:
case 1667:
case 467:
case 19:
case 1550:
case 415:
case 2351:
case 3448:
case 3182:
case 884:
case 1140:
case 1846:
case 3715:
case 454:
case 3926:
case 2187:
case 2455:
case 174:
case 131:
case 3441:
case 2358:
case 3133:
case 1274:
case 3045:
case 2253:
case 1814:
case 685:
case 1720:
case 2058:
case 2764:
case 2066:
case 199:
case 3818:
case 2638:
case 2305:
case 1249:
case 2783:
case 2401:
case 3811:
case 1297:
case 1644:
case 2143:
case 2852:
case 534:
case 911:
case 2949:
case 3578:
case 447:
case 3857:
case 902:
case 2127:
case 1953:
case 2974:
case 3648:
case 2017:
case 1159:
case 2175:
case 1574:
case 2553:
case 2655:
case 3074:
case 2086:
case 1131:
case 3776:
case 321:
case 2912:
case 387:
case 9:
case 1078:
case 1071:
case 1813:
case 3049:
case 3097:
case 936:
case 1273:
case 2254:
case 1487:
case 1675:
case 2179:
case 1954:
case 1627:
case 2945:
case 351:
case 609:
case 3951:
case 1872:
case 2039:
case 1643:
case 1760:
case 593:
case 1101:
case 116:
case 3630:
case 718:
case 1108:
case 2339:
case 2810:
case 3400:
case 242:
case 3050:
case 2795:
case 1378:
case 2459:
case 79:
case 906:
case 3719:
case 731:
case 3374:
case 2570:
case 2167:
case 1443:
case 4042:
case 1046:
case 2285:
case 3437:
case 3607:
case 635:
case 2602:
case 3090:
case 3318:
case 3415:
case 2755:
case 4000:
case 3311:
case 3741:
case 144:
case 1969:
case 2499:
case 584:
case 3442:
case 2569:
case 643:
case 1163:
case 1480:
case 2738:
case 2731:
case 2683:
case 1184:
case 923:
case 3637:
case 2277:
case 297:
case 2402:
case 3272:
case 1767:
case 2052:
case 3615:
case 3057:
case 2294:
case 164:
case 982:
case 3128:
case 2594:
case 1994:
case 663:
case 2851:
case 3572:
case 605:
case 3991:
case 2708:
case 834:
case 871:
case 1346:
case 1977:
case 3845:
case 2160:
case 1925:
case 2577:
case 3424:
case 2700:
case 4055:
case 2161:
case 2168:
case 210:
case 2156:
case 87:
case 3684:
case 2676:
case 3990:
case 3120:
case 3826:
case 2546:
case 1428:
case 1681:
case 3010:
case 760:
case 894:
case 1688:
case 1946:
case 743:
case 3663:
case 436:
case 237:
case 2419:
case 1085:
case 1107:
case 3289:
case 54:
case 3529:
case 1552:
case 3624:
case 3957:
case 2897:
case 705:
case 2476:
case 3484:
case 3206:
case 3892:
case 556:
case 1628:
case 378:
case 1703:
case 2874:
case 3180:
case 1853:
case 1488:
case 1115:
case 3839:
case 4001:
case 1782:
case 1025:
case 406:
case 3091:
case 695:
case 3506:
case 879:
case 355:
case 189:
case 3229:
case 56:
case 3997:
case 709:
case 2857:
case 1592:
case 545:
case 420:
case 1978:
case 2571:
case 3852:
case 3143:
case 4063:
case 3035:
case 2012:
case 1370:
case 1586:
case 3553:
case 3655:
case 3175:
case 3017:
case 791:
case 500:
case 3974:
case 4084:
case 3127:
case 3066:
case 2939:
case 3764:
case 533:
case 3051:
case 699:
case 3253:
case 1768:
case 2811:
case 359:
case 2073:
case 170:
case 612:
case 2271:
case 2278:
case 3305:
case 450:
case 1806:
case 1100:
case 185:
case 346:
case 2818:
case 1761:
case 1889:
case 517:
case 4095:
case 674:
case 631:
case 1354:
case 2196:
case 977:
case 3005:
case 2737:
case 69:
case 3187:
case 4024:
case 1209:
case 2715:
case 2345:
case 2448:
case 3351:
case 503:
case 822:
case 2312:
case 2742:
case 1070:
case 1226:
case 530:
case 1434:
case 3317:
case 3747:
case 1604:
case 996:
case 32:
case 739:
case 366:
case 1836:
case 1130:
case 453:
case 3438:
case 883:
case 618:
case 1843:
case 3019:
case 2698:
case 1672:
case 3129:
case 1152:
case 2691:
case 1237:
case 2363:
case 324:
case 1827:
case 2709:
case 2942:
case 3999:
case 1542:
case 1215:
case 704:
case 3376:
case 3580:
case 3947:
case 1875:
case 3280:
case 2726:
case 2114:
case 1242:
case 1613:
case 354:
case 2095:
case 3932:
case 694:
case 2410:
case 3106:
case 3800:
case 3750:
case 2937:
case 997:
case 190:
case 895:
case 2561:
case 1968:
case 1956:
case 250:
case 3189:
case 1207:
case 1961:
case 2739:
case 2324:
case 3520:
case 2146:
case 4045:
case 3165:
case 1360:
case 1413:
case 4012:
case 288:
case 2084:
case 734:
case 2786:
case 3774:
case 1507:
case 3797:
case 3749:
case 3319:
case 3830:
case 3902:
case 2907:
case 2883:
case 1230:
case 2355:
case 899:
case 141:
case 3711:
case 1379:
case 31:
case 3445:
case 2596:
case 2864:
case 680:
case 1982:
case 2582:
case 812:
case 2008:
case 1714:
case 407:
case 942:
case 2331:
case 2503:
case 2605:
case 2338:
case 968:
case 2930:
case 3757:
case 658:
case 413:
case 2752:
case 1530:
case 161:
case 1200:
case 2178:
case 2666:
case 3645:
case 622:
case 2171:
case 3842:
case 818:
case 683:
case 1367:
case 437:
case 1880:
case 3527:
case 3959:
case 1922:
case 2899:
case 544:
case 2:
case 1933:
case 3227:
case 962:
case 3275:
case 948:
case 874:
case 2635:
case 2533:
case 392:
case 2222:
case 3815:
case 1316:
case 1139:
case 2900:
case 3041:
case 652:
case 2832:
case 319:
case 2055:
case 3243:
case 3048:
case 3791:
case 149:
case 3262:
case 1916:
case 2516:
case 758:
case 2267:
case 2901:
case 3798:
case 809:
case 3439:
case 3609:
case 3486:
case 2474:
case 4052:
case 3204:
case 1888:
case 3626:
case 2030:
case 2650:
case 1208:
case 2170:
case 3884:
case 2876:
case 3359:
case 3492:
case 2449:
case 3562:
case 277:
case 1003:
case 308:
case 497:
case 2497:
case 1022:
case 2938:
case 2244:
case 2931:
case 1538:
case 1303:
case 3409:
case 2330:
case 2819:
case 3639:
case 80:
case 3948:
case 2579:
case 783:
case 2154:
case 3686:
case 1555:
case 2955:
case 1396:
case 3941:
case 2000:
case 1979:
case 311:
case 3692:
case 1944:
case 1033:
case 3710:
case 3340:
case 1145:
case 2697:
case 1231:
case 1382:
case 794:
case 860:
case 165:
case 2260:
case 3099:
case 3838:
case 1606:
case 1224:
case 1834:
case 2307:
case 3221:
case 3113:
case 3919:
case 3302:
case 103:
case 442:
case 2194:
case 2037:
case 3705:
case 1693:
case 1595:
case 907:
case 2848:
case 130:
case 3032:
case 1368:
case 3521:
case 3855:
case 1356:
case 3383:
case 2490:
case 1524:
case 1960:
case 3172:
case 2015:
case 913:
case 4026:
case 3364:
case 863:
case 2745:
case 840:
case 145:
case 2418:
case 1284:
case 3751:
case 3766:
case 3288:
case 1804:
case 1263:
case 937:
case 671:
case 634:
case 3281:
case 1754:
case 2773:
case 805:
case 3735:
case 3581:
case 2007:
case 2963:
case 462:
case 1665:
case 3002:
case 448:
case 3588:
case 1429:
case 1862:
case 3976:
case 3347:
case 1584:
case 2457:
case 910:
case 2342:
case 53:
case 2774:
case 3786:
case 4017:
case 1264:
case 1803:
case 700:
case 1502:
case 3063:
case 2902:
case 3256:
case 247:
case 1283:
case 2830:
case 2319:
case 2797:
case 1081:
case 3568:
case 2189:
case 733:
case 1685:
case 1477:
case 459:
case 1202:
case 1425:
case 1896:
case 889:
case 4051:
case 1669:
case 1920:
case 2165:
case 2520:
case 3324:
case 3146:
case 1494:
case 4058:
case 1247:
case 254:
case 3915:
case 1299:
case 3024:
case 1833:
case 765:
case 194:
case 2280:
case 1111:
case 1021:
case 4005:
case 1532:
case 2800:
case 3095:
case 267:
case 1118:
case 1157:
case 3698:
case 1381:
case 1232:
case 42:
case 2019:
case 1625:
case 2580:
case 3384:
case 2376:
case 1822:
case 1469:
case 2999:
case 539:
case 693:
case 3942:
case 1694:
case 1980:
case 224:
case 1259:
case 336:
case 3308:
case 152:
case 3301:
case 3:
case 4010:
case 1765:
case 3617:
case 2790:
case 2048:
case 2837:
case 3055:
case 2612:
case 1789:
case 219:
case 684:
case 3900:
case 3171:
case 3651:
case 1034:
case 2543:
case 3823:
case 2645:
case 1943:
case 183:
case 3666:
case 951:
case 3658:
case 3038:
case 122:
case 1174:
case 2153:
case 2575:
case 1927:
case 3233:
case 3522:
case 2287:
case 425:
case 1334:
case 2412:
case 3802:
case 2445:
case 1706:
case 3596:
case 1861:
case 175:
case 885:
case 1868:
case 3458:
case 3355:
case 1150:
case 3883:
case 414:
case 3008:
case 4091:
case 128:
case 641:
case 2940:
case 64:
case 2941:
case 1548:
case 3955:
case 2895:
case 2426:
case 3674:
case 2234:
case 761:
case 2948:
case 1671:
case 1151:
case 3649:
case 3697:
case 2824:
case 3544:
case 2340:
case 929:
case 1387:
case 3450:
case 816:
case 1117:
case 3931:
case 946:
case 3244:
case 959:
case 2059:
case 2639:
case 3330:
case 2409:
case 1934:
case 3030:
case 2626:
case 626:
case 2863:
case 3497:
case 208:
case 595:
case 1471:
case 3449:
case 2492:
case 3216:
case 1962:
case 3170:
case 2884:
case 1375:
case 3567:
case 966:
case 3267:
case 2040:
case 1772:
case 3901:
case 1087:
case 232:
case 3908:
case 2791:
case 4011:
case 2609:
case 656:
case 2504:
case 649:
case 1904:
case 4018:
case 2588:
case 501:
case 1646:
case 3963:
case 512:
case 2735:
case 3457:
case 487:
case 1867:
case 1576:
case 1380:
case 2347:
case 2976:
case 2399:
case 2766:
case 2064:
case 600:
case 2758:
case 171:
case 881:
case 2751:
case 1276:
case 451:
case 1110:
case 2083:
case 3337:
case 645:
case 1219:
case 2855:
case 2521:
case 3841:
case 3848:
case 2528:
case 1921:
case 793:
case 3194:
case 3037:
case 3657:
case 2364:
case 3560:
case 3924:
case 925:
case 104:
case 630:
case 3177:
case 3015:
case 2652:
case 2172:
case 1198:
case 1320:
case 3490:
case 1080:
case 3042:
case 2838:
case 3260:
case 955:
case 3618:
case 2919:
case 914:
case 617:
case 2113:
case 2221:
case 665:
case 531:
case 3061:
case 1288:
case 3068:
case 3754:
case 1281:
case 300:
case 43:
case 1083:
case 3056:
case 788:
case 186:
case 345:
case 3636:
case 3284:
case 3406:
case 2816:
case 2110:
case 529:
case 491:
case 1766:
case 1064:
case 876:
case 1758:
case 1717:
case 1347:
case 1976:
case 4053:
case 559:
case 3862:
case 546:
case 2867:
case 3493:
case 1581:
case 1735:
case 750:
case 1588:
case 3665:
case 1113:
case 723:
case 2519:
case 3834:
case 1023:
case 303:
case 1919:
case 1228:
case 3606:
case 1099:
case 1047:
case 317:
case 365:
case 3436:
case 2080:
case 782:
case 995:
case 55:
case 3770:
case 1831:
case 3629:
case 1172:
case 2844:
case 566:
case 3361:
case 1528:
case 3693:
case 439:
case 753:
case 3356:
case 40:
case 3465:
case 2219:
case 1855:
case 2934:
case 912:
case 2248:
case 1639:
case 3255:
case 2043:
case 1409:
case 572:
case 2075:
case 7:
case 3022:
case 2117:
case 3303:
case 3538:
case 999:
case 2027:
case 138:
case 443:
case 2387:
case 2166:
case 2860:
case 111:
case 2158:
case 3382:
case 2671:
case 3145:
case 4065:
case 1824:
case 1340:
case 1710:
case 34:
case 1686:
case 435:
case 2541:
case 3979:
case 1941:
case 3396:
case 2904:
case 4006:
case 3096:
case 1439:
case 132:
case 1791:
case 3501:
case 349:
case 463:
case 1798:
case 2962:
case 1359:
case 99:
case 706:
case 2327:
case 3003:
case 2471:
case 3888:
case 931:
case 1204:
case 1863:
case 2713:
case 2343:
case 677:
case 1626:
case 3881:
case 514:
case 862:
case 3880:
case 1153:
case 909:
case 2654:
case 1842:
case 1959:
case 3922:
case 222:
case 93:
case 2943:
case 283:
case 2149:
case 991:
case 2736:
case 2034:
case 2197:
case 1612:
case 6:
case 2789:
case 3079:
case 1041:
case 636:
case 1048:
case 2304:
case 1837:
case 3933:
case 1227:
case 2765:
case 2259:
case 1815:
case 192:
case 3044:
case 3982:
case 228:
case 2454:
case 1940:
case 2987:
case 2540:
case 3714:
case 3126:
case 777:
case 3016:
case 341:
case 1711:
case 1341:
case 3996:
case 2670:
case 3230:
case 2856:
case 1445:
case 11:
case 2861:
case 1757:
case 3530:
case 2334:
case 3903:
case 796:
case 2240:
case 1287:
case 90:
case 258:
case 2793:
case 2062:
case 1964:
case 412:
case 2494:
case 2882:
case 2669:
case 2920:
case 2564:
case 3887:
case 1165:
case 650:
case 2190:
case 2425:
case 3968:
case 390:
case 587:
case 3207:
case 3961:
case 2321:
case 960:
case 943:
case 2685:
case 499:
case 521:
case 551:
case 2283:
case 1136:
case 1830:
case 688:
case 2081:
case 2088:
case 2502:
case 620:
case 2803:
case 2753:
case 1076:
case 3827:
case 2547:
case 905:
case 124:
case 1947:
case 418:
case 1580:
case 3542:
case 653:
case 837:
case 3215:
case 2469:
case 1129:
case 2381:
case 1019:
case 2625:
case 3843:
case 963:
case 1923:
case 2677:
case 940:
case 1106:
case 1932:
case 27:
case 3537:
case 2118:
case 2223:
case 2111:
case 682:
case 431:
case 623:
case 294:
case 1280:
case 154:
case 3191:
case 304:
case 416:
case 1177:
case 1657:
case 1125:
case 3320:
case 2960:
case 230:
case 1841:
case 3928:
case 1995:
case 1194:
case 2595:
case 3921:
case 2295:
case 3519:
case 767:
case 3614:
case 1307:
case 1611:
case 754:
case 2436:
case 265:
case 1260:
case 3380:
case 2584:
case 3576:
case 1457:
case 1185:
case 2689:
case 2429:
case 2862:
case 1984:
case 2665:
case 233:
case 3981:
case 4078:
case 1007:
case 1963:
case 2754:
case 1773:
case 2068:
case 3414:
case 2804:
case 1337:
case 2263:
case 747:
case 1315:
case 2636:
case 3276:
case 3020:
case 1449:
case 2003:
case 3471:
case 26:
case 3327:
case 1567:
case 3375:
case 226:
case 887:
case 3478:
case 608:
case 2881:
case 71:
case 3713:
case 1030:
case 1474:
case 2096:
case 507:
case 2725:
case 2082:
case 1516:
case 851:
case 1267:
case 427:
case 2508:
case 2333:
case 256:
case 1908:
case 798:
case 3087:
case 4014:
case 1544:
case 3151:
case 3158:
case 3678:
case 2238:
case 3166:
case 3860:
case 444:
case 1955:
case 1000:
case 537:
case 2821:
case 602:
case 2173:
case 1674:
case 2555:
case 2255:
case 1819:
case 638:
case 3241:
case 719:
case 792:
case 1931:
case 2022:
case 2785:
case 2531:
case 269:
case 2112:
case 1752:
case 3729:
case 3334:
case 576:
case 1930:
case 1296:
case 829:
case 3062:
case 3793:
case 1605:
case 2109:
case 1435:
case 2067:
case 2903:
case 2714:
case 1008:
case 3540:
case 4077:
case 106:
case 3987:
case 1864:
case 3454:
case 1001:
case 4025:
case 2982:
case 3861:
case 597:
case 859:
case 489:
case 1596:
case 1883:
case 3150:
case 4094:
case 2230:
case 1355:
case 241:
case 1458:
case 846:
case 380:
case 3304:
case 1617:
case 1900:
case 85:
case 3789:
case 48:
case 1308:
case 2044:
case 2316:
case 2139:
case 1405:
case 619:
case 1301:
case 2933:
case 352:
case 3975:
case 1847:
case 322:
case 3362:
case 2922:
case 1038:
case 1899:
case 1522:
case 3559:
case 3654:
case 1233:
case 2186:
case 3174:
case 702:
case 1823:
case 3197:
case 1651:
case 3736:
case 4069:
case 1171:
case 1658:
case 2200:
case 866:
case 1178:
case 383:
case 3470:
case 654:
case 3111:
case 1937:
case 2537:
case 123:
case 1095:
case 957:
case 37:
case 1410:
case 964:
case 182:
case 394:
case 1114:
case 615:
case 2515:
case 3822:
case 568:
case 1384:
case 3980:
case 4070:
case 3694:
case 1709:
case 542:
case 1942:
case 3677:
case 153:
case 3157:
case 927:
case 3625:
case 2843:
case 3523:
case 293:
case 1698:
case 473:
case 3232:
case 2152:
case 1063:
case 1792:
case 1907:
case 1610:
case 2507:
case 1268:
case 2771:
case 1256:
case 3283:
case 944:
case 3753:
case 647:
case 3920:
case 3564:
case 548:
case 3669:
case 562:
case 3882:
case 1739:
case 1324:
case 1556:
case 3685:
case 1491:
case 2207:
case 290:
case 2968:
case 1561:
case 3328:
case 3425:
case 470:
case 4054:
case 2956:
case 3202:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1766674801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,];
var gg_b = "1766674801/";

function subdomain_from_url(url, base, dir) {
        var retval = '';
        if (!base) {
                if (dir === 'webp') {
                        retval = 'w';
                } else if (dir === 'avif') {
                        retval = 'a';
                }
        }
        
        var b = 16;
        
        var r = /\/[0-9a-f]{61}([0-9a-f]{2})([0-9a-f])/;
        var m = r.exec(url);
        if (!m) {
                return retval;
        }
        
        var g = parseInt(m[2]+m[1], b);
        if (!isNaN(g)) {
                if (base) {
                        retval = String.fromCharCode(97 + gg_m[g]) + base;
                } else {
                        retval = retval + (1+gg_m[g]);
                }
        }
        
        return retval;
}


function url_from_url(url, base, dir) {
        return url.replace(/\/\/..?\.(?:gold-usergeneratedcontent\.net|hitomi\.la)\//, '//'+subdomain_from_url(url, base, dir)+'.'+domain2+'/');
}

function full_path_from_hash(hash) {
        return gg_b+gg_s(hash)+'/'+hash;
}


function real_full_path_from_hash(hash) {
        return hash.replace(/^.*(..)(.)$/, '$2/$1/'+hash);
}

function url_from_hash(_galleryid, image, dir, ext) {
        ext = ext || dir || image.name.split('.').pop();
        if (dir === 'webp' || dir === 'avif') {
                dir = '';
        } else {
                dir += '/';
        }
        
        return 'https://a.'+domain2+'/'+dir+full_path_from_hash(image.hash)+'.'+ext;
}

function url_from_url_from_hash(_galleryid, image, dir, ext, base) {
        if ('tn' === base) {
                return url_from_url('https://a.'+domain2+'/'+dir+'/'+real_full_path_from_hash(image.hash)+'.'+ext, base);
        }
        return url_from_url(url_from_hash(_galleryid, image, dir, ext), base, dir);
}


function hitomi_get_image_list() {
  files = galleryinfo["files"];
  dir = "webp";
  type = "webp";
  base = "webp";
  result = [];
  btresult = [];
  stresult = [];
  for (var file of files) {
    result.push(url_from_url(url_from_hash(0, file, dir), undefined, dir));
    btresult.push(url_from_url_from_hash(0, file, 'webpbigtn', 'webp', 'tn'));
    stresult.push(url_from_url_from_hash(0, file, type+'smalltn', type, 'tn'));
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
