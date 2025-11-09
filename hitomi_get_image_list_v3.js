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
case 1112:
case 1055:
case 174:
case 466:
case 788:
case 2004:
case 1148:
case 2045:
case 275:
case 712:
case 2158:
case 2936:
case 813:
case 1164:
case 1588:
case 426:
case 3478:
case 2139:
case 2706:
case 1497:
case 2404:
case 1353:
case 1655:
case 472:
case 1863:
case 2343:
case 1297:
case 1255:
case 3549:
case 1737:
case 1870:
case 1029:
case 2904:
case 2036:
case 974:
case 2945:
case 3686:
case 1576:
case 3063:
case 3710:
case 1207:
case 3263:
case 496:
case 3670:
case 2821:
case 1429:
case 2541:
case 4049:
case 1007:
case 2636:
case 3365:
case 2796:
case 3308:
case 1229:
case 1140:
case 356:
case 3855:
case 1580:
case 1002:
case 2835:
case 3256:
case 360:
case 897:
case 399:
case 320:
case 2309:
case 3656:
case 980:
case 1985:
case 3711:
case 2813:
case 2180:
case 1602:
case 692:
case 3754:
case 2820:
case 1992:
case 1202:
case 1581:
case 2327:
case 1567:
case 4093:
case 1141:
case 2846:
case 1366:
case 1372:
case 1539:
case 662:
case 309:
case 1692:
case 807:
case 1492:
case 1732:
case 4003:
case 2564:
case 622:
case 785:
case 2828:
case 871:
case 3575:
case 390:
case 3593:
case 3159:
case 1092:
case 602:
case 369:
case 349:
case 3138:
case 1871:
case 3802:
case 827:
case 1485:
case 989:
case 1685:
case 2399:
case 3886:
case 2894:
case 2761:
case 3097:
case 3148:
case 374:
case 3055:
case 4076:
case 3588:
case 4014:
case 2193:
case 3297:
case 2836:
case 510:
case 4051:
case 798:
case 3737:
case 1829:
case 1549:
case 2621:
case 3655:
case 3353:
case 3455:
case 1742:
case 111:
case 3863:
case 4080:
case 3377:
case 2752:
case 3907:
case 435:
case 37:
case 519:
case 1710:
case 3576:
case 4088:
case 1286:
case 1723:
case 1070:
case 3997:
case 1686:
case 3878:
case 3769:
case 728:
case 1131:
case 1486:
case 3607:
case 232:
case 1308:
case 1365:
case 1663:
case 1978:
case 2525:
case 1670:
case 1263:
case 3551:
case 911:
case 1086:
case 1390:
case 1656:
case 2531:
case 725:
case 120:
case 2920:
case 2913:
case 1711:
case 2446:
case 4039:
case 561:
case 909:
case 4058:
case 2628:
case 438:
case 1071:
case 521:
case 887:
case 389:
case 973:
case 2935:
case 3141:
case 2046:
case 533:
case 1271:
case 3602:
case 2028:
case 3402:
case 2744:
case 1885:
case 705:
case 969:
case 577:
case 216:
case 937:
case 1671:
case 990:
case 2705:
case 2879:
case 3558:
case 2020:
case 3292:
case 2635:
case 380:
case 920:
case 2757:
case 3902:
case 2795:
case 3492:
case 1747:
case 2235:
case 1301:
case 940:
case 3539:
case 4050:
case 858:
case 1138:
case 1956:
case 2420:
case 2782:
case 2620:
case 3383:
case 2315:
case 2413:
case 2946:
case 591:
case 251:
case 2035:
case 137:
case 4081:
case 190:
case 795:
case 2928:
case 2149:
case 2220:
case 900:
case 2213:
case 3092:
case 1159:
case 2649:
case 1521:
case 1841:
case 2449:
case 1238:
case 1659:
case 2387:
case 119:
case 3617:
case 1700:
case 2249:
case 3545:
case 1638:
case 1259:
case 3504:
case 2113:
case 3217:
case 698:
case 2049:
case 910:
case 1925:
case 296:
case 1059:
case 3337:
case 1038:
case 3753:
case 2876:
case 1318:
case 2352:
case 1030:
case 919:
case 475:
case 3102:
case 4045:
case 1310:
case 84:
case 1425:
case 3838:
case 86:
case 4004:
case 266:
case 3536:
case 82:
case 608:
case 2570:
case 1225:
case 3441:
case 3641:
case 1708:
case 2949:
case 715:
case 110:
case 1430:
case 1630:
case 206:
case 1959:
case 80:
case 1025:
case 3594:
case 2586:
case 3041:
case 1790:
case 2146:
case 668:
case 648:
case 894:
case 3912:
case 1170:
case 3948:
case 3129:
case 941:
case 1311:
case 509:
case 2571:
case 3640:
case 921:
case 2003:
case 478:
case 381:
case 4079:
case 191:
case 665:
case 1826:
case 2203:
case 901:
case 573:
case 2556:
case 883:
case 2344:
case 1864:
case 9:
case 1791:
case 1989:
case 549:
case 625:
case 1354:
case 2975:
case 1528:
case 2403:
case 2603:
case 2305:
case 1848:
case 718:
case 250:
case 590:
case 3332:
case 3012:
case 1520:
case 1840:
case 2360:
case 3579:
case 520:
case 1689:
case 2395:
case 2693:
case 1489:
case 259:
case 599:
case 2357:
case 1701:
case 2675:
case 2867:
case 3026:
case 101:
case 3448:
case 1535:
case 3783:
case 2715:
case 991:
case 3464:
case 1178:
case 3212:
case 3831:
case 3248:
case 3940:
case 1089:
case 2093:
case 500:
case 2075:
case 3638:
case 2179:
case 1545:
case 134:
case 286:
case 3700:
case 2555:
case 1504:
case 235:
case 3259:
case 3238:
case 3930:
case 3841:
case 2914:
case 1617:
case 1417:
case 3459:
case 93:
case 2976:
case 3659:
case 3318:
case 2488:
case 2951:
case 3342:
case 1941:
case 2743:
case 1777:
case 432:
case 2980:
case 2288:
case 1337:
case 3059:
case 1192:
case 612:
case 2451:
case 2988:
case 2280:
case 4021:
case 3817:
case 2529:
case 934:
case 1441:
case 3225:
case 3310:
case 2014:
case 2680:
case 13:
case 1102:
case 852:
case 884:
case 3030:
case 1838:
case 3323:
case 3171:
case 1594:
case 3156:
case 2507:
case 2051:
case 2262:
case 3790:
case 657:
case 3384:
case 2080:
case 2662:
case 3025:
case 1917:
case 2462:
case 2676:
case 2476:
case 1640:
case 1440:
case 3163:
case 2650:
case 2450:
case 2281:
case 4020:
case 870:
case 2667:
case 580:
case 1912:
case 2467:
case 1964:
case 893:
case 2136:
case 2893:
case 2481:
case 792:
case 451:
case 4035:
case 3989:
case 1040:
case 3864:
case 3231:
case 2050:
case 3546:
case 2067:
case 3826:
case 2194:
case 3489:
case 1766:
case 2319:
case 321:
case 3689:
case 1724:
case 361:
case 3289:
case 831:
case 1579:
case 3931:
case 803:
case 1064:
case 3520:
case 2058:
case 3089:
case 1940:
case 1248:
case 2592:
case 2439:
case 636:
case 2639:
case 3178:
case 1264:
case 823:
case 722:
case 1648:
case 301:
case 2239:
case 333:
case 843:
case 2658:
case 2981:
case 1664:
case 863:
case 4028:
case 589:
case 1226:
case 742:
case 3235:
case 3757:
case 4031:
case 2902:
case 2372:
case 1719:
case 3435:
case 1828:
case 2292:
case 1548:
case 3013:
case 1512:
case 1188:
case 1564:
case 853:
case 3020:
case 752:
case 1079:
case 491:
case 2285:
case 3213:
case 2092:
case 3928:
case 3149:
case 3413:
case 2485:
case 3946:
case 2685:
case 2383:
case 3613:
case 1679:
case 2871:
case 3620:
case 3420:
case 441:
case 3246:
case 78:
case 3428:
case 1835:
case 3913:
case 978:
case 2985:
case 3646:
case 1979:
case 3531:
case 3920:
case 3228:
case 1820:
case 1540:
case 3879:
case 401:
case 2402:
case 2602:
case 2550:
case 2141:
case 613:
case 1327:
case 4089:
case 1151:
case 2581:
case 1945:
case 1694:
case 1316:
case 2769:
case 2407:
case 1036:
case 2955:
case 1374:
case 975:
case 1904:
case 802:
case 3530:
case 2207:
case 647:
case 1322:
case 27:
case 1734:
case 2576:
case 2551:
case 1094:
case 822:
case 1821:
case 2629:
case 4059:
case 1150:
case 743:
case 4038:
case 607:
case 2140:
case 2229:
case 1796:
case 3845:
case 1936:
case 1158:
case 2164:
case 1045:
case 2148:
case 2929:
case 274:
case 2112:
case 1004:
case 793:
case 2126:
case 1139:
case 3894:
case 1445:
case 1645:
case 1343:
case 2863:
case 410:
case 3752:
case 3221:
case 1604:
case 2455:
case 2353:
case 2697:
case 4025:
case 2497:
case 3175:
case 3621:
case 3421:
case 697:
case 2255:
case 1204:
case 1517:
case 3559:
case 2297:
case 3836:
case 3512:
case 1760:
case 76:
case 3548:
case 3828:
case 3079:
case 481:
case 378:
case 3188:
case 209:
case 2301:
case 2971:
case 1795:
case 3526:
case 1757:
case 2802:
case 3399:
case 4040:
case 1620:
case 815:
case 3679:
case 2159:
case 2593:
case 1220:
case 1928:
case 1149:
case 3279:
case 237:
case 1446:
case 2711:
case 724:
case 1920:
case 2892:
case 4012:
case 299:
case 559:
case 2071:
case 3162:
case 744:
case 4048:
case 1246:
case 3114:
case 2503:
case 3835:
case 260:
case 240:
case 2256:
case 79:
case 2271:
case 1046:
case 951:
case 3151:
case 2671:
case 2125:
case 2754:
case 3540:
case 116:
case 3820:
case 2885:
case 200:
case 1028:
case 3180:
case 2723:
case 1921:
case 434:
case 3294:
case 2286:
case 3734:
case 3322:
case 3036:
case 3316:
case 3494:
case 3945:
case 3904:
case 2070:
case 1804:
case 3236:
case 3150:
case 1845:
case 2784:
case 2270:
case 1525:
case 2978:
case 596:
case 132:
case 2086:
case 3094:
case 3167:
case 2470:
case 3541:
case 61:
case 2398:
case 3139:
case 546:
case 566:
case 43:
case 375:
case 3158:
case 3936:
case 3004:
case 2300:
case 1421:
case 1175:
case 2549:
case 572:
case 506:
case 2189:
case 1836:
case 1193:
case 2078:
case 1221:
case 1752:
case 3645:
case 3445:
case 3994:
case 2986:
case 0:
case 882:
case 868:
case 848:
case 694:
case 1275:
case 2513:
case 241:
case 261:
case 1293:
case 2289:
case 60:
case 828:
case 2701:
case 1475:
case 1675:
case 1121:
case 221:
case 2689:
case 3658:
case 808:
case 201:
case 3803:
case 1382:
case 3258:
case 1093:
case 3639:
case 2178:
case 950:
case 3439:
case 3136:
case 3709:
case 3467:
case 3450:
case 1003:
case 3650:
case 959:
case 69:
case 4085:
case 3267:
case 1571:
case 2186:
case 644:
case 898:
case 1556:
case 3081:
case 2546:
case 551:
case 291:
case 2231:
case 1368:
case 2848:
case 1603:
case 1305:
case 2864:
case 1993:
case 3076:
case 4055:
case 474:
case 2171:
case 3062:
case 3014:
case 3722:
case 3680:
case 3334:
case 3716:
case 126:
case 3529:
case 2225:
case 1570:
case 3774:
case 3651:
case 2817:
case 3462:
case 3662:
case 3476:
case 1888:
case 2959:
case 3676:
case 210:
case 2630:
case 172:
case 3614:
case 2765:
case 2708:
case 3080:
case 1128:
case 3262:
case 1146:
case 3276:
case 2790:
case 2156:
case 895:
case 3051:
case 3214:
case 2659:
case 2459:
case 1851:
case 3306:
case 2798:
case 2238:
case 825:
case 2521:
case 683:
case 1449:
case 3914:
case 966:
case 1113:
case 3597:
case 335:
case 2259:
case 865:
case 2438:
case 2638:
case 845:
case 2700:
case 3088:
case 1120:
case 1249:
case 196:
case 1578:
case 3980:
case 3288:
case 1049:
case 1135:
case 2318:
case 1862:
case 805:
case 2342:
case 3121:
case 3373:
case 3475:
case 420:
case 3395:
case 857:
case 3357:
case 1039:
case 359:
case 3360:
case 440:
case 3275:
case 1145:
case 138:
case 3293:
case 2197:
case 3850:
case 2332:
case 2626:
case 1258:
case 1439:
case 652:
case 2212:
case 1639:
case 3093:
case 2940:
case 2226:
case 2783:
case 1799:
case 400:
case 2664:
case 2412:
case 1967:
case 2648:
case 2448:
case 812:
case 281:
case 1650:
case 3003:
case 1450:
case 3571:
case 888:
case 1267:
case 2440:
case 578:
case 1481:
case 1958:
case 2889:
case 1136:
case 2912:
case 1467:
case 1875:
case 2240:
case 3368:
case 3975:
case 3403:
case 350:
case 3858:
case 3993:
case 2040:
case 437:
case 3203:
case 1081:
case 490:
case 469:
case 68:
case 3570:
case 2641:
case 1529:
case 986:
case 2369:
case 935:
case 2536:
case 1280:
case 2859:
case 1451:
case 1988:
case 3563:
case 1062:
case 885:
case 366:
case 623:
case 2241:
case 1076:
case 771:
case 836:
case 1334:
case 1480:
case 603:
case 2041:
case 747:
case 1262:
case 1214:
case 2594:
case 1676:
case 3888:
case 1462:
case 2917:
case 3128:
case 1614:
case 372:
case 3880:
case 1597:
case 4063:
case 1555:
case 2504:
case 2217:
case 3113:
case 3249:
case 3120:
case 1088:
case 1179:
case 2825:
case 3387:
case 2617:
case 1914:
case 3449:
case 3352:
case 2830:
case 693:
case 3814:
case 3135:
case 2941:
case 1688:
case 2753:
case 3578:
case 2017:
case 2192:
case 2337:
case 3049:
case 1288:
case 632:
case 3401:
case 3991:
case 1666:
case 3789:
case 809:
case 412:
case 3582:
case 3201:
case 1083:
case 2099:
case 766:
case 371:
case 4068:
case 1266:
case 746:
case 4005:
case 1272:
case 3118:
case 1424:
case 890:
case 91:
case 837:
case 3595:
case 3001:
case 339:
case 2739:
case 869:
case 367:
case 347:
case 583:
case 772:
case 2532:
case 158:
case 215:
case 1385:
case 2758:
case 3560:
case 1712:
case 114:
case 987:
case 2909:
case 3544:
case 4082:
case 2750:
case 2196:
case 2833:
case 330:
case 3091:
case 2209:
case 3872:
case 2027:
case 1983:
case 2767:
case 1801:
case 3356:
case 2609:
case 2227:
case 3901:
case 3491:
case 4060:
case 1966:
case 1302:
case 1972:
case 2627:
case 1169:
case 3291:
case 2009:
case 4073:
case 958:
case 1924:
case 3386:
case 3090:
case 2943:
case 2416:
case 1741:
case 2222:
case 2474:
case 2674:
case 651:
case 524:
case 2216:
case 4052:
case 2274:
case 2422:
case 2622:
case 2780:
case 3690:
case 955:
case 2336:
case 504:
case 3370:
case 3265:
case 3900:
case 2569:
case 856:
case 25:
case 59:
case 3665:
case 2022:
case 2714:
case 3608:
case 3408:
case 3465:
case 3877:
case 485:
case 2043:
case 1077:
case 1053:
case 3738:
case 3759:
case 3698:
case 1717:
case 54:
case 616:
case 3908:
case 3200:
case 2537:
case 254:
case 282:
case 2345:
case 2443:
case 2916:
case 750:
case 218:
case 2974:
case 1453:
case 2304:
case 2243:
case 2922:
case 1890:
case 593:
case 1118:
case 880:
case 171:
case 2809:
case 1401:
case 1601:
case 930:
case 3472:
case 3672:
case 107:
case 1991:
case 3483:
case 3891:
case 3764:
case 358:
case 127:
case 3712:
case 2320:
case 1595:
case 3519:
case 147:
case 2161:
case 1573:
case 2915:
case 3983:
case 1866:
case 503:
case 1872:
case 1356:
case 3801:
case 786:
case 468:
case 1544:
case 3740:
case 1091:
case 735:
case 2554:
case 2328:
case 1568:
case 889:
case 927:
case 563:
case 387:
case 675:
case 2511:
case 1291:
case 408:
case 1901:
case 1110:
case 3966:
case 1691:
case 1491:
case 2899:
case 1883:
case 3800:
case 517:
case 2584:
case 3596:
case 2168:
case 87:
case 1725:
case 1008:
case 445:
case 1065:
case 3741:
case 1386:
case 3977:
case 3953:
case 1290:
case 1998:
case 242:
case 1465:
case 405:
case 1665:
case 1363:
case 1111:
case 678:
case 1208:
case 1265:
case 1370:
case 2874:
case 1759:
case 1498:
case 1200:
case 1965:
case 1908:
case 874:
case 3053:
case 1600:
case 1552:
case 2173:
case 2321:
case 1561:
case 3253:
case 2157:
case 3890:
case 1587:
case 3506:
case 2195:
case 3865:
case 3808:
case 2160:
case 4034:
case 1000:
case 3453:
case 3355:
case 3397:
case 3132:
case 355:
case 2660:
case 2460:
case 3177:
case 2295:
case 3599:
case 1515:
case 2082:
case 2673:
case 597:
case 1647:
case 1447:
case 2944:
case 2495:
case 1389:
case 2657:
case 2457:
case 3364:
case 1100:
case 143:
case 1533:
case 1198:
case 3326:
case 2073:
case 2057:
case 2282:
case 2095:
case 571:
case 931:
case 2746:
case 2819:
case 2982:
case 3527:
case 1756:
case 507:
case 2591:
case 2005:
case 1211:
case 1108:
case 2044:
case 775:
case 2268:
case 1331:
case 3509:
case 686:
case 2244:
case 635:
case 2303:
case 2605:
case 2668:
case 2468:
case 2405:
case 567:
case 1947:
case 979:
case 2995:
case 2444:
case 539:
case 415:
case 1423:
case 2565:
case 917:
case 1325:
case 3269:
case 152:
case 1084:
case 1610:
case 1223:
case 513:
case 3707:
case 2952:
case 3341:
case 3669:
case 2590:
case 1942:
case 2806:
case 1210:
case 98:
case 3818:
case 1023:
case 3842:
case 3522:
case 2987:
case 2961:
case 1684:
case 1284:
case 1359:
case 2487:
case 984:
case 1984:
case 1778:
case 3810:
case 18:
case 2287:
case 2052:
case 2834:
case 834:
case 2115:
case 1018:
case 1338:
case 1042:
case 1923:
case 2252:
case 1101:
case 2087:
case 4074:
case 3437:
case 3166:
case 39:
case 2061:
case 2652:
case 2500:
case 3969:
case 4022:
case 2896:
case 3237:
case 1642:
case 304:
case 3124:
case 821:
case 1792:
case 672:
case 3954:
case 606:
case 2619:
case 1232:
case 3389:
case 228:
case 861:
case 3247:
case 841:
case 1153:
case 248:
case 331:
case 2572:
case 379:
case 3047:
case 2566:
case 2019:
case 2339:
case 323:
case 8:
case 646:
case 2524:
case 801:
case 1032:
case 2805:
case 2779:
case 1348:
case 3100:
case 343:
case 363:
case 3211:
case 2350:
case 4015:
case 453:
case 2860:
case 1340:
case 2895:
case 3611:
case 2873:
case 393:
case 183:
case 3771:
case 3654:
case 3454:
case 1702:
case 1509:
case 3331:
case 891:
case 3011:
case 3254:
case 514:
case 2174:
case 298:
case 1932:
case 3786:
case 944:
case 2794:
case 964:
case 2861:
case 1341:
case 1469:
case 1707:
case 3223:
case 2127:
case 492:
case 3918:
case 352:
case 1937:
case 1269:
case 384:
case 3325:
case 16:
case 3610:
case 3191:
case 2434:
case 2736:
case 904:
case 295:
case 555:
case 2109:
case 3284:
case 1522:
case 2362:
case 3023:
case 2376:
case 659:
case 2034:
case 2314:
case 3010:
case 3763:
case 10:
case 2496:
case 3484:
case 402:
case 3042:
case 1543:
case 144:
case 225:
case 96:
case 94:
case 3778:
case 3869:
case 819:
case 3984:
case 2996:
case 1237:
case 2745:
case 205:
case 104:
case 3618:
case 2704:
case 3442:
case 1637:
case 90:
case 3101:
case 422:
case 3923:
case 1172:
case 2934:
case 3182:
case 2053:
case 452:
case 3518:
case 2077:
case 3542:
case 2717:
case 2653:
case 1304:
case 1788:
case 255:
case 2132:
case 1345:
case 2865:
case 2808:
case 4010:
case 2677:
case 182:
case 3160:
case 1119:
case 699:
case 791:
case 1243:
case 640:
case 660:
case 3173:
case 1474:
case 1394:
case 673:
case 721:
case 2307:
case 2977:
case 1422:
case 1274:
case 1780:
case 48:
case 525:
case 669:
case 2800:
case 1216:
case 690:
case 3105:
case 2596:
case 637:
case 505:
case 322:
case 2329:
case 954:
case 982:
case 1016:
case 777:
case 342:
case 3843:
case 1714:
case 3510:
case 2534:
case 701:
case 1209:
case 3328:
case 403:
case 719:
case 611:
case 1027:
case 2983:
case 21:
case 2972:
case 1134:
case 816:
case 443:
case 1227:
case 3511:
case 4047:
case 508:
case 2169:
case 287:
case 1627:
case 2224:
case 2666:
case 2466:
case 2392:
case 3233:
case 656:
case 3809:
case 2624:
case 4054:
case 353:
case 2083:
case 3152:
case 3015:
case 3161:
case 1299:
case 2283:
case 3187:
case 2024:
case 2712:
case 2683:
case 2385:
case 3313:
case 3615:
case 3415:
case 1758:
case 1499:
case 2483:
case 258:
case 598:
case 1532:
case 115:
case 710:
case 3033:
case 976:
case 2378:
case 1749:
case 1816:
case 192:
case 1874:
case 2698:
case 2498:
case 2759:
case 585:
case 213:
case 781:
case 2600:
case 875:
case 3043:
case 1822:
case 2990:
case 2298:
case 689:
case 3119:
case 1195:
case 962:
case 2561:
case 942:
case 3243:
case 3788:
case 3304:
case 3974:
case 1160:
case 382:
case 922:
case 354:
case 3443:
case 3916:
case 3643:
case 3345:
case 102:
case 3622:
case 2065:
case 3780:
case 1168:
case 2725:
case 176:
case 444:
case 3751:
case 3222:
case 3474:
case 3616:
case 2408:
case 1523:
case 2665:
case 3714:
case 1843:
case 3022:
case 2730:
case 2998:
case 35:
case 3762:
case 1510:
case 2265:
case 3569:
case 2490:
case 49:
case 2111:
case 3336:
case 3767:
case 3609:
case 2872:
case 3999:
case 1346:
case 2866:
case 1554:
case 2568:
case 3833:
case 2824:
case 3750:
case 734:
case 3009:
case 2291:
case 1511:
case 3427:
case 674:
case 1899:
case 3815:
case 2901:
case 2371:
case 271:
case 2118:
case 73:
case 1152:
case 3099:
case 2201:
case 153:
case 1433:
case 1335:
case 207:
case 2991:
case 1809:
case 1320:
case 2560:
case 3909:
case 315:
case 3499:
case 1415:
case 1161:
case 3739:
case 247:
case 1827:
case 3106:
case 1215:
case 2001:
case 1187:
case 239:
case 2557:
case 576:
case 1661:
case 2984:
case 936:
case 2778:
case 2869:
case 1461:
case 1349:
case 1687:
case 3606:
case 502:
case 3406:
case 325:
case 835:
case 2018:
case 3553:
case 1115:
case 886:
case 3199:
case 28:
case 2218:
case 3934:
case 562:
case 789:
case 3006:
case 2923:
case 1087:
case 2418:
case 2642:
case 1133:
case 1896:
case 3745:
case 305:
case 1652:
case 3096:
case 3434:
case 2191:
case 3634:
case 136:
case 252:
case 4053:
case 1508:
case 2623:
case 2325:
case 1590:
case 3496:
case 3314:
case 2010:
case 1961:
case 3362:
case 455:
case 3376:
case 3906:
case 3109:
case 2837:
case 3736:
case 2756:
case 553:
case 1746:
case 3857:
case 2190:
case 112:
case 1044:
case 3860:
case 2165:
case 188:
case 2054:
case 3350:
case 774:
case 3174:
case 1244:
case 3116:
case 4072:
case 634:
case 1960:
case 3122:
case 1995:
case 1644:
case 2947:
case 4024:
case 414:
case 1668:
case 1303:
case 1405:
case 2771:
case 1973:
case 2654:
case 2515:
case 3219:
case 1295:
case 348:
case 2247:
case 1273:
case 988:
case 1695:
case 1393:
case 328:
case 157:
case 1375:
case 1673:
case 912:
case 1905:
case 1968:
case 3868:
case 1720:
case 263:
case 1682:
case 2100:
case 243:
case 1060:
case 2911:
case 3019:
case 487:
case 1095:
case 1501:
case 223:
case 1057:
case 1073:
case 3566:
case 799:
case 2543:
case 4008:
case 1206:
case 145:
case 165:
case 760:
case 2810:
case 3287:
case 3349:
case 224:
case 3661:
case 720:
case 125:
case 2037:
case 3487:
case 2317:
case 2797:
case 2755:
case 2124:
case 3652:
case 3500:
case 105:
case 1745:
case 3133:
case 3896:
case 2969:
case 3598:
case 896:
case 1934:
case 3061:
case 3252:
case 3721:
case 1006:
case 2637:
case 3590:
case 3806:
case 2707:
case 1794:
case 633:
case 2669:
case 2341:
case 1861:
case 1634:
case 1434:
case 6:
case 925:
case 1096:
case 677:
case 2937:
case 413:
case 336:
case 2269:
case 554:
case 905:
case 582:
case 1296:
case 749:
case 2729:
case 2516:
case 518:
case 2574:
case 641:
case 1496:
case 1034:
case 4000:
case 1906:
case 2818:
case 1376:
case 3728:
case 312:
case 3005:
case 471:
case 1350:
case 3982:
case 1367:
case 1873:
case 3746:
case 3819:
case 1895:
case 1381:
case 3644:
case 3468:
case 427:
case 3303:
case 3605:
case 711:
case 1882:
case 4001:
case 198:
case 515:
case 3205:
case 447:
case 128:
case 3393:
case 1619:
case 1419:
case 3495:
case 3944:
case 3457:
case 3473:
case 3905:
case 3260:
case 610:
case 3375:
case 3673:
case 2792:
case 357:
case 2432:
case 3295:
case 1219:
case 2632:
case 2153:
case 1583:
case 3273:
case 430:
case 1143:
case 1339:
case 3501:
case 1019:
case 3482:
case 3720:
case 1868:
case 756:
case 2785:
case 998:
case 3060:
case 1844:
case 1524:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1762686001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,];
var gg_b = "1762686001/";

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
