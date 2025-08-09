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
case 3524:
case 1291:
case 173:
case 2859:
case 73:
case 3011:
case 3049:
case 948:
case 3852:
case 3096:
case 4085:
case 1356:
case 2042:
case 1216:
case 267:
case 2956:
case 161:
case 3564:
case 1381:
case 1152:
case 985:
case 3857:
case 3301:
case 154:
case 1402:
case 2489:
case 2553:
case 1217:
case 2525:
case 562:
case 2331:
case 2957:
case 1156:
case 760:
case 3279:
case 684:
case 3788:
case 3486:
case 2568:
case 71:
case 2272:
case 2674:
case 3881:
case 10:
case 2046:
case 566:
case 278:
case 3092:
case 1603:
case 1352:
case 2528:
case 4073:
case 2600:
case 1029:
case 3959:
case 1181:
case 2277:
case 2698:
case 414:
case 772:
case 3182:
case 2021:
case 687:
case 3580:
case 3937:
case 2514:
case 1102:
case 993:
case 776:
case 1339:
case 2247:
case 3386:
case 1668:
case 4043:
case 2793:
case 2836:
case 369:
case 559:
case 642:
case 2695:
case 2431:
case 2720:
case 1306:
case 12:
case 2389:
case 3936:
case 3645:
case 1653:
case 3151:
case 67:
case 866:
case 3382:
case 3297:
case 1886:
case 929:
case 3839:
case 434:
case 482:
case 1755:
case 3743:
case 2299:
case 2077:
case 1106:
case 1229:
case 2907:
case 2837:
case 3518:
case 1758:
case 3648:
case 3387:
case 3292:
case 3694:
case 938:
case 486:
case 2246:
case 3623:
case 2972:
case 3471:
case 2002:
case 1089:
case 3768:
case 2191:
case 853:
case 3876:
case 2116:
case 3690:
case 1231:
case 58:
case 4053:
case 2317:
case 272:
case 3009:
case 3725:
case 3319:
case 3341:
case 2007:
case 150:
case 3426:
case 3728:
case 2312:
case 358:
case 568:
case 276:
case 2585:
case 2654:
case 2256:
case 751:
case 2429:
case 3658:
case 4065:
case 946:
case 2921:
case 987:
case 2391:
case 1172:
case 1748:
case 3877:
case 764:
case 1991:
case 3037:
case 693:
case 1819:
case 2573:
case 2724:
case 680:
case 903:
case 3753:
case 1513:
case 421:
case 2112:
case 2039:
case 24:
case 1504:
case 1538:
case 2006:
case 2281:
case 1177:
case 3462:
case 1376:
case 2961:
case 942:
case 3119:
case 2764:
case 3032:
case 3584:
case 4068:
case 371:
case 1871:
case 1610:
case 155:
case 3362:
case 1476:
case 3847:
case 1866:
case 609:
case 46:
case 1031:
case 2604:
case 1969:
case 2638:
case 868:
case 2202:
case 23:
case 574:
case 1540:
case 445:
case 2613:
case 3236:
case 19:
case 1673:
case 2635:
case 3171:
case 1421:
case 363:
case 1346:
case 3367:
case 3842:
case 936:
case 1826:
case 2491:
case 3166:
case 1147:
case 2207:
case 3059:
case 2670:
case 2849:
case 1775:
case 2733:
case 2999:
case 3560:
case 1685:
case 2169:
case 2780:
case 21:
case 430:
case 3703:
case 3899:
case 1477:
case 3127:
case 3846:
case 3605:
case 912:
case 3419:
case 3441:
case 2056:
case 2129:
case 3608:
case 3634:
case 3520:
case 2206:
case 1472:
case 3122:
case 3366:
case 1862:
case 3593:
case 1827:
case 1146:
case 2947:
case 778:
case 3371:
case 3247:
case 1266:
case 758:
case 924:
case 50:
case 1986:
case 2187:
case 439:
case 1271:
case 3939:
case 2386:
case 3061:
case 3695:
case 857:
case 3906:
case 3076:
case 2802:
case 3720:
case 1459:
case 1226:
case 1109:
case 428:
case 2182:
case 2296:
case 496:
case 82:
case 1136:
case 1337:
case 3503:
case 3021:
case 1951:
case 3189:
case 166:
case 1754:
case 2937:
case 2351:
case 2580:
case 3077:
case 697:
case 1019:
case 1041:
case 990:
case 3837:
case 4060:
case 2186:
case 2387:
case 2648:
case 3246:
case 1267:
case 573:
case 1530:
case 2806:
case 2645:
case 2936:
case 3389:
case 4020:
case 2401:
case 3902:
case 2079:
case 631:
case 351:
case 2743:
case 1262:
case 4093:
case 3650:
case 1982:
case 1664:
case 2839:
case 1615:
case 3276:
case 1159:
case 3981:
case 2482:
case 3261:
case 1436:
case 2301:
case 1704:
case 52:
case 3553:
case 694:
case 1901:
case 3489:
case 3047:
case 1066:
case 2630:
case 1735:
case 2773:
case 2524:
case 1548:
case 1594:
case 2049:
case 1618:
case 2096:
case 2852:
case 3956:
case 2675:
case 1026:
case 557:
case 1770:
case 367:
case 1022:
case 378:
case 3952:
case 256:
case 3046:
case 1067:
case 1437:
case 2092:
case 2101:
case 170:
case 3528:
case 1359:
case 927:
case 252:
case 3957:
case 995:
case 3525:
case 605:
case 1062:
case 1432:
case 2097:
case 3568:
case 2788:
case 873:
case 3674:
case 95:
case 3272:
case 1287:
case 3896:
case 1922:
case 263:
case 3052:
case 2171:
case 1967:
case 2166:
case 2992:
case 2059:
case 3207:
case 3718:
case 3416:
case 4080:
case 3999:
case 3811:
case 177:
case 3715:
case 1927:
case 1397:
case 1196:
case 695:
case 1684:
case 271:
case 1555:
case 1962:
case 2997:
case 2126:
case 3202:
case 33:
case 1149:
case 3613:
case 2232:
case 413:
case 3081:
case 1590:
case 3417:
case 3239:
case 1971:
case 422:
case 2122:
case 2366:
case 756:
case 1774:
case 3897:
case 1523:
case 604:
case 994:
case 989:
case 1192:
case 2371:
case 3169:
case 2237:
case 1311:
case 2899:
case 2703:
case 4033:
case 89:
case 31:
case 426:
case 2162:
case 2326:
case 360:
case 498:
case 855:
case 3892:
case 1926:
case 1396:
case 1563:
case 752:
case 2663:
case 2821:
case 769:
case 1919:
case 683:
case 900:
case 4024:
case 2259:
case 1891:
case 3312:
case 1816:
case 3585:
case 1660:
case 1449:
case 258:
case 3972:
case 2861:
case 2466:
case 3588:
case 4064:
case 2768:
case 1693:
case 3002:
case 2979:
case 1795:
case 2690:
case 2725:
case 1508:
case 925:
case 372:
case 2009:
case 3879:
case 174:
case 3469:
case 3640:
case 59:
case 1201:
case 3039:
case 3961:
case 3006:
case 3510:
case 2655:
case 3764:
case 2141:
case 2119:
case 555:
case 443:
case 3429:
case 3256:
case 2658:
case 3316:
case 911:
case 1812:
case 406:
case 2877:
case 2422:
case 3921:
case 3573:
case 3724:
case 153:
case 1492:
case 2231:
case 3795:
case 172:
case 2917:
case 2121:
case 1972:
case 613:
case 1002:
case 1191:
case 1252:
case 626:
case 3087:
case 1654:
case 3411:
case 3660:
case 908:
case 1977:
case 1007:
case 2442:
case 1391:
case 3051:
case 2446:
case 353:
case 2321:
case 72:
case 1573:
case 2535:
case 2819:
case 3179:
case 2916:
case 3812:
case 1281:
case 1006:
case 1961:
case 45:
case 1764:
case 757:
case 165:
case 3750:
case 2361:
case 571:
case 949:
case 1976:
case 2745:
case 3086:
case 2513:
case 1640:
case 14:
case 981:
case 495:
case 3817:
case 2289:
case 1202:
case 1613:
case 2540:
case 3111:
case 29:
case 3149:
case 2461:
case 3196:
case 2610:
case 3962:
case 602:
case 1543:
case 1057:
case 4074:
case 2778:
case 2142:
case 424:
case 1416:
case 1207:
case 1718:
case 2399:
case 1849:
case 1999:
case 761:
case 3967:
case 1946:
case 1635:
case 3922:
case 3287:
case 1896:
case 996:
case 3392:
case 643:
case 2147:
case 2826:
case 2867:
case 2477:
case 2342:
case 160:
case 3197:
case 3563:
case 919:
case 3926:
case 1056:
case 2685:
case 2554:
case 70:
case 483:
case 558:
case 3829:
case 11:
case 3251:
case 2862:
case 2688:
case 863:
case 2146:
case 1239:
case 3192:
case 3001:
case 3523:
case 1897:
case 3286:
case 3869:
case 1129:
case 3479:
case 38:
case 3590:
case 2356:
case 3770:
case 1131:
case 2216:
case 755:
case 1042:
case 1956:
case 2407:
case 619:
case 3735:
case 2291:
case 273:
case 3594:
case 1221:
case 497:
case 2152:
case 856:
case 3436:
case 3713:
case 3066:
case 3901:
case 431:
case 3545:
case 1553:
case 3831:
case 1489:
case 2402:
case 1276:
case 261:
case 2381:
case 3615:
case 1261:
case 2439:
case 2708:
case 3062:
case 2217:
case 692:
case 2734:
case 1525:
case 3027:
case 4004:
case 1331:
case 2406:
case 2595:
case 2156:
case 2357:
case 569:
case 1528:
case 3241:
case 3219:
case 370:
case 2029:
case 4035:
case 1600:
case 1277:
case 2181:
case 3359:
case 3067:
case 2212:
case 2614:
case 696:
case 943:
case 2352:
case 2603:
case 1021:
case 933:
case 3136:
case 1514:
case 420:
case 2102:
case 1760:
case 1189:
case 556:
case 3754:
case 366:
case 3459:
case 3226:
case 1644:
case 3583:
case 2016:
case 1242:
case 1698:
case 2500:
case 2628:
case 779:
case 2790:
case 3332:
case 1906:
case 1695:
case 1061:
case 750:
case 3889:
case 362:
case 552:
case 1431:
case 649:
case 1076:
case 2625:
case 2339:
case 681:
case 2882:
case 405:
case 3271:
case 2886:
case 3309:
case 375:
case 3227:
case 3664:
case 2755:
case 922:
case 2653:
case 22:
case 3740:
case 2989:
case 1902:
case 1832:
case 913:
case 926:
case 2012:
case 3267:
case 3624:
case 2139:
case 3575:
case 2307:
case 869:
case 2106:
case 1077:
case 257:
case 4054:
case 2456:
case 1837:
case 3041:
case 3132:
case 480:
case 277:
case 3421:
case 1171:
case 163:
case 3826:
case 1992:
case 3147:
case 1166:
case 4083:
case 1367:
case 3346:
case 54:
case 3289:
case 3969:
case 39:
case 565:
case 1209:
case 2282:
case 418:
case 3871:
case 2962:
case 2555:
case 2684:
case 2196:
case 3610:
case 860:
case 1997:
case 1327:
case 3142:
case 3778:
case 3476:
case 1126:
case 3866:
case 1847:
case 3827:
case 1593:
case 934:
case 3146:
case 982:
case 1366:
case 3688:
case 3862:
case 2971:
case 2523:
case 2774:
case 4078:
case 429:
case 1371:
case 572:
case 1520:
case 2869:
case 2590:
case 28:
case 770:
case 3199:
case 1996:
case 2700:
case 986:
case 1326:
case 1162:
case 1127:
case 3477:
case 759:
case 3867:
case 1605:
case 1846:
case 2396:
case 3783:
case 2926:
case 2563:
case 640:
case 1419:
case 1237:
case 1714:
case 2829:
case 83:
case 3554:
case 1899:
case 2251:
case 1911:
case 3912:
case 2087:
case 158:
case 762:
case 1341:
case 630:
case 1319:
case 2798:
case 2496:
case 4094:
case 1821:
case 1728:
case 865:
case 3377:
case 2941:
case 2919:
case 2505:
case 1259:
case 3176:
case 560:
case 2795:
case 1979:
case 4045:
case 1690:
case 2508:
case 485:
case 2534:
case 3917:
case 1009:
case 2082:
case 991:
case 4:
case 1861:
case 3121:
case 766:
case 1466:
case 1876:
case 944:
case 2693:
case 1768:
case 1462:
case 917:
case 1584:
case 3643:
case 1655:
case 1141:
case 2750:
case 1032:
case 66:
case 409:
case 3513:
case 274:
case 1753:
case 3504:
case 2817:
case 3748:
case 3172:
case 3819:
case 3321:
case 3991:
case 3570:
case 3916:
case 2179:
case 688:
case 3107:
case 1932:
case 910:
case 499:
case 2266:
case 96:
case 3723:
case 3574:
case 2986:
case 1386:
case 2136:
case 1249:
case 2337:
case 864:
case 266:
case 1580:
case 1351:
case 3665:
case 1807:
case 4058:
case 2226:
case 1182:
case 988:
case 3500:
case 1387:
case 4063:
case 1648:
case 1292:
case 2624:
case 774:
case 357:
case 930:
case 3106:
case 567:
case 3307:
case 1533:
case 3851:
case 3758:
case 3229:
case 637:
case 1079:
case 4023:
case 2578:
case 1743:
case 3755:
case 416:
case 3017:
case 2227:
case 1909:
case 691:
case 2982:
case 275:
case 1839:
case 901:
case 753:
case 1151:
case 32:
case 3302:
case 3653:
case 1806:
case 2137:
case 3269:
case 4008:
case 4034:
case 1301:
case 634:
case 3152:
case 878:
case 2071:
case 682:
case 3402:
case 2901:
case 2713:
case 354:
case 564:
case 1564:
case 777:
case 3381:
case 3550:
case 2159:
case 1710:
case 361:
case 1678:
case 2409:
case 1482:
case 47:
case 1096:
case 647:
case 3407:
case 1675:
case 373:
case 4005:
case 1524:
case 1487:
case 2548:
case 2594:
case 270:
case 2241:
case 403:
case 3544:
case 2359:
case 487:
case 3598:
case 2680:
case 1451:
case 2022:
case 3614:
case 156:
case 3212:
case 1856:
case 3603:
case 1092:
case 3352:
case 614:
case 1101:
case 1788:
case 3439:
case 921:
case 2027:
case 3217:
case 2062:
case 3708:
case 259:
case 3931:
case 3801:
case 2432:
case 3357:
case 1279:
case 3335:
case 1294:
case 1692:
case 3003:
case 3521:
case 233:
case 1248:
case 4059:
case 180:
case 527:
case 2458:
case 3370:
case 2885:
case 463:
case 2108:
case 2455:
case 1697:
case 2781:
case 345:
case 2984:
case 310:
case 708:
case 55:
case 1245:
case 3669:
case 118:
case 3313:
case 471:
case 679:
case 2308:
case 2579:
case 1813:
case 1908:
case 1804:
case 222:
case 2757:
case 2490:
case 92:
case 504:
case 213:
case 3884:
case 3268:
case 3135:
case 1611:
case 1460:
case 3454:
case 138:
case 824:
case 781:
case 3138:
case 1030:
case 3104:
case 2305:
case 1075:
case 2463:
case 1835:
case 1519:
case 650:
case 3759:
case 1696:
case 2018:
case 2155:
case 2363:
case 2619:
case 2641:
case 340:
case 1526:
case 507:
case 3737:
case 3214:
case 2280:
case 973:
case 1048:
case 3203:
case 2511:
case 85:
case 2993:
case 2739:
case 2843:
case 954:
case 3053:
case 796:
case 728:
case 3547:
case 1566:
case 3732:
case 2390:
case 2064:
case 2920:
case 827:
case 1990:
case 2706:
case 1320:
case 1679:
case 1840:
case 4036:
case 3068:
case 3154:
case 2702:
case 1789:
case 3340:
case 4032:
case 3413:
case 69:
case 524:
case 90:
case 2215:
case 202:
case 3709:
case 3893:
case 1527:
case 1955:
case 3943:
case 655:
case 3025:
case 335:
case 1278:
case 1484:
case 2218:
case 2707:
case 3470:
case 3028:
case 4037:
case 1958:
case 2233:
case 2190:
case 2358:
case 1522:
case 3546:
case 1567:
case 206:
case 2592:
case 804:
case 3968:
case 1850:
case 3288:
case 2194:
case 60:
case 469:
case 2148:
case 2772:
case 99:
case 292:
case 1632:
case 1055:
case 3925:
case 955:
case 1208:
case 199:
case 132:
case 184:
case 3344:
case 2483:
case 2559:
case 3824:
case 3150:
case 3928:
case 3965:
case 296:
case 3285:
case 2651:
case 2145:
case 2475:
case 1433:
case 112:
case 805:
case 3556:
case 702:
case 2348:
case 2687:
case 2924:
case 3273:
case 673:
case 1948:
case 1994:
case 1898:
case 382:
case 3689:
case 116:
case 2825:
case 654:
case 1023:
case 1501:
case 706:
case 2682:
case 2478:
case 2964:
case 2020:
case 525:
case 2868:
case 820:
case 3210:
case 2284:
case 1090:
case 3144:
case 979:
case 1315:
case 1978:
case 1874:
case 3450:
case 3797:
case 1008:
case 3243:
case 2378:
case 62:
case 594:
case 2536:
case 2601:
case 1180:
case 3174:
case 2330:
case 3792:
case 2494:
case 2746:
case 2448:
case 208:
case 1587:
case 1930:
case 2803:
case 950:
case 1258:
case 3507:
case 2375:
case 1333:
case 3880:
case 2918:
case 3711:
case 187:
case 1380:
case 2260:
case 3818:
case 2537:
case 4092:
case 2742:
case 1263:
case 831:
case 3498:
case 1115:
case 825:
case 2383:
case 3444:
case 520:
case 2084:
case 800:
case 3495:
case 505:
case 249:
case 798:
case 2747:
case 1223:
case 281:
case 452:
case 3374:
case 3539:
case 3815:
case 3843:
case 472:
case 3739:
case 3993:
case 2547:
case 2617:
case 3920:
case 68:
case 3408:
case 3706:
case 3619:
case 215:
case 3155:
case 3596:
case 809:
case 3405:
case 1677:
case 240:
case 1954:
case 4007:
case 1858:
case 2214:
case 3511:
case 1751:
case 538:
case 2140:
case 970:
case 2860:
case 2470:
case 3707:
case 1529:
case 3218:
case 3358:
case 1098:
case 2599:
case 1044:
case 3233:
case 677:
case 885:
case 2691:
case 593:
case 580:
case 1863:
case 782:
case 2435:
case 1473:
case 1569:
case 2340:
case 3702:
case 4006:
case 1890:
case 15:
case 2736:
case 4039:
case 2025:
case 2893:
case 1782:
case 2709:
case 1661:
case 1095:
case 3355:
case 1343:
case 235:
case 786:
case 737:
case 509:
case 2561:
case 3455:
case 1443:
case 3264:
case 3627:
case 1250:
case 210:
case 43:
case 3888:
case 2576:
case 1074:
case 1701:
case 1913:
case 124:
case 2304:
case 1185:
case 1808:
case 2313:
case 1938:
case 2003:
case 2521:
case 2335:
case 3667:
case 3224:
case 1805:
case 1699:
case 3756:
case 3458:
case 1970:
case 3108:
case 288:
case 3885:
case 548:
case 1385:
case 398:
case 2985:
case 1512:
case 1244:
case 3626:
case 3033:
case 230:
case 107:
case 1110:
case 183:
case 3873:
case 717:
case 3463:
case 2170:
case 5:
case 3490:
case 3015:
case 322:
case 201:
case 1517:
case 4081:
case 3666:
case 2572:
case 1388:
case 2135:
case 1173:
case 2884:
case 3671:
case 3810:
case 2988:
case 2792:
case 3448:
case 1722:
case 3746:
case 1767:
case 1656:
case 3933:
case 197:
case 3375:
case 100:
case 2507:
case 512:
case 745:
case 1681:
case 131:
case 3183:
case 788:
case 3378:
case 3509:
case 3915:
case 1727:
case 291:
case 2100:
case 1762:
case 3536:
case 3601:
case 887:
case 1103:
case 1240:
case 3445:
case 2502:
case 516:
case 2088:
case 244:
case 217:
case 599:
case 2506:
case 3532:
case 2010:
case 730:
case 662:
case 1974:
case 3293:
case 1004:
case 1465:
case 2903:
case 1875:
case 2833:
case 2711:
case 536:
case 666:
case 3537:
case 1652:
case 3980:
case 3260:
case 2073:
case 2300:
case 701:
case 1070:
case 4046:
case 1900:
case 3383:
case 1830:
case 1719:
case 670:
case 120:
case 3483:
case 1894:
case 1998:
case 4021:
case 977:
case 1848:
case 2400:
case 1944:
case 2965:
case 2552:
case 1403:
case 546:
case 1153:
case 587:
case 1414:
case 214:
case 3651:
case 2864:
case 1639:
case 2968:
case 3772:
case 1040:
case 3194:
case 2395:
case 2925:
case 392:
case 339:
case 659:
case 2779:
case 1995:
case 715:
case 542:
case 1606:
case 1845:
case 3853:
case 3825:
case 1238:
case 1165:
case 234:
case 1353:
case 282:
case 2689:
case 194:
case 189:
case 57:
case 3776:
case 2210:
case 1950:
case 3682:
case 3964:
case 3478:
case 141:
case 3761:
case 2350:
case 2581:
case 4072:
case 464:
case 735:
case 247:
case 3475:
case 1607:
case 3865:
case 899:
case 721:
case 884:
case 2195:
case 2273:
case 1168:
case 1054:
case 3924:
case 968:
case 3687:
case 3348:
case 3430:
case 847:
case 305:
case 886:
case 2208:
case 2234:
case 2717:
case 517:
case 299:
case 3845:
case 3606:
case 3995:
case 284:
case 3325:
case 3639:
case 748:
case 93:
case 1686:
case 3368:
case 1148:
case 3040:
case 128:
case 2637:
case 834:
case 196:
case 3365:
case 2480:
case 1651:
case 236:
case 1145:
case 3153:
case 1559:
case 1483:
case 7:
case 3741:
case 2205:
case 3328:
case 3894:
case 3998:
case 4019:
case 223:
case 1687:
case 1924:
case 3054:
case 1394:
case 2844:
case 1430:
case 91:
case 2898:
case 2994:
case 2433:
case 3125:
case 1865:
case 3607:
case 537:
case 960:
case 2418:
case 1020:
case 3950:
case 1868:
case 3128:
case 1284:
case 2415:
case 2090:
case 1345:
case 1093:
case 544:
case 1825:
case 3204:
case 3165:
case 475:
case 2501:
case 394:
case 2895:
case 814:
case 3213:
case 3240:
case 1536:
case 1601:
case 2180:
case 534:
case 1183:
case 3681:
case 2464:
case 2978:
case 2034:
case 2008:
case 4071:
case 3727:
case 1915:
case 651:
case 325:
case 817:
case 397:
case 1799:
case 1803:
case 2318:
case 547:
case 2005:
case 2258:
case 1918:
case 1814:
case 300:
case 2729:
case 3883:
case 1330:
case 718:
case 1494:
case 2800:
case 3722:
case 108:
case 2587:
case 1742:
case 2263:
case 1178:
case 3726:
case 4022:
case 729:
case 2659:
case 891:
case 3830:
case 287:
case 246:
case 3875:
case 2551:
case 514:
case 1260:
case 3254:
case 203:
case 3766:
case 3013:
case 3878:
case 3974:
case 3468:
case 94:
case 1130:
case 1293:
case 2290:
case 965:
case 1084:
case 3657:
case 1220:
case 3970:
case 3699:
case 1885:
case 801:
case 1134:
case 2294:
case 3373:
case 2248:
case 133:
case 477:
case 3805:
case 1667:
case 3646:
case 3188:
case 1622:
case 280:
case 1080:
case 3913:
case 3701:
case 218:
case 3938:
case 3808:
case 64:
case 3904:
case 3310:
case 1781:
case 2697:
case 1888:
case 1984:
case 665:
case 1264:
case 1627:
case 1105:
case 3250:
case 3388:
case 48:
case 1666:
case 3647:
case 1810:
case 3173:
case 787:
case 4001:
case 2813:
case 1308:
case 2078:
case 3517:
case 2934:
case 2804:
case 672:
case 2838:
case 888:
case 3298:
case 307:
case 3642:
case 1626:
case 1033:
case 3244:
case 515:
case 2905:
case 2541:
case 2519:
case 742:
case 468:
case 2184:
case 810:
case 383:
case 390:
case 2870:
case 2611:
case 86:
case 2030:
case 198:
case 676:
case 1752:
case 1280:
case 61:
case 3485:
case 1549:
case 1511:
case 1155:
case 821:
case 3143:
case 784:
case 660:
case 799:
case 1619:
case 4087:
case 1363:
case 530:
case 2283:
case 3677:
case 1158:
case 1390:
case 1064:
case 1706:
case 2990:
case 1434:
case 2840:
case 1408:
case 1323:
case 1993:
case 1739:
case 3855:
case 4082:
case 2923:
case 2045:
case 3786:
case 3488:
case 2566:
case 1215:
case 395:
case 474:
case 712:
case 2278:
case 1163:
case 545:
case 3661:
case 3410:
case 2484:
case 3343:
case 4086:
case 2789:
case 63:
case 35:
case 2522:
case 978:
case 2193:
case 143:
case 3863:
case 588:
case 2958:
case 2120:
case 2854:
case 2656:
case 297:
case 200:
case 3729:
case 1507:
case 137:
case 3258:
case 3005:
case 849:
case 3424:
case 3587:
case 2722:
case 724:
case 881:
case 3930:
case 2767:
case 1085:
case 37:
case 2103:
case 2589:
case 1502:
case 2114:
case 3769:
case 3180:
case 3464:
case 3315:
case 1450:
case 1797:
case 2727:
case 2762:
case 3034:
case 1243:
case 3255:
case 2974:
case 3586:
case 2878:
case 2766:
case 1815:
case 2004:
case 808:
case 1506:
case 1631:
case 117:
case 3133:
case 669:
case 40:
case 783:
case 707:
case 539:
case 1010:
case 1300:
case 2070:
case 3263:
case 2900:
case 211:
case 1796:
case 3115:
case 1903:
case 3551:
case 2314:
case 2465:
case 1749:
case 303:
case 2254:
case 2035:
case 656:
case 1552:
case 704:
case 1965:
case 2153:
case 336:
case 4016:
case 2365:
case 3205:
case 2741:
case 2719:
case 4091:
case 1928:
case 220:
case 2894:
case 2328:
case 2944:
case 2848:
case 3717:
case 1925:
case 3234:
case 1043:
case 652:
case 1395:
case 3632:
case 2325:
case 1779:
case 2995:
case 2845:
case 399:
case 2531:
case 2606:
case 332:
case 1288:
case 581:
case 1474:
case 3124:
case 2639:
case 2040:
case 2368:
case 1210:
case 2128:
case 2950:
case 42:
case 3364:
case 3090:
case 3415:
case 1198:
case 1350:
case 828:
case 134:
case 2165:
case 2238:
case 2602:
case 2353:
case 896:
case 3945:
case 1953:
case 3501:
case 75:
case 2054:
case 1273:
case 323:
case 3948:
case 457:
case 3844:
case 147:
case 839:
case 4012:
case 2125:
case 3063:
case 3716:
case 2270:
case 1556:
case 1617:
case 522:
case 3990:
case 3:
case 2855:
case 3566:
case 1547:
case 204:
case 3393:
case 3045:
case 1053:
case 2786:
case 2274:
case 3923:
case 2858:
case 526:
case 2954:
case 1612:
case 598:
case 2485:
case 3048:
case 2751:
case 1203:
case 802:
case 3963:
case 1542:
case 2677:
case 3526:
case 3283:
case 3567:
case 1546:
case 956:
case 3230:
case 794:
case 2787:
case 1435:
case 2473:
case 2621:
case 3854:
case 1860:
case 1028:
case 741:
case 2529:
case 2098:
case 1599:
case 121:
case 2676:
case 3955:
case 952:
case 3527:
case 295:
case 2782:
case 3484:
case 2095:
case 309:
case 3278:
case 135:
case 1154:
case 1820:
case 3789:
case 1404:
case 2940:
case 1438:
case 1736:
case 25:
case 2701:
case 1304:
case 4031:
case 2913:
case 224:
case 1338:
case 2904:
case 1440:
case 2834:
case 2808:
case 1313:
case 455:
case 318:
case 3697:
case 145:
case 969:
case 3384:
case 2443:
case 49:
case 2310:
case 797:
case 110:
case 725:
case 188:
case 1629:
case 822:
case 1003:
case 543:
case 3248:
case 2373:
case 3294:
case 380:
case 813:
case 2591:
case 2188:
case 1973:
case 506:
case 130:
case 207:
case 2642:
case 290:
case 2110:
case 283:
case 1228:
case 3835:
case 1113:
case 3460:
case 2385:
case 1454:
case 3870:
case 1265:
case 1985:
case 2512:
case 3493:
case 833:
case 1572:
case 2173:
case 1988:
case 1884:
case 3078:
case 1170:
case 3813:
case 2295:
case 3804:
case 1225:
case 3934:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1754776801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,];
var gg_b = "1754776801/";

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
