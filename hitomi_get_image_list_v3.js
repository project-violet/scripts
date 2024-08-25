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
var o = 0;
switch (g) {
case 3552:
case 3998:
case 1991:
case 2707:
case 1460:
case 1517:
case 3261:
case 1663:
case 300:
case 1697:
case 654:
case 2668:
case 3665:
case 2852:
case 1880:
case 508:
case 1064:
case 2737:
case 1916:
case 448:
case 473:
case 1128:
case 191:
case 3442:
case 504:
case 566:
case 1805:
case 2936:
case 656:
case 3267:
case 365:
case 805:
case 2811:
case 1509:
case 3707:
case 1949:
case 3423:
case 2455:
case 1800:
case 1964:
case 3662:
case 694:
case 2070:
case 1386:
case 1855:
case 3926:
case 1672:
case 403:
case 1046:
case 2778:
case 2880:
case 1986:
case 4064:
case 1465:
case 3128:
case 2238:
case 1097:
case 668:
case 4066:
case 1807:
case 2015:
case 2262:
case 3651:
case 271:
case 2182:
case 1510:
case 2136:
case 749:
case 358:
case 2079:
case 1500:
case 837:
case 1190:
case 2051:
case 3972:
case 3237:
case 3861:
case 488:
case 1528:
case 3355:
case 200:
case 1357:
case 2854:
case 1285:
case 1526:
case 43:
case 2520:
case 323:
case 2367:
case 1850:
case 3608:
case 1052:
case 2826:
case 1537:
case 1522:
case 1013:
case 3241:
case 2100:
case 3105:
case 3702:
case 3691:
case 1101:
case 3473:
case 2673:
case 1851:
case 2181:
case 1317:
case 2341:
case 3141:
case 1283:
case 3890:
case 711:
case 94:
case 3850:
case 788:
case 3610:
case 169:
case 3982:
case 4077:
case 2159:
case 954:
case 3394:
case 521:
case 1621:
case 2951:
case 3029:
case 1776:
case 3287:
case 1773:
case 1114:
case 3263:
case 150:
case 3479:
case 1240:
case 1844:
case 222:
case 3781:
case 4017:
case 1657:
case 309:
case 3769:
case 787:
case 2624:
case 1924:
case 3262:
case 2179:
case 195:
case 3667:
case 2982:
case 3974:
case 1155:
case 2142:
case 2746:
case 3380:
case 3655:
case 1091:
case 211:
case 679:
case 496:
case 1637:
case 1731:
case 590:
case 3859:
case 677:
case 1224:
case 3376:
case 1734:
case 2680:
case 3547:
case 3045:
case 1309:
case 1996:
case 2922:
case 1354:
case 3631:
case 810:
case 2083:
case 1700:
case 1616:
case 2108:
case 560:
case 1217:
case 1390:
case 3090:
case 2117:
case 215:
case 1184:
case 2566:
case 2072:
case 2315:
case 2843:
case 2484:
case 294:
case 501:
case 3184:
case 432:
case 3028:
case 1150:
case 964:
case 3188:
case 2551:
case 2074:
case 1249:
case 2184:
case 1291:
case 1524:
case 3642:
case 1475:
case 4014:
case 798:
case 2086:
case 2221:
case 3543:
case 3794:
case 3317:
case 2241:
case 2004:
case 160:
case 2217:
case 3377:
case 2251:
case 2267:
case 402:
case 3306:
case 1938:
case 3069:
case 3630:
case 512:
case 2877:
case 1099:
case 1709:
case 2110:
case 3750:
case 3705:
case 2975:
case 2748:
case 3853:
case 563:
case 3527:
case 967:
case 1222:
case 1450:
case 672:
case 930:
case 2293:
case 1409:
case 1102:
case 1243:
case 923:
case 2298:
case 999:
case 1988:
case 2776:
case 2442:
case 2953:
case 231:
case 2003:
case 2247:
case 3410:
case 2196:
case 2144:
case 3783:
case 1698:
case 265:
case 2121:
case 2048:
case 4001:
case 2009:
case 281:
case 738:
case 1299:
case 608:
case 1712:
case 3461:
case 3320:
case 1431:
case 2313:
case 3879:
case 3164:
case 2205:
case 3529:
case 1364:
case 3935:
case 2539:
case 1590:
case 478:
case 3886:
case 1341:
case 3093:
case 1583:
case 509:
case 1416:
case 3471:
case 3689:
case 3518:
case 3749:
case 1896:
case 1581:
case 98:
case 194:
case 3516:
case 3252:
case 112:
case 806:
case 2034:
case 2156:
case 3276:
case 1897:
case 3536:
case 1070:
case 2761:
case 1130:
case 2080:
case 982:
case 3305:
case 1887:
case 3290:
case 182:
case 3372:
case 3328:
case 2345:
case 1934:
case 132:
case 1100:
case 1319:
case 1479:
case 1845:
case 16:
case 1512:
case 1939:
case 3954:
case 2890:
case 2039:
case 52:
case 3519:
case 3889:
case 59:
case 1045:
case 2832:
case 1451:
case 963:
case 2175:
case 3269:
case 1714:
case 3495:
case 2088:
case 1185:
case 2483:
case 882:
case 2198:
case 1462:
case 3573:
case 623:
case 529:
case 2237:
case 3950:
case 42:
case 633:
case 2487:
case 3003:
case 3240:
case 2613:
case 4026:
case 3551:
case 1218:
case 2900:
case 1607:
case 2067:
case 479:
case 593:
case 579:
case 1530:
case 3201:
case 1010:
case 1306:
case 2454:
case 2759:
case 3735:
case 2472:
case 3896:
case 1953:
case 1163:
case 2344:
case 2518:
case 2408:
case 2865:
case 3073:
case 64:
case 768:
case 773:
case 3186:
case 3148:
case 3123:
case 1842:
case 3078:
case 3408:
case 2208:
case 863:
case 1421:
case 1147:
case 1727:
case 1030:
case 2218:
case 382:
case 1264:
case 1821:
case 528:
case 3108:
case 1836:
case 1369:
case 2270:
case 1199:
case 530:
case 250:
case 3060:
case 4030:
case 2134:
case 3451:
case 760:
case 2788:
case 165:
case 752:
case 2350:
case 585:
case 1080:
case 4060:
case 2699:
case 3109:
case 799:
case 2609:
case 3224:
case 1574:
case 31:
case 3587:
case 511:
case 1933:
case 3992:
case 474:
case 753:
case 523:
case 3106:
case 3802:
case 3179:
case 3457:
case 3221:
case 905:
case 1876:
case 2696:
case 1858:
case 1932:
case 906:
case 167:
case 421:
case 3216:
case 2963:
case 893:
case 2060:
case 1767:
case 2723:
case 2301:
case 3272:
case 3:
case 2362:
case 450:
case 2303:
case 2106:
case 1981:
case 3983:
case 1957:
case 3211:
case 2343:
case 268:
case 2764:
case 3254:
case 1090:
case 1225:
case 3623:
case 843:
case 3910:
case 2941:
case 3924:
case 1435:
case 2652:
case 1079:
case 625:
case 830:
case 510:
case 357:
case 2066:
case 440:
case 86:
case 561:
case 2582:
case 3429:
case 1384:
case 3025:
case 3638:
case 3570:
case 2257:
case 3046:
case 1146:
case 3604:
case 1784:
case 613:
case 715:
case 3472:
case 3900:
case 1076:
case 3365:
case 3731:
case 3491:
case 2244:
case 3170:
case 3984:
case 1212:
case 911:
case 3574:
case 1122:
case 53:
case 1148:
case 3115:
case 2213:
case 4018:
case 606:
case 1515:
case 2141:
case 1794:
case 1546:
case 589:
case 2908:
case 2894:
case 2453:
case 3767:
case 1952:
case 3301:
case 669:
case 3944:
case 3331:
case 2111:
case 4092:
case 2320:
case 29:
case 2958:
case 927:
case 2984:
case 3823:
case 3804:
case 3777:
case 3706:
case 324:
case 1372:
case 2690:
case 2407:
case 107:
case 8:
case 2940:
case 3941:
case 41:
case 1262:
case 3652:
case 4073:
case 2389:
case 238:
case 125:
case 2780:
case 2414:
case 2637:
case 3874:
case 368:
case 2923:
case 2002:
case 895:
case 1371:
case 373:
case 2372:
case 4052:
case 681:
case 3250:
case 343:
case 3782:
case 1565:
case 3625:
case 3619:
case 2321:
case 3162:
case 4050:
case 1802:
case 2536:
case 3673:
case 3245:
case 2681:
case 2419:
case 412:
case 2164:
case 4059:
case 3467:
case 1505:
case 3614:
case 3843:
case 2806:
case 3878:
case 2058:
case 3153:
case 628:
case 3528:
case 2373:
case 1874:
case 2232:
case 3114:
case 3427:
case 3052:
case 886:
case 3258:
case 3542:
case 3995:
case 568:
case 2824:
case 569:
case 1877:
case 1213:
case 1675:
case 1789:
case 62:
case 1649:
case 2242:
case 1226:
case 997:
case 2054:
case 2543:
case 1792:
case 2980:
case 1027:
case 2497:
case 1493:
case 3499:
case 2498:
case 4016:
case 3007:
case 2528:
case 1710:
case 3358:
case 3373:
case 1487:
case 1718:
case 476:
case 3296:
case 161:
case 536:
case 241:
case 3344:
case 2918:
case 620:
case 7:
case 3280:
case 1926:
case 2431:
case 3881:
case 3076:
case 1901:
case 1066:
case 1423:
case 3414:
case 1573:
case 1121:
case 4042:
case 3426:
case 228:
case 1974:
case 3510:
case 719:
case 2138:
case 455:
case 2579:
case 3405:
case 2739:
case 3640:
case 1432:
case 34:
case 1220:
case 2977:
case 3223:
case 1979:
case 1575:
case 3688:
case 845:
case 3081:
case 447:
case 519:
case 3694:
case 61:
case 1067:
case 3875:
case 1180:
case 1093:
case 659:
case 1257:
case 3079:
case 831:
case 2893:
case 1362:
case 3959:
case 3973:
case 646:
case 80:
case 1570:
case 3222:
case 2158:
case 3671:
case 48:
case 2990:
case 2796:
case 181:
case 3862:
case 2188:
case 2174:
case 122:
case 1355:
case 1492:
case 934:
case 283:
case 3191:
case 417:
case 1022:
case 2972:
case 1865:
case 1951:
case 1749:
case 199:
case 2402:
case 3895:
case 2178:
case 920:
case 1529:
case 2163:
case 2581:
case 1092:
case 189:
case 1928:
case 3793:
case 3742:
case 1044:
case 1750:
case 3787:
case 3271:
case 2564:
case 67:
case 2828:
case 3347:
case 917:
case 1260:
case 2920:
case 321:
case 2822:
case 2915:
case 2096:
case 665:
case 507:
case 131:
case 2574:
case 2122:
case 1251:
case 457:
case 2045:
case 3876:
case 808:
case 1680:
case 2369:
case 1860:
case 1495:
case 50:
case 2145:
case 534:
case 152:
case 3901:
case 3488:
case 887:
case 1203:
case 302:
case 342:
case 178:
case 1640:
case 3732:
case 1279:
case 2930:
case 293:
case 2427:
case 1567:
case 2190:
case 2068:
case 4095:
case 651:
case 3370:
case 3803:
case 3711:
case 1188:
case 3575:
case 533:
case 1412:
case 572:
case 2357:
case 3023:
case 2830:
case 1922:
case 247:
case 1339:
case 30:
case 1349:
case 420:
case 2104:
case 3155:
case 1378:
case 1406:
case 142:
case 1476:
case 3955:
case 712:
case 3815:
case 3469:
case 2356:
case 1414:
case 2021:
case 1628:
case 3096:
case 991:
case 2593:
case 970:
case 909:
case 3953:
case 1452:
case 1008:
case 3985:
case 2799:
case 1678:
case 2046:
case 2495:
case 1038:
case 1507:
case 883:
case 960:
case 3775:
case 2713:
case 3771:
case 1023:
case 1534:
case 1208:
case 1683:
case 947:
case 1385:
case 1550:
case 3004:
case 3333:
case 347:
case 19:
case 1702:
case 4020:
case 1389:
case 2133:
case 2057:
case 611:
case 2308:
case 2548:
case 2202:
case 3961:
case 3014:
case 1639:
case 3202:
case 3205:
case 1661:
case 2700:
case 2172:
case 1191:
case 1910:
case 2540:
case 269:
case 4063:
case 2506:
case 3381:
case 1859:
case 1472:
case 1365:
case 97:
case 955:
case 3159:
case 2507:
case 3808:
case 328:
case 3871:
case 3212:
case 2889:
case 1835:
case 2678:
case 3866:
case 2561:
case 673:
case 2694:
case 1971:
case 2318:
case 826:
case 2233:
case 350:
case 214:
case 1032:
case 1648:
case 1741:
case 3363:
case 3827:
case 2957:
case 3968:
case 2635:
case 2173:
case 3458:
case 3565:
case 1591:
case 2569:
case 3051:
case 449:
case 678:
case 3194:
case 2623:
case 71:
case 2591:
case 3700:
case 1172:
case 1919:
case 675:
case 775:
case 2996:
case 3817:
case 949:
case 3693:
case 467:
case 3712:
case 3133:
case 2065:
case 3773:
case 1280:
case 1050:
case 1511:
case 1600:
case 1666:
case 1300:
case 2235:
case 3621:
case 2657:
case 1813:
case 2140:
case 2794:
case 1438:
case 3556:
case 2751:
case 1105:
case 3071:
case 1157:
case 307:
case 3764:
case 2701:
case 2043:
case 2460:
case 3259:
case 227:
case 2255:
case 2229:
case 3747:
case 303:
case 3883:
case 2743:
case 2438:
case 2449:
case 256:
case 3786:
case 2452:
case 3323:
case 1159:
case 458:
case 91:
case 2844:
case 781:
case 1330:
case 2762:
case 2825:
case 3058:
case 3447:
case 2510:
case 3851:
case 3927:
case 782:
case 1690:
case 3462:
case 661:
case 793:
case 1366:
case 397:
case 1109:
case 562:
case 549:
case 1420:
case 3218:
case 1563:
case 461:
case 1936:
case 193:
case 1518:
case 636:
case 1803:
case 816:
case 2728:
case 2092:
case 4094:
case 791:
case 3854:
case 2942:
case 2705:
case 1296:
case 2283:
case 2146:
case 614:
case 3030:
case 1042:
case 3490:
case 1189:
case 3544:
case 3397:
case 352:
case 277:
case 2437:
case 595:
case 3160:
case 3912:
case 287:
case 3354:
case 3374:
case 2638:
case 3349:
case 3219:
case 2803:
case 1904:
case 3033:
case 1233:
case 3000:
case 1811:
case 1998:
case 2838:
case 3756:
case 3869:
case 777:
case 3892:
case 2935:
case 2725:
case 3038:
case 3991:
case 3043:
case 2960:
case 1458:
case 2377:
case 2716:
case 1395:
case 4078:
case 2781:
case 2641:
case 2590:
case 3126:
case 2712:
case 65:
case 2339:
case 822:
case 3663:
case 2640:
case 1204:
case 2209:
case 1915:
case 2704:
case 3562:
case 3835:
case 2411:
case 2422:
case 380:
case 3636:
case 2785:
case 3234:
case 395:
case 574:
case 2253:
case 1138:
case 912:
case 2468:
case 1397:
case 2986:
case 4072:
case 978:
case 3027:
case 2279:
case 2143:
case 2388:
case 1463:
case 971:
case 330:
case 2169:
case 520:
case 2277:
case 2698:
case 10:
case 376:
case 2645:
case 1604:
case 1308:
case 3672:
case 3754:
case 423:
case 1286:
case 56:
case 1596:
case 3531:
case 2538:
case 2261:
case 1020:
case 3965:
case 2423:
case 2855:
case 1660:
case 892:
case 2658:
case 2135:
case 3091:
case 1541:
case 1029:
case 792:
case 2770:
case 538:
case 4051:
case 3718:
case 1404:
case 3065:
case 3338:
case 2839:
case 958:
case 2062:
case 2589:
case 772:
case 1724:
case 2157:
case 3555:
case 3616:
case 541:
case 2028:
case 202:
case 1394:
case 2738:
case 2176:
case 2647:
case 422:
case 1192:
case 3266:
case 2585:
case 2351:
case 1912:
case 570:
case 1684:
case 51:
case 151:
case 1809:
case 1557:
case 897:
case 1918:
case 3911:
case 3111:
case 2428:
case 3907:
case 3522:
case 2177:
case 3452:
case 1290:
case 663:
case 1214:
case 3180:
case 1326:
case 3987:
case 4037:
case 539:
case 104:
case 226:
case 4070:
case 1254:
case 49:
case 1187:
case 1350:
case 110:
case 2204:
case 483:
case 183:
case 3260:
case 554:
case 2914:
case 1502:
case 3055:
case 670:
case 556:
case 2627:
case 492:
case 1360:
case 243:
case 399:
case 3637:
case 3675:
case 2287:
case 3161:
case 3274:
case 3367:
case 2405:
case 1417:
case 1769:
case 3362:
case 706:
case 702:
case 1340:
case 3094:
case 3080:
case 439:
case 0:
case 254:
case 547:
case 727:
case 1875:
case 3493:
case 2215:
case 3969:
case 2059:
case 2264:
case 3762:
case 2385:
case 1388:
case 3022:
case 3439:
case 3087:
case 2662:
case 2790:
case 1987:
case 452:
case 2858:
case 21:
case 2383:
case 3353:
case 737:
case 2305:
case 3903:
case 1942:
case 1555:
case 4081:
case 3175:
case 1674:
case 1754:
case 1652:
case 3063:
case 1870:
case 3107:
case 3928:
case 3417:
case 2684:
case 3310:
case 1207:
case 578:
case 3586:
case 1456:
case 3934:
case 1:
case 2866:
case 1601:
case 4067:
case 1759:
case 3929:
case 745:
case 3016:
case 2521:
case 459:
case 2187:
case 2926:
case 2702:
case 3811:
case 2206:
case 3657:
case 3232:
case 680:
case 3739:
case 2481:
case 854:
case 637:
case 1141:
case 1824:
case 1711:
case 658:
case 1704:
case 2451:
case 3822:
case 2964:
case 3525:
case 1363:
case 282:
case 2973:
case 870:
case 2805:
case 1905:
case 257:
case 1426:
case 1895:
case 453:
case 758:
case 543:
case 1144:
case 2093:
case 3709:
case 3509:
case 3612:
case 1106:
case 245:
case 2948:
case 2966:
case 2956:
case 685:
case 3765:
case 3167:
case 783:
case 3512:
case 2595:
case 3054:
case 582:
case 3812:
case 602:
case 1011:
case 2885:
case 1086:
case 2525:
case 1911:
case 2653:
case 1564:
case 3949:
case 2656:
case 518:
case 2167:
case 1485:
case 267:
case 2378:
case 2268:
case 828:
case 3532:
case 2798:
case 3774:
case 3645:
case 2708:
case 2682:
case 2695:
case 3898:
case 2354:
case 17:
case 1231:
case 696:
case 1049:
case 867:
case 1740:
case 1436:
case 2211:
case 704:
case 155:
case 304:
case 3703:
case 111:
case 2424:
case 3988:
case 3821:
case 3877:
case 2968:
case 3295:
case 2916:
case 1671:
case 1946:
case 3695:
case 2994:
case 3273:
case 674:
case 1206:
case 1519:
case 750:
case 2597:
case 3446:
case 1258:
case 1585:
case 3322:
case 821:
case 4090:
case 3925:
case 2124:
case 3005:
case 657:
case 1752:
case 2425:
case 1516:
case 327:
case 1071:
case 3470:
case 1466:
case 841:
case 224:
case 3163:
case 115:
case 1473:
case 1687:
case 552:
case 78:
case 2808:
case 2338:
case 3501:
case 3421:
case 1449:
case 3976:
case 3127:
case 645:
case 261:
case 2774:
case 3800:
case 3613:
case 3505:
case 1654:
case 1277:
case 3521:
case 2831:
case 3676:
case 1608:
case 2269:
case 743:
case 1383:
case 3560:
case 3678:
case 3738:
case 1997:
case 2719:
case 3059:
case 2006:
case 2380:
case 2989:
case 246:
case 2847:
case 3684:
case 2913:
case 3207:
case 709:
case 2718:
case 951:
case 632:
case 1825:
case 3303:
case 1037:
case 1491:
case 2292:
case 739:
case 2480:
case 2084:
case 2791:
case 38:
case 833:
case 3279:
case 936:
case 2496:
case 2382:
case 3951:
case 1474:
case 2286:
case 396:
case 3484:
case 89:
case 3444:
case 3646:
case 3420:
case 4008:
case 1651:
case 818:
case 812:
case 1273:
case 2336:
case 2434:
case 684:
case 3480:
case 1156:
case 1525:
case 1164:
case 99:
case 3962:
case 1179:
case 3577:
case 1253:
case 800:
case 2132:
case 3129:
case 2259:
case 4013:
case 653:
case 3343:
case 2470:
case 185:
case 1089:
case 3251:
case 1110:
case 3674:
case 102:
case 3666:
case 2881:
case 3620:
case 3858:
case 2429:
case 526:
case 3398:
case 2053:
case 3206:
case 3166:
case 1937:
case 1849:
case 2892:
case 3282:
case 272:
case 1618:
case 3836:
case 433:
case 900:
case 1643:
case 1282:
case 1305:
case 3633:
case 1977:
case 32:
case 3440:
case 4009:
case 3492:
case 470:
case 647:
case 2752:
case 3909:
case 918:
case 2729:
case 1145:
case 2745:
case 2032:
case 2840:
case 276:
case 3582:
case 171:
case 1783:
case 2897:
case 3720:
case 4089:
case 223:
case 1839:
case 3759:
case 2023:
case 1737:
case 2937:
case 298:
case 824:
case 3997:
case 119:
case 3460:
case 2616:
case 1976:
case 1558:
case 2905:
case 596:
case 40:
case 2394:
case 2654:
case 1993:
case 2227:
case 682:
case 2519:
case 4087:
case 1125:
case 2556:
case 2547:
case 2151:
case 2594:
case 2013:
case 500:
case 4053:
case 2420:
case 865:
case 1760:
case 3930:
case 3899:
case 3602:
case 3584:
case 1348:
case 3092:
case 237:
case 2735:
case 881:
case 1083:
case 3146:
case 1732:
case 1503:
case 3772:
case 1422:
case 2223:
case 117:
case 527:
case 1641:
case 3658:
case 3455:
case 616:
case 3486:
case 2884:
case 3477:
case 3456:
case 767:
case 1994:
case 3571:
case 2337:
case 60:
case 1527:
case 3539:
case 550:
case 2162:
case 4004:
case 3112:
case 2307:
case 2577:
case 2226:
case 995:
case 2592:
case 2447:
case 184:
case 2161:
case 1636:
case 2189:
case 3183:
case 935:
case 3044:
case 2123:
case 946:
case 1609:
case 1716:
case 2075:
case 313:
case 2726:
case 723:
case 1323:
case 1058:
case 1151:
case 1425:
case 913:
case 2775:
case 1259:
case 2523:
case 797:
case 2819:
case 1287:
case 329:
case 2149:
case 2868:
case 1000:
case 1129:
case 1447:
case 408:
case 622:
case 3624:
case 1459:
case 2231:
case 2360:
case 2886:
case 650:
case 3445:
case 3834:
case 2667:
case 3592:
case 1490:
case 3960:
case 153:
case 3482:
case 3615:
case 3173:
case 2128:
case 1134:
case 3897:
case 2358:
case 1368:
case 2371:
case 1812:
case 1245:
case 908:
case 3641:
case 3334:
case 1669:
case 2025:
case 3311:
case 993:
case 3152:
case 2417:
case 1907:
case 3719:
case 2393:
case 2081:
case 3324:
case 464:
case 2118:
case 1098:
case 604:
case 876:
case 3887:
case 3611:
case 145:
case 229:
case 1775:
case 1082:
case 1713:
case 2471:
case 3387:
case 972:
case 3548:
case 3149:
case 1579:
case 2328:
case 1620:
case 242:
case 3100:
case 2230:
case 463:
case 3820:
case 725:
case 542:
case 2736:
case 1535:
case 2672:
case 198:
case 3040:
case 2008:
case 1843:
case 2440:
case 4025:
case 84:
case 3581:
case 2797:
case 1051:
case 1239:
case 1973:
case 1689:
case 197:
case 2546:
case 3097:
case 929:
case 1694:
case 2349:
case 544:
case 212:
case 443:
case 1691:
case 1597:
case 240:
case 2035:
case 1504:
case 1999:
case 4041:
case 2615:
case 1830:
case 3015:
case 133:
case 137:
case 3208:
case 192:
case 3810:
case 486:
case 1902:
case 3074:
case 4093:
case 482:
case 1270:
case 2727:
case 576:
case 460:
case 2734:
case 3070:
case 3846:
case 551:
case 23:
case 33:
case 1433:
case 4091:
case 2465:
case 3062:
case 2299:
case 3725:
case 3848:
case 209:
case 2207:
case 2724:
case 2622:
case 3151:
case 2347:
case 3648:
case 3699:
case 2961:
case 1160:
case 3546:
case 588:
case 1967:
case 1057:
case 2030:
case 336:
case 15:
case 3723:
case 921:
case 1197:
case 2731:
case 3371:
case 58:
case 2325:
case 2071:
case 2171:
case 371:
case 703:
case 3538:
case 1018:
case 1728:
case 649:
case 2553:
case 3415:
case 1078:
case 3404:
case 1706:
case 2000:
case 1481:
case 3659:
case 1726:
case 3204:
case 2137:
case 2598:
case 404:
case 2494:
case 2809:
case 3508:
case 389:
case 2755:
case 4080:
case 3791:
case 4006:
case 878:
case 346:
case 2733:
case 898:
case 1439:
case 3857:
case 721:
case 1673:
case 3714:
case 1065:
case 1242:
case 3233:
case 940:
case 762:
case 57:
case 2611:
case 1655:
case 2626:
case 493:
case 2691:
case 1602:
case 2663:
case 5:
case 3831:
case 3236:
case 3696:
case 3540:
case 424:
case 2608:
case 1589:
case 2583:
case 4047:
case 3189:
case 1135:
case 1194:
case 3880:
case 2944:
case 873:
case 406:
case 1873:
case 1927:
case 2446:
case 3766:
case 2686:
case 634:
case 2779:
case 429:
case 2816:
case 2970:
case 1682:
case 2019:
case 2098:
case 219:
case 3634:
case 332:
case 2860:
case 1582:
case 716:
case 1960:
case 2404:
case 1310:
case 1748:
case 2456:
case 771:
case 290:
case 3325:
case 244:
case 4015:
case 1985:
case 3086:
case 2833:
case 274:
case 555:
case 428:
case 284:
case 559:
case 2769:
case 45:
case 2368:
case 3248:
case 1234:
case 44:
case 1084:
case 733:
case 1705:
case 3919:
case 2758:
case 3056:
case 378:
case 2379:
case 1514:
case 784:
case 2661:
case 2458:
case 1303:
case 1087:
case 1005:
case 2655:
case 2749:
case 3217:
case 4040:
case 1925:
case 3257:
case 1944:
case 2461:
case 1853:
case 3650:
case 969:
case 2674:
case 1913:
case 4055:
case 220:
case 4021:
case 1219:
case 643:
case 1324:
case 1103:
case 2888:
case 1586:
case 2105:
case 2988:
case 1478:
case 1012:
case 755:
case 128:
case 2359:
case 1205:
case 3006:
case 11:
case 2018:
case 2554:
case 2154:
case 794:
case 754:
case 3734:
case 1893:
case 2493:
case 3413:
case 14:
case 1182:
case 1392:
case 3132:
case 1921:
case 2619:
case 707:
case 1593:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1724572801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,];
var gg_b = "1724572801/";

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
