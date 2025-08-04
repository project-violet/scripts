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
case 1624:
case 1140:
case 3138:
case 2673:
case 1115:
case 2202:
case 3868:
case 1422:
case 1419:
case 3510:
case 2047:
case 2354:
case 2620:
case 2715:
case 3764:
case 2043:
case 1565:
case 3492:
case 1376:
case 1989:
case 3975:
case 112:
case 575:
case 756:
case 207:
case 319:
case 962:
case 190:
case 974:
case 1507:
case 2285:
case 2563:
case 3246:
case 1045:
case 2117:
case 1713:
case 446:
case 1010:
case 1332:
case 541:
case 623:
case 3301:
case 2113:
case 2567:
case 296:
case 3065:
case 203:
case 1717:
case 999:
case 1918:
case 3104:
case 3827:
case 4091:
case 2349:
case 1893:
case 2637:
case 1283:
case 2455:
case 2159:
case 2098:
case 1994:
case 1287:
case 2505:
case 3823:
case 2633:
case 1897:
case 3007:
case 2990:
case 3242:
case 1386:
case 4034:
case 1061:
case 1460:
case 2687:
case 2816:
case 593:
case 3415:
case 3122:
case 2536:
case 671:
case 506:
case 3041:
case 1438:
case 2666:
case 3343:
case 73:
case 2275:
case 2532:
case 3054:
case 801:
case 1367:
case 3906:
case 3157:
case 2812:
case 3639:
case 3347:
case 208:
case 628:
case 3985:
case 689:
case 342:
case 554:
case 1328:
case 2946:
case 1685:
case 3679:
case 940:
case 414:
case 3398:
case 2303:
case 3:
case 2572:
case 3049:
case 645:
case 4008:
case 2365:
case 2576:
case 333:
case 1220:
case 3188:
case 1602:
case 4074:
case 185:
case 1404:
case 2550:
case 3880:
case 3290:
case 463:
case 2360:
case 2486:
case 3053:
case 3026:
case 811:
case 2405:
case 2929:
case 2912:
case 1364:
case 923:
case 218:
case 3295:
case 1879:
case 2338:
case 856:
case 936:
case 1680:
case 121:
case 3772:
case 1234:
case 1161:
case 4033:
case 863:
case 551:
case 2916:
case 2467:
case 722:
case 456:
case 1511:
case 2463:
case 4037:
case 3141:
case 2691:
case 1407:
case 2227:
case 804:
case 587:
case 3313:
case 570:
case 195:
case 3732:
case 1557:
case 1701:
case 1274:
case 2921:
case 867:
case 57:
case 2256:
case 746:
case 2842:
case 2252:
case 1169:
case 1839:
case 404:
case 3736:
case 662:
case 1522:
case 3011:
case 2769:
case 3149:
case 2304:
case 1299:
case 2450:
case 102:
case 3875:
case 1889:
case 2319:
case 2322:
case 18:
case 4058:
case 640:
case 3705:
case 2500:
case 1578:
case 177:
case 3229:
case 655:
case 83:
case 180:
case 2995:
case 64:
case 1743:
case 2472:
case 1040:
case 1656:
case 3038:
case 2357:
case 3767:
case 3697:
case 3968:
case 1948:
case 2044:
case 1747:
case 3763:
case 2608:
case 3060:
case 4083:
case 1993:
case 3927:
case 2059:
case 2198:
case 3648:
case 1630:
case 3103:
case 1894:
case 159:
case 971:
case 3221:
case 1997:
case 1668:
case 1798:
case 3078:
case 3956:
case 261:
case 2634:
case 735:
case 714:
case 1449:
case 1145:
case 1538:
case 1714:
case 2017:
case 3952:
case 2436:
case 2564:
case 1110:
case 2013:
case 2625:
case 2388:
case 3165:
case 1818:
case 2745:
case 3469:
case 1560:
case 928:
case 213:
case 2114:
case 4066:
case 3963:
case 2840:
case 3379:
case 3261:
case 3982:
case 3134:
case 2607:
case 311:
case 1306:
case 1748:
case 2815:
case 465:
case 1947:
case 154:
case 1844:
case 4019:
case 356:
case 3416:
case 3698:
case 2148:
case 3037:
case 3614:
case 62:
case 865:
case 4053:
case 3412:
case 3125:
case 20:
case 197:
case 4057:
case 3905:
case 3986:
case 1195:
case 2250:
case 2524:
case 1499:
case 1817:
case 304:
case 367:
case 4011:
case 106:
case 1914:
case 2575:
case 3756:
case 3108:
case 2366:
case 2193:
case 1667:
case 991:
case 3723:
case 3020:
case 4088:
case 3421:
case 3339:
case 2197:
case 3800:
case 1090:
case 3928:
case 1793:
case 3727:
case 1682:
case 3770:
case 2263:
case 4038:
case 2961:
case 2031:
case 2267:
case 653:
case 1632:
case 3389:
case 809:
case 3972:
case 1566:
case 4060:
case 1583:
case 1562:
case 679:
case 666:
case 2337:
case 3199:
case 2649:
case 3058:
case 1129:
case 2205:
case 1425:
case 2333:
case 3950:
case 2896:
case 694:
case 1650:
case 3245:
case 1046:
case 1324:
case 2039:
case 3210:
case 368:
case 852:
case 2654:
case 2320:
case 2377:
case 1265:
case 2641:
case 4004:
case 2456:
case 3083:
case 7:
case 3318:
case 452:
case 3932:
case 2423:
case 512:
case 1203:
case 3184:
case 215:
case 932:
case 2506:
case 3087:
case 234:
case 1121:
case 4078:
case 2427:
case 2071:
case 3876:
case 1591:
case 3785:
case 322:
case 648:
case 3706:
case 1584:
case 1012:
case 419:
case 188:
case 129:
case 2580:
case 231:
case 765:
case 559:
case 1655:
case 3240:
case 2992:
case 2264:
case 691:
case 2131:
case 3215:
case 2325:
case 1731:
case 1260:
case 3162:
case 1204:
case 502:
case 860:
case 2619:
case 2622:
case 1278:
case 3512:
case 1477:
case 3187:
case 1021:
case 2200:
case 4007:
case 86:
case 2171:
case 625:
case 1356:
case 684:
case 1146:
case 460:
case 2869:
case 2435:
case 2657:
case 346:
case 2374:
case 2626:
case 46:
case 920:
case 144:
case 2653:
case 1327:
case 1370:
case 3166:
case 1253:
case 2485:
case 170:
case 2189:
case 1951:
case 292:
case 2406:
case 187:
case 3025:
case 4054:
case 21:
case 2523:
case 3805:
case 1574:
case 1789:
case 3617:
case 3775:
case 3886:
case 1095:
case 3296:
case 837:
case 957:
case 3882:
case 301:
case 2940:
case 3863:
case 1219:
case 1222:
case 632:
case 1944:
case 2048:
case 3137:
case 2604:
case 2660:
case 2790:
case 3442:
case 1959:
case 433:
case 2194:
case 3177:
case 3120:
case 981:
case 1487:
case 1794:
case 1664:
case 3900:
case 3074:
case 3173:
case 3828:
case 2255:
case 1190:
case 8:
case 1917:
case 151:
case 979:
case 1718:
case 1534:
case 2845:
case 335:
case 276:
case 2568:
case 643:
case 1913:
case 426:
case 2384:
case 752:
case 4:
case 2530:
case 116:
case 4049:
case 2391:
case 3446:
case 3651:
case 3794:
case 3664:
case 2023:
case 2978:
case 2615:
case 1828:
case 3483:
case 1595:
case 1442:
case 1008:
case 2773:
case 2070:
case 2471:
case 1644:
case 3487:
case 3913:
case 3211:
case 972:
case 2135:
case 2548:
case 383:
case 3814:
case 262:
case 885:
case 2865:
case 1651:
case 3380:
case 3466:
case 1735:
case 424:
case 114:
case 2321:
case 2597:
case 1805:
case 37:
case 1775:
case 996:
case 3095:
case 618:
case 3508:
case 370:
case 3226:
case 449:
case 1613:
case 2733:
case 1867:
case 3219:
case 702:
case 1659:
case 78:
case 2960:
case 3843:
case 849:
case 639:
case 777:
case 4061:
case 1863:
case 101:
case 2737:
case 1133:
case 1964:
case 3600:
case 3278:
case 1529:
case 1512:
case 3477:
case 1187:
case 2783:
case 2692:
case 2762:
case 509:
case 1955:
case 2080:
case 3473:
case 1162:
case 2259:
case 3771:
case 2787:
case 1084:
case 3801:
case 2911:
case 613:
case 908:
case 1393:
case 3370:
case 1166:
case 3327:
case 795:
case 4045:
case 3146:
case 2418:
case 1397:
case 4010:
case 2106:
case 2957:
case 3012:
case 3029:
case 24:
case 3368:
case 2185:
case 490:
case 1876:
case 240:
case 3591:
case 2953:
case 617:
case 3809:
case 3584:
case 1348:
case 2926:
case 3330:
case 890:
case 3433:
case 1702:
case 3731:
case 3260:
case 2841:
case 778:
case 1872:
case 3238:
case 1240:
case 3655:
case 3437:
case 89:
case 2395:
case 1215:
case 812:
case 1609:
case 603:
case 859:
case 3676:
case 2949:
case 1381:
case 1066:
case 696:
case 538:
case 3046:
case 1245:
case 3650:
case 473:
case 3324:
case 168:
case 2531:
case 459:
case 3121:
case 1087:
case 3042:
case 2661:
case 2493:
case 2180:
case 1780:
case 939:
case 3672:
case 2888:
case 3901:
case 3335:
case 1932:
case 3558:
case 2819:
case 880:
case 749:
case 3434:
case 2941:
case 877:
case 56:
case 2243:
case 1546:
case 4015:
case 2247:
case 2448:
case 3129:
case 3425:
case 672:
case 398:
case 477:
case 2857:
case 1950:
case 2085:
case 1542:
case 480:
case 2799:
case 2571:
case 2853:
case 3562:
case 1495:
case 607:
case 1976:
case 2954:
case 2826:
case 2035:
case 3813:
case 537:
case 895:
case 3914:
case 1752:
case 3817:
case 1371:
case 1269:
case 104:
case 495:
case 2878:
case 1339:
case 542:
case 1647:
case 1174:
case 1073:
case 250:
case 3090:
case 3663:
case 1928:
case 3793:
case 2024:
case 1727:
case 2589:
case 1756:
case 1643:
case 1723:
case 2201:
case 1020:
case 1421:
case 3844:
case 156:
case 712:
case 1768:
case 1698:
case 3241:
case 5:
case 2860:
case 79:
case 2734:
case 526:
case 3628:
case 1261:
case 3385:
case 2838:
case 4092:
case 1134:
case 111:
case 2168:
case 3748:
case 3947:
case 1730:
case 2610:
case 913:
case 228:
case 3302:
case 1905:
case 1590:
case 3573:
case 2645:
case 3499:
case 1614:
case 2075:
case 163:
case 1412:
case 1429:
case 2209:
case 478:
case 3520:
case 3577:
case 1221:
case 3997:
case 1923:
case 1078:
case 751:
case 1107:
case 1824:
case 4042:
case 2908:
case 2707:
case 2551:
case 3993:
case 1927:
case 3291:
case 152:
case 2820:
case 2877:
case 475:
case 3630:
case 783:
case 522:
case 3894:
case 900:
case 1835:
case 3818:
case 1469:
case 3560:
case 90:
case 875:
case 2765:
case 3145:
case 4046:
case 3538:
case 3714:
case 284:
case 1515:
case 3110:
case 3454:
case 109:
case 841:
case 3578:
case 2409:
case 498:
case 1229:
case 1212:
case 2105:
case 377:
case 380:
case 2186:
case 3299:
case 3504:
case 1786:
case 2925:
case 1705:
case 248:
case 3948:
case 3747:
case 2837:
case 1693:
case 1782:
case 3670:
case 1461:
case 441:
case 1060:
case 2396:
case 546:
case 2182:
case 2163:
case 3743:
case 291:
case 2934:
case 1038:
case 3015:
case 1216:
case 2064:
case 1968:
case 2498:
case 2616:
case 3701:
case 1732:
case 3557:
case 2887:
case 3403:
case 2297:
case 893:
case 1596:
case 4090:
case 1980:
case 2293:
case 3553:
case 3208:
case 2862:
case 744:
case 1313:
case 2132:
case 1088:
case 1011:
case 406:
case 1149:
case 2866:
case 1359:
case 493:
case 3465:
case 243:
case 1592:
case 2414:
case 669:
case 3300:
case 3839:
case 1736:
case 610:
case 1057:
case 1806:
case 247:
case 3364:
case 3709:
case 1885:
case 2340:
case 1776:
case 2999:
case 1154:
case 692:
case 1026:
case 3588:
case 2248:
case 3511:
case 1351:
case 915:
case 232:
case 321:
case 2443:
case 514:
case 3161:
case 729:
case 535:
case 3831:
case 1398:
case 1111:
case 1049:
case 556:
case 775:
case 3541:
case 2966:
case 2417:
case 1679:
case 3939:
case 2413:
case 324:
case 3606:
case 1631:
case 2310:
case 385:
case 2788:
case 2345:
case 3404:
case 1880:
case 2155:
case 1290:
case 2459:
case 2962:
case 1314:
case 1755:
case 133:
case 2884:
case 3478:
case 851:
case 1119:
case 1122:
case 137:
case 3549:
case 3237:
case 2072:
case 567:
case 1440:
case 87:
case 905:
case 1041:
case 1671:
case 887:
case 3460:
case 870:
case 2722:
case 3305:
case 2444:
case 1157:
case 47:
case 1639:
case 2646:
case 3382:
case 2050:
case 2753:
case 1343:
case 2899:
case 2076:
case 1153:
case 487:
case 2757:
case 22:
case 1054:
case 349:
case 2958:
case 741:
case 3367:
case 910:
case 444:
case 1689:
case 3675:
case 1246:
case 160:
case 3713:
case 530:
case 3287:
case 1823:
case 1178:
case 3897:
case 615:
case 2271:
case 2369:
case 1007:
case 2973:
case 1870:
case 3283:
case 706:
case 3994:
case 1700:
case 1003:
case 2778:
case 793:
case 2977:
case 1830:
case 1694:
case 1764:
case 1309:
case 2067:
case 888:
case 3565:
case 3376:
case 1160:
case 253:
case 3350:
case 281:
case 3624:
case 2690:
case 568:
case 2933:
case 1510:
case 3744:
case 119:
case 3426:
case 390:
case 754:
case 2361:
case 3453:
case 969:
case 1496:
case 266:
case 3635:
case 2825:
case 3503:
case 550:
case 3812:
case 1726:
case 2639:
case 2906:
case 1753:
case 120:
case 410:
case 944:
case 1646:
case 2985:
case 1076:
case 3275:
case 545:
case 1289:
case 492:
case 3796:
case 2343:
case 1899:
case 3009:
case 2126:
case 3532:
case 1501:
case 12:
case 2054:
case 1958:
case 4048:
case 3464:
case 237:
case 2415:
case 810:
case 2440:
case 3662:
case 2041:
case 1642:
case 81:
case 2569:
case 2671:
case 2902:
case 892:
case 1719:
case 1788:
case 3821:
case 1155:
case 2290:
case 528:
case 1459:
case 3942:
case 589:
case 1891:
case 2314:
case 3576:
case 2755:
case 4093:
case 1983:
case 2188:
case 1509:
case 3400:
case 1032:
case 1884:
case 3001:
case 693:
case 3303:
case 2398:
case 571:
case 606:
case 988:
case 2049:
case 1218:
case 734:
case 2679:
case 3946:
case 2561:
case 469:
case 1711:
case 1413:
case 983:
case 3206:
case 1005:
case 219:
case 3528:
case 1361:
case 1086:
case 3285:
case 698:
case 3895:
case 916:
case 2496:
case 1825:
case 951:
case 166:
case 1598:
case 523:
case 3144:
case 1067:
case 3620:
case 782:
case 3715:
case 3677:
case 1738:
case 1514:
case 2492:
case 3740:
case 1937:
case 153:
case 3043:
case 1760:
case 3673:
case 1082:
case 1834:
case 1063:
case 3047:
case 2868:
case 3202:
case 1231:
case 700:
case 2178:
case 3633:
case 405:
case 3586:
case 2924:
case 1028:
case 1369:
case 3990:
case 1973:
case 1808:
case 2827:
case 3637:
case 3349:
case 1778:
case 1977:
case 1920:
case 3098:
case 2700:
case 396:
case 2935:
case 26:
case 303:
case 1543:
case 987:
case 260:
case 3117:
case 2852:
case 2246:
case 3582:
case 1239:
case 194:
case 970:
case 3326:
case 3608:
case 2461:
case 3353:
case 2060:
case 3143:
case 1837:
case 2763:
case 2782:
case 1517:
case 191:
case 2038:
case 1396:
case 1163:
case 3472:
case 3147:
case 3674:
case 710:
case 3476:
case 1392:
case 688:
case 906:
case 2786:
case 2875:
case 3051:
case 3450:
case 2705:
case 3319:
case 1925:
case 3625:
case 2835:
case 1544:
case 386:
case 644:
case 3745:
case 815:
case 2469:
case 2952:
case 2540:
case 3017:
case 1765:
case 997:
case 3564:
case 2515:
case 125:
case 2078:
case 1000:
case 2923:
case 769:
case 4071:
case 2956:
case 2970:
case 2927:
case 2004:
case 954:
case 2103:
case 540:
case 2648:
case 1820:
case 1877:
case 3198:
case 562:
case 3684:
case 1248:
case 2022:
case 800:
case 3761:
case 2141:
case 3482:
case 2351:
case 975:
case 80:
case 265:
case 731:
case 1621:
case 882:
case 147:
case 1754:
case 3929:
case 2057:
case 1340:
case 2776:
case 2295:
case 1150:
case 1176:
case 2053:
case 3486:
case 2750:
case 482:
case 1858:
case 3109:
case 2026:
case 2344:
case 2154:
case 2011:
case 2410:
case 4018:
case 616:
case 3699:
case 3304:
case 2592:
case 1414:
case 705:
case 1749:
case 1629:
case 1612:
case 1297:
case 1498:
case 1887:
case 3256:
case 599:
case 1862:
case 3428:
case 1293:
case 1984:
case 2313:
case 1132:
case 4094:
case 3101:
case 1857:
case 1006:
case 1669:
case 1799:
case 1571:
case 3896:
case 2950:
case 2542:
case 2495:
case 3649:
case 3337:
case 2976:
case 2199:
case 612:
case 2058:
case 3712:
case 2601:
case 1822:
case 23:
case 3267:
case 1243:
case 2972:
case 3263:
case 3282:
case 3892:
case 594:
case 3430:
case 1448:
case 1247:
case 1539:
case 1784:
case 813:
case 3506:
case 3427:
case 1493:
case 2855:
case 886:
case 1579:
case 1661:
case 3585:
case 1791:
case 2780:
case 566:
case 2191:
case 3456:
case 921:
case 2184:
case 1298:
case 2932:
case 3320:
case 2394:
case 553:
case 486:
case 861:
case 413:
case 2066:
case 1949:
case 2245:
case 4017:
case 3969:
case 978:
case 3373:
case 581:
case 2210:
case 268:
case 2905:
case 418:
case 189:
case 1610:
case 1725:
case 128:
case 3250:
case 1645:
case 3524:
case 3795:
case 3665:
case 649:
case 382:
case 3276:
case 263:
case 30:
case 973:
case 1209:
case 2967:
case 2768:
case 2416:
case 3358:
case 2037:
case 1518:
case 1734:
case 1860:
case 2134:
case 211:
case 3607:
case 2963:
case 764:
case 2261:
case 1838:
case 2379:
case 772:
case 3815:
case 2033:
case 2864:
case 2800:
case 1878:
case 2647:
case 1346:
case 2727:
case 1708:
case 1156:
case 1804:
case 3366:
case 796:
case 3480:
case 3193:
case 1589:
case 2108:
case 703:
case 1774:
case 2421:
case 1903:
case 15:
case 145:
case 980:
case 3236:
case 267:
case 2752:
case 1965:
case 977:
case 2371:
case 1152:
case 98:
case 2269:
case 1342:
case 624:
case 1431:
case 1733:
case 1960:
case 3604:
case 2659:
case 1938:
case 2882:
case 2863:
case 1068:
case 1329:
case 543:
case 3915:
case 1312:
case 621:
case 1597:
case 2805:
case 3523:
case 2296:
case 3556:
case 2775:
case 2886:
case 1593:
case 3527:
case 678:
case 1479:
case 3189:
case 2613:
case 4009:
case 174:
case 990:
case 3118:
case 1865:
case 162:
case 3391:
case 99:
case 376:
case 3568:
case 3810:
case 761:
case 1615:
case 1023:
case 1124:
case 2595:
case 2173:
case 3255:
case 1640:
case 695:
case 547:
case 1027:
case 3181:
case 1471:
case 3093:
case 3660:
case 786:
case 2008:
case 2442:
case 1904:
case 2120:
case 2177:
case 713:
case 1803:
case 4001:
case 872:
case 1919:
case 3325:
case 1922:
case 1244:
case 2872:
case 985:
case 1841:
case 1395:
case 807:
case 2240:
case 4047:
case 2215:
case 1102:
case 2521:
case 155:
case 1106:
case 464:
case 3580:
case 472:
case 2850:
case 3179:
case 1185:
case 739:
case 1489:
case 525:
case 140:
case 222:
case 407:
case 2348:
case 1854:
case 1926:
case 602:
case 2158:
case 3611:
case 1213:
case 2836:
case 3626:
case 2393:
case 403:
case 2166:
case 3746:
case 3308:
case 949:
case 3869:
case 1217:
case 673:
case 591:
case 3435:
case 803:
case 2512:
case 2955:
case 3171:
case 1783:
case 1692:
case 1762:
case 3424:
case 2091:
case 3742:
case 548:
case 1259:
case 2183:
case 2490:
case 1787:
case 3622:
case 2084:
case 3766:
case 857:
case 3696:
case 2146:
case 1869:
case 3217:
case 1657:
case 494:
case 1374:
case 1435:
case 3213:
case 3911:
case 3849:
case 1746:
case 2370:
case 1653:
case 1424:
case 894:
case 2204:
case 2473:
case 1742:
case 517:
case 1619:
case 1622:
case 3988:
case 2420:
case 1200:
case 2021:
case 2278:
case 105:
case 3494:
case 1171:
case 2352:
case 2142:
case 3692:
case 1992:
case 4082:
case 1861:
case 2238:
case 879:
case 2655:
case 481:
case 3102:
case 1131:
case 1264:
case 933:
case 2731:
case 4067:
case 3919:
case 3922:
case 2433:
case 513:
case 453:
case 2260:
case 3953:
case 3251:
case 2779:
case 732:
case 2584:
case 881:
case 466:
case 34:
case 4005:
case 2012:
case 2029:
case 355:
case 3957:
case 3106:
case 288:
case 926:
case 1580:
case 1334:
case 3185:
case 1179:
case 1996:
case 3489:
case 3052:
case 2917:
case 725:
case 169:
case 176:
case 1810:
case 4036:
case 1384:
case 3548:
case 1530:
case 2913:
case 3865:
case 919:
case 362:
case 1181:
case 3027:
case 1093:
case 3471:
case 1660:
case 1790:
case 2487:
case 3803:
case 1194:
case 4032:
case 458:
case 3720:
case 3615:
case 3023:
case 2794:
case 1097:
case 3807:
case 3124:
case 2781:
case 784:
case 3938:
case 1552:
case 665:
case 1940:
case 82:
case 3068:
case 2847:
case 3312:
case 2219:
case 2222:
case 820:
case 3030:
case 3431:
case 1048:
case 3960:
case 2843:
case 1604:
case 4076:
case 192:
case 2253:
case 1485:
case 2508:
case 3175:
case 1189:
case 11:
case 287:
case 2226:
case 3316:
case 399:
case 2095:
case 96:
case 420:
case 1556:
case 4050:
case 3170:
case 1081:
case 3127:
case 3804:
case 1480:
case 3589:
case 2859:
case 1232:
case 633:
case 3774:
case 35:
case 2797:
case 2998:
case 2484:
case 3123:
case 3878:
case 1197:
case 3346:
case 2682:
case 2491:
case 508:
case 3907:
case 443:
case 2686:
case 3342:
case 1910:
case 3035:
case 2914:
case 757:
case 6:
case 1018:
case 909:
case 2537:
case 3965:
case 2851:
case 3581:
case 1795:
case 182:
case 3075:
case 1089:
case 753:
case 2577:
case 297:
case 3594:
case 447:
case 642:
case 781:
case 328:
case 2195:
case 100:
case 1840:
case 3838:
case 2385:
case 1815:
case 2947:
case 254:
case 952:
case 3130:
case 1535:
case 2844:
case 1358:
case 371:
case 3518:
case 847:
case 432:
case 3734:
case 2943:
case 766:
case 2672:
case 1641:
case 965:
case 884:
case 2474:
case 1721:
case 336:
case 3298:
case 3888:
case 2203:
case 425:
case 3784:
case 134:
case 4000:
case 572:
case 1506:
case 564:
case 1470:
case 3180:
case 1071:
case 2207:
case 1228:
case 2408:
case 3661:
case 2042:
case 1585:
case 2650:
case 2046:
case 3390:
case 1373:
case 3531:
case 1654:
case 1377:
case 3811:
case 825:
case 3949:
case 2676:
case 323:
case 2562:
case 3853:
case 3954:
case 3826:
case 2636:
case 327:
case 1729:
case 1712:
case 2112:
case 1205:
case 3006:
case 2425:
case 1286:
case 1079:
case 491:
case 848:
case 638:
case 1282:
case 2116:
case 3539:
case 1716:
case 2632:
case 1267:
case 503:
case 2566:
case 241:
case 596:
case 343:
case 85:
case 614:
case 1378:
case 2839:
case 2300:
case 3136:
case 2519:
case 2522:
case 1769:
case 1699:
case 1304:
case 2208:
case 3883:
case 1428:
case 45:
case 1101:
case 445:
case 3132:
case 1921:
case 295:
case 2557:
case 3616:
case 3498:
case 2701:
case 3887:
case 3055:
case 93:
case 2161:
case 2092:
case 74:
case 2680:
case 221:
case 576:
case 755:
case 2234:
case 1916:
case 3621:
case 139:
case 1268:
case 2831:
case 2511:
case 1230:
case 740:
case 1482:
case 828:
case 2225:
case 3858:
case 1109:
case 1405:
case 489:
case 871:
case 3754:
case 428:
case 1929:
case 1912:
case 3315:
case 1555:
case 3340:
case 2538:
case 646:
case 1017:
case 836:
case 2449:
case 3765:
case 1436:
case 963:
case 1625:
case 1388:
case 186:
case 1745:
case 2993:
case 774:
case 2881:
case 3551:
case 3707:
case 2894:
case 3877:
case 1198:
case 3820:
case 762:
case 911:
case 2630:
case 325:
case 259:
case 823:
case 2997:
case 3401:
case 2668:
case 1890:
case 956:
case 1634:
case 391:
case 2656:
case 3182:
case 827:
case 799:
case 3163:
case 3833:
case 1147:
case 2623:
case 4002:
case 1357:
case 1674:
case 2948:
case 1326:
case 3513:
case 1608:
case 1143:
case 3837:
case 202:
case 2889:
case 2504:
case 117:
case 348:
case 1319:
case 3925:
case 427:
case 3105:
case 1476:
case 505:
case 3392:
case 967:
case 2652:
case 2283:
case 1455:
case 2981:
case 1159:
case 1349:
case 1637:
case 3778:
case 3920:
case 2336:
case 3977:
case 357:
case 1098:
case 2994:
case 1505:
case 3100:
case 2287:
case 3874:
case 1586:
case 3028:
case 2045:
case 1582:
case 2411:
case 2010:
case 394:
case 1567:
case 103:
case 2675:
case 2717:
case 75:
case 2918:
case 1014:
case 745:
case 3543:
case 935:
case 212:
case 1341:
case 2989:
case 440:
case 914:
case 2372:
case 2258:
case 3825:
case 379:
case 366:
case 3598:
case 44:
case 3005:
case 515:
case 3279:
case 1285:
case 172:
case 1895:
case 290:
case 2140:
case 3760:
case 789:
case 1673:
case 3082:
case 2350:
case 630:
case 1202:
case 2422:
case 3933:
case 840:
case 1677:
case 3738:
case 3514:
case 63:
case 2376:
case 84:
case 353:
case 1043:
case 855:
case 2565:
case 4070:
case 4027:
case 1365:
case 3294:
case 2478:
case 3509:
case 2554:
case 2220:
case 1001:
case 2277:
case 3884:
case 285:
case 500:
case 1821:
case 3459:
case 2404:
case 3345:
case 1942:
case 4056:
case 1224:
case 2328:
case 2685:
case 2069:
case 3711:
case 224:
case 1235:
case 3036:
case 1303:
case 474:
case 3966:
case 2541:
case 736:
case 1572:
case 667:
case 3218:
case 462:
case 3289:
case 1275:
case 3076:
case 1666:
case 1796:
case 3899:
case 3501:
case 1532:
case 32:
case 249:
case 1829:
case 3726:
case 108:
case 3451:
case 2979:
case 2196:
case 3646:
case 2382:
case 2061:
case 3642:
case 2460:
case 4068:
case 2233:
case 1687:
case 3719:
case 3722:
case 1816:
case 1464:
case 1536:
case 1792:
case 727:
case 899:
case 3072:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1754341201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,];
var gg_b = "1754341201/";

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
