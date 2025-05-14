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
var o = 0;
switch (g) {
case 3071:
case 1203:
case 3609:
case 1517:
case 1915:
case 996:
case 3868:
case 2904:
case 2551:
case 3202:
case 1005:
case 1826:
case 433:
case 1746:
case 1217:
case 1503:
case 3351:
case 4002:
case 3096:
case 961:
case 1665:
case 976:
case 3308:
case 1834:
case 1810:
case 2508:
case 3069:
case 2502:
case 114:
case 2868:
case 2469:
case 3251:
case 3014:
case 343:
case 423:
case 608:
case 3030:
case 3302:
case 874:
case 2496:
case 3551:
case 91:
case 1125:
case 2154:
case 2096:
case 3208:
case 418:
case 2069:
case 3704:
case 303:
case 3430:
case 648:
case 530:
case 2471:
case 2308:
case 1839:
case 2235:
case 864:
case 3148:
case 783:
case 581:
case 3335:
case 3886:
case 2535:
case 3159:
case 2941:
case 120:
case 2909:
case 912:
case 1038:
case 2737:
case 1807:
case 2197:
case 3464:
case 2142:
case 807:
case 2019:
case 3818:
case 514:
case 991:
case 186:
case 1567:
case 1300:
case 2159:
case 3535:
case 1476:
case 1267:
case 3033:
case 3937:
case 2335:
case 1646:
case 1143:
case 966:
case 1615:
case 3433:
case 3185:
case 940:
case 2812:
case 1491:
case 3019:
case 1860:
case 3741:
case 2464:
case 130:
case 825:
case 4035:
case 1356:
case 2604:
case 1432:
case 2210:
case 3991:
case 2363:
case 605:
case 3932:
case 3281:
case 2234:
case 3563:
case 3310:
case 1669:
case 519:
case 2198:
case 740:
case 573:
case 1808:
case 771:
case 2738:
case 217:
case 4063:
case 331:
case 1441:
case 3131:
case 1009:
case 2184:
case 2170:
case 1671:
case 251:
case 1919:
case 1851:
case 645:
case 3465:
case 4081:
case 791:
case 2803:
case 593:
case 1733:
case 2563:
case 2281:
case 2932:
case 2776:
case 2065:
case 1964:
case 3363:
case 317:
case 163:
case 3198:
case 657:
case 1362:
case 2581:
case 2263:
case 3226:
case 1568:
case 2732:
case 2131:
case 1802:
case 2147:
case 2192:
case 1764:
case 231:
case 470:
case 3938:
case 983:
case 321:
case 2676:
case 3260:
case 1221:
case 2446:
case 119:
case 1312:
case 1178:
case 1004:
case 3638:
case 173:
case 3560:
case 879:
case 1714:
case 3867:
case 1190:
case 236:
case 2539:
case 616:
case 1518:
case 3339:
case 1404:
case 356:
case 1730:
case 2800:
case 1386:
case 446:
case 2705:
case 2239:
case 460:
case 2046:
case 3207:
case 3446:
case 1796:
case 1136:
case 3676:
case 3905:
case 3189:
case 761:
case 380:
case 3856:
case 776:
case 3507:
case 1321:
case 1619:
case 2339:
case 1771:
case 67:
case 2155:
case 1124:
case 838:
case 336:
case 3691:
case 4007:
case 1586:
case 1633:
case 3415:
case 226:
case 1908:
case 3346:
case 1833:
case 2703:
case 2413:
case 2546:
case 3600:
case 3832:
case 3153:
case 674:
case 1421:
case 682:
case 808:
case 3891:
case 2439:
case 781:
case 1708:
case 3656:
case 3060:
case 1021:
case 426:
case 1418:
case 1819:
case 2515:
case 1204:
case 2013:
case 3546:
case 3703:
case 480:
case 3667:
case 2891:
case 2127:
case 3717:
case 1864:
case 2460:
case 2153:
case 1702:
case 3039:
case 2832:
case 1149:
case 246:
case 2060:
case 993:
case 1304:
case 2656:
case 3838:
case 3439:
case 3917:
case 1486:
case 3013:
case 436:
case 3515:
case 1735:
case 2805:
case 750:
case 2434:
case 1602:
case 2700:
case 1830:
case 3767:
case 201:
case 1814:
case 4065:
case 2756:
case 1935:
case 2010:
case 625:
case 2900:
case 1237:
case 315:
case 3106:
case 3967:
case 1651:
case 417:
case 3956:
case 390:
case 2603:
case 3805:
case 664:
case 730:
case 68:
case 1068:
case 1144:
case 3410:
case 2767:
case 301:
case 3700:
case 2481:
case 3434:
case 1871:
case 1869:
case 1341:
case 421:
case 341:
case 1608:
case 370:
case 3034:
case 607:
case 786:
case 2967:
case 635:
case 3365:
case 2106:
case 215:
case 2063:
case 2565:
case 669:
case 1710:
case 1194:
case 1660:
case 3621:
case 3319:
case 1538:
case 1056:
case 857:
case 1400:
case 2804:
case 1734:
case 827:
case 191:
case 1376:
case 2219:
case 2962:
case 3264:
case 1910:
case 1934:
case 2035:
case 930:
case 1726:
case 1846:
case 3618:
case 1391:
case 166:
case 2179:
case 1000:
case 2233:
case 3564:
case 1188:
case 1781:
case 3804:
case 3762:
case 1120:
case 2319:
case 2621:
case 805:
case 892:
case 3435:
case 1576:
case 3219:
case 596:
case 845:
case 1116:
case 1232:
case 1291:
case 950:
case 3533:
case 3962:
case 1639:
case 2564:
case 3233:
case 884:
case 920:
case 2768:
case 1532:
case 576:
case 2618:
case 763:
case 3364:
case 561:
case 1417:
case 3986:
case 2369:
case 1681:
case 2008:
case 2180:
case 500:
case 2174:
case 1707:
case 333:
case 1713:
case 793:
case 2918:
case 3596:
case 3269:
case 89:
case 2396:
case 4071:
case 223:
case 1939:
case 3912:
case 2921:
case 4069:
case 3271:
case 1907:
case 1003:
case 11:
case 3314:
case 566:
case 773:
case 2408:
case 1205:
case 233:
case 3174:
case 613:
case 2296:
case 1610:
case 2712:
case 1760:
case 3721:
case 353:
case 4030:
case 323:
case 196:
case 1865:
case 6:
case 2596:
case 3918:
case 1157:
case 4014:
case 1305:
case 2271:
case 1960:
case 3921:
case 3214:
case 699:
case 816:
case 3809:
case 2571:
case 658:
case 3635:
case 2152:
case 1546:
case 1413:
case 1246:
case 80:
case 1039:
case 834:
case 3412:
case 703:
case 2018:
case 1667:
case 501:
case 1439:
case 570:
case 2418:
case 1215:
case 3012:
case 541:
case 2504:
case 2951:
case 887:
case 2021:
case 1515:
case 3158:
case 2086:
case 3152:
case 3751:
case 824:
case 980:
case 4004:
case 3908:
case 1346:
case 2635:
case 3421:
case 1460:
case 106:
case 854:
case 1127:
case 1891:
case 1832:
case 2101:
case 2702:
case 3021:
case 3504:
case 609:
case 2012:
case 160:
case 493:
case 2304:
case 2486:
case 1315:
case 1876:
case 515:
case 1026:
case 1956:
case 190:
case 2735:
case 2209:
case 2195:
case 2830:
case 1700:
case 3871:
case 2509:
case 3144:
case 1410:
case 2814:
case 101:
case 2935:
case 3337:
case 1034:
case 1756:
case 2062:
case 3869:
case 810:
case 141:
case 2537:
case 1426:
case 931:
case 1463:
case 1150:
case 3209:
case 917:
case 1767:
case 3509:
case 802:
case 1481:
case 688:
case 3537:
case 2341:
case 2869:
case 3062:
case 546:
case 383:
case 3541:
case 2608:
case 3935:
case 3241:
case 1967:
case 1565:
case 4009:
case 3237:
case 2538:
case 1762:
case 1161:
case 3120:
case 3276:
case 553:
case 3467:
case 2710:
case 3182:
case 200:
case 2400:
case 3338:
case 1219:
case 1183:
case 721:
case 2238:
case 523:
case 3291:
case 1686:
case 1533:
case 2726:
case 3532:
case 2391:
case 312:
case 3067:
case 271:
case 2188:
case 1233:
case 1179:
case 2332:
case 2456:
case 677:
case 2607:
case 533:
case 3400:
case 2182:
case 2781:
case 3194:
case 2467:
case 1621:
case 1319:
case 2276:
case 2576:
case 1968:
case 391:
case 3376:
case 3815:
case 2981:
case 4038:
case 3934:
case 3726:
case 697:
case 1264:
case 2591:
case 868:
case 1618:
case 2067:
case 212:
case 1369:
case 859:
case 2707:
case 1174:
case 736:
case 1008:
case 414:
case 396:
case 3123:
case 3865:
case 685:
case 1918:
case 2713:
case 829:
case 2939:
case 2403:
case 1051:
case 3960:
case 2505:
case 1230:
case 2003:
case 3626:
case 878:
case 63:
case 1718:
case 604:
case 376:
case 1668:
case 2017:
case 21:
case 118:
case 1809:
case 1408:
case 1402:
case 1569:
case 2634:
case 1296:
case 839:
case 133:
case 3417:
case 1662:
case 2760:
case 1712:
case 1986:
case 726:
case 943:
case 3403:
case 3939:
case 3713:
case 1271:
case 903:
case 2305:
case 3907:
case 1786:
case 62:
case 1002:
case 1330:
case 1314:
case 261:
case 3913:
case 2203:
case 143:
case 849:
case 314:
case 1251:
case 281:
case 1014:
case 2746:
case 2826:
case 1904:
case 2715:
case 461:
case 3863:
case 2665:
case 3125:
case 476:
case 1704:
case 2177:
case 3881:
case 2834:
case 809:
case 1430:
case 1508:
case 1862:
case 3140:
case 2810:
case 3915:
case 760:
case 381:
case 1469:
case 214:
case 1868:
case 1502:
case 923:
case 746:
case 3217:
case 3503:
case 1351:
case 3005:
case 1496:
case 3826:
case 2303:
case 1154:
case 2125:
case 41:
case 665:
case 3715:
case 1096:
case 3405:
case 918:
case 1641:
case 1069:
case 687:
case 1471:
case 4003:
case 2881:
case 3300:
case 3567:
case 741:
case 2839:
case 3091:
case 602:
case 2200:
case 1937:
case 1535:
case 3476:
case 3267:
case 1433:
case 2256:
case 3076:
case 3143:
case 4067:
case 790:
case 330:
case 2807:
case 503:
case 3356:
case 701:
case 3491:
case 1821:
case 1142:
case 642:
case 1064:
case 2965:
case 2091:
case 3839:
case 2032:
case 2300:
case 1886:
case 1159:
case 4056:
case 2646:
case 715:
case 2076:
case 466:
case 320:
case 4000:
case 1812:
case 2432:
case 3038:
case 610:
case 2262:
case 4068:
case 2696:
case 2719:
case 3362:
case 2669:
case 877:
case 117:
case 1381:
case 1510:
case 363:
case 2562:
case 2808:
case 580:
case 536:
case 915:
case 1170:
case 1226:
case 1184:
case 3568:
case 668:
case 897:
case 2851:
case 121:
case 2919:
case 2733:
case 1938:
case 1563:
case 1991:
case 2964:
case 1776:
case 3933:
case 3808:
case 3562:
case 1334:
case 3037:
case 990:
case 3041:
case 1263:
case 3669:
case 3719:
case 3009:
case 2568:
case 3671:
case 131:
case 1976:
case 2764:
case 852:
case 1791:
case 1147:
case 483:
case 3733:
case 3919:
case 941:
case 526:
case 1465:
case 2914:
case 3212:
case 3136:
case 1513:
case 3796:
case 2312:
case 639:
case 4086:
case 219:
case 718:
case 3619:
case 1905:
case 2521:
case 1189:
case 273:
case 180:
case 1856:
case 3512:
case 2178:
case 3124:
case 3318:
case 2664:
case 136:
case 2190:
case 85:
case 3286:
case 2730:
case 1632:
case 753:
case 3771:
case 521:
case 4012:
case 723:
case 1173:
case 1239:
case 1705:
case 3930:
case 698:
case 2971:
case 3221:
case 1260:
case 2136:
case 3914:
case 629:
case 2512:
case 659:
case 844:
case 1638:
case 3521:
case 2619:
case 2321:
case 2769:
case 804:
case 3404:
case 156:
case 3730:
case 2996:
case 3714:
case 2286:
case 3190:
case 531:
case 2318:
case 393:
case 126:
case 2969:
case 3386:
case 2094:
case 3950:
case 342:
case 747:
case 630:
case 1479:
case 2889:
case 1597:
case 2488:
case 210:
case 3045:
case 3706:
case 3543:
case 3445:
case 3750:
case 1135:
case 2873:
case 3167:
case 686:
case 4043:
case 1461:
case 707:
case 395:
case 3482:
case 1601:
case 2082:
case 2020:
case 242:
case 650:
case 2950:
case 3094:
case 1397:
case 432:
case 2045:
case 2675:
case 3873:
case 477:
case 755:
case 1248:
case 2445:
case 1652:
case 3100:
case 2420:
case 1824:
case 2855:
case 202:
case 3653:
case 2906:
case 3627:
case 2577:
case 24:
case 589:
case 148:
case 1108:
case 1074:
case 3377:
case 1354:
case 2325:
case 43:
case 3023:
case 3240:
case 265:
case 404:
case 2466:
case 2277:
case 938:
case 3525:
case 1893:
case 3457:
case 4040:
case 2650:
case 444:
case 467:
case 2103:
case 485:
case 2117:
case 3753:
case 234:
case 1474:
case 3975:
case 782:
case 3340:
case 1011:
case 3898:
case 1829:
case 999:
case 3577:
case 1749:
case 45:
case 3466:
case 365:
case 2240:
case 2057:
case 3066:
case 2423:
case 1949:
case 224:
case 3870:
case 1687:
case 2831:
case 3884:
case 254:
case 2727:
case 334:
case 2892:
case 3117:
case 1766:
case 1075:
case 1616:
case 3911:
case 2052:
case 2372:
case 81:
case 3728:
case 3449:
case 511:
case 2324:
case 2118:
case 1355:
case 3378:
case 1107:
case 2722:
case 2121:
case 339:
case 3049:
case 1620:
case 1589:
case 3661:
case 557:
case 2578:
case 4072:
case 527:
case 799:
case 3683:
case 1999:
case 974:
case 3058:
case 2336:
case 2452:
case 3928:
case 1645:
case 4024:
case 3922:
case 2224:
case 2859:
case 2186:
case 409:
case 3980:
case 2572:
case 1957:
case 3324:
case 1027:
case 2848:
case 116:
case 1923:
case 2390:
case 572:
case 2728:
case 56:
case 3590:
case 378:
case 3372:
case 2112:
case 3842:
case 2661:
case 239:
case 1453:
case 3121:
case 1160:
case 3722:
case 738:
case 359:
case 3774:
case 537:
case 2401:
case 592:
case 3336:
case 1723:
case 1757:
case 3885:
case 3278:
case 2593:
case 1270:
case 4029:
case 866:
case 111:
case 1570:
case 562:
case 3674:
case 2487:
case 1877:
case 1134:
case 3529:
case 2329:
case 2611:
case 800:
case 3444:
case 2761:
case 2162:
case 3622:
case 2783:
case 1988:
case 127:
case 1623:
case 1298:
case 1657:
case 1406:
case 3095:
case 145:
case 1920:
case 3961:
case 1050:
case 3593:
case 1666:
case 1982:
case 935:
case 1945:
case 1531:
case 184:
case 2044:
case 16:
case 268:
case 769:
case 1384:
case 1592:
case 2622:
case 1840:
case 3162:
case 3761:
case 2444:
case 3611:
case 1782:
case 1181:
case 3487:
case 2674:
case 3495:
case 1006:
case 1825:
case 1163:
case 3979:
case 984:
case 96:
case 135:
case 972:
case 1625:
case 468:
case 2785:
case 2822:
case 1640:
case 2742:
case 945:
case 850:
case 107:
case 2874:
case 3828:
case 992:
case 2344:
case 2587:
case 1498:
case 2295:
case 3387:
case 2985:
case 3544:
case 2109:
case 1084:
case 789:
case 147:
case 1350:
case 2093:
case 3395:
case 2997:
case 3244:
case 2595:
case 1866:
case 2287:
case 3785:
case 155:
case 4087:
case 594:
case 1743:
case 1165:
case 911:
case 1823:
case 3654:
case 3493:
case 1677:
case 3880:
case 683:
case 2959:
case 830:
case 3797:
case 3742:
case 1031:
case 2544:
case 388:
case 927:
case 2387:
case 1047:
case 1250:
case 2828:
case 574:
case 1550:
case 3942:
case 957:
case 2759:
case 1643:
case 916:
case 535:
case 1473:
case 2490:
case 3697:
case 3642:
case 3472:
case 3549:
case 2104:
case 1089:
case 748:
case 2090:
case 2648:
case 1327:
case 3501:
case 3954:
case 564:
case 3024:
case 2252:
case 1275:
case 2478:
case 2879:
case 1489:
case 1888:
case 439:
case 1575:
case 3436:
case 1146:
case 478:
case 2685:
case 962:
case 2036:
case 194:
case 2754:
case 2249:
case 1845:
case 3104:
case 1740:
case 2258:
case 1455:
case 525:
case 3861:
case 3490:
case 498:
case 3301:
case 814:
case 2072:
case 3252:
case 182:
case 1055:
case 2024:
case 2501:
case 174:
case 3648:
case 3090:
case 1375:
case 3552:
case 1227:
case 2352:
case 1253:
case 1940:
case 2631:
case 3684:
case 1790:
case 33:
case 1114:
case 4057:
case 2647:
case 676:
case 3399:
case 4023:
case 2105:
case 79:
case 3425:
case 3850:
case 22:
case 2299:
case 893:
case 2566:
case 1895:
case 454:
case 1:
case 385:
case 1222:
case 3955:
case 3806:
case 762:
case 2973:
case 819:
case 2077:
case 873:
case 1574:
case 179:
case 1580:
case 3040:
case 61:
case 3692:
case 1936:
case 23:
case 2684:
case 3631:
case 35:
case 1528:
case 3599:
case 3266:
case 2670:
case 138:
case 3566:
case 3299:
case 2850:
case 1454:
case 1228:
case 2425:
case 44:
case 3105:
case 1211:
case 2806:
case 434:
case 1736:
case 3323:
case 3357:
case 2955:
case 1054:
case 1972:
case 908:
case 2523:
case 1169:
case 569:
case 3077:
case 3789:
case 1380:
case 267:
case 3973:
case 3216:
case 2784:
case 3731:
case 352:
case 1672:
case 475:
case 1442:
case 1497:
case 4045:
case 3853:
case 232:
case 3747:
case 3792:
case 3827:
case 3673:
case 297:
case 1133:
case 1485:
case 1793:
case 727:
case 3443:
case 1852:
case 322:
case 3545:
case 1636:
case 3043:
case 3220:
case 495:
case 2138:
case 711:
case 3689:
case 4016:
case 277:
case 2382:
case 1097:
case 3245:
case 2798:
case 579:
case 737:
case 671:
case 1690:
case 2827:
case 2747:
case 1164:
case 1048:
case 2388:
case 538:
case 252:
case 2731:
case 3784:
case 2216:
case 222:
case 989:
case 2443:
case 1929:
case 2516:
case 410:
case 3288:
case 3316:
case 792:
case 3875:
case 1459:
case 2043:
case 3345:
case 2992:
case 2931:
case 4088:
case 1383:
case 745:
case 1361:
case 3798:
case 1849:
case 2245:
case 3382:
case 76:
case 1678:
case 2520:
case 3138:
case 3743:
case 3165:
case 3823:
case 46:
case 1654:
case 2306:
case 355:
case 2098:
case 509:
case 1141:
case 1822:
case 1874:
case 1137:
case 207:
case 2470:
case 3431:
case 1880:
case 3047:
case 3092:
case 2498:
case 710:
case 1587:
case 3250:
case 3943:
case 2070:
case 3031:
case 188:
case 1942:
case 1997:
case 3550:
case 437:
case 1287:
case 1595:
case 2506:
case 255:
case 411:
case 335:
case 3306:
case 1948:
case 3625:
case 670:
case 2431:
case 2677:
case 307:
case 1029:
case 1959:
case 2206:
case 3098:
case 1387:
case 3084:
case 3070:
case 347:
case 2943:
case 364:
case 3498:
case 2092:
case 775:
case 3866:
case 690:
case 2550:
case 457:
case 1395:
case 1244:
case 1358:
case 4027:
case 394:
case 416:
case 3845:
case 2643:
case 1883:
case 3740:
case 3455:
case 3820:
case 1861:
case 1490:
case 109:
case 3882:
case 70:
case 1252:
case 3055:
case 606:
case 2327:
case 374:
case 1090:
case 2353:
case 149:
case 3553:
case 2489:
case 1478:
case 2275:
case 74:
case 3227:
case 2575:
case 3253:
case 3940:
case 2073:
case 3375:
case 2977:
case 1552:
case 1685:
case 978:
case 1754:
case 294:
case 47:
case 3115:
case 1549:
case 2882:
case 3089:
case 1697:
case 2820:
case 1424:
case 2740:
case 1072:
case 998:
case 2925:
case 274:
case 1501:
case 3327:
case 1954:
case 282:
case 929:
case 2816:
case 959:
case 3146:
case 2253:
case 836:
case 3528:
case 2130:
case 1266:
case 3171:
case 338:
case 759:
case 1647:
case 3936:
case 2790:
case 597:
case 228:
case 1566:
case 3454:
case 3972:
case 2280:
case 4028:
case 1357:
case 2:
case 3380:
case 3511:
case 1973:
case 577:
case 2629:
case 2580:
case 279:
case 2574:
case 880:
case 924:
case 3790:
case 13:
case 2936:
case 856:
case 3114:
case 3328:
case 1440:
case 1755:
case 1399:
case 104:
case 2844:
case 1670:
case 2171:
case 2772:
case 618:
case 2528:
case 552:
case 1684:
case 1425:
case 2454:
case 1850:
case 4022:
case 94:
case 2693:
case 987:
case 448:
case 4080:
case 826:
case 185:
case 3222:
case 1955:
case 2736:
case 3990:
case 1523:
case 3280:
case 623:
case 3574:
case 379:
case 1698:
case 3629:
case 1223:
case 1040:
case 2169:
case 167:
case 3778:
case 2380:
case 3522:
case 2374:
case 1770:
case 2672:
case 3379:
case 1784:
case 3801:
case 3690:
case 975:
case 2579:
case 132:
case 1655:
case 2624:
case 3164:
case 2442:
case 3048:
case 2485:
case 1288:
case 3929:
case 1998:
case 2793:
case 1984:
case 3383:
case 1970:
case 3858:
case 3459:
case 902:
case 1138:
case 2283:
case 3361:
case 3729:
case 3448:
case 2048:
case 3442:
case 3497:
case 2164:
case 3579:
case 53:
case 1747:
case 1792:
case 1191:
case 1216:
case 152:
case 4083:
case 2379:
case 831:
case 1388:
case 3793:
case 2929:
case 4061:
case 3852:
case 122:
case 910:
case 3133:
case 3485:
case 3636:
case 1992:
case 1947:
case 1220:
case 3583:
case 2858:
case 4079:
case 2383:
case 3085:
case 1282:
case 3042:
case 2849:
case 1582:
case 2448:
case 1394:
case 3119:
case 269:
case 3283:
case 3561:
case 1520:
case 567:
case 4059:
case 2649:
case 1094:
case 289:
case 2995:
case 870:
case 3397:
case 2285:
case 2597:
case 2479:
case 587:
case 1343:
case 2297:
case 2585:
case 565:
case 3944:
case 952:
case 2987:
case 3385:
case 890:
case 2795:
case 469:
case 1873:
case 2483:
case 2135:
case 3559:
case 3259:
case 1653:
case 534:
case 2890:
case 2348:
case 2601:
case 1088:
case 3548:
case 1100:
case 3878:
case 3597:
case 997:
case 2342:
case 2397:
case 389:
case 1020:
case 3061:
case 2385:
case 3987:
case 815:
case 175:
case 1045:
case 3483:
case 4042:
case 1750:
case 3359:
case 3795:
case 3787:
case 2872:
case 1482:
case 2548:
case 3601:
case 3348:
case 1167:
case 102:
case 2824:
case 1420:
case 3461:
case 1340:
case 1499:
case 1898:
case 3829:
case 2022:
case 1577:
case 3749:
case 2080:
case 2108:
case 3758:
case 93:
case 904:
case 2354:
case 3901:
case 3554:
case 1466:
case 3695:
case 1775:
case 1066:
case 1099:
case 3411:
case 3958:
case 10:
case 2474:
case 3687:
case 208:
case 348:
case 603:
case 1540:
case 3074:
case 3952:
case 1225:
case 3022:
case 2254:
case 2011:
case 499:
case 95:
case 2554:
case 2901:
case 575:
case 458:
case 1023:
case 2695:
case 1457:
case 479:
case 124:
case 3151:
case 2949:
case 154:
case 1831:
case 2701:
case 2102:
case 308:
case 3480:
case 2687:
case 3474:
case 806:
case 502:
case 2028:
case 1727:
case 1980:
case 3373:
case 1974:
case 1922:
case 626:
case 3255:
case 2573:
case 2273:
case 1590:
case 0:
case 1372:
case 656:
case 2355:
case 1118:
case 3957:
case 1324:
case 3027:
case 818:
case 3923:
case 494:
case 27:
case 3053:
case 3389:
case 2966:
case 1780:
case 75:
case 3694:
case 1578:
case 1897:
case 2620:
case 3453:
case 1121:
case 1722:
case 3160:
case 1278:
case 72:
case 3843:
case 2645:
case 4055:
case 482:
case 1336:
case 2113:
case 3757:
case 2999:
case 2255:
case 1859:
case 1458:
case 1272:
case 2373:
case 2053:
case 1390:
case 37:
case 2923:
case 767:
case 216:
case 2027:
case 2957:
case 3799:
case 1524:
case 568:
case 2555:
case 1001:
case 3139:
case 744:
case 3273:
case 833:
case 2694:
case 1401:
case 2389:
case 2757:
case 3113:
case 949:
case 1928:
case 3475:
case 1536:
case 3289:
case 2270:
case 1593:
case 3716:
case 2284:
case 3231:
case 2994:
case 3406:
case 1095:
case 3292:
case 345:
case 1961:
case 3920:
case 425:
case 1983:
case 2788:
case 3370:
case 2331:
case 3384:
case 1779:
case 2392:
case 2347:
case 372:
case 1628:
case 3945:
case 777:
case 631:
case 384:
case 36:
case 1293:
case 337:
case 3181:
case 732:
case 2598:
case 1487:
case 3398:
case 3840:
case 3720:
case 2110:
case 2794:
case 257:
case 1611:
case 227:
case 4031:
case 2988:
case 1783:
case 2657:
case 1495:
case 3450:
case 2050:
case 245:
case 1393:
case 2247:
case 3994:
case 2231:
case 3284:
case 2716:
case 2982:
case 3270:
case 407:
case 3126:
case 311:
case 2699:
case 26:
case 1168:
case 272:
case 651:
case 2370:
case 357:
case 3794:
case 752:
case 1444:
case 2720:
case 2840:
case 1622:
case 2398:
case 3598:
case 617:
case 2782:
case 2181:
case 3134:
case 1529:
case 2450:
case 2163:
case 292:
case 3623:
case 205:
case 464:
case 2006:
case 3298:
case 3657:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1747234801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,];
var gg_b = "1747234801/";

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
