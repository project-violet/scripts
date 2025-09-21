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
case 2678:
case 140:
case 1233:
case 3131:
case 1352:
case 1468:
case 545:
case 3552:
case 3797:
case 1421:
case 3607:
case 3734:
case 2802:
case 3027:
case 3312:
case 2667:
case 1290:
case 677:
case 367:
case 129:
case 252:
case 1632:
case 3913:
case 3851:
case 4035:
case 2680:
case 3942:
case 2215:
case 2752:
case 2536:
case 2166:
case 2164:
case 2875:
case 2055:
case 2900:
case 2848:
case 3435:
case 3949:
case 2728:
case 2098:
case 2614:
case 438:
case 396:
case 928:
case 658:
case 1271:
case 3701:
case 3960:
case 1359:
case 372:
case 3840:
case 3104:
case 2809:
case 600:
case 2183:
case 662:
case 2246:
case 2244:
case 2143:
case 3430:
case 28:
case 4026:
case 53:
case 1101:
case 765:
case 3203:
case 1773:
case 1706:
case 287:
case 112:
case 537:
case 1694:
case 654:
case 1018:
case 924:
case 2050:
case 2599:
case 3867:
case 1229:
case 1120:
case 2807:
case 3602:
case 3845:
case 953:
case 3022:
case 3095:
case 3725:
case 2331:
case 2979:
case 1357:
case 695:
case 2263:
case 961:
case 3965:
case 3878:
case 3609:
case 2373:
case 3029:
case 1583:
case 9:
case 3982:
case 4093:
case 2640:
case 1074:
case 3218:
case 1854:
case 1623:
case 2891:
case 514:
case 1405:
case 2306:
case 3366:
case 2685:
case 221:
case 2119:
case 2210:
case 825:
case 1564:
case 1295:
case 1134:
case 2757:
case 1938:
case 1197:
case 1810:
case 3959:
case 3587:
case 1360:
case 2858:
case 3508:
case 2577:
case 2045:
case 3007:
case 830:
case 2822:
case 1172:
case 2713:
case 3088:
case 2895:
case 1308:
case 3130:
case 2742:
case 2256:
case 250:
case 307:
case 768:
case 2500:
case 208:
case 946:
case 2936:
case 2080:
case 2138:
case 571:
case 1039:
case 3542:
case 544:
case 1912:
case 3513:
case 828:
case 1342:
case 2708:
case 292:
case 2787:
case 2920:
case 1497:
case 2335:
case 3952:
case 3091:
case 12:
case 3768:
case 3841:
case 660:
case 1179:
case 3690:
case 2829:
case 602:
case 679:
case 3353:
case 2419:
case 3700:
case 3126:
case 370:
case 2749:
case 2992:
case 2051:
case 3223:
case 2871:
case 705:
case 2925:
case 419:
case 4006:
case 1966:
case 1964:
case 4004:
case 1168:
case 1100:
case 3881:
case 2062:
case 861:
case 78:
case 4073:
case 1096:
case 110:
case 1618:
case 265:
case 1724:
case 1726:
case 3705:
case 2417:
case 901:
case 3658:
case 3582:
case 1248:
case 1983:
case 583:
case 539:
case 3294:
case 289:
case 2040:
case 435:
case 3565:
case 1389:
case 1815:
case 2641:
case 2466:
case 2153:
case 993:
case 1793:
case 2782:
case 463:
case 3048:
case 8:
case 1347:
case 173:
case 721:
case 3473:
case 3547:
case 2505:
case 4031:
case 451:
case 246:
case 1071:
case 1851:
case 2460:
case 2837:
case 950:
case 2894:
case 329:
case 167:
case 1343:
case 2487:
case 2301:
case 2046:
case 1862:
case 3199:
case 1670:
case 1734:
case 3361:
case 1552:
case 3421:
case 2255:
case 3468:
case 3352:
case 852:
case 2935:
case 1131:
case 2449:
case 1528:
case 1987:
case 1720:
case 4021:
case 890:
case 1559:
case 1840:
case 1106:
case 2654:
case 1908:
case 4068:
case 172:
case 2413:
case 4000:
case 3359:
case 3271:
case 1691:
case 1173:
case 2743:
case 462:
case 1033:
case 1949:
case 1435:
case 2397:
case 506:
case 1878:
case 201:
case 1965:
case 1058:
case 2926:
case 2924:
case 2161:
case 805:
case 3357:
case 495:
case 1095:
case 1989:
case 1557:
case 761:
case 1493:
case 2152:
case 1845:
case 1602:
case 3120:
case 1867:
case 2783:
case 1274:
case 1276:
case 312:
case 3696:
case 2832:
case 3472:
case 4079:
case 1203:
case 1880:
case 3517:
case 1947:
case 188:
case 634:
case 1430:
case 3938:
case 3197:
case 2489:
case 3134:
case 2993:
case 3136:
case 3295:
case 3566:
case 603:
case 2392:
case 1648:
case 3731:
case 2325:
case 1816:
case 1814:
case 2086:
case 2084:
case 2930:
case 293:
case 3623:
case 1383:
case 61:
case 2717:
case 3854:
case 3074:
case 3076:
case 2506:
case 2504:
case 1218:
case 1799:
case 904:
case 3583:
case 617:
case 1029:
case 821:
case 1193:
case 2452:
case 968:
case 230:
case 580:
case 746:
case 1070:
case 3735:
case 2646:
case 732:
case 1850:
case 107:
case 1549:
case 185:
case 2428:
case 1130:
case 1239:
case 1088:
case 3308:
case 156:
case 808:
case 1007:
case 1627:
case 3172:
case 3387:
case 336:
case 1508:
case 2214:
case 498:
case 3810:
case 3420:
case 2054:
case 169:
case 2876:
case 1353:
case 1961:
case 3270:
case 1690:
case 3884:
case 575:
case 402:
case 460:
case 1091:
case 2189:
case 2280:
case 3497:
case 876:
case 2459:
case 3313:
case 1633:
case 64:
case 3288:
case 1542:
case 3039:
case 2187:
case 2372:
case 1658:
case 2108:
case 2011:
case 3382:
case 2269:
case 1622:
case 3177:
case 253:
case 2973:
case 216:
case 2530:
case 1705:
case 3726:
case 833:
case 3724:
case 3094:
case 2149:
case 3096:
case 905:
case 310:
case 1779:
case 1881:
case 98:
case 3964:
case 3121:
case 2593:
case 1855:
case 2142:
case 3730:
case 1075:
case 3917:
case 494:
case 3202:
case 2113:
case 2305:
case 804:
case 486:
case 921:
case 1406:
case 889:
case 2663:
case 1048:
case 2251:
case 1589:
case 2738:
case 1957:
case 3023:
case 725:
case 3603:
case 3425:
case 2686:
case 2684:
case 3815:
case 3365:
case 455:
case 1009:
case 1629:
case 2262:
case 3389:
case 964:
case 2:
case 2931:
case 3674:
case 793:
case 50:
case 71:
case 1144:
case 1146:
case 3181:
case 1800:
case 1283:
case 3786:
case 3784:
case 585:
case 1741:
case 1318:
case 1868:
case 2402:
case 717:
case 1411:
case 2703:
case 2693:
case 886:
case 3322:
case 2510:
case 1682:
case 855:
case 3462:
case 3395:
case 251:
case 1558:
case 263:
case 3923:
case 1057:
case 3451:
case 1877:
case 4085:
case 3358:
case 2225:
case 1264:
case 791:
case 3329:
case 1902:
case 2853:
case 2586:
case 1115:
case 569:
case 1376:
case 465:
case 2475:
case 954:
case 1303:
case 2190:
case 2299:
case 1529:
case 1750:
case 4051:
case 3485:
case 734:
case 1665:
case 175:
case 2341:
case 3574:
case 2626:
case 624:
case 3064:
case 3066:
case 1647:
case 3155:
case 653:
case 433:
case 923:
case 3994:
case 3996:
case 995:
case 371:
case 3937:
case 3198:
case 2409:
case 3710:
case 344:
case 2195:
case 24:
case 492:
case 1755:
case 348:
case 4016:
case 3830:
case 1872:
case 1660:
case 2297:
case 2236:
case 111:
case 1608:
case 3467:
case 1687:
case 3327:
case 1110:
case 628:
case 3893:
case 3445:
case 3715:
case 2488:
case 958:
case 3371:
case 2544:
case 962:
case 900:
case 1970:
case 1454:
case 1456:
case 3228:
case 3252:
case 1613:
case 749:
case 3333:
case 4078:
case 19:
case 1642:
case 159:
case 3824:
case 3826:
case 408:
case 3414:
case 3416:
case 2220:
case 1879:
case 1590:
case 4080:
case 1059:
case 3744:
case 450:
case 1184:
case 339:
case 4067:
case 3653:
case 2201:
case 3390:
case 630:
case 1410:
case 735:
case 3167:
case 2170:
case 1740:
case 141:
case 56:
case 3594:
case 3596:
case 955:
case 3289:
case 1801:
case 2812:
case 2093:
case 3617:
case 2723:
case 3038:
case 2422:
case 318:
case 567:
case 1396:
case 21:
case 1337:
case 2631:
case 3974:
case 3976:
case 1785:
case 994:
case 3450:
case 3302:
case 3247:
case 3145:
case 1769:
case 572:
case 823:
case 1995:
case 2340:
case 719:
case 1751:
case 1089:
case 2191:
case 1958:
case 2737:
case 48:
case 2026:
case 2024:
case 1154:
case 1156:
case 291:
case 895:
case 1323:
case 1463:
case 2910:
case 1762:
case 1836:
case 1897:
case 2272:
case 3441:
case 2385:
case 1047:
case 3666:
case 2369:
case 2819:
case 601:
case 2429:
case 3114:
case 3375:
case 3116:
case 3918:
case 1652:
case 858:
case 1111:
case 2102:
case 2915:
case 2739:
case 106:
case 3242:
case 800:
case 3307:
case 1661:
case 862:
case 74:
case 1990:
case 1444:
case 1446:
case 1008:
case 3388:
case 199:
case 1714:
case 3643:
case 3151:
case 2367:
case 3612:
case 2817:
case 1933:
case 588:
case 979:
case 238:
case 902:
case 960:
case 1570:
case 1778:
case 3208:
case 3185:
case 3287:
case 3619:
case 2314:
case 2316:
case 1825:
case 326:
case 1042:
case 2866:
case 2864:
case 998:
case 3539:
case 1013:
case 2277:
case 1892:
case 3169:
case 1745:
case 1971:
case 2035:
case 2883:
case 2200:
case 2109:
case 3391:
case 3498:
case 2556:
case 468:
case 220:
case 3806:
case 2433:
case 3140:
case 722:
case 1780:
case 646:
case 3053:
case 178:
case 581:
case 231:
case 286:
case 536:
case 3264:
case 1358:
case 1451:
case 2310:
case 903:
case 1923:
case 835:
case 2940:
case 2496:
case 2494:
case 1763:
case 294:
case 3682:
case 2969:
case 3411:
case 3318:
case 3868:
case 1784:
case 3741:
case 3975:
case 3146:
case 3283:
case 1181:
case 851:
case 255:
case 2985:
case 1518:
case 2849:
case 819:
case 453:
case 1710:
case 144:
case 2962:
case 2758:
case 1440:
case 2231:
case 171:
case 2423:
case 795:
case 2951:
case 1155:
case 2795:
case 3647:
case 2605:
case 1064:
case 1576:
case 1574:
case 3665:
case 375:
case 991:
case 2384:
case 2386:
case 1485:
case 52:
case 2679:
case 3303:
case 1083:
case 3750:
case 3529:
case 754:
case 2541:
case 527:
case 3115:
case 1469:
case 1329:
case 2118:
case 3649:
case 202:
case 1478:
case 938:
case 115:
case 2020:
case 2581:
case 2600:
case 1259:
case 847:
case 1939:
case 1043:
case 2668:
case 762:
case 700:
case 1893:
case 2621:
case 3219:
case 692:
case 3608:
case 2432:
case 183:
case 3991:
case 676:
case 2677:
case 3527:
case 1830:
case 3755:
case 2889:
case 608:
case 2945:
case 2439:
case 139:
case 3059:
case 1746:
case 77:
case 3879:
case 2978:
case 430:
case 1416:
case 359:
case 2176:
case 1824:
case 1333:
case 2555:
case 2097:
case 3613:
case 2036:
case 2034:
case 1252:
case 1932:
case 3456:
case 2598:
case 1228:
case 949:
case 2967:
case 1261:
case 4063:
case 2072:
case 963:
case 2941:
case 540:
case 794:
case 1450:
case 2748:
case 145:
case 1178:
case 1974:
case 951:
case 3785:
case 2418:
case 803:
case 529:
case 118:
case 425:
case 1038:
case 1289:
case 1180:
case 755:
case 1265:
case 1594:
case 2224:
case 1537:
case 2132:
case 3410:
case 2474:
case 1116:
case 1375:
case 1114:
case 295:
case 891:
case 1282:
case 3548:
case 2950:
case 2625:
case 401:
case 3486:
case 2230:
case 2692:
case 3897:
case 1348:
case 3836:
case 2403:
case 4010:
case 605:
case 3509:
case 687:
case 3323:
case 254:
case 1683:
case 919:
case 3156:
case 3154:
case 3958:
case 1523:
case 3751:
case 2293:
case 1309:
case 3238:
case 2235:
case 3899:
case 2567:
case 1532:
case 4015:
case 2137:
case 13:
case 357:
case 1754:
case 262:
case 3049:
case 3933:
case 2194:
case 2601:
case 1370:
case 2021:
case 779:
case 1612:
case 702:
case 2791:
case 3253:
case 258:
case 2955:
case 3332:
case 399:
case 2578:
case 1388:
case 947:
case 1481:
case 3446:
case 3444:
case 3990:
case 838:
case 3060:
case 2077:
case 1213:
case 2545:
case 3652:
case 2857:
case 378:
case 2354:
case 4044:
case 4046:
case 668:
case 1873:
case 1806:
case 1140:
case 922:
case 114:
case 1391:
case 849:
case 2636:
case 2634:
case 1260:
case 3415:
case 3825:
case 126:
case 1287:
case 1619:
case 798:
case 2981:
case 1208:
case 3339:
case 2868:
case 1693:
case 2411:
case 1703:
case 355:
case 1774:
case 1776:
case 3849:
case 530:
case 2948:
case 2283:
case 2800:
case 2144:
case 3099:
case 2146:
case 3310:
case 2522:
case 1127:
case 2877:
case 163:
case 386:
case 473:
case 2682:
case 2558:
case 3494:
case 3496:
case 3940:
case 3437:
case 3808:
case 2529:
case 3679:
case 1448:
case 1626:
case 119:
case 1006:
case 1004:
case 844:
case 1718:
case 1853:
case 1911:
case 2902:
case 2217:
case 2689:
case 410:
case 2374:
case 4037:
case 2376:
case 3541:
case 1586:
case 3758:
case 1133:
case 3231:
case 3795:
case 3025:
case 3722:
case 3423:
case 3363:
case 3092:
case 516:
case 1954:
case 3432:
case 211:
case 2608:
case 2219:
case 2110:
case 2687:
case 1470:
case 706:
case 266:
case 2755:
case 14:
case 2052:
case 799:
case 2872:
case 1297:
case 3677:
case 2660:
case 75:
case 3600:
case 1546:
case 3020:
case 302:
case 42:
case 93:
case 360:
case 3914:
case 1838:
case 1407:
case 848:
case 3621:
case 1381:
case 524:
case 3346:
case 2571:
case 427:
case 1488:
case 937:
case 883:
case 3668:
case 839:
case 656:
case 2613:
case 3034:
case 2805:
case 442:
case 3555:
case 436:
case 481:
case 926:
case 3967:
case 1355:
case 2988:
case 2212:
case 1201:
case 3771:
case 3174:
case 3315:
case 3865:
case 2781:
case 2059:
case 778:
case 1129:
case 1220:
case 1422:
case 3551:
case 1723:
case 1812:
case 2801:
case 11:
case 1843:
case 3562:
case 1279:
case 3699:
case 3709:
case 1963:
case 4003:
case 3226:
case 117:
case 241:
case 2740:
case 3775:
case 1030:
case 1205:
case 103:
case 3852:
case 1511:
case 2502:
case 3418:
case 2785:
case 1631:
case 2082:
case 2929:
case 1606:
case 2065:
case 3540:
case 3859:
case 2463:
case 2323:
case 2509:
case 1340:
case 643:
case 4018:
case 3293:
case 2751:
case 2089:
case 2922:
case 1429:
case 3950:
case 944:
case 395:
case 3569:
case 1272:
case 3692:
case 2834:
case 2575:
case 2047:
case 3625:
case 3139:
case 3230:
case 2486:
case 2444:
case 766:
case 2661:
case 1345:
case 2714:
case 299:
case 2628:
case 2008:
case 3578:
case 3077:
case 2060:
case 2507:
case 3857:
case 1471:
case 1378:
case 206:
case 501:
case 1915:
case 3998:
case 2933:
case 3194:
case 684:
case 362:
case 2049:
case 3196:
case 138:
case 300:
case 915:
case 3235:
case 672:
case 3000:
case 1380:
case 3068:
case 2332:
case 3580:
case 1817:
case 1367:
case 3601:
case 696:
case 2253:
case 3791:
case 2415:
case 2042:
case 1864:
case 1316:
case 2745:
case 3634:
case 3707:
case 797:
case 3697:
case 2892:
case 149:
case 1490:
case 79:
case 3981:
case 66:
case 3123:
case 826:
case 1221:
case 2591:
case 429:
case 3354:
case 3356:
case 525:
case 939:
case 278:
case 1883:
case 593:
case 1035:
case 2767:
case 2659:
case 1433:
case 1732:
case 1556:
case 377:
case 351:
case 1808:
case 1437:
case 2395:
case 1940:
case 1496:
case 4075:
case 2322:
case 1887:
case 880:
case 194:
case 2462:
case 2358:
case 673:
case 3225:
case 131:
case 4048:
case 2923:
case 363:
case 3127:
case 1099:
case 1729:
case 508:
case 2518:
case 1206:
case 3776:
case 155:
case 4009:
case 3402:
case 3171:
case 1273:
case 2784:
case 2786:
case 1363:
case 1951:
case 1092:
case 1423:
case 1605:
case 2066:
case 1025:
case 1795:
case 1962:
case 4002:
case 875:
case 3563:
case 1231:
case 1541:
case 3584:
case 3586:
case 3475:
case 2329:
case 3853:
case 2485:
case 3006:
case 3341:
case 3448:
case 2083:
case 1679:
case 3299:
case 3190:
case 1668:
case 95:
case 2939:
case 2043:
case 3381:
case 866:
case 1621:
case 2893:
case 73:
case 1001:
case 62:
case 957:
case 215:
case 1118:
case 1790:
case 2150:
case 3546:
case 3544:
case 1581:
case 811:
case 3297:
case 3236:
case 283:
case 3195:
case 34:
case 906:
case 2467:
case 2327:
case 1882:
case 3158:
case 999:
case 1733:
case 3956:
case 3220:
case 2744:
case 3635:
case 1176:
case 322:
case 2826:
case 2824:
case 1865:
case 1978:
case 2653:
case 1771:
case 1889:
case 3201:
case 239:
case 485:
case 589:
case 1598:
case 3355:
case 681:
case 413:
case 2333:
case 198:
case 3398:
case 1847:
case 1036:
case 1034:
case 3491:
case 1097:
case 1748:
case 841:
case 1861:
case 2302:
case 2450:
case 1311:
case 1418:
case 2976:
case 2974:
case 2178:
case 245:
case 3107:
case 2145:
case 2903:
case 303:
case 3188:
case 2247:
case 3030:
case 1941:
case 1775:
case 3984:
case 1132:
case 1226:
case 317:
case 2265:
case 1709:
case 1562:
case 3170:
case 1699:
case 218:
case 3843:
case 552:
case 3495:
case 2289:
case 1139:
case 1005:
case 4058:
case 1625:
case 3385:
case 744:
case 2711:
case 1702:
case 771:
case 1585:
case 2116:
case 2114:
case 2375:
case 1474:
case 3819:
case 2282:
case 1293:
case 2309:
case 3191:
case 2523:
case 334:
case 3340:
case 154:
case 2683:
case 612:
case 3026:
case 1540:
case 3606:
case 488:
case 3796:
case 2151:
case 3817:
case 1580:
case 2370:
case 505:
case 409:
case 1068:
case 1620:
case 1235:
case 899:
case 1196:
case 1194:
case 100:
case 2754:
case 58:
case 1137:
case 23:
case 2532:
case 1998:
case 966:
case 3915:
case 2242:
case 3739:
case 3102:
case 1077:
case 2388:
case 1578:
case 3345:
case 748:
case 2307:
case 959:
case 177:
case 46:
case 3433:
case 2806:
case 3732:
case 320:
case 3035:
case 739:
case 3109:
case 3883:
case 629:
case 3268:
case 1354:
case 3946:
case 1981:
case 4027:
case 640:
case 3148:
case 2287:
case 349:
case 997:
case 3277:
case 2260:
case 1697:
case 1707:
case 878:
case 1636:
case 3864:
case 3316:
case 99:
case 1788:
case 2539:
case 2328:
case 956:
case 913:
case 1802:
case 2361:
case 2421:
case 4042:
case 2400:
case 2352:
case 3935:
case 867:
case 3320:
case 1680:
case 1501:
case 2477:
case 3460:
case 332:
case 2543:
case 1215:
case 346:
case 3487:
case 3044:
case 1081:
case 1759:
case 3408:
case 3837:
case 478:
case 152:
case 3894:
case 2519:
case 809:
case 523:
case 1900:
case 872:
case 1616:
case 1614:
case 884:
case 1728:
case 190:
case 896:
case 1921:
case 1534:
case 2227:
case 1453:
case 1752:
case 1597:
case 4008:
case 2639:
case 499:
case 595:
case 1164:
case 970:
case 72:
case 3281:
case 63:
case 457:
case 3743:
case 3015:
case 727:
case 3712:
case 3413:
case 637:
case 3823:
case 2271:
case 558:
case 187:
case 212:
case 2696:
case 2704:
case 2706:
case 105:
case 2637:
case 1870:
case 2229:
case 2120:
case 4089:
case 3783:
case 1143:
case 3241:
case 500:
case 2773:
case 2472:
case 710:
case 2517:
case 3010:
case 2357:
case 1979:
case 301:
case 3128:
case 3924:
case 3531:
case 3152:
case 888:
case 1438:
case 3764:
case 843:
case 1888:
case 618:
case 1891:
case 3717:
case 3930:
case 1306:
case 577:
case 3447:
case 482:
case 3250:
case 3159:
case 164:
case 325:
case 57:
case 1640:
case 3506:
case 2295:
case 1525:
case 3839:
case 1669:
case 2222:
case 1592:
case 2136:
case 3993:
case 3465:
case 2731:
case 3392:
case 645:
case 1119:
case 1412:
case 1713:
case 1822:
case 2387:
case 2172:
case 1443:
case 1895:
case 497:
case 3377:
case 807:
case 2420:
case 281:
case 531:
case 586:
case 242:
case 459:
case 1568:
case 2349:
case 729:
case 1080:
case 639:
case 856:
case 3753:
case 4059:
case 1936:
case 1934:
case 3818:
case 150:
case 3368:
case 3428:
case 1256:
case 1254:
case 2032:
case 3646:
case 2735:
case 1681:
case 2919:
case 3461:
case 870:
case 1920:
case 3459:
case 2288:
case 411:
case 2039:
case 683:
case 4028:
case 3245:
case 2207:
case 4061:
case 1419:
case 3535:
case 3267:
case 909:
case 3056:
case 3054:
case 3165:
case 972:
case 227:
case 2434:
case 2553:
case 2497:
case 2884:
case 996:
case 22:
case 1650:
case 2844:
case 1062:
case 2846:
case 2209:
case 210:
case 2094:
case 502:
case 2168:
case 2966:
case 2964:
case 988:
case 579:
case 644:
case 3904:
case 3372:
case 2248:
case 3187:
case 3610:
case 1747:
case 3160:
case 3269:
case 2382:
case 1417:
case 3973:
case 480:
case 2365:
case 1641:
case 3684:
case 3251:
case 3379:
case 2023:
case 3524:
case 3526:
case 189:
case 3931:
case 104:
case 1890:
case 3:
case 1211:
case 3142:
case 4057:
case 1483:
case 3305:
case 1833:
case 2343:
case 352:
case 1837:
case 1408:
case 51:
case 1301:
case 2862:
case 3667:
case 4053:
case 3081:
case 146:
case 368:
case 132:
case 414:
case 1460:
case 3680:
case 785:
case 3501:
case 3117:
case 2561:
case 829:
case 756:
case 1298:
case 2131:
case 936:
case 1449:
case 1157:
case 2027:
case 3645:
case 2734:
case 1255:
case 2688:
case 770:
case 1823:
case 2691:
case 1413:
case 2960:
case 3977:
case 1015:
case 1442:
case 1743:
case 2720:
case 2559:
case 3244:
case 3246:
case 2090:
case 3183:
case 3809:
case 272:
case 1654:
case 1656:
case 437:
case 2908:
case 2106:
case 2840:
case 3164:
case 3453:
case 2319:
case 3752:
case 3921:
case 3534:
case 3728:
case 2033:
case 390:
case 2885:
case 3614:
case 1334:
case 3900:
case 1336:
case 2095:
case 3888:
case 2725:
case 2022:
case 3438:
case 2602:
case 1924:
case 2965:
case 2058:
case 101:
case 2878:
case 3979:
case 3263:
case 1161:
case 2203:
case 2880:
case 1399:
case 3651:
case 1241:
case 3143:
case 3286:
case 1783:
case 1482:
case 3870:
case 3599:
case 910:
case 305:
case 2274:
case 387:
case 1063:
case 3210:
case 3119:
case 1325:
case 3685:
case 2814:
case 2364:
case 2366:
case 2426:
case 3669:
case 549:
case 2675:
case 3640:
case 364:
case 2029:
case 3373:
case 2609:
case 1159:
case 1930:
case 193:
case 3891:
case 2383:
case 2850:
case 3067:
case 1644:
case 3500:
case 3681:
case 659:
case 1321:
case 929:
case 439:
case 3256:
case 535:
case 2549:
case 1753:
case 3080:
case 3936:
case 2671:
case 130:
case 3568:
case 308:
case 1214:
case 1216:
case 3078:
case 2508:
case 2959:
case 256:
case 3895:
case 3742:
case 2130:
case 3443:
case 2627:
case 3822:
case 2560:
case 3412:
case 3713:
case 2841:
case 1615:
case 519:
case 415:
case 128:
case 709:
case 3335:
case 2091:
case 772:
case 2126:
case 2124:
case 1876:
case 3749:
case 270:
case 1267:
case 796:
case 2700:
case 2961:
case 1535:
case 2353:
case 3760:
case 2777:
case 82:
case 483:
case 827:
case 3920:
case 1973:
case 3417:
case 1011:
case 3827:
case 2622:
case 444:
case 2002:
case 1530:
case 2705:
case 547:
case 3747:
case 2695:
case 471:
case 1372:
case 2582:
case 1610:
case 1285:
case 161:
case 54:
case 1108:
case 0:
case 2658:
case 3330:
case 4064:
case 3789:
case 4083:
case 3051:
case 1593:
case 2223:
case 1149:
case 912:
case 3765:
case 365:
case 3393:
case 675:
case 788:
case 2779:
case 3833:
case 2406:
case 3483:
case 3782:
case 2075:
case 2547:
case 1142:
case 2855:
case 3211:
case 2473:
case 2772:
case 1:
case 304:
case 2629:
case 2009:
case 1526:
case 1931:
case 2294:
case 1738:
case 1251:
case 522:
case 873:
case 3324:
case 3464:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1758477601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,];
var gg_b = "1758477601/";

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
