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
case 3344:
case 2808:
case 2030:
case 1777:
case 2895:
case 1769:
case 1177:
case 1257:
case 1169:
case 84:
case 2632:
case 2087:
case 792:
case 686:
case 3673:
case 2045:
case 2319:
case 2946:
case 1891:
case 2379:
case 3613:
case 2577:
case 2005:
case 3627:
case 3735:
case 1449:
case 3186:
case 3856:
case 3740:
case 1117:
case 3786:
case 1041:
case 1123:
case 3971:
case 1228:
case 848:
case 3611:
case 3533:
case 3279:
case 3159:
case 3267:
case 2362:
case 2594:
case 2572:
case 3622:
case 244:
case 2606:
case 1390:
case 1112:
case 137:
case 1121:
case 3020:
case 482:
case 522:
case 1043:
case 131:
case 3658:
case 1794:
case 1772:
case 1003:
case 1194:
case 216:
case 596:
case 1338:
case 3671:
case 1866:
case 2125:
case 984:
case 3220:
case 2793:
case 2437:
case 3734:
case 4049:
case 2193:
case 3471:
case 2004:
case 1566:
case 3458:
case 3398:
case 954:
case 260:
case 2446:
case 2480:
case 3079:
case 1650:
case 950:
case 264:
case 2894:
case 2282:
case 2872:
case 2406:
case 1316:
case 3345:
case 3833:
case 3960:
case 868:
case 1825:
case 3411:
case 452:
case 2044:
case 31:
case 3330:
case 89:
case 186:
case 3422:
case 929:
case 2877:
case 631:
case 546:
case 2245:
case 1591:
case 1108:
case 2724:
case 738:
case 510:
case 1057:
case 3413:
case 3556:
case 2124:
case 2548:
case 514:
case 2432:
case 2791:
case 2508:
case 3660:
case 574:
case 2595:
case 1748:
case 898:
case 4050:
case 656:
case 2298:
case 385:
case 3062:
case 378:
case 690:
case 1725:
case 38:
case 1082:
case 1521:
case 865:
case 1244:
case 3559:
case 3133:
case 140:
case 3497:
case 2252:
case 2172:
case 1680:
case 2968:
case 2194:
case 1932:
case 1606:
case 2450:
case 1204:
case 237:
case 3675:
case 4032:
case 2893:
case 694:
case 4046:
case 375:
case 933:
case 1848:
case 388:
case 4080:
case 2717:
case 2123:
case 3915:
case 1946:
case 3328:
case 2891:
case 4037:
case 3076:
case 1379:
case 996:
case 1005:
case 1569:
case 584:
case 1098:
case 1:
case 1517:
case 1632:
case 1906:
case 3586:
case 2409:
case 3238:
case 3975:
case 1087:
case 1523:
case 3540:
case 1045:
case 1319:
case 321:
case 664:
case 4006:
case 1895:
case 2769:
case 459:
case 2777:
case 922:
case 3474:
case 2257:
case 3352:
case 1298:
case 3840:
case 3756:
case 2148:
case 3674:
case 2524:
case 3156:
case 3276:
case 3886:
case 1320:
case 1791:
case 1432:
case 3343:
case 2609:
case 3090:
case 1191:
case 489:
case 1724:
case 358:
case 902:
case 616:
case 2468:
case 301:
case 676:
case 2649:
case 1548:
case 3997:
case 3800:
case 1869:
case 1877:
case 1287:
case 3614:
case 400:
case 554:
case 1245:
case 640:
case 2708:
case 2591:
case 2195:
case 2108:
case 2203:
case 914:
case 2825:
case 3301:
case 1166:
case 2052:
case 1044:
case 1766:
case 3992:
case 286:
case 1406:
case 1894:
case 164:
case 2316:
case 3688:
case 3475:
case 2593:
case 799:
case 946:
case 412:
case 3697:
case 2376:
case 1480:
case 35:
case 3341:
case 1793:
case 1437:
case 2243:
case 839:
case 1004:
case 845:
case 1916:
case 1075:
case 1507:
case 359:
case 183:
case 4016:
case 320:
case 1297:
case 83:
case 324:
case 2107:
case 661:
case 3404:
case 1288:
case 842:
case 768:
case 3998:
case 3164:
case 415:
case 427:
case 488:
case 528:
case 2467:
case 3080:
case 1851:
case 79:
case 1015:
case 1349:
case 3046:
case 3687:
case 234:
case 2073:
case 147:
case 3199:
case 1183:
case 2462:
case 3799:
case 1783:
case 697:
case 703:
case 3126:
case 1438:
case 2260:
case 806:
case 1754:
case 543:
case 905:
case 3605:
case 141:
case 2027:
case 798:
case 230:
case 2583:
case 1154:
case 1292:
case 52:
case 2742:
case 76:
case 2979:
case 3405:
case 1802:
case 1476:
case 74:
case 372:
case 911:
case 2337:
case 3232:
case 2753:
case 2539:
case 3371:
case 1638:
case 3765:
case 3311:
case 50:
case 1092:
case 977:
case 2662:
case 3944:
case 3430:
case 925:
case 3487:
case 2306:
case 2060:
case 3445:
case 2854:
case 1739:
case 1842:
case 2919:
case 1553:
case 2784:
case 1139:
case 732:
case 1097:
case 593:
case 2667:
case 191:
case 3327:
case 2222:
case 4038:
case 300:
case 536:
case 2718:
case 3206:
case 401:
case 1755:
case 3604:
case 1847:
case 2118:
case 458:
case 1551:
case 862:
case 1885:
case 4090:
case 551:
case 153:
case 647:
case 2778:
case 3280:
case 3870:
case 1807:
case 407:
case 1990:
case 2420:
case 0:
case 3237:
case 1088:
case 2555:
case 2881:
case 3373:
case 3068:
case 241:
case 2754:
case 1839:
case 3903:
case 3397:
case 2292:
case 2274:
case 2154:
case 1742:
case 1013:
case 2676:
case 987:
case 2438:
case 1260:
case 673:
case 869:
case 2853:
case 2183:
case 2542:
case 4020:
case 1462:
case 2783:
case 3865:
case 1554:
case 2350:
case 134:
case 2214:
case 3943:
case 2616:
case 247:
case 1467:
case 2181:
case 2851:
case 1479:
case 2349:
case 505:
case 3250:
case 2536:
case 379:
case 2878:
case 1581:
case 1855:
case 3710:
case 455:
case 3901:
case 3564:
case 1147:
case 3392:
case 1011:
case 3110:
case 1747:
case 3452:
case 1620:
case 2916:
case 2507:
case 3643:
case 1136:
case 739:
case 283:
case 1736:
case 745:
case 1419:
case 1420:
case 1751:
case 577:
case 4062:
case 478:
case 1555:
case 418:
case 517:
case 2518:
case 765:
case 1619:
case 3796:
case 3129:
case 1778:
case 3652:
case 1718:
case 963:
case 3163:
case 2847:
case 1118:
case 2938:
case 2155:
case 2885:
case 2275:
case 3763:
case 1211:
case 3403:
case 1667:
case 2578:
case 1679:
case 2368:
case 173:
case 3957:
case 571:
case 3161:
case 41:
case 2416:
case 2690:
case 1854:
case 1184:
case 2739:
case 2553:
case 3761:
case 2842:
case 47:
case 3375:
case 352:
case 908:
case 2074:
case 1213:
case 4019:
case 1227:
case 4067:
case 2584:
case 993:
case 849:
case 1273:
case 1883:
case 3899:
case 1967:
case 261:
case 3315:
case 1380:
case 1665:
case 2830:
case 2963:
case 470:
case 3738:
case 756:
case 737:
case 3955:
case 410:
case 2333:
case 3562:
case 972:
case 891:
case 3231:
case 311:
case 2277:
case 3394:
case 446:
case 3454:
case 2845:
case 606:
case 2217:
case 3312:
case 638:
case 3190:
case 2661:
case 3790:
case 2805:
case 2223:
case 897:
case 3321:
case 2898:
case 325:
case 474:
case 731:
case 853:
case 1499:
case 2929:
case 2996:
case 1841:
case 414:
case 1965:
case 1386:
case 3089:
case 900:
case 3655:
case 1704:
case 1340:
case 235:
case 1335:
case 861:
case 2544:
case 402:
case 3820:
case 1225:
case 1803:
case 2752:
case 2629:
case 2331:
case 1300:
case 904:
case 582:
case 422:
case 2356:
case 2610:
case 1926:
case 3348:
case 959:
case 2143:
case 2582:
case 2012:
case 3879:
case 841:
case 3681:
case 1266:
case 3819:
case 924:
case 3954:
case 662:
case 1025:
case 1852:
case 1182:
case 3455:
case 433:
case 3395:
case 2505:
case 2077:
case 1699:
case 2598:
case 3683:
case 2701:
case 1130:
case 3031:
case 13:
case 1541:
case 3116:
case 1145:
case 2461:
case 1187:
case 1745:
case 2208:
case 883:
case 2295:
case 1964:
case 1198:
case 1105:
case 1501:
case 2530:
case 1798:
case 466:
case 1705:
case 1465:
case 2023:
case 4064:
case 2545:
case 1334:
case 2017:
case 3862:
case 299:
case 1752:
case 3447:
case 2528:
case 4061:
case 30:
case 1882:
case 1152:
case 1294:
case 2066:
case 1696:
case 3436:
case 3719:
case 1504:
case 226:
case 2803:
case 1544:
case 3167:
case 3259:
case 2464:
case 3767:
case 3779:
case 2104:
case 1663:
case 2386:
case 572:
case 3407:
case 2965:
case 1470:
case 2704:
case 149:
case 3618:
case 512:
case 3953:
case 2340:
case 1221:
case 135:
case 3235:
case 351:
case 2359:
case 1048:
case 1929:
case 429:
case 2499:
case 2426:
case 308:
case 3762:
case 2557:
case 716:
case 4029:
case 3876:
case 3286:
case 3402:
case 3951:
case 450:
case 776:
case 1805:
case 3240:
case 1898:
case 504:
case 813:
case 1333:
case 4063:
case 1269:
case 669:
case 873:
case 500:
case 1157:
case 1277:
case 1887:
case 1845:
case 1008:
case 744:
case 2665:
case 1830:
case 336:
case 3590:
case 1095:
case 3325:
case 3653:
case 2801:
case 1023:
case 764:
case 3907:
case 1587:
case 2465:
case 484:
case 2334:
case 524:
case 3040:
case 1389:
case 1741:
case 3393:
case 2964:
case 2198:
case 4070:
case 2105:
case 649:
case 1530:
case 3035:
case 1248:
case 2705:
case 3890:
case 3484:
case 2145:
case 3936:
case 2187:
case 2857:
case 381:
case 4010:
case 1208:
case 1295:
case 2787:
case 3985:
case 520:
case 480:
case 1101:
case 3366:
case 1505:
case 1598:
case 760:
case 3947:
case 1910:
case 2224:
case 3576:
case 2852:
case 794:
case 2182:
case 2543:
case 1670:
case 1844:
case 2782:
case 3418:
case 1094:
case 1072:
case 2664:
case 343:
case 919:
case 1703:
case 3636:
case 1021:
case 3120:
case 3391:
case 2828:
case 1012:
case 1743:
case 3451:
case 3720:
case 790:
case 2503:
case 2999:
case 238:
case 3478:
case 1610:
case 1496:
case 1247:
case 2433:
case 1875:
case 1285:
case 3472:
case 103:
case 501:
case 3354:
case 1236:
case 747:
case 3063:
case 2811:
case 3908:
case 1459:
case 2871:
case 3383:
case 1399:
case 3096:
case 3948:
case 3029:
case 2956:
case 16:
case 1078:
case 2788:
case 648:
case 1051:
case 97:
case 408:
case 1207:
case 329:
case 2858:
case 3421:
case 3750:
case 451:
case 3846:
case 3381:
case 1435:
case 3749:
case 2283:
case 2873:
case 3149:
case 1592:
case 1934:
case 3417:
case 1486:
case 1202:
case 239:
case 2989:
case 463:
case 3423:
case 783:
case 1440:
case 3695:
case 2792:
case 2656:
case 3469:
case 3648:
case 2254:
case 2174:
case 2192:
case 886:
case 1514:
case 2039:
case 985:
case 2827:
case 1084:
case 2813:
case 3109:
case 4059:
case 698:
case 3921:
case 1253:
case 1002:
case 2329:
case 791:
case 2513:
case 2456:
case 3677:
case 3669:
case 1600:
case 2527:
case 2396:
case 1874:
case 42:
case 2363:
case 1892:
case 3261:
case 3355:
case 603:
case 1640:
case 1635:
case 3768:
case 2933:
case 1042:
case 3994:
case 1897:
case 2361:
case 3339:
case 1036:
case 3621:
case 380:
case 1218:
case 4000:
case 2931:
case 2558:
case 481:
case 1515:
case 3546:
case 1047:
case 1085:
case 1711:
case 3969:
case 1900:
case 1365:
case 767:
case 1940:
case 295:
case 588:
case 1007:
case 3923:
case 2489:
case 1251:
case 1575:
case 1278:
case 3694:
case 4040:
case 3672:
case 2522:
case 1758:
case 864:
case 3336:
case 2514:
case 3868:
case 2760:
case 2242:
case 3347:
case 1431:
case 3966:
case 3385:
case 1774:
case 29:
case 1310:
case 1192:
case 51:
case 3549:
case 1174:
case 2053:
case 958:
case 2202:
case 3509:
case 2440:
case 1714:
case 901:
case 2435:
case 1283:
case 2364:
case 2592:
case 3226:
case 3624:
case 2207:
case 3302:
case 2051:
case 1858:
case 4056:
case 585:
case 417:
case 425:
case 3264:
case 298:
case 2399:
case 2326:
case 2597:
case 477:
case 2078:
case 26:
case 1055:
case 471:
case 2634:
case 346:
case 1811:
case 3425:
case 411:
case 95:
case 3693:
case 3342:
case 890:
case 1433:
case 2285:
case 3924:
case 370:
case 1115:
case 3146:
case 3780:
case 2935:
case 2888:
case 1081:
case 639:
case 3850:
case 2758:
case 645:
case 3064:
case 2365:
case 2771:
case 366:
case 3737:
case 3625:
case 3353:
case 2171:
case 2251:
case 3493:
case 2575:
case 232:
case 2007:
case 1931:
case 2515:
case 2111:
case 2122:
case 2085:
case 3384:
case 2897:
case 8:
case 3106:
case 1361:
case 1175:
case 1255:
case 2036:
case 2727:
case 1860:
case 975:
case 840:
case 1054:
case 333:
case 2713:
case 2042:
case 988:
case 915:
case 1363:
case 816:
case 2284:
case 396:
case 4033:
case 2686:
case 876:
case 1573:
case 2640:
case 3925:
case 248:
case 713:
case 1329:
case 1631:
case 3378:
case 2600:
case 1456:
case 2814:
case 3099:
case 1527:
case 1396:
case 844:
case 3265:
case 921:
case 3849:
case 3732:
case 2173:
case 2002:
case 322:
case 18:
case 3637:
case 316:
case 2219:
case 3125:
case 441:
case 3521:
case 3082:
case 601:
case 833:
case 1615:
case 340:
case 751:
case 1559:
case 1733:
case 995:
case 3680:
case 2927:
case 1497:
case 3204:
case 736:
case 3606:
case 3932:
case 344:
case 1675:
case 1488:
case 2267:
case 3362:
case 2159:
case 447:
case 2279:
case 1834:
case 2759:
case 866:
case 3848:
case 2304:
case 4015:
case 2740:
case 2856:
case 1414:
case 2971:
case 2140:
case 188:
case 115:
case 2958:
case 2531:
case 3379:
case 70:
case 2262:
case 1328:
case 2627:
case 3098:
case 1500:
case 965:
case 3980:
case 3906:
case 3632:
case 1586:
case 3:
case 3517:
case 255:
case 1540:
case 3087:
case 1975:
case 3895:
case 2700:
case 2911:
case 121:
case 523:
case 3808:
case 2344:
case 54:
case 4075:
case 1492:
case 1731:
case 1474:
case 2922:
case 3298:
case 218:
case 743:
case 1756:
case 3205:
case 497:
case 72:
case 1886:
case 1674:
case 394:
case 3191:
case 2660:
case 1988:
case 453:
case 3508:
case 2413:
case 1303:
case 810:
case 3724:
case 390:
case 1997:
case 3548:
case 870:
case 3124:
case 945:
case 503:
case 2556:
case 3230:
case 3245:
case 1038:
case 3877:
case 3287:
case 1614:
case 2831:
case 491:
case 1301:
case 467:
case 728:
case 787:
case 1992:
case 1974:
case 2422:
case 2019:
case 3406:
case 3872:
case 2387:
case 364:
case 3894:
case 2960:
case 4074:
case 2833:
case 1415:
case 3821:
case 4014:
case 2398:
case 675:
case 2458:
case 3480:
case 3812:
case 615:
case 802:
case 1914:
case 1789:
case 2134:
case 3004:
case 2471:
case 3193:
case 2734:
case 1189:
case 1859:
case 3777:
case 3769:
case 2535:
case 3257:
case 3001:
case 1100:
case 3169:
case 1922:
case 2586:
case 3824:
case 2016:
case 1673:
case 4022:
case 1460:
case 2238:
case 1613:
case 3891:
case 2328:
case 4071:
case 2500:
case 884:
case 3723:
case 1304:
case 2290:
case 4058:
case 1186:
case 275:
case 1740:
case 3717:
case 3123:
case 1971:
case 1786:
case 1140:
case 215:
case 1159:
case 1889:
case 1279:
case 3893:
case 1267:
case 1533:
case 1611:
case 434:
case 1759:
case 771:
case 1622:
case 4073:
case 685:
case 3390:
case 3721:
case 3450:
case 923:
case 678:
case 2675:
case 2488:
case 3043:
case 3712:
case 3121:
case 94:
case 337:
case 3525:
case 1973:
case 2615:
case 1913:
case 3194:
case 3252:
case 932:
case 1927:
case 717:
case 725:
case 1219:
case 565:
case 430:
case 3338:
case 3866:
case 1671:
case 4027:
case 1134:
case 2789:
case 1220:
case 539:
case 545:
case 903:
case 1734:
case 2859:
case 1471:
case 2415:
case 1305:
case 3566:
case 2697:
case 3949:
case 2534:
case 1019:
case 1345:
case 1589:
case 3593:
case 96:
case 3825:
case 17:
case 1411:
case 655:
case 2992:
case 11:
case 473:
case 2216:
case 2038:
case 1382:
case 854:
case 413:
case 3108:
case 1831:
case 3591:
case 2303:
case 2997:
case 1427:
case 201:
case 968:
case 207:
case 99:
case 829:
case 2835:
case 850:
case 185:
case 118:
case 3748:
case 178:
case 1062:
case 2674:
case 2692:
case 843:
case 1903:
case 2605:
case 3839:
case 3013:
case 3742:
case 1397:
case 714:
case 4003:
case 431:
case 1209:
case 506:
case 2726:
case 3462:
case 710:
case 2126:
case 3554:
case 2630:
case 3920:
case 3073:
case 334:
case 2032:
case 1388:
case 3702:
case 2080:
case 2164:
case 1428:
case 887:
case 2046:
case 2764:
case 3058:
case 2404:
case 1941:
case 224:
case 1250:
case 3071:
case 2037:
case 119:
case 1770:
case 220:
case 2444:
case 1901:
case 1710:
case 1452:
case 652:
case 2930:
case 1374:
case 3011:
case 2863:
case 702:
case 2987:
case 3620:
case 3419:
case 259:
case 881:
case 682:
case 796:
case 3751:
case 3420:
case 1864:
case 2373:
case 204:
case 733:
case 1129:
case 2246:
case 3258:
case 851:
case 1796:
case 2870:
case 808:
case 2810:
case 836:
case 2482:
case 3718:
case 4057:
case 3667:
case 2313:
case 3679:
case 200:
case 2327:
case 766:
case 526:
case 486:
case 3306:
case 1161:
case 1565:
case 3919:
case 3213:
case 80:
case 3662:
case 2311:
case 1952:
case 1268:
case 3337:
case 2232:
case 4028:
case 2165:
case 1826:
case 2904:
case 272:
case 1441:
case 3883:
case 1899:
case 2765:
case 212:
case 679:
case 2498:
case 1928:
case 3346:
case 863:
case 1049:
case 2405:
case 2358:
case 3979:
case 619:
case 1657:
case 2643:
case 938:
case 3075:
case 1987:
case 3916:
case 4030:
case 1006:
case 120:
case 3818:
case 2564:
case 2901:
case 2710:
case 1444:
case 1930:
case 4:
case 2452:
case 2941:
case 4005:
case 805:
case 1404:
case 279:
case 2170:
case 1682:
case 3288:
case 3878:
case 599:
case 1905:
case 1080:
case 2428:
case 2603:
case 1164:
case 3547:
case 1998:
case 3015:
case 1510:
case 3781:
case 3976:
case 3490:
case 1645:
case 3616:
case 689:
case 2388:
case 2601:
case 282:
case 1726:
case 3542:
case 3853:
case 444:
case 2865:
case 3502:
case 1982:
case 2641:
case 569:
case 600:
case 729:
case 2209:
case 2599:
case 2903:
case 476:
case 750:
case 1698:
case 3754:
case 1861:
case 416:
case 3154:
case 3884:
case 3274:
case 2397:
case 2526:
case 2928:
case 1498:
case 1358:
case 3476:
case 3802:
case 2657:
case 962:
case 1165:
case 1904:
case 549:
case 2899:
case 1765:
case 780:
case 112:
case 535:
case 3014:
case 3074:
case 464:
case 1430:
case 659:
case 2952:
case 784:
case 1445:
case 3690:
case 2009:
case 1487:
case 252:
case 3842:
case 2761:
case 3553:
case 367:
case 811:
case 1313:
case 3578:
case 391:
case 2403:
case 1529:
case 871:
case 1810:
case 1604:
case 3755:
case 2763:
case 3155:
case 490:
case 3551:
case 3938:
case 353:
case 3215:
case 2129:
case 1246:
case 926:
case 2796:
case 1644:
case 1870:
case 2729:
case 3807:
case 2196:
case 3088:
case 877:
case 2443:
case 1237:
case 2864:
case 2050:
case 1678:
case 2567:
case 1485:
case 4084:
case 2579:
case 2233:
case 3629:
case 3752:
case 3696:
case 3294:
case 3504:
case 1984:
case 1719:
case 1436:
case 852:
case 1651:
case 468:
case 1119:
case 727:
case 3128:
case 2481:
case 1259:
case 2820:
case 1779:
case 2089:
case 628:
case 3663:
case 1953:
case 973:
case 1618:
case 2519:
case 335:
case 3221:
case 349:
case 3929:
case 3048:
case 1978:
case 2056:
case 151:
case 1162:
case 1762:
case 3996:
case 78:
case 277:
case 1402:
case 4078:
case 2312:
case 3217:
case 2321:
case 1951:
case 3223:
case 2790:
case 3805:
case 2231:
case 211:
case 591:
case 1442:
case 271:
case 1816:
case 3845:
case 643:
case 3095:
case 3008:
case 3830:
case 2138:
case 62:
case 1918:
case 1325:
case 157:
case 663:
case 1040:
case 3545:
case 3587:
case 399:
case 3389:
case 2862:
case 1393:
case 819:
case 3741:
case 3017:
case 2981:
case 4007:
case 2776:
case 432:
case 1890:
case 3248:
case 1035:
case 4047:
case 2116:
case 1484:
case 181:
case 423:
case 583:
case 2716:
case 2683:
case 934:
case 1838:
case 1985:
case 3077:
case 3505:
case 1000:
case 3101:
case 75:
case 3701:
case 3910:
case 1607:
case 693:
case 707:
case 3463:
case 1418:
case 3844:
case 2308:
case 2455:
case 143:
case 3103:
case 2819:
case 2681:
case 1324:
case 3703:
case 12:
case 657:
case 2954:
case 2033:
case 1120:
case 1234:
case 1902:
case 3143:
case 1720:
case 1451:
case 2879:
case 3012:
case 1391:
case 608:
case 1478:
case 882:
case 1685:
case 1647:
case 758:
case 4002:
case 3804:
case 3496:
case 701:
case 1059:
case 2590:
case 362:
case 3801:
case 1138:
case 1955:
case 2653:
case 2918:
case 2325:
case 3024:
case 1562:
case 111:
case 293:
case 573:
case 1454:
case 800:
case 1394:
case 2402:
case 2876:
case 2286:
case 177:
case 1190:
case 2684:
case 1312:
case 125:
case 117:
case 1790:
case 3499:
case 1483:
case 889:
case 2978:
case 251:
case 3841:
case 3965:
case 3093:
case 2407:
case 1089:
case 1317:
case 872:
case 3104:
case 3340:
case 2034:
case 392:
case 812:
case 3704:
case 1655:
case 605:
case 439:
case 3464:
case 445:
case 2167:
case 1481:
case 2779:
case 1820:
case 2767:
case 326:
case 2984:
case 2719:
case 2436:
case 953:
case 2651:
case 2119:
case 2678:
case 20:
case 3144:
case 1567:
case 2485:
case 3528:
case 1233:
case 2447:
case 3744:
case 1369:
case 1377:
case 2478:
case 677:
case 2685:
case 3503:
case 617:
case 1348:
case 3926:
case 2059:
case 534:
case 2234:
case 2120:
case 4083:
case 1289:
case 3293:
case 1867:
case 2720:
case 2451:
case 2391:
case 1819:
case 785:
case 2942:
case 778:
case 2324:
case 1954:
case 3543:
case 3182:
case 3852:
case 3025:
case 1395:
case 671:
case 2418:
case 4054:
case 1308:
case 3699:
case 3730:
case 2947:
case 2000:
case 3626:
case 3857:
case 3145:
case 1116:
case 3541:
case 1716:
case 859:
case 281:
case 495:
case 1981:
case 1776:
case 2642:
case 3198:
case 3964:
case 2890:
case 3705:
case 1654:
case 71:
case 3798:
case 2040:
case 941:
case 2907:
case 342:
case 2086:
case 4066:
case 3827:
case 779:
case 2061:
case 2109:
case 1966:
case 3431:
case 1385:
case 994:
case 3174:
case 2648:
case 2469:
case 426:
case 2477:
case 3656:
case 3114:
case 1307:
case 2417:
case 345:
case 2695:
case 1065:
case 3560:
case 1509:
case 339:
case 2608:
case 3873:
case 2749:
case 2381:
case 85:
case 1226:
case 4093:
case 2149:
case 1302:
case 2270:
case 2880:
case 2412:
case 2750:
case 3188:
case 2096:
case 1264:
case 964:
case 3871:
case 1666:
case 4091:
case 2837:
case 3956:
case 633:
case 3822:
case 960:
case 1550:
case 2908:
case 4024:
case 2995:
case 1425:
case 3433:
case 462:
case 1342:
case 110:
case 858:
case 801:
case 170:
case 602:
case 916:
case 1146:
case 3633:
case 3115:
case 442:
case 2229:
case 3511:
case 2296:
case 3715:
case 1850:
case 2506:
case 940:
case 209:
case 752:
case 1493:
case 2923:
case 815:
case 1353:
case 1737:
case 2010:
case 2546:
case 2977:
case 3361:
case 1106:
case 3775:
case 2339:
case 3571:
case 3255:
case 3175:
case 3933:
case 646:
case 2768:
case 1809:
case 3860:
case 406:
case 2168:
case 4025:
case 2994:
case 88:
case 3363:
case 610:
case 365:
case 2495:
case 3239:
case 2408:
case 670:
case 3513:
case 9:
case 1378:
case 3329:
case 1026:
case 3527:
case 1099:
case 1568:
case 1849:
case 556:
case 438:
case 537:
case 122:
case 2921:
case 1210:
case 4008:
case 2924:
case 1806:
case 246:
case 3634:
case 3236:
case 2550:
case 1908:
case 2425:
case 818:
case 1383:
case 150:
case 398:
case 2666:
case 1948:
case 1270:
case 1880:
case 1150:
case 214:
case 3207:
case 2302:
case 594:
case 1412:
case 1421:
case 3815:
case 1846:
case 2991:
case 986:
case 4048:
case 449:
case 2299:
case 3364:
case 3435:
case 3574:
case 3934:
case 1695:
case 3440:
case 1423:
case 759:
case 1608:
case 2065:
case 2993:
case 2385:
case 2966:
case 87:
case 1477:
case 39:
case 3400:
case 1469:
case 564:
case 1709:
case 3760:
case 2868:
case 3514:
case 2336:
case 1109:
case 2849:
case 3773:
case 222:
case 3002:
case 3253:
case 2732:
case 2378:
case 3959:
case 2026:
case 348:
case 2099:
case 3600:
case 1669:
case 1532:
case 1617:
case 3284:
case 3874:
case 2318:
case 1495:
case 4072:
case 469:
case 1768:
case 654:
case 3113:
case 3635:
case 1168:
case 1994:
case 1972:
case 2424:
case 3713:
case 5:
case 3897:
case 772:
case 2384:
case 1612:
case 2706:
case 3218:
case 1339:
case 712:
case 1010:
case 3515:
case 3659:
case 3722:
case 3085:
case 34:
case 1969:
case 3122:
case 3986:
case 1923:
case 3007:
case 2493:
case 3575:
case 3171:
case 1070:
case 2353:
case 2625:
case 3278:
case 2780:
case 2146:
case 2064:
case 4023:
case 1296:
case 3758:
case 184:
case 1672:
case 2746:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1752519601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,];
var gg_b = "1752519601/";

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
