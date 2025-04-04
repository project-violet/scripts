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
case 3295:
case 1173:
case 1007:
case 1042:
case 1001:
case 1011:
case 807:
case 2189:
case 42:
case 158:
case 243:
case 2575:
case 245:
case 1490:
case 3677:
case 1229:
case 966:
case 1466:
case 1516:
case 1408:
case 2774:
case 1441:
case 3934:
case 2264:
case 3671:
case 1763:
case 932:
case 3954:
case 1055:
case 473:
case 2289:
case 1393:
case 2844:
case 690:
case 1568:
case 41:
case 4069:
case 220:
case 2186:
case 1245:
case 2063:
case 1670:
case 3440:
case 1865:
case 1126:
case 1138:
case 3604:
case 2286:
case 2748:
case 3334:
case 3354:
case 992:
case 2707:
case 1827:
case 1509:
case 2534:
case 4008:
case 631:
case 2742:
case 2701:
case 1232:
case 663:
case 1226:
case 2878:
case 4018:
case 2881:
case 1519:
case 1469:
case 2543:
case 3000:
case 3343:
case 2887:
case 457:
case 2872:
case 1238:
case 3614:
case 150:
case 1995:
case 2545:
case 3690:
case 1134:
case 2027:
case 1154:
case 2119:
case 568:
case 146:
case 1087:
case 151:
case 2422:
case 698:
case 840:
case 3612:
case 2436:
case 1586:
case 4014:
case 3973:
case 2753:
case 1234:
case 2428:
case 3618:
case 796:
case 485:
case 3338:
case 2744:
case 1482:
case 3647:
case 3358:
case 1477:
case 2552:
case 2219:
case 2558:
case 4004:
case 2538:
case 1488:
case 3332:
case 3602:
case 856:
case 841:
case 3326:
case 3470:
case 1033:
case 3945:
case 2162:
case 1044:
case 815:
case 228:
case 1275:
case 813:
case 2529:
case 779:
case 3669:
case 2807:
case 1721:
case 2848:
case 1414:
case 1564:
case 112:
case 3080:
case 454:
case 3952:
case 509:
case 1691:
case 4088:
case 2811:
case 4071:
case 2459:
case 2781:
case 3684:
case 2772:
case 2206:
case 1175:
case 2817:
case 825:
case 2787:
case 218:
case 2484:
case 1534:
case 1748:
case 3659:
case 3639:
case 3309:
case 1717:
case 735:
case 3906:
case 733:
case 1424:
case 3968:
case 2993:
case 826:
case 760:
case 877:
case 1878:
case 2226:
case 1711:
case 2252:
case 998:
case 2519:
case 1063:
case 120:
case 2074:
case 1186:
case 2158:
case 1755:
case 403:
case 2126:
case 1735:
case 405:
case 2132:
case 3316:
case 842:
case 1853:
case 1833:
case 3909:
case 2229:
case 2516:
case 3628:
case 2568:
case 3593:
case 2418:
case 855:
case 795:
case 2055:
case 3622:
case 3306:
case 152:
case 3880:
case 414:
case 2042:
case 2007:
case 2173:
case 145:
case 1575:
case 2011:
case 338:
case 1189:
case 589:
case 1801:
case 4036:
case 3624:
case 2414:
case 1842:
case 990:
case 2727:
case 1529:
case 4028:
case 1848:
case 1216:
case 3364:
case 499:
case 2175:
case 1772:
case 118:
case 3020:
case 3389:
case 2691:
case 991:
case 1439:
case 887:
case 666:
case 2404:
case 1459:
case 2033:
case 222:
case 2053:
case 596:
case 3595:
case 391:
case 45:
case 128:
case 2275:
case 1168:
case 1106:
case 1835:
case 2765:
case 1733:
case 1209:
case 439:
case 1428:
case 2234:
case 3964:
case 1753:
case 2586:
case 1874:
case 965:
case 930:
case 1456:
case 1558:
case 4039:
case 2471:
case 1532:
case 80:
case 1526:
case 3989:
case 476:
case 2477:
case 2134:
case 365:
case 3780:
case 330:
case 3810:
case 2154:
case 1027:
case 2995:
case 2072:
case 251:
case 3800:
case 579:
case 2078:
case 2081:
case 1761:
case 1282:
case 1443:
case 2851:
case 2419:
case 116:
case 3369:
case 2837:
case 1746:
case 3918:
case 1524:
case 1397:
case 2236:
case 2222:
case 3384:
case 3799:
case 3947:
case 2256:
case 1391:
case 2409:
case 2584:
case 732:
case 1876:
case 3902:
case 177:
case 1182:
case 2785:
case 1171:
case 1188:
case 3990:
case 184:
case 402:
case 2136:
case 598:
case 2122:
case 1013:
case 478:
case 2239:
case 2703:
case 3796:
case 207:
case 2462:
case 2512:
case 2259:
case 1085:
case 3312:
case 4043:
case 1879:
case 845:
case 2547:
case 3170:
case 4034:
case 3626:
case 989:
case 3341:
case 792:
case 3638:
case 3984:
case 2541:
case 1997:
case 3308:
case 3347:
case 2883:
case 1104:
case 1940:
case 2139:
case 2067:
case 248:
case 3645:
case 3760:
case 142:
case 1114:
case 996:
case 4038:
case 1559:
case 1861:
case 3982:
case 2731:
case 661:
case 3634:
case 4026:
case 2757:
case 1190:
case 1846:
case 828:
case 4032:
case 1867:
case 4052:
case 3654:
case 2737:
case 213:
case 3899:
case 3050:
case 1202:
case 1776:
case 660:
case 1241:
case 2514:
case 633:
case 2464:
case 635:
case 2885:
case 1112:
case 187:
case 2079:
case 2023:
case 396:
case 1290:
case 590:
case 1108:
case 3495:
case 174:
case 3904:
case 1015:
case 1426:
case 3371:
case 2577:
case 488:
case 962:
case 471:
case 3140:
case 1269:
case 936:
case 1723:
case 1458:
case 2588:
case 2571:
case 2486:
case 1536:
case 695:
case 204:
case 2813:
case 4029:
case 4073:
case 1849:
case 2783:
case 3297:
case 3914:
case 1528:
case 1169:
case 565:
case 563:
case 256:
case 1037:
case 1970:
case 3191:
case 240:
case 2076:
case 379:
case 3675:
case 3860:
case 1067:
case 1590:
case 2475:
case 566:
case 2104:
case 1061:
case 333:
case 1139:
case 242:
case 1468:
case 1406:
case 960:
case 4019:
case 1703:
case 2204:
case 469:
case 2997:
case 1502:
case 1713:
case 2749:
case 696:
case 1416:
case 1508:
case 2188:
case 2171:
case 393:
case 3096:
case 2003:
case 592:
case 1815:
case 1805:
case 1128:
case 1049:
case 1156:
case 284:
case 1122:
case 1136:
case 2725:
case 216:
case 1857:
case 4062:
case 4006:
case 995:
case 2761:
case 3324:
case 18:
case 1569:
case 1419:
case 993:
case 679:
case 2443:
case 1409:
case 2391:
case 3597:
case 1584:
case 1236:
case 2037:
case 2051:
case 2031:
case 2184:
case 2445:
case 3750:
case 1076:
case 140:
case 2970:
case 4089:
case 2458:
case 851:
case 2432:
case 3959:
case 2269:
case 2849:
case 2528:
case 3668:
case 2693:
case 3336:
case 2522:
case 850:
case 482:
case 968:
case 1023:
case 1079:
case 2290:
case 1885:
case 1715:
case 2370:
case 2083:
case 400:
case 812:
case 2108:
case 2166:
case 909:
case 2825:
case 2147:
case 274:
case 3570:
case 3359:
case 2846:
case 731:
case 115:
case 1757:
case 113:
case 1737:
case 2867:
case 17:
case 1489:
case 2212:
case 2861:
case 2559:
case 1464:
case 3928:
case 2241:
case 822:
case 2776:
case 444:
case 2247:
case 3619:
case 2473:
case 3956:
case 2266:
case 3936:
case 2208:
case 763:
case 1525:
case 1047:
case 1183:
case 1002:
case 564:
case 3250:
case 1041:
case 2585:
case 1012:
case 2123:
case 2179:
case 1018:
case 3599:
case 1401:
case 2784:
case 1442:
case 2399:
case 1283:
case 3130:
case 1694:
case 3913:
case 1839:
case 2769:
case 847:
case 1561:
case 1724:
case 1090:
case 1546:
case 2279:
case 2223:
case 1417:
case 3091:
case 2360:
case 2176:
case 1151:
case 3400:
case 3985:
case 2024:
case 2790:
case 175:
case 1157:
case 286:
case 173:
case 1137:
case 1474:
case 4001:
case 2708:
case 1822:
case 4042:
case 2:
case 214:
case 2463:
case 2702:
case 872:
case 1105:
case 2741:
case 2882:
case 2712:
case 2503:
case 12:
case 2396:
case 869:
case 1237:
case 3303:
case 2871:
case 3653:
case 2888:
case 4011:
case 154:
case 2036:
case 3635:
case 800:
case 3305:
case 2022:
case 2028:
case 299:
case 1930:
case 93:
case 1103:
case 1082:
case 3315:
case 1071:
case 844:
case 4033:
case 2249:
case 1213:
case 3617:
case 2427:
case 697:
case 2884:
case 1478:
case 1481:
case 3357:
case 1759:
case 25:
case 3337:
case 2869:
case 106:
case 2537:
case 1824:
case 4044:
case 2557:
case 1472:
case 3331:
case 3642:
case 2225:
case 1350:
case 3480:
case 3905:
case 1014:
case 359:
case 2161:
case 2059:
case 1004:
case 1285:
case 2039:
case 2167:
case 276:
case 99:
case 1610:
case 183:
case 2890:
case 3070:
case 2125:
case 1736:
case 1722:
case 2808:
case 1728:
case 2583:
case 39:
case 1692:
case 629:
case 446:
case 4087:
case 451:
case 1444:
case 2782:
case 3674:
case 4072:
case 2818:
case 4078:
case 1579:
case 1463:
case 1741:
case 2105:
case 1702:
case 1276:
case 1766:
case 2836:
case 2856:
case 114:
case 1747:
case 452:
case 2237:
case 1396:
case 1871:
case 764:
case 2257:
case 881:
case 1712:
case 3961:
case 1882:
case 445:
case 443:
case 2251:
case 2084:
case 1176:
case 1620:
case 1360:
case 3925:
case 2157:
case 1024:
case 2137:
case 273:
case 186:
case 21:
case 397:
case 2131:
case 2215:
case 2442:
case 319:
case 2401:
case 2283:
case 3791:
case 2407:
case 929:
case 2448:
case 2724:
case 2090:
case 56:
case 105:
case 2567:
case 2417:
case 1223:
case 1279:
case 1769:
case 421:
case 1996:
case 2839:
case 2859:
case 1804:
case 2411:
case 2561:
case 3346:
case 410:
case 2066:
case 2008:
case 919:
case 3870:
case 1179:
case 1123:
case 2018:
case 2012:
case 411:
case 3740:
case 2453:
case 3976:
case 2728:
case 767:
case 1802:
case 1847:
case 4027:
case 2756:
case 1808:
case 2722:
case 1866:
case 2736:
case 3663:
case 2579:
case 1267:
case 1812:
case 2185:
case 1261:
case 1782:
case 2444:
case 139:
case 1225:
case 394:
case 176:
case 1146:
case 1890:
case 285:
case 1059:
case 1161:
case 1039:
case 1249:
case 1714:
case 1421:
case 3891:
case 206:
case 2487:
case 1557:
case 1704:
case 2759:
case 2478:
case 1531:
case 1551:
case 3296:
case 1869:
case 199:
case 1505:
case 1028:
case 334:
case 1149:
case 3260:
case 3770:
case 1056:
case 1036:
case 2071:
case 3196:
case 418:
case 1465:
case 84:
case 2832:
case 455:
case 1762:
case 1281:
case 1403:
case 2852:
case 453:
case 3294:
case 3917:
case 1287:
case 886:
case 1706:
case 1272:
case 2838:
case 1886:
case 2574:
case 3948:
case 2221:
case 1716:
case 1398:
case 3907:
case 2227:
case 1392:
case 2449:
case 3901:
case 3942:
case 3955:
case 1181:
case 4085:
case 269:
case 2775:
case 1650:
case 1630:
case 1187:
case 1300:
case 1310:
case 180:
case 814:
case 2845:
case 2127:
case 1054:
case 519:
case 1889:
case 426:
case 1719:
case 1244:
case 2461:
case 3311:
case 1075:
case 2446:
case 208:
case 2517:
case 36:
case 2873:
case 2829:
case 3631:
case 3342:
case 3301:
case 1864:
case 2734:
case 3348:
case 3657:
case 3637:
case 1998:
case 3307:
case 2535:
case 1144:
case 529:
case 2555:
case 416:
case 3355:
case 2068:
case 3093:
case 3615:
case 2016:
case 2425:
case 537:
case 1133:
case 1153:
case 2732:
case 2544:
case 1211:
case 4057:
case 1862:
case 4031:
case 876:
case 1868:
case 1217:
case 2758:
case 2423:
case 4051:
case 2696:
case 3095:
case 3333:
case 1207:
case 3353:
case 1786:
case 1816:
case 664:
case 2533:
case 1483:
case 1111:
case 817:
case 73:
case 1235:
case 1255:
case 2089:
case 171:
case 3520:
case 2660:
case 4015:
case 2875:
case 1029:
case 1380:
case 1073:
case 3430:
case 2745:
case 2578:
case 3944:
case 2699:
case 1789:
case 14:
case 1394:
case 3387:
case 1819:
case 1437:
case 2572:
case 3292:
case 200:
case 2773:
case 3298:
case 2854:
case 3933:
case 474:
case 899:
case 1764:
case 1045:
case 3953:
case 3200:
case 1032:
case 85:
case 1026:
case 1565:
case 534:
case 1038:
case 1058:
case 2920:
case 3192:
case 3210:
case 1980:
case 3198:
case 2163:
case 48:
case 1006:
case 1555:
case 364:
case 147:
case 1425:
case 3895:
case 3676:
case 2075:
case 108:
case 1467:
case 3120:
case 1743:
case 2719:
case 2889:
case 1734:
case 2998:
case 1754:
case 202:
case 4049:
case 2992:
case 1775:
case 2172:
case 2300:
case 278:
case 2630:
case 281:
case 1019:
case 2181:
case 1265:
case 1845:
case 2034:
case 4025:
case 3510:
case 1009:
case 1127:
case 280:
case 719:
case 2310:
case 0:
case 875:
case 1838:
case 4061:
case 873:
case 2272:
case 2706:
case 1826:
case 2278:
case 81:
case 4046:
case 737:
case 1165:
case 4067:
case 448:
case 2403:
case 3623:
case 2563:
case 3598:
case 2886:
case 2398:
case 3363:
case 729:
case 3592:
case 2038:
case 1920:
case 2052:
case 413:
case 2565:
case 2026:
case 415:
case 3625:
case 1163:
case 2980:
case 3795:
case 367:
case 2174:
case 101:
case 2437:
case 1572:
case 425:
case 1699:
case 2431:
case 2819:
case 4079:
case 2451:
case 2394:
case 423:
case 1263:
case 1834:
case 1476:
case 2045:
case 794:
case 3321:
case 2764:
case 3661:
case 53:
case 1773:
case 3327:
case 288:
case 66:
case 2235:
case 2111:
case 2255:
case 404:
case 2101:
case 349:
case 2142:
case 2148:
case 2073:
case 2380:
case 2029:
case 883:
case 1738:
case 1479:
case 1758:
case 885:
case 1752:
case 2155:
case 441:
case 2862:
case 1544:
case 1732:
case 1553:
case 2201:
case 59:
case 3927:
case 1533:
case 1696:
case 3921:
case 4076:
case 734:
case 949:
case 2786:
case 3836:
case 1644:
case 466:
case 1492:
case 3856:
case 1498:
case 3828:
case 975:
case 3115:
case 3231:
case 1596:
case 3251:
case 32:
case 699:
case 973:
case 2967:
case 3237:
case 1653:
case 569:
case 702:
case 65:
case 1097:
case 3084:
case 1410:
case 1560:
case 1400:
case 3151:
case 297:
case 3215:
case 1985:
case 3157:
case 92:
case 3407:
case 1599:
case 219:
case 1150:
case 3442:
case 1672:
case 1687:
case 1130:
case 3283:
case 2949:
case 1913:
case 2367:
case 1903:
case 864:
case 2346:
case 3411:
case 3561:
case 3546:
case 957:
case 3567:
case 3525:
case 4010:
case 3047:
case 2870:
case 3183:
case 1250:
case 229:
case 547:
case 617:
case 3041:
case 2740:
case 4000:
case 237:
case 3018:
case 1070:
case 3736:
case 2299:
case 2976:
case 3453:
case 19:
case 3692:
case 2323:
case 983:
case 985:
case 1957:
case 1937:
case 3579:
case 3698:
case 603:
case 2199:
case 294:
case 3330:
case 1480:
case 2530:
case 159:
case 582:
case 3285:
case 3610:
case 383:
case 385:
case 74:
case 501:
case 2376:
case 2160:
case 954:
case 3213:
case 1648:
case 1357:
case 771:
case 3759:
case 788:
case 3203:
case 1351:
case 1494:
case 1601:
case 1331:
case 624:
case 1642:
case 500:
case 1655:
case 1635:
case 1305:
case 3113:
case 2196:
case 2840:
case 3082:
case 544:
case 1315:
case 614:
case 1325:
case 1665:
case 137:
case 3585:
case 1740:
case 3399:
case 2150:
case 119:
case 2130:
case 2687:
case 1791:
case 685:
case 2599:
case 772:
case 2678:
case 2681:
case 1361:
case 3279:
case 3769:
case 769:
case 498:
case 3996:
case 2903:
case 1367:
case 3804:
case 502:
case 3176:
case 9:
case 3620:
case 324:
case 2091:
case 3360:
case 606:
case 3024:
case 2400:
case 2985:
case 3513:
case 2498:
case 924:
case 3741:
case 3276:
case 3708:
case 314:
case 2492:
case 2303:
case 438:
case 2633:
case 3888:
case 1946:
case 3718:
case 747:
case 3877:
case 399:
case 3028:
case 134:
case 3149:
case 1260:
case 3056:
case 2635:
case 4020:
case 3515:
case 3427:
case 2617:
case 2983:
case 3249:
case 61:
case 3884:
case 999:
case 673:
case 3421:
case 1376:
case 675:
case 1891:
case 23:
case 1923:
case 1979:
case 3557:
case 2601:
case 2357:
case 1296:
case 3551:
case 2337:
case 2607:
case 35:
case 1530:
case 1550:
case 259:
case 3225:
case 194:
case 376:
case 3146:
case 2915:
case 3059:
case 3161:
case 327:
case 3841:
case 657:
case 744:
case 3583:
case 463:
case 2070:
case 430:
case 1299:
case 3866:
case 3125:
case 465:
case 2951:
case 976:
case 3812:
case 2674:
case 3782:
case 3261:
case 3485:
case 3144:
case 264:
case 1605:
case 1335:
case 902:
case 819:
case 3910:
case 1280:
case 3133:
case 3153:
case 3889:
case 1317:
case 773:
case 3244:
case 1311:
case 3075:
case 837:
case 2676:
case 71:
case 2120:
case 505:
case 2499:
case 3253:
case 3998:
case 1180:
case 1307:
case 2963:
case 1955:
case 3181:
case 3172:
case 600:
case 524:
case 3650:
case 381:
case 378:
case 3187:
case 380:
case 601:
case 3034:
case 3054:
case 2460:
case 2510:
case 1911:
case 2496:
case 978:
case 1294:
case 1917:
case 3768:
case 2793:
case 757:
case 3272:
case 3706:
case 3886:
case 1948:
case 3716:
case 489:
case 2592:
case 3413:
case 2623:
case 1901:
case 1374:
case 3052:
case 599:
case 1200:
case 3032:
case 3415:
case 2365:
case 3038:
case 3058:
case 267:
case 1192:
case 1685:
case 4050:
case 3174:
case 672:
case 496:
case 3394:
case 1100:
case 1387:
case 3819:
case 3457:
case 1381:
case 2661:
case 3521:
case 2327:
case 669:
case 1292:
case 1298:
case 1110:
case 3764:
case 834:
case 3045:
case 3111:
case 2965:
case 3117:
case 371:
case 1520:
case 576:
case 608:
case 3148:
case 3029:
case 3107:
case 3073:
case 3142:
case 3101:
case 1450:
case 971:
case 462:
case 1981:
case 3862:
case 3806:
case 1344:
case 3217:
case 2649:
case 1095:
case 1333:
case 3207:
case 1353:
case 3786:
case 3816:
case 647:
case 754:
case 3242:
case 517:
case 3483:
case 2927:
case 2294:
case 3858:
case 2683:
case 435:
case 1793:
case 969:
case 3832:
case 3165:
case 3449:
case 1679:
case 3227:
case 52:
case 2942:
case 2374:
case 2901:
case 2948:
case 369:
case 2194:
case 2955:
case 3019:
case 705:
case 2935:
case 3265:
case 3845:
case 51:
case 64:
case 1510:
case 1460:
case 575:
case 573:
case 3446:
case 670:
case 2311:
case 3517:
case 1120:
case 3743:
case 493:
case 3511:
case 3542:
case 724:
case 3734:
case 2348:
case 2637:
case 3754:
case 2651:
case 3829:
case 3507:
case 26:
case 3548:
case 671:
case 1499:
case 2355:
case 1220:
case 2605:
case 3068:
case 3535:
case 347:
case 714:
case 557:
case 3425:
case 2615:
case 4060:
case 1895:
case 2972:
case 2344:
case 1893:
case 3479:
case 3423:
case 3758:
case 3726:
case 2978:
case 3544:
case 3732:
case 859:
case 468:
case 2095:
case 982:
case 3696:
case 2353:
case 3660:
case 2520:
case 75:
case 1965:
case 602:
case 89:
case 3089:
case 3320:
case 1580:
case 2450:
case 3745:
case 583:
case 1594:
case 3572:
case 680:
case 2378:
case 3699:
case 776:
case 3843:
case 1667:
case 739:
case 2110:
case 2953:
case 1321:
case 506:
case 3729:
case 1327:
case 83:
case 901:
case 900:
case 2192:
case 1795:
case 167:
case 409:
case 3821:
case 2916:
case 1354:
case 2309:
case 2639:
case 1010:
case 3827:
case 3509:
case 3484:
case 3145:
case 753:
case 2962:
case 3519:
case 3252:
case 3258:
case 1343:
case 2319:
case 895:
case 893:
case 2968:
case 2906:
case 1614:
case 1092:
case 3245:
case 192:
case 1440:
case 3152:
case 3126:
case 3138:
case 298:
case 3158:
case 1195:
case 2792:
case 3408:
case 628:
case 1682:
case 1688:
case 3441:
case 1934:
case 507:
case 861:
case 3763:
case 2919:
case 3055:
case 958:
case 3562:
case 3412:
case 2306:
case 726:
case 833:
case 2636:
case 2593:
case 2362:
case 3506:
case 618:
case 3048:
case 1295:
case 3129:
case 3007:
case 1375:
case 358:
case 3490:
case 922:
case 1669:
case 515:
case 645:
case 2986:
case 3564:
case 3414:
case 3727:
case 1373:
case 1329:
case 1952:
case 3691:
case 1926:
case 1932:
case 652:
case 3697:
case 2020:
case 2794:
case 1958:
case 523:
case 3640:
case 2595:
case 3033:
case 1945:
case 3053:
case 3765:
case 3044:
case 43:
case 291:
case 3275:
case 459:
case 3586:
case 1929:
case 950:
case 868:
case 1618:
case 1608:
case 1666:
case 1338:
case 3482:
case 1647:
case 1358:
case 3477:
case 951:
case 1352:
case 3471:
case 1641:
case 504:
case 620:
case 350:
case 1345:
case 556:
case 1690:
case 3134:
case 3154:
case 230:
case 231:
case 2800:
case 3143:
case 3081:
case 540:
case 1094:
case 1720:
case 346:
case 3087:
case 352:
case 266:
case 1880:
case 1710:
case 555:
case 2295:
case 232:
case 2820:
case 343:
case 345:
case 3575:
case 1700:
case 2671:
case 3264:
case 3833:
case 2954:
case 1909:
case 1798:
case 952:
case 2195:
case 2677:
case 3774:
case 1362:
case 943:
case 1636:
case 1368:
case 622:
case 577:
case 910:
case 3063:
case 2098:
case 2092:
case 320:
case 526:
case 707:
case 584:
case 2975:
case 321:
case 198:
case 2440:
case 920:
case 3554:
case 3701:
case 3742:
case 3534:
case 646:
case 429:
case 3286:
case 1916:
case 1659:
case 3707:
case 1639:
case 2354:
case 1319:
case 3887:
case 1894:
case 3717:
case 311:
case 3424:
case 1968:
case 650:
case 3872:
case 3878:
case 748:
case 2000:
case 3543:
case 437:
case 165:
case 50:
case 3545:
case 1780:
case 130:
case 1810:
case 3109:
case 3027:
case 163:
case 2345:
case 3021:
case 2094:
case 1800:
case 131:
case 715:
case 713:
case 494:
case 1898:
case 3753:
case 3874:
case 2612:
case 1892:
case 2973:
case 862:
case 2326:
case 2602:
case 2641:
case 3538:
case 3744:
case 3532:
case 2666:
case 2608:
case 1989:
case 2358:
case 2647:
case 587:
case 704:
case 3116:
case 1595:
case 190:
case 328:
case 574:
case 2193:
case 3168:
case 3162:
case 3855:
case 3801:
case 3842:
case 2373:
case 3807:
case 2669:
case 3529:
case 434:
case 1986:
case 3848:
case 1364:
case 658:
case 896:
case 3206:
case 2938:
case 2293:
case 2684:
case 318:
case 3787:
case 1020:
case 1389:
case 2952:
case 741:
case 2932:
case 3459:
case 2926:
case 3811:
case 260:
case 3940:
case 233:
case 353:
case 1645:
case 3475:
case 615:
case 1270:
case 545:
case 342:
case 261:
case 3114:
case 189:
case 67:
case 1969:
case 1796:
case 3204:
case 955:
case 838:
case 3085:
case 2686:
case 1312:
case 3823:
case 3879:
case 1652:
case 3991:
case 942:
case 1638:
case 3214:
case 3749:
case 1658:
case 916:
case 3171:
case 520:
case 1990:
case 293:
case 521:
case 46:
case 758:
case 3282:
case 1912:
case 4093:
case 1629:
case 926:
case 1673:
case 316:
case 3746:
case 3288:
case 510:
case 1918:
case 3524:
case 1908:
case 3397:
case 641:
case 656:
case 1384:
case 2689:
case 3391:
case 3434:
case 3169:
case 30:
case 1240:
case 3031:
case 3057:
case 1191:
case 1197:
case 1675:
case 179:
case 3445:
case 3184:
case 4095:
case 1388:
case 1896:
case 3269:
case 3458:
case 1377:
case 90:
case 3438:
case 1382:
case 2662:
case 2328:
case 3536:
case 865:
case 2356:
case 863:
case 2336:
case 2322:
case 3284:
case 3693:
case 1914:
case 830:
case 3005:
case 3528:
case 2606:
case 3112:
case 387:
case 196:
case 3118:
case 3290:
case 3166:
case 2570:
case 1495:
case 374:
case 3147:
case 3370:
case 607:
case 1977:
case 3861:
case 1982:
case 3212:
case 746:
case 3190:
case 3218:
case 1971:
case 2359:
case 2339:
case 1654:
case 3473:
case 2956:
case 2619:
case 1314:
case 890:
case 648:
case 3208:
case 518:
case 2936:
case 3266:
case 209:
case 3776:
case 3202:
case 3241:
case 2928:
case 974:
case 464:
case 2369:
case 2918:
case 3831:
case 1324:
case 3569:
case 3419:
case 2673:
case 2629:
case 3851:
case 1060:
case 1597:
case 60:
case 2902:
case 2941:
case 3584:
case 2799:
case 2384:
case 3222:
case 2966:
case 3256:
case 2947:
case 195:
case 1540:
case 3049:
case 3156:
case 3122:
case 3136:
case 2493:
case 3518:
case 1924:
case 3406:
case 2312:
case 307:
case 2796:
case 3703:
case 2969:
case 3512:
case 3462:
case 866:
case 687:
case 2366:
case 3541:
case 3883:
case 2347:
case 3547:
case 2632:
case 2341:
case 2302:
case 3416:
case 3566:
case 3025:
case 3508:
case 3067:
case 348:
case 2645:
case 3159:
case 3061:
case 711:
case 160:
case 1830:
case 2760:
case 1850:
case 289:
case 2304:
case 2971:
case 3757:
case 2634:
case 3737:
case 2654:
case 1609:
case 1339:
case 37:
case 3751:
case 3731:
case 2982:
case 512:
case 925:
case 3464:
case 2050:
case 467:
case 2030:
case 655:
case 2643:
case 1956:
case 1922:
case 323:
case 296:
case 915:
case 522:
case 3715:
case 684:
case 3582:
case 2371:
case 728:
case 2904:
case 1616:
case 3803:
case 941:
case 1356:
case 940:
case 3813:
case 2914:
case 1322:
case 2297:
case 3486:
case 449:
case 626:
case 304:
case 2291:
case 550:
case 262:
case 356:
case 236:
case 718:
case 2675:
case 1750:
case 1730:
case 2860:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1743786001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,];
var gg_b = "1743786001/";

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
