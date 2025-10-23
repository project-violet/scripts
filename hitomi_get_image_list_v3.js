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
case 2114:
case 114:
case 3013:
case 683:
case 870:
case 3270:
case 203:
case 360:
case 695:
case 4033:
case 2243:
case 736:
case 65:
case 220:
case 3376:
case 2553:
case 1634:
case 455:
case 1103:
case 1277:
case 3414:
case 3011:
case 1988:
case 4031:
case 2972:
case 285:
case 2302:
case 1989:
case 3641:
case 722:
case 3538:
case 2315:
case 293:
case 3236:
case 1101:
case 777:
case 1281:
case 896:
case 3994:
case 1797:
case 354:
case 52:
case 325:
case 2191:
case 412:
case 2575:
case 122:
case 2123:
case 2836:
case 3766:
case 1392:
case 136:
case 1283:
case 1139:
case 4008:
case 3757:
case 2618:
case 2870:
case 561:
case 3924:
case 2049:
case 3219:
case 2967:
case 2056:
case 3843:
case 714:
case 1322:
case 4009:
case 3491:
case 380:
case 2048:
case 3094:
case 3501:
case 3218:
case 129:
case 3423:
case 1453:
case 663:
case 1018:
case 309:
case 3804:
case 3981:
case 588:
case 3626:
case 1656:
case 1364:
case 195:
case 1648:
case 1019:
case 392:
case 552:
case 614:
case 2357:
case 3083:
case 3254:
case 3696:
case 1224:
case 2385:
case 1165:
case 1919:
case 1186:
case 105:
case 2409:
case 2260:
case 1667:
case 3081:
case 1918:
case 2296:
case 399:
case 835:
case 2598:
case 2408:
case 1533:
case 2654:
case 3484:
case 705:
case 1499:
case 2854:
case 1036:
case 3702:
case 2159:
case 1867:
case 2934:
case 622:
case 341:
case 1206:
case 2433:
case 3896:
case 3977:
case 3446:
case 3077:
case 3565:
case 3586:
case 75:
case 3288:
case 3459:
case 2689:
case 1848:
case 2776:
case 1429:
case 211:
case 971:
case 1856:
case 783:
case 3826:
case 3458:
case 2688:
case 795:
case 1213:
case 3585:
case 1671:
case 3703:
case 989:
case 3400:
case 2775:
case 2669:
case 374:
case 1855:
case 1407:
case 131:
case 864:
case 247:
case 1550:
case 3716:
case 982:
case 1035:
case 1346:
case 1887:
case 1673:
case 3701:
case 1358:
case 944:
case 3880:
case 3328:
case 317:
case 1527:
case 1212:
case 2365:
case 475:
case 3680:
case 2450:
case 67:
case 1185:
case 1687:
case 2427:
case 2295:
case 3464:
case 849:
case 3197:
case 850:
case 3738:
case 3982:
case 1120:
case 1157:
case 2869:
case 3127:
case 157:
case 2225:
case 1384:
case 731:
case 969:
case 2164:
case 2497:
case 3063:
case 2507:
case 2530:
case 2339:
case 4027:
case 2987:
case 1708:
case 3351:
case 3502:
case 3492:
case 533:
case 3515:
case 2338:
case 1709:
case 1393:
case 2279:
case 3810:
case 951:
case 3842:
case 898:
case 1817:
case 527:
case 2576:
case 2192:
case 3679:
case 3765:
case 1391:
case 77:
case 3786:
case 3012:
case 3040:
case 937:
case 2635:
case 3005:
case 2073:
case 3174:
case 1115:
case 1969:
case 2552:
case 3878:
case 2137:
case 1102:
case 2729:
case 1047:
case 2798:
case 3744:
case 1733:
case 1314:
case 2799:
case 2303:
case 3905:
case 3375:
case 3437:
case 813:
case 1068:
case 497:
case 3912:
case 4077:
case 161:
case 2368:
case 536:
case 2406:
case 1233:
case 3244:
case 2298:
case 1916:
case 529:
case 2596:
case 2014:
case 3113:
case 781:
case 1901:
case 2560:
case 2369:
case 973:
case 2411:
case 2914:
case 41:
case 1016:
case 2229:
case 2347:
case 1659:
case 3106:
case 441:
case 1646:
case 2742:
case 2526:
case 522:
case 1903:
case 343:
case 2023:
case 1387:
case 2778:
case 577:
case 3124:
case 1154:
case 3588:
case 640:
case 794:
case 298:
case 2091:
case 3265:
case 2494:
case 2167:
case 1513:
case 2993:
case 1426:
case 2686:
case 3828:
case 3380:
case 3589:
case 4062:
case 652:
case 409:
case 761:
case 1684:
case 1038:
case 1209:
case 2148:
case 816:
case 3467:
case 2093:
case 492:
case 688:
case 1460:
case 2844:
case 3898:
case 2991:
case 208:
case 2156:
case 1039:
case 1208:
case 4083:
case 1496:
case 2923:
case 926:
case 3651:
case 604:
case 788:
case 3183:
case 284:
case 2541:
case 563:
case 1986:
case 1965:
case 1693:
case 480:
case 3536:
case 3238:
case 168:
case 3875:
case 319:
case 2251:
case 2780:
case 3162:
case 2483:
case 3570:
case 987:
case 1691:
case 3909:
case 454:
case 2795:
case 1577:
case 2816:
case 425:
case 3378:
case 249:
case 4011:
case 1705:
case 2601:
case 3031:
case 4006:
case 1740:
case 1583:
case 3434:
case 3933:
case 1944:
case 3216:
case 3747:
case 159:
case 2335:
case 3201:
case 1823:
case 1136:
case 1317:
case 1170:
case 2603:
case 2946:
case 3675:
case 1562:
case 2134:
case 460:
case 3931:
case 1821:
case 152:
case 2275:
case 595:
case 3203:
case 3343:
case 84:
case 3676:
case 921:
case 1334:
case 1713:
case 2900:
case 1442:
case 2370:
case 2579:
case 3788:
case 3932:
case 2704:
case 811:
case 679:
case 3417:
case 3852:
case 2578:
case 2276:
case 397:
case 1822:
case 766:
case 2602:
case 4040:
case 307:
case 96:
case 1711:
case 4005:
case 1892:
case 3215:
case 2000:
case 2336:
case 672:
case 2045:
case 3630:
case 1135:
case 3097:
case 2463:
case 3182:
case 3161:
case 3830:
case 3950:
case 2796:
case 3927:
case 2815:
case 1085:
case 1090:
case 2964:
case 235:
case 2726:
case 1479:
case 3163:
case 2510:
case 2319:
case 1057:
case 1985:
case 633:
case 166:
case 3050:
case 2318:
case 3876:
case 2022:
case 945:
case 818:
case 3220:
case 1250:
case 3718:
case 1227:
case 1512:
case 686:
case 1349:
case 733:
case 928:
case 1505:
case 172:
case 375:
case 3290:
case 1367:
case 2187:
case 296:
case 2354:
case 3568:
case 1762:
case 1781:
case 3396:
case 3455:
case 2685:
case 4061:
case 2890:
case 1015:
case 3105:
case 1232:
case 2173:
case 1600:
case 3074:
case 3140:
case 2741:
case 893:
case 779:
case 270:
case 803:
case 1168:
case 3304:
case 666:
case 3974:
case 1777:
case 2820:
case 3770:
case 2405:
case 1915:
case 2857:
case 133:
case 2389:
case 2412:
case 2440:
case 2937:
case 1372:
case 2002:
case 1890:
case 3468:
case 367:
case 877:
case 2015:
case 3200:
case 3632:
case 1866:
case 43:
case 2232:
case 1207:
case 2600:
case 1173:
case 4042:
case 3469:
case 2645:
case 3306:
case 3976:
case 3030:
case 1741:
case 3555:
case 3587:
case 170:
case 814:
case 2168:
case 3930:
case 3076:
case 2777:
case 1388:
case 3850:
case 955:
case 3827:
case 1171:
case 2915:
case 924:
case 99:
case 1743:
case 1412:
case 2864:
case 2372:
case 1440:
case 1937:
case 2902:
case 3394:
case 1657:
case 3627:
case 919:
case 2227:
case 3650:
case 2349:
case 2540:
case 1620:
case 1155:
case 478:
case 3264:
case 912:
case 272:
case 2845:
case 196:
case 1092:
case 2762:
case 3832:
case 3180:
case 1922:
case 3179:
case 4095:
case 3362:
case 2920:
case 805:
case 4080:
case 1796:
case 2066:
case 1815:
case 332:
case 2837:
case 3767:
case 1802:
case 1726:
case 2622:
case 1461:
case 1510:
case 1319:
case 2057:
case 2985:
case 2966:
case 4025:
case 3749:
case 3383:
case 85:
case 266:
case 339:
case 1318:
case 895:
case 1252:
case 2794:
case 3772:
case 2334:
case 2713:
case 1900:
case 2442:
case 2561:
case 2582:
case 3377:
case 1704:
case 1276:
case 3435:
case 2706:
case 456:
case 1230:
case 3007:
case 735:
case 1000:
case 1117:
case 3674:
case 1336:
case 1045:
case 3237:
case 2135:
case 458:
case 2705:
case 3028:
case 444:
case 1601:
case 1616:
case 2740:
case 1059:
case 2944:
case 3998:
case 259:
case 1335:
case 1046:
case 2823:
case 1839:
case 101:
case 2044:
case 3098:
case 3143:
case 2441:
case 2893:
case 2821:
case 742:
case 1958:
case 3436:
case 1462:
case 184:
case 2621:
case 1084:
case 613:
case 2986:
case 2965:
case 4026:
case 54:
case 142:
case 3293:
case 268:
case 2118:
case 1251:
case 1543:
case 3534:
case 4060:
case 462:
case 1795:
case 3419:
case 2577:
case 150:
case 791:
case 1984:
case 1801:
case 3223:
case 1023:
case 2846:
case 2939:
case 2154:
case 1091:
case 1494:
case 1167:
case 1665:
case 1993:
case 2426:
case 1779:
case 3831:
case 3160:
case 353:
case 585:
case 3196:
case 3572:
case 2858:
case 3608:
case 1021:
case 3454:
case 2684:
case 2209:
case 1148:
case 3833:
case 601:
case 2460:
case 1844:
case 2208:
case 520:
case 3284:
case 2506:
case 2355:
case 1299:
case 1644:
case 642:
case 3633:
case 1368:
case 400:
case 2233:
case 1406:
case 4043:
case 1172:
case 321:
case 1298:
case 2371:
case 1014:
case 3808:
case 113:
case 1560:
case 1369:
case 3488:
case 1914:
case 22:
case 294:
case 3548:
case 2001:
case 2016:
case 1229:
case 3259:
case 3312:
case 907:
case 1526:
case 36:
case 2646:
case 1742:
case 1228:
case 3975:
case 1413:
case 1710:
case 3258:
case 894:
case 3882:
case 3861:
case 596:
case 356:
case 1635:
case 4007:
case 1073:
case 1242:
case 2617:
case 2115:
case 3522:
case 3746:
case 1971:
case 1552:
case 1301:
case 2476:
case 2047:
case 371:
case 2733:
case 8:
case 1071:
case 1474:
case 2069:
case 1303:
case 2068:
case 3592:
case 804:
case 238:
case 2263:
case 734:
case 647:
case 116:
case 1987:
case 2708:
case 1055:
case 439:
case 3980:
case 3995:
case 1338:
case 2709:
case 2393:
case 2282:
case 2261:
case 3095:
case 1279:
case 3080:
case 999:
case 1087:
case 2817:
case 1955:
case 1192:
case 1278:
case 902:
case 2452:
case 925:
case 1847:
case 2166:
case 2185:
case 1427:
case 3805:
case 1280:
case 1295:
case 3812:
case 4052:
case 3979:
case 3309:
case 3500:
case 980:
case 1751:
case 747:
case 2157:
case 1869:
case 868:
case 3978:
case 2384:
case 378:
case 4076:
case 2671:
case 1775:
case 1669:
case 2855:
case 2407:
case 1344:
case 3333:
case 852:
case 147:
case 2359:
case 1145:
case 3612:
case 3640:
case 2035:
case 3605:
case 33:
case 1017:
case 3273:
case 3564:
case 859:
case 2205:
case 2527:
case 2509:
case 2970:
case 2345:
case 1159:
case 1934:
case 3943:
case 549:
case 1433:
case 390:
case 665:
case 2508:
case 1158:
case 3332:
case 2774:
case 3128:
case 4075:
case 300:
case 1776:
case 111:
case 421:
case 2856:
case 3043:
case 1034:
case 2070:
case 323:
case 2936:
case 2849:
case 542:
case 2213:
case 3350:
case 2018:
case 1529:
case 3465:
case 3546:
case 25:
case 620:
case 74:
case 1889:
case 3694:
case 2648:
case 866:
case 1528:
case 1226:
case 1357:
case 2531:
case 3249:
case 1184:
case 1366:
case 693:
case 48:
case 2224:
case 1385:
case 2165:
case 1409:
case 2186:
case 453:
case 3397:
case 3806:
case 2667:
case 946:
case 591:
case 1598:
case 3624:
case 351:
case 1654:
case 2281:
case 872:
case 362:
case 3060:
case 165:
case 1191:
case 793:
case 3926:
case 222:
case 1123:
case 3681:
case 1949:
case 3662:
case 1836:
case 3153:
case 2392:
case 2054:
case 2283:
case 1618:
case 1049:
case 611:
case 428:
case 1056:
case 3960:
case 2322:
case 1048:
case 1619:
case 1193:
case 3996:
case 3683:
case 214:
case 3677:
case 3883:
case 103:
case 2089:
case 1819:
case 3416:
case 833:
case 120:
case 1553:
case 3004:
case 2088:
case 1670:
case 2277:
case 3401:
case 3175:
case 765:
case 598:
case 3881:
case 3374:
case 2732:
case 2988:
case 1241:
case 2337:
case 185:
case 1551:
case 1302:
case 2989:
case 193:
case 3403:
case 827:
case 2101:
case 4070:
case 3371:
case 1244:
case 3233:
case 3189:
case 2633:
case 3:
case 3524:
case 871:
case 2075:
case 619:
case 2104:
case 143:
case 1111:
case 2258:
case 3373:
case 2556:
case 2975:
case 2305:
case 26:
case 3646:
case 1472:
case 1629:
case 2549:
case 2259:
case 612:
case 3016:
case 3001:
case 856:
case 554:
case 2717:
case 2246:
case 3658:
case 548:
case 3404:
case 2572:
case 2951:
case 2196:
case 1589:
case 1828:
case 3782:
case 3938:
case 3761:
case 1395:
case 253:
case 3426:
case 1448:
case 1286:
case 1588:
case 405:
case 2053:
case 1124:
case 3039:
case 2609:
case 495:
case 3511:
case 1898:
case 381:
case 2833:
case 1467:
case 45:
case 1194:
case 3209:
case 1899:
case 560:
case 3684:
case 2608:
case 655:
case 4018:
case 429:
case 3118:
case 2221:
case 1238:
case 1009:
case 755:
case 2293:
case 3693:
case 3119:
case 228:
case 3986:
case 724:
case 79:
case 436:
case 2755:
case 3621:
case 906:
case 1651:
case 2418:
case 315:
case 3086:
case 70:
case 3577:
case 1909:
case 1570:
case 1162:
case 1181:
case 712:
case 359:
case 3891:
case 2029:
case 2998:
case 3944:
case 3583:
case 3712:
case 2773:
case 1310:
case 502:
case 2436:
case 155:
case 1851:
case 2928:
case 3821:
case 592:
case 3614:
case 1177:
case 719:
case 970:
case 4089:
case 2143:
case 2929:
case 2098:
case 3562:
case 414:
case 19:
case 2771:
case 3822:
case 4068:
case 1852:
case 1417:
case 2907:
case 1788:
case 3410:
case 3713:
case 1676:
case 1343:
case 3135:
case 1202:
case 2237:
case 1630:
case 2674:
case 47:
case 890:
case 1032:
case 2110:
case 2142:
case 107:
case 3637:
case 851:
case 3837:
case 2767:
case 3957:
case 1754:
case 3724:
case 1927:
case 3692:
case 1950:
case 2874:
case 707:
case 1830:
case 1182:
case 1097:
case 2748:
case 3794:
case 2517:
case 2222:
case 730:
case 3020:
case 1535:
case 797:
case 1050:
case 3478:
case 366:
case 2383:
case 2749:
case 908:
case 2756:
case 3479:
case 438:
case 3356:
case 2264:
case 3495:
case 984:
case 3783:
case 2125:
case 457:
case 2650:
case 3227:
case 3512:
case 379:
case 1718:
case 3250:
case 1547:
case 1487:
case 3348:
case 2052:
case 3664:
case 1569:
case 1360:
case 2195:
case 2571:
case 2952:
case 1455:
case 1396:
case 1807:
case 1568:
case 862:
case 949:
case 2697:
case 1140:
case 2555:
case 1112:
case 2306:
case 1074:
case 2311:
case 2469:
case 3600:
case 1471:
case 3232:
case 1105:
case 2245:
case 2468:
case 3002:
case 3902:
case 2734:
case 3864:
case 901:
case 3169:
case 1473:
case 2313:
case 1770:
case 2827:
case 3777:
case 1304:
case 2076:
case 2587:
case 452:
case 2175:
case 3277:
case 3088:
case 2004:
case 1906:
case 2416:
case 4044:
case 692:
case 488:
case 3089:
case 314:
case 2883:
case 2700:
case 3475:
case 1913:
case 3101:
case 2593:
case 440:
case 3116:
case 377:
case 1539:
case 2374:
case 1011:
case 3988:
case 2862:
case 2881:
case 699:
case 244:
case 1785:
case 1421:
case 1766:
case 1024:
case 3451:
case 61:
case 2681:
case 1493:
case 2926:
case 322:
case 4065:
case 4086:
case 148:
case 154:
case 2514:
case 1841:
case 1994:
case 3262:
case 3281:
case 3453:
case 2683:
case 2877:
case 1516:
case 329:
case 2996:
case 1218:
case 2151:
case 180:
case 1501:
case 1094:
case 1491:
case 2960:
case 3322:
case 468:
case 1843:
case 3834:
case 3727:
case 3954:
case 1757:
case 336:
case 3283:
case 4039:
case 1083:
case 3531:
case 2249:
case 916:
case 3648:
case 2694:
case 555:
case 2256:
case 3872:
case 839:
case 3364:
case 660:
case 3656:
case 2486:
case 4038:
case 59:
case 2546:
case 35:
case 1626:
case 3294:
case 826:
case 2248:
case 1962:
case 109:
case 3018:
case 1981:
case 1804:
case 2559:
case 2350:
case 832:
case 1062:
case 1544:
case 251:
case 1081:
case 199:
case 3918:
case 50:
case 3186:
case 3919:
case 102:
case 3224:
case 1696:
case 1254:
case 1983:
case 2332:
case 1977:
case 3774:
case 3211:
case 1896:
case 2041:
case 3508:
case 141:
case 1131:
case 2444:
case 4016:
case 3867:
case 2737:
case 3345:
case 1702:
case 3036:
case 3970:
case 702:
case 3300:
case 3509:
case 3499:
case 1715:
case 42:
case 494:
case 11:
case 404:
case 223:
case 3936:
case 519:
case 3856:
case 3144:
case 461:
case 680:
case 3429:
case 3672:
case 4:
case 2941:
case 1459:
case 200:
case 4003:
case 1586:
case 1565:
case 2199:
case 331:
case 1398:
case 2271:
case 903:
case 1269:
case 3855:
case 3597:
case 1400:
case 1399:
case 3671:
case 920:
case 1566:
case 1557:
case 3240:
case 2331:
case 1328:
case 1880:
case 3205:
case 2564:
case 2273:
case 3673:
case 2605:
case 993:
case 3346:
case 23:
case 1329:
case 4002:
case 1247:
case 985:
case 1082:
case 2840:
case 1464:
case 2805:
case 3873:
case 717:
case 3687:
case 2420:
case 3166:
case 507:
case 472:
case 1963:
case 1695:
case 3532:
case 278:
case 918:
case 1063:
case 2978:
case 3384:
case 2308:
case 1739:
case 845:
case 3157:
case 2721:
case 3120:
case 479:
case 2979:
case 2793:
case 1738:
case 3393:
case 2152:
case 3709:
case 2995:
case 3321:
case 1351:
case 4057:
case 3708:
case 2784:
case 3263:
case 338:
case 4090:
case 3452:
case 3391:
case 1765:
case 1679:
case 2925:
case 4066:
case 1353:
case 4085:
case 3323:
case 2080:
case 1810:
case 617:
case 2095:
case 3261:
case 3476:
case 3047:
case 1235:
case 2759:
case 2217:
case 3115:
case 575:
case 1005:
case 1040:
case 1879:
case 2861:
case 1012:
case 2130:
case 3968:
case 2176:
case 3068:
case 821:
case 3069:
case 486:
case 3314:
case 3733:
case 2863:
case 3430:
case 271:
case 911:
case 1744:
case 2235:
case 1759:
case 3301:
case 2610:
case 587:
case 1217:
case 4000:
case 1522:
case 3728:
case 3073:
case 2005:
case 2040:
case 1861:
case 156:
case 1130:
case 2012:
case 1882:
case 2912:
case 1176:
case 1592:
case 2940:
case 2375:
case 963:
case 3973:
case 1415:
case 678:
case 3798:
case 3338:
case 1663:
case 95:
case 3122:
case 2492:
case 1537:
case 2351:
case 2502:
case 1784:
case 3987:
case 1025:
case 3530:
case 316:
case 4064:
case 995:
case 1682:
case 2786:
case 2422:
case 2679:
case 2353:
case 3576:
case 63:
case 2842:
case 2678:
case 1080:
case 246:
case 3279:
case 1095:
case 2061:
case 1812:
case 656:
case 3295:
case 3280:
case 812:
case 3427:
case 1457:
case 1420:
case 3753:
case 2680:
case 3450:
case 73:
case 3847:
case 1791:
case 178:
case 3497:
case 3225:
case 2127:
case 1308:
case 2739:
case 936:
case 2150:
case 1545:
case 2625:
case 1793:
case 573:
case 2738:
case 2982:
case 3868:
case 347:
case 1333:
case 539:
case 1271:
case 778:
case 1714:
case 3917:
case 1942:
case 3669:
case 3775:
case 2400:
case 1910:
case 2585:
case 470:
case 2566:
case 526:
case 89:
case 977:
case 80:
case 1331:
case 1010:
case 1564:
case 3100:
case 2701:
case 1605:
case 4037:
case 2329:
case 1612:
case 2307:
case 2977:
case 1332:
case 2896:
case 1041:
case 137:
case 1584:
case 190:
case 1444:
case 1943:
case 1606:
case 97:
case 4014:
case 669:
case 2458:
case 3688:
case 2604:
case 413:
case 3034:
case 776:
case 1272:
case 311:
case 1941:
case 100:
case 2459:
case 1894:
case 2288:
case 2586:
case 528:
case 3204:
case 1613:
case 1199:
case 3184:
case 510:
case 2083:
case 1327:
case 1249:
case 3357:
case 3226:
case 292:
case 3528:
case 1558:
case 3752:
case 2109:
case 1722:
case 1546:
case 4093:
case 1465:
case 1248:
case 2804:
case 1350:
case 1559:
case 689:
case 2484:
case 658:
case 790:
case 151:
case 2544:
case 3598:
case 2062:
case 644:
case 299:
case 1806:
case 1397:
case 682:
case 4091:
case 2660:
case 498:
case 202:
case 3390:
case 3385:
case 4023:
case 2696:
case 1792:
case 2254:
case 2785:
case 2421:
case 449:
case 3949:
case 56:
case 2493:
case 1926:
case 225:
case 2790:
case 637:
case 162:
case 254:
case 1096:
case 2720:
case 1683:
case 2516:
case 2218:
case 1996:
case 2423:
case 1151:
case 442:
case 3048:
case 600:
case 1960:
case 3056:
case 318:
case 2219:
case 1026:
case 1764:
case 3967:
case 4084:
case 464:
case 2911:
case 3670:
case 3818:
case 1004:
case 3553:
case 2906:
case 320:
case 2643:
case 1523:
case 1416:
case 401:
case 1234:
case 3819:
case 769:
case 2270:
case 2013:
case 1883:
case 1593:
case 1403:
case 2236:
case 553:
case 2538:
case 3315:
case 182:
case 385:
case 3302:
case 1745:
case 3972:
case 2539:
case 58:
case 2006:
case 3636:
case 1904:
case 4058:
case 762:
case 3707:
case 2414:
case 2140:
case 1976:
case 2112:
case 1469:
case 2074:
case 787:
case 2471:
case 2105:
case 2607:
case 3866:
case 1632:
case 2736:
case 4017:
case 959:
case 3890:
case 1245:
case 632:
case 940:
case 1734:
case 3937:
case 3412:
case 447:
case 3743:
case 3389:
case 3580:
case 988:
case 3595:
case 2473:
case 3857:
case 2770:
case 639:
case 2974:
case 3820:
case 1930:
case 370:
case 1573:
case 2719:
case 3620:
case 2257:
case 673:
case 571:
case 2220:
case 2487:
case 1394:
case 187:
case 1952:
case 3690:
case 825:
case 2396:
case 2807:
case 1832:
case 3354:
case 2568:
case 2266:
case 556:
case 848:
case 767:
case 3187:
case 1697:
case 335:
case 667:
case 132:
case 4087:
case 2950:
case 1362:
case 1381:
case 2830:
case 3760:
case 2097:
case 3463:
case 1748:
case 2535:
case 3318:
case 2050:
case 2027:
case 1383:
case 3319:
case 3510:
case 3461:
case 3482:
case 1756:
case 2652:
case 809:
case 3064:
case 739:
case 3276:
case 1907:
case 3704:
case 1377:
case 2932:
case 434:
case 173:
case 3579:
case 3945:
case 2343:
case 2202:
case 2630:
case 92:
case 3336:
case 841:
case 732:
case 1110:
case 2032:
case 4073:
case 68:
case 817:
case 2201:
case 3477:
case 3046:
case 20:
case 2518:
case 3059:
case 2933:
case 1141:
case 2434:
case 3616:
case 3601:
case 2519:
case 2310:
case 1470:
case 3058:
case 3958:
case 1436:
case 255:
case 2851:
case 1099:
case 364:
case 2177:
case 2768:
case 874:
case 3838:
case 576:
case 420:
case 4072:
case 1143:
case 301:
case 1929:
case 224:
case 3839:
case 933:
case 3803:
case 219:
case 979:
case 2875:
case 1221:
case 3639:
case 2009:
case 2536:
case 4048:
case 3638:
case 418:
case 500:
case 2183:
case 2239:
case 384:
case 1755:
case 3462:
case 1223:
case 1418:
case 349:
case 1787:
case 350:
case 590:
case 3984:
case 537:
case 3253:
case 3816:
case 972:
case 4067:
case 1419:
case 2909:
case 2570:
case 2379:
case 2653:
case 2181:
case 3780:
case 3543:
case 1572:
case 1951:
case 2456:
case 2395:
case 1831:
case 1160:
case 3993:
case 544:
case 2265:
case 2448:
case 846:
case 2286:
case 398:
case 3091:
case 558:
case 3504:
case 2829:
case 2124:
case 1284:
case 721:
case 1953:
case 1609:
case 3991:
case 3844:
case 1454:
case 2899:
case 1051:
case 313:
case 3560:
case 3411:
case 3014:
case 411:
case 3298:
case 121:
case 628:
case 3406:
case 4034:
case 3368:
case 1633:
case 2554:
case 569:
case 3644:
case 1075:
case 3299:
case 1567:
case 1104:
case 243:
case 3710:
case 1258:
case 16:
case 1305:
case 2472:
case 2629:
case 1312:
case 3347:
case 2735:
case 1259:
case 78:
case 1631:
case 1548:
case 1246:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1761224401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,];
var gg_b = "1761224401/";

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
