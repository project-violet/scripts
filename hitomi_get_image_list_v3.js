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
case 3979:
case 3873:
case 2629:
case 3958:
case 3361:
case 2981:
case 3152:
case 1553:
case 3315:
case 2311:
case 878:
case 1686:
case 2705:
case 960:
case 1440:
case 2034:
case 3812:
case 462:
case 1587:
case 1755:
case 2737:
case 922:
case 3323:
case 1650:
case 2043:
case 1393:
case 2682:
case 1278:
case 665:
case 420:
case 3680:
case 1008:
case 726:
case 1531:
case 713:
case 2394:
case 407:
case 3275:
case 2186:
case 3081:
case 2296:
case 1129:
case 2430:
case 91:
case 2085:
case 3397:
case 2937:
case 800:
case 1318:
case 1955:
case 3656:
case 3222:
case 1292:
case 2554:
case 2150:
case 23:
case 3779:
case 176:
case 130:
case 831:
case 2781:
case 3943:
case 3849:
case 1769:
case 687:
case 384:
case 1107:
case 2817:
case 7:
case 435:
case 3154:
case 2293:
case 993:
case 2378:
case 2359:
case 3550:
case 79:
case 43:
case 1870:
case 848:
case 3401:
case 2032:
case 3687:
case 328:
case 3946:
case 112:
case 1265:
case 4058:
case 3586:
case 3732:
case 3390:
case 3653:
case 2828:
case 1320:
case 2684:
case 3604:
case 2730:
case 2218:
case 2392:
case 1042:
case 3932:
case 584:
case 12:
case 577:
case 1556:
case 2895:
case 2607:
case 146:
case 3224:
case 1940:
case 3030:
case 3485:
case 658:
case 1502:
case 1396:
case 528:
case 775:
case 2635:
case 3326:
case 1863:
case 694:
case 262:
case 2793:
case 1061:
case 327:
case 2927:
case 624:
case 2806:
case 1116:
case 2420:
case 1139:
case 712:
case 1994:
case 3924:
case 3591:
case 1478:
case 19:
case 1305:
case 1711:
case 4022:
case 3093:
case 378:
case 440:
case 290:
case 1023:
case 2112:
case 2409:
case 1802:
case 2918:
case 1:
case 195:
case 414:
case 2496:
case 3475:
case 175:
case 354:
case 2517:
case 3308:
case 3768:
case 1174:
case 2718:
case 3567:
case 3850:
case 236:
case 746:
case 2149:
case 3514:
case 1097:
case 331:
case 72:
case 489:
case 2068:
case 3724:
case 2727:
case 3886:
case 2899:
case 2528:
case 3422:
case 725:
case 300:
case 289:
case 828:
case 3663:
case 1831:
case 819:
case 2720:
case 1255:
case 2672:
case 1198:
case 1992:
case 214:
case 1676:
case 877:
case 972:
case 3336:
case 4024:
case 1691:
case 3621:
case 2237:
case 263:
case 2369:
case 796:
case 3234:
case 3857:
case 3164:
case 436:
case 1465:
case 3549:
case 1172:
case 1853:
case 14:
case 1959:
case 1978:
case 730:
case 776:
case 240:
case 3789:
case 3512:
case 2771:
case 1113:
case 145:
case 3775:
case 3722:
case 1566:
case 1792:
case 2920:
case 3670:
case 2075:
case 1667:
case 3258:
case 3279:
case 1494:
case 113:
case 3096:
case 164:
case 1125:
case 3071:
case 1441:
case 1818:
case 2108:
case 2310:
case 3519:
case 2902:
case 2980:
case 285:
case 3360:
case 3700:
case 3484:
case 1158:
case 1179:
case 900:
case 1377:
case 1185:
case 211:
case 3225:
case 881:
case 1295:
case 843:
case 1651:
case 2000:
case 2894:
case 4007:
case 2082:
case 2601:
case 3729:
case 2643:
case 1799:
case 998:
case 1906:
case 3605:
case 978:
case 161:
case 523:
case 4084:
case 1706:
case 860:
case 1530:
case 2658:
case 2679:
case 3823:
case 3681:
case 1893:
case 1999:
case 467:
case 704:
case 1134:
case 149:
case 3002:
case 2431:
case 342:
case 653:
case 3080:
case 1608:
case 3373:
case 822:
case 1633:
case 927:
case 3861:
case 1101:
case 1752:
case 3542:
case 3900:
case 3982:
case 3298:
case 3056:
case 2702:
case 1228:
case 1505:
case 2753:
case 3784:
case 3826:
case 1954:
case 1871:
case 572:
case 3551:
case 3482:
case 1210:
case 1738:
case 2084:
case 1499:
case 2892:
case 1537:
case 3429:
case 3274:
case 534:
case 2277:
case 267:
case 1146:
case 2931:
case 2395:
case 3376:
case 3935:
case 1636:
case 4000:
case 3735:
case 2007:
case 2456:
case 2731:
case 4082:
case 179:
case 1083:
case 682:
case 1057:
case 3890:
case 1938:
case 1406:
case 1132:
case 948:
case 2119:
case 2402:
case 1809:
case 3544:
case 592:
case 1941:
case 2136:
case 117:
case 2646:
case 485:
case 2987:
case 3216:
case 3239:
case 3707:
case 3367:
case 2878:
case 2704:
case 1452:
case 2859:
case 2953:
case 1581:
case 729:
case 256:
case 3630:
case 3984:
case 2748:
case 1370:
case 48:
case 3140:
case 2253:
case 343:
case 3194:
case 3284:
case 2074:
case 3425:
case 3077:
case 2399:
case 268:
case 3590:
case 3939:
case 2197:
case 1509:
case 3844:
case 1962:
case 455:
case 1168:
case 315:
case 2578:
case 2559:
case 3350:
case 816:
case 1881:
case 560:
case 31:
case 3693:
case 823:
case 286:
case 3472:
case 2777:
case 2847:
case 381:
case 118:
case 3066:
case 691:
case 322:
case 3627:
case 2115:
case 129:
case 1697:
case 2016:
case 3111:
case 1762:
case 2855:
case 1417:
case 3526:
case 2888:
case 717:
case 3851:
case 2624:
case 3716:
case 4072:
case 1073:
case 51:
case 360:
case 2592:
case 2306:
case 1837:
case 1428:
case 2123:
case 3498:
case 1012:
case 947:
case 1356:
case 515:
case 2248:
case 3618:
case 3200:
case 3523:
case 3192:
case 997:
case 892:
case 1795:
case 2013:
case 2721:
case 3620:
case 2970:
case 1690:
case 1353:
case 2511:
case 3772:
case 2565:
case 4039:
case 3842:
case 2126:
case 1410:
case 2303:
case 3474:
case 2025:
case 3713:
case 1299:
case 834:
case 573:
case 1717:
case 3383:
case 928:
case 919:
case 2354:
case 2869:
case 1462:
case 3357:
case 486:
case 3178:
case 2770:
case 851:
case 2256:
case 1764:
case 239:
case 2689:
case 1252:
case 2594:
case 3671:
case 3925:
case 1067:
case 1995:
case 984:
case 3696:
case 3798:
case 761:
case 2202:
case 1728:
case 468:
case 1426:
case 2768:
case 2475:
case 254:
case 3496:
case 1800:
case 2489:
case 1882:
case 3230:
case 769:
case 3718:
case 3471:
case 1379:
case 1358:
case 370:
case 3639:
case 83:
case 508:
case 1961:
case 1915:
case 3347:
case 2027:
case 4020:
case 2018:
case 1662:
case 859:
case 783:
case 105:
case 2724:
case 1242:
case 3727:
case 1598:
case 2422:
case 1923:
case 3528:
case 1723:
case 0:
case 536:
case 570:
case 1219:
case 1166:
case 1011:
case 3806:
case 1065:
case 1334:
case 2591:
case 4071:
case 1572:
case 1301:
case 1761:
case 1343:
case 1715:
case 3409:
case 2232:
case 2351:
case 3388:
case 1628:
case 3698:
case 771:
case 2342:
case 1092:
case 4093:
case 340:
case 3022:
case 3803:
case 2789:
case 3562:
case 2845:
case 3796:
case 1163:
case 2775:
case 967:
case 2468:
case 1244:
case 1208:
case 1516:
case 1990:
case 2670:
case 1497:
case 2096:
case 514:
case 752:
case 2424:
case 2258:
case 3191:
case 3075:
case 2071:
case 820:
case 121:
case 3089:
case 2285:
case 3176:
case 4018:
case 182:
case 679:
case 2009:
case 3613:
case 2243:
case 1835:
case 2201:
case 1790:
case 1059:
case 1078:
case 3720:
case 3493:
case 400:
case 956:
case 1423:
case 3672:
case 1251:
case 3996:
case 2319:
case 3625:
case 2975:
case 1807:
case 314:
case 3237:
case 3369:
case 137:
case 3971:
case 2857:
case 498:
case 2549:
case 4027:
case 2020:
case 3394:
case 419:
case 359:
case 2680:
case 2934:
case 2602:
case 1226:
case 3058:
case 106:
case 3186:
case 3271:
case 3937:
case 2199:
case 3085:
case 1047:
case 2656:
case 484:
case 477:
case 2860:
case 335:
case 1951:
case 2583:
case 3150:
case 3905:
case 968:
case 1442:
case 2758:
case 2315:
case 2743:
case 2152:
case 138:
case 1699:
case 2701:
case 2958:
case 1584:
case 2979:
case 2873:
case 3629:
case 890:
case 3705:
case 191:
case 3311:
case 3503:
case 1944:
case 559:
case 1102:
case 2812:
case 1419:
case 1436:
case 1751:
case 3034:
case 1908:
case 737:
case 497:
case 1180:
case 2005:
case 3737:
case 3209:
case 808:
case 1816:
case 2106:
case 3043:
case 1839:
case 535:
case 1156:
case 1088:
case 3218:
case 3730:
case 70:
case 2932:
case 1433:
case 2268:
case 2891:
case 705:
case 903:
case 3895:
case 2746:
case 2479:
case 1872:
case 3481:
case 1742:
case 4037:
case 2030:
case 1408:
case 2326:
case 3635:
case 1936:
case 1813:
case 1444:
case 169:
case 1389:
case 507:
case 297:
case 3227:
case 2631:
case 3817:
case 284:
case 277:
case 1223:
case 1582:
case 1451:
case 2867:
case 3293:
case 2154:
case 939:
case 3157:
case 3405:
case 1638:
case 2550:
case 3864:
case 3032:
case 2401:
case 1104:
case 2443:
case 1261:
case 2434:
case 1131:
case 2687:
case 228:
case 1641:
case 1603:
case 307:
case 95:
case 1529:
case 1040:
case 2653:
case 3599:
case 3470:
case 3161:
case 3977:
case 2627:
case 3352:
case 2066:
case 1773:
case 2235:
case 3039:
case 1801:
case 1414:
case 2526:
case 4021:
case 1712:
case 3888:
case 1960:
case 1522:
case 3306:
case 1193:
case 16:
case 3592:
case 165:
case 1257:
case 2618:
case 3204:
case 1491:
case 2194:
case 1010:
case 3421:
case 3074:
case 1611:
case 3966:
case 2077:
case 2833:
case 3197:
case 93:
case 1329:
case 3399:
case 3287:
case 368:
case 2774:
case 1118:
case 1912:
case 2413:
case 2844:
case 1300:
case 1760:
case 885:
case 1879:
case 1858:
case 88:
case 676:
case 2693:
case 21:
case 2350:
case 3578:
case 3847:
case 1109:
case 1412:
case 1767:
case 907:
case 802:
case 3963:
case 187:
case 1568:
case 2178:
case 41:
case 2972:
case 3622:
case 3840:
case 3256:
case 3098:
case 3770:
case 3921:
case 132:
case 293:
case 503:
case 1017:
case 1976:
case 2925:
case 3675:
case 2416:
case 2597:
case 1832:
case 2439:
case 2200:
case 3013:
case 1846:
case 1250:
case 1776:
case 867:
case 555:
case 273:
case 2609:
case 2063:
case 158:
case 2620:
case 1449:
case 2842:
case 3565:
case 646:
case 1196:
case 303:
case 920:
case 2021:
case 194:
case 3341:
case 1286:
case 1460:
case 757:
case 2713:
case 3025:
case 1052:
case 4053:
case 58:
case 1986:
case 3685:
case 124:
case 1316:
case 3679:
case 2929:
case 1339:
case 242:
case 3756:
case 1546:
case 732:
case 2002:
case 3270:
case 1214:
case 2435:
case 4087:
case 2815:
case 1006:
case 3404:
case 2542:
case 3811:
case 2900:
case 2155:
case 695:
case 2312:
case 2407:
case 3780:
case 3362:
case 2188:
case 2298:
case 774:
case 3902:
case 3144:
case 3310:
case 2519:
case 3108:
case 2536:
case 2782:
case 794:
case 3569:
case 675:
case 3487:
case 1374:
case 223:
case 38:
case 1181:
case 216:
case 67:
case 1291:
case 451:
case 1750:
case 2349:
case 2225:
case 3029:
case 2147:
case 3894:
case 2272:
case 3956:
case 3082:
case 472:
case 3643:
case 3601:
case 2605:
case 936:
case 970:
case 4048:
case 868:
case 1786:
case 4004:
case 1532:
case 3007:
case 2735:
case 1273:
case 1054:
case 3731:
case 2533:
case 2890:
case 2508:
case 744:
case 1783:
case 3317:
case 567:
case 234:
case 302:
case 3035:
case 2239:
case 2169:
case 2216:
case 989:
case 1579:
case 2984:
case 423:
case 3748:
case 1558:
case 2630:
case 3859:
case 416:
case 3704:
case 251:
case 2140:
case 1372:
case 3632:
case 1957:
case 1450:
case 3948:
case 1501:
case 3904:
case 1313:
case 3555:
case 1745:
case 1889:
case 2053:
case 1130:
case 1260:
case 502:
case 2391:
case 1669:
case 367:
case 3277:
case 664:
case 613:
case 2935:
case 4080:
case 3395:
case 777:
case 3802:
case 2513:
case 395:
case 1968:
case 3880:
case 3478:
case 3765:
case 3305:
case 3711:
case 2343:
case 178:
case 4092:
case 3994:
case 253:
case 3660:
case 719:
case 2334:
case 2610:
case 421:
case 3240:
case 3856:
case 1576:
case 2525:
case 2236:
case 127:
case 3337:
case 980:
case 20:
case 4078:
case 801:
case 3673:
case 1422:
case 2598:
case 1333:
case 2662:
case 3794:
case 205:
case 1850:
case 2177:
case 2915:
case 198:
case 2961:
case 3570:
case 2358:
case 876:
case 1666:
case 1514:
case 3965:
case 1027:
case 3911:
case 131:
case 3097:
case 1110:
case 2800:
case 2094:
case 685:
case 1475:
case 1768:
case 797:
case 437:
case 1489:
case 2461:
case 1857:
case 3577:
case 148:
case 1164:
case 3848:
case 3090:
case 656:
case 1549:
case 513:
case 1975:
case 2807:
case 4094:
case 2695:
case 1883:
case 2574:
case 1621:
case 747:
case 40:
case 2790:
case 3255:
case 2251:
case 1922:
case 3198:
case 917:
case 282:
case 326:
case 1279:
case 1258:
case 2346:
case 2121:
case 1096:
case 3494:
case 364:
case 3247:
case 3125:
case 2617:
case 221:
case 1071:
case 3566:
case 3614:
case 2539:
case 3330:
case 1670:
case 2497:
case 4011:
case 1789:
case 345:
case 2233:
case 2628:
case 3853:
case 2092:
case 483:
case 3278:
case 2055:
case 3051:
case 2088:
case 3866:
case 1005:
case 1432:
case 2933:
case 3650:
case 3393:
case 576:
case 530:
case 2436:
case 2102:
case 2180:
case 3755:
case 469:
case 2584:
case 1873:
case 1979:
case 1701:
case 89:
case 1152:
case 2699:
case 748:
case 291:
case 271:
case 1785:
case 2606:
case 3548:
case 1758:
case 1779:
case 1901:
case 376:
case 3504:
case 1943:
case 875:
case 1583:
case 2708:
case 2874:
case 1860:
case 3988:
case 2744:
case 668:
case 2733:
case 1275:
case 2226:
case 596:
case 1081:
case 4040:
case 301:
case 1289:
case 4069:
case 2535:
case 1602:
case 950:
case 1732:
case 4047:
case 727:
case 2040:
case 1687:
case 128:
case 1434:
case 3036:
case 3265:
case 2069:
case 2603:
case 2641:
case 2638:
case 3870:
case 1814:
case 2104:
case 3309:
case 184:
case 3107:
case 904:
case 1154:
case 2736:
case 1867:
case 2451:
case 2582:
case 2813:
case 2919:
case 2936:
case 2375:
case 1326:
case 2408:
case 1141:
case 512:
case 845:
case 3969:
case 3371:
case 2389:
case 269:
case 603:
case 3580:
case 798:
case 3294:
case 2153:
case 438:
case 84:
case 3184:
case 1479:
case 1030:
case 3447:
case 731:
case 241:
case 283:
case 32:
case 826:
case 1891:
case 4055:
case 864:
case 3556:
case 4088:
case 1138:
case 2322:
case 700:
case 325:
case 901:
case 2749:
case 11:
case 3881:
case 3623:
case 1472:
case 2885:
case 63:
case 181:
case 2760:
case 2912:
case 635:
case 3962:
case 3710:
case 474:
case 487:
case 2382:
case 1077:
case 976:
case 930:
case 2665:
case 529:
case 1386:
case 518:
case 2245:
case 1916:
case 3615:
case 2127:
case 3049:
case 3520:
case 3661:
case 1939:
case 2010:
case 4017:
case 143:
case 3124:
case 3495:
case 659:
case 3060:
case 1425:
case 849:
case 3012:
case 2257:
case 265:
case 772:
case 3356:
case 1618:
case 1739:
case 3837:
case 3254:
case 2283:
case 2522:
case 1498:
case 3302:
case 3596:
case 3910:
case 494:
case 244:
case 3417:
case 2960:
case 2694:
case 1851:
case 4095:
case 3380:
case 3464:
case 3805:
case 122:
case 458:
case 3697:
case 2949:
case 1165:
case 2414:
case 751:
case 2801:
case 1235:
case 2286:
case 3175:
case 3091:
case 662:
case 444:
case 1021:
case 504:
case 92:
case 1474:
case 1229:
case 3076:
case 3387:
case 1713:
case 2095:
case 1620:
case 716:
case 723:
case 3690:
case 925:
case 1515:
case 1772:
case 2776:
case 2250:
case 3795:
case 620:
case 899:
case 2791:
case 4062:
case 1609:
case 1200:
case 3830:
case 1998:
case 46:
case 1523:
case 1282:
case 2678:
case 3928:
case 3593:
case 946:
case 2064:
case 3728:
case 1439:
case 3014:
case 304:
case 2991:
case 2524:
case 3252:
case 3331:
case 742:
case 193:
case 1671:
case 3626:
case 2335:
case 3995:
case 1696:
case 879:
case 1357:
case 2692:
case 350:
case 3764:
case 3518:
case 2307:
case 2412:
case 1913:
case 1383:
case 912:
case 3717:
case 274:
case 287:
case 3462:
case 3206:
case 97:
case 3050:
case 3799:
case 2532:
case 1605:
case 3651:
case 2688:
case 975:
case 2655:
case 116:
case 1637:
case 123:
case 561:
case 3952:
case 1147:
case 670:
case 3295:
case 1349:
case 409:
case 549:
case 2868:
case 1312:
case 1900:
case 3228:
case 1373:
case 1861:
case 829:
case 288:
case 690:
case 1815:
case 3752:
case 1542:
case 9:
case 433:
case 3134:
case 349:
case 2546:
case 4041:
case 3608:
case 2214:
case 224:
case 2986:
case 3706:
case 2339:
case 2267:
case 1929:
case 1823:
case 3999:
case 2316:
case 3893:
case 1681:
case 3146:
case 192:
case 945:
case 233:
case 2003:
case 2669:
case 2534:
case 517:
case 3738:
case 424:
case 3210:
case 2640:
case 1053:
case 4052:
case 3499:
case 3537:
case 1429:
case 1274:
case 2822:
case 1400:
case 964:
case 2313:
case 2745:
case 1907:
case 2875:
case 1826:
case 579:
case 3871:
case 913:
case 1482:
case 2889:
case 71:
case 3505:
case 640:
case 488:
case 2543:
case 781:
case 1784:
case 722:
case 1630:
case 1984:
case 1140:
case 2585:
case 3754:
case 599:
case 1031:
case 3809:
case 3903:
case 3941:
case 209:
case 1216:
case 1707:
case 457:
case 3642:
case 760:
case 3406:
case 3132:
case 3820:
case 2398:
case 1533:
case 1735:
case 2273:
case 689:
case 379:
case 3083:
case 3606:
case 1905:
case 1150:
case 2747:
case 371:
case 2504:
case 2033:
case 230:
case 2548:
case 1810:
case 2318:
case 2988:
case 3744:
case 1554:
case 3874:
case 1058:
case 1079:
case 538:
case 306:
case 80:
case 3733:
case 2327:
case 591:
case 3652:
case 1085:
case 2531:
case 805:
case 3535:
case 2259:
case 853:
case 944:
case 1600:
case 3088:
case 571:
case 1043:
case 2650:
case 4042:
case 3839:
case 3933:
case 3944:
case 1503:
case 714:
case 3751:
case 3436:
case 1862:
case 2469:
case 3290:
case 446:
case 338:
case 1981:
case 296:
case 96:
case 1365:
case 622:
case 391:
case 1635:
case 3408:
case 3375:
case 3919:
case 2502:
case 1046:
case 369:
case 2863:
case 3872:
case 736:
case 246:
case 2294:
case 3742:
case 341:
case 673:
case 3654:
case 120:
case 3825:
case 1895:
case 4051:
case 1218:
case 225:
case 2657:
case 958:
case 2042:
case 1506:
case 2320:
case 3529:
case 3040:
case 541:
case 401:
case 1599:
case 987:
case 2036:
case 882:
case 3215:
case 2019:
case 3641:
case 3603:
case 107:
case 1157:
case 2870:
case 1864:
case 2740:
case 790:
case 1032:
case 3148:
case 430:
case 4033:
case 476:
case 1817:
case 583:
case 2309:
case 3500:
case 837:
case 3223:
case 3451:
case 932:
case 2488:
case 30:
case 1727:
case 3598:
case 3829:
case 1993:
case 1899:
case 957:
case 3662:
case 305:
case 720:
case 2794:
case 2612:
case 1639:
case 170:
case 1564:
case 3915:
case 3177:
case 623:
case 2097:
case 2911:
case 1149:
case 616:
case 1024:
case 275:
case 1496:
case 3800:
case 1718:
case 1160:
case 1471:
case 1355:
case 3513:
case 2802:
case 1409:
case 1112:
case 2:
case 445:
case 1388:
case 838:
case 44:
case 966:
case 2765:
case 2305:
case 2478:
case 29:
case 3301:
case 190:
case 413:
case 2660:
case 353:
case 2994:
case 2521:
case 426:
case 642:
case 3525:
case 464:
case 3236:
case 2061:
case 3723:
case 2649:
case 108:
case 988:
case 2337:
case 2116:
case 2269:
case 1806:
case 3065:
case 213:
case 3346:
case 2026:
case 883:
case 1075:
case 1089:
case 3617:
case 321:
case 2125:
case 1176:
case 2247:
case 2792:
case 2614:
case 3244:
case 4015:
case 1838:
case 1427:
case 3990:
case 3516:
case 3664:
case 3497:
case 1920:
case 2330:
case 1909:
case 1841:
case 1418:
case 1562:
case 3163:
case 1796:
case 869:
case 495:
case 4:
case 3726:
case 933:
case 735:
case 2959:
case 2853:
case 73:
case 1698:
case 49:
case 4023:
case 3092:
case 841:
case 140:
case 2577:
case 3170:
case 3461:
case 1340:
case 2804:
case 2090:
case 47:
case 2411:
case 2848:
case 3695:
case 1510:
case 1996:
case 3807:
case 1625:
case 114:
case 521:
case 1237:
case 1971:
case 2691:
case 1167:
case 3790:
case 3059:
case 1493:
case 2288:
case 3423:
case 2198:
case 3332:
case 2831:
case 189:
case 1613:
case 3835:
case 1780:
case 2454:
case 1362:
case 953:
case 1151:
case 3950:
case 3105:
case 678:
case 2752:
case 1404:
case 2143:
case 2101:
case 865:
case 499:
case 1431:
case 1756:
case 2134:
case 3214:
case 2644:
case 557:
case 2706:
case 2366:
case 2217:
case 2999:
case 3137:
case 2893:
case 3316:
case 1658:
case 1679:
case 3339:
case 2530:
case 366:
case 4057:
case 2799:
case 1643:
case 588:
case 2827:
case 1263:
case 1000:
case 3688:
case 2651:
case 3655:
case 1956:
case 1082:
case 3181:
case 1453:
case 1221:
case 2158:
case 2179:
case 3099:
case 280:
case 111:
case 3276:
case 1029:
case 90:
case 703:
case 1108:
case 2818:
case 1487:
case 654:
case 3445:
case 1634:
case 3374:
case 3868:
case 1980:
case 3558:
case 1748:
case 3579:
case 1364:
case 4086:
case 1704:
case 1953:
case 648:
case 1317:
case 3783:
case 309:
case 533:
case 2941:
case 2809:
case 1402:
case 2903:
case 982:
case 1987:
case 217:
case 3212:
case 2820:
case 2132:
case 2406:
case 2938:
case 3273:
case 832:
case 3054:
case 3534:
case 3041:
case 299:
case 3003:
case 3669:
case 2321:
case 1277:
case 167:
case 3249:
case 2045:
case 3822:
case 768:
case 3260:
case 1892:
case 3745:
case 1555:
case 3983:
case 2871:
case 2363:
case 2703:
case 1588:
case 786:
case 1948:
case 3501:
case 3038:
case 1142:
case 1904:
case 1753:
case 3834:
case 3257:
case 1204:
case 2073:
case 991:
case 824:
case 1123:
case 3522:
case 3283:
case 2254:
case 510:
case 1766:
case 2837:
case 2428:
case 1306:
case 344:
case 1855:
case 2910:
case 2596:
case 702:
case 2762:
case 3589:
case 1624:
case 3467:
case 3960:
case 4076:
case 2697:
case 1161:
case 756:
case 1470:
case 218:
case 1352:
case 3773:
case 1016:
case 3879:
case 2623:
case 1559:
case 3885:
case 906:
case 3118:
case 565:
case 857:
case 2168:
case 2238:
case 2710:
case 1463:
case 2241:
case 3611:
case 2203:
case 1197:
case 4014:
case 2661:
case 2520:
case 3329:
case 2049:
case 1399:
case 168:
case 1421:
case 3010:
case 1074:
case 3476:
case 2495:
case 4067:
case 3064:
case 1466:
case 2014:
case 1190:
case 3120:
case 3832:
case 1594:
case 1921:
case 2252:
case 3017:
case 204:
case 2995:
case 3335:
case 628:
case 15:
case 3692:
case 1840:
case 1256:
case 3028:
case 1098:
case 1770:
case 2348:
case 809:
case 1354:
case 2206:
case 1963:
case 684:
case 155:
case 374:
case 3568:
case 2717:
case 3196:
case 532:
case 697:
case 394:
case 2091:
case 3286:
case 3171:
case 3460:
case 2387:
case 2076:
case 429:
case 2690:
case 3384:
case 418:
case 3449:
case 1565:
case 3914:
case 1511:
case 1013:
case 3250:
case 3776:
case 833:
case 3791:
case 1072:
case 1338:
case 2593:
case 3678:
case 2122:
case 2830:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1757246401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,];
var gg_b = "1757246401/";

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
