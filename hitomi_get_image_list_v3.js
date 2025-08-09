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
case 1551:
case 526:
case 2820:
case 2296:
case 3940:
case 2702:
case 2543:
case 127:
case 1601:
case 716:
case 2695:
case 1519:
case 3534:
case 836:
case 3695:
case 1975:
case 1099:
case 778:
case 523:
case 3702:
case 454:
case 840:
case 161:
case 3312:
case 3296:
case 922:
case 990:
case 3708:
case 3564:
case 3820:
case 1822:
case 165:
case 2585:
case 3888:
case 1310:
case 4023:
case 2407:
case 1091:
case 1700:
case 780:
case 2005:
case 3987:
case 1374:
case 1948:
case 2352:
case 1956:
case 2987:
case 1609:
case 3367:
case 1525:
case 202:
case 2358:
case 1942:
case 1836:
case 677:
case 3972:
case 3877:
case 213:
case 2193:
case 2000:
case 1954:
case 3381:
case 3851:
case 2961:
case 2791:
case 904:
case 4027:
case 66:
case 2344:
case 1923:
case 316:
case 3931:
case 278:
case 3819:
case 1321:
case 216:
case 3580:
case 615:
case 239:
case 2819:
case 440:
case 3403:
case 505:
case 2983:
case 4042:
case 419:
case 747:
case 2972:
case 2877:
case 172:
case 3193:
case 1376:
case 1864:
case 3000:
case 2381:
case 2851:
case 436:
case 3791:
case 887:
case 1002:
case 2536:
case 4016:
case 3522:
case 2547:
case 144:
case 2389:
case 3799:
case 501:
case 2939:
case 3528:
case 690:
case 622:
case 702:
case 380:
case 54:
case 224:
case 2945:
case 4075:
case 2528:
case 2294:
case 1914:
case 559:
case 1329:
case 1104:
case 3547:
case 2799:
case 1494:
case 2522:
case 1970:
case 3690:
case 1292:
case 741:
case 2912:
case 542:
case 8:
case 62:
case 2108:
case 1553:
case 1524:
case 2918:
case 1298:
case 3004:
case 799:
case 1706:
case 2879:
case 3541:
case 1375:
case 879:
case 718:
case 971:
case 2584:
case 3108:
case 4055:
case 2340:
case 3498:
case 946:
case 975:
case 3958:
case 2868:
case 1910:
case 2290:
case 3937:
case 3832:
case 2826:
case 2862:
case 2535:
case 1490:
case 2797:
case 1093:
case 1100:
case 3838:
case 17:
case 364:
case 2952:
case 3535:
case 1348:
case 507:
case 2694:
case 3967:
case 1886:
case 3797:
case 3826:
case 1342:
case 989:
case 2958:
case 3868:
case 2401:
case 341:
case 1105:
case 3372:
case 3383:
case 2793:
case 485:
case 2361:
case 1354:
case 2530:
case 30:
case 1495:
case 3331:
case 1323:
case 4:
case 689:
case 3933:
case 399:
case 376:
case 167:
case 2295:
case 1915:
case 4074:
case 3295:
case 2378:
case 3944:
case 1841:
case 563:
case 2560:
case 675:
case 2933:
case 121:
case 299:
case 3191:
case 112:
case 2383:
case 3963:
case 3793:
case 3361:
case 479:
case 2981:
case 3530:
case 1517:
case 962:
case 3199:
case 671:
case 3369:
case 1532:
case 2006:
case 245:
case 646:
case 2586:
case 3345:
case 2813:
case 1538:
case 630:
case 3339:
case 3813:
case 1929:
case 1209:
case 764:
case 345:
case 1835:
case 3006:
case 643:
case 2369:
case 3989:
case 1704:
case 3391:
case 499:
case 2781:
case 3666:
case 2183:
case 3763:
case 1673:
case 3249:
case 3628:
case 2647:
case 3265:
case 441:
case 1046:
case 695:
case 40:
case 2733:
case 296:
case 279:
case 385:
case 2590:
case 3622:
case 2636:
case 1435:
case 1123:
case 285:
case 2010:
case 1449:
case 3636:
case 3647:
case 3178:
case 2249:
case 2628:
case 2391:
case 3172:
case 3781:
case 3809:
case 2161:
case 293:
case 2763:
case 1213:
case 2993:
case 2680:
case 1170:
case 1224:
case 3789:
case 2050:
case 1904:
case 1729:
case 3139:
case 1114:
case 65:
case 1441:
case 1253:
case 1592:
case 2424:
case 1620:
case 3424:
case 1012:
case 649:
case 558:
case 2284:
case 610:
case 691:
case 381:
case 3050:
case 2801:
case 3241:
case 3680:
case 445:
case 2029:
case 1238:
case 3308:
case 80:
case 2432:
case 1271:
case 3468:
case 949:
case 2286:
case 1257:
case 2140:
case 1232:
case 2055:
case 3302:
case 1750:
case 785:
case 2457:
case 3718:
case 991:
case 1089:
case 2462:
case 796:
case 779:
case 3685:
case 3457:
case 2718:
case 1226:
case 3055:
case 3286:
case 1262:
case 2712:
case 3140:
case 1116:
case 873:
case 3029:
case 1625:
case 1509:
case 3432:
case 2595:
case 1619:
case 3634:
case 2746:
case 3021:
case 1501:
case 2758:
case 2643:
case 3898:
case 19:
case 3767:
case 1677:
case 3892:
case 1156:
case 2187:
case 1774:
case 1217:
case 2997:
case 3752:
case 983:
case 3230:
case 2479:
case 2260:
case 1710:
case 3746:
case 2021:
case 2417:
case 995:
case 3643:
case 2898:
case 1279:
case 2634:
case 1127:
case 3737:
case 2015:
case 1638:
case 1087:
case 2056:
case 3459:
case 2048:
case 1657:
case 192:
case 2686:
case 3163:
case 1894:
case 1671:
case 3761:
case 3393:
case 2772:
case 2181:
case 236:
case 3425:
case 688:
case 2133:
case 219:
case 3027:
case 3411:
case 1507:
case 1115:
case 1668:
case 3778:
case 2411:
case 3285:
case 4000:
case 1626:
case 298:
case 1259:
case 413:
case 1723:
case 3731:
case 1121:
case 58:
case 2163:
case 847:
case 478:
case 1754:
case 1211:
case 2393:
case 233:
case 3783:
case 1662:
case 3056:
case 2459:
case 754:
case 1905:
case 1225:
case 1304:
case 3234:
case 3803:
case 787:
case 3660:
case 2451:
case 157:
case 3016:
case 2419:
case 1277:
case 1714:
case 1129:
case 802:
case 952:
case 670:
case 1617:
case 3745:
case 1434:
case 2016:
case 3596:
case 3419:
case 424:
case 3451:
case 3243:
case 3477:
case 3769:
case 2234:
case 553:
case 2803:
case 2189:
case 3266:
case 2488:
case 2740:
case 3112:
case 1273:
case 1282:
case 1447:
case 2014:
case 2635:
case 3649:
case 3228:
case 970:
case 3908:
case 2482:
case 798:
case 2473:
case 1288:
case 839:
case 3665:
case 1775:
case 1150:
case 3807:
case 2236:
case 3902:
case 3222:
case 2807:
case 1306:
case 1428:
case 3236:
case 2902:
case 2222:
case 3482:
case 3473:
case 2665:
case 1422:
case 2649:
case 2594:
case 2266:
case 3740:
case 354:
case 697:
case 534:
case 3684:
case 1748:
case 3054:
case 13:
case 1072:
case 1061:
case 1900:
case 1220:
case 824:
case 287:
case 1727:
case 3280:
case 3641:
case 2023:
case 1344:
case 761:
case 2698:
case 2321:
case 178:
case 2203:
case 1580:
case 2834:
case 2923:
case 1000:
case 3864:
case 1791:
case 113:
case 372:
case 2692:
case 3520:
case 1363:
case 963:
case 2705:
case 517:
case 674:
case 3705:
case 1381:
case 3954:
case 1877:
case 2376:
case 1972:
case 3692:
case 2520:
case 1983:
case 1819:
case 492:
case 3321:
case 139:
case 420:
case 1333:
case 1931:
case 3923:
case 607:
case 4087:
case 727:
case 3315:
case 2843:
case 3698:
case 1811:
case 3914:
case 2008:
case 124:
case 2573:
case 1825:
case 3970:
case 2002:
case 642:
case 1389:
case 2588:
case 244:
case 52:
case 708:
case 628:
case 344:
case 2104:
case 765:
case 3582:
case 3573:
case 457:
case 1566:
case 2914:
case 1294:
case 180:
case 1528:
case 750:
case 83:
case 361:
case 1543:
case 227:
case 2106:
case 1702:
case 3350:
case 3880:
case 4039:
case 3975:
case 2496:
case 1695:
case 530:
case 1318:
case 772:
case 147:
case 571:
case 2577:
case 2916:
case 1312:
case 4069:
case 820:
case 3577:
case 1534:
case 2350:
case 2880:
case 2099:
case 2975:
case 261:
case 327:
case 3601:
case 3106:
case 250:
case 589:
case 3511:
case 1407:
case 2374:
case 3525:
case 1367:
case 3609:
case 974:
case 1197:
case 2207:
case 265:
case 2822:
case 4061:
case 2310:
case 3847:
case 3559:
case 43:
case 3310:
case 2847:
case 2942:
case 1358:
case 857:
case 365:
case 3927:
case 1987:
case 2956:
case 1352:
case 102:
case 575:
case 4031:
case 3828:
case 21:
case 2201:
case 267:
case 4067:
case 3841:
case 968:
case 2915:
case 1295:
case 2105:
case 2097:
case 1401:
case 1361:
case 2354:
case 173:
case 312:
case 1963:
case 1191:
case 3495:
case 4046:
case 10:
case 1981:
case 1383:
case 1372:
case 3105:
case 3097:
case 4037:
case 577:
case 1378:
case 504:
case 2579:
case 4052:
case 855:
case 3921:
case 3323:
case 1560:
case 1331:
case 145:
case 2571:
case 77:
case 3209:
case 3929:
case 2538:
case 1339:
case 225:
case 706:
case 626:
case 1006:
case 3370:
case 3526:
case 2526:
case 1409:
case 2955:
case 1369:
case 1199:
case 2209:
case 2314:
case 3538:
case 1345:
case 2835:
case 3571:
case 3950:
case 2860:
case 2298:
case 2524:
case 522:
case 3375:
case 1102:
case 1879:
case 1541:
case 1817:
case 1912:
case 4089:
case 712:
case 832:
case 2830:
case 1584:
case 3316:
case 3292:
case 460:
case 548:
case 767:
case 1004:
case 3860:
case 3524:
case 659:
case 3356:
case 4044:
case 2974:
case 3348:
case 2490:
case 1862:
case 1535:
case 37:
case 164:
case 451:
case 1290:
case 2910:
case 1868:
case 4063:
case 3342:
case 2327:
case 1826:
case 1565:
case 1832:
case 668:
case 1937:
case 725:
case 206:
case 3910:
case 4081:
case 1958:
case 2342:
case 1838:
case 27:
case 4033:
case 3100:
case 3093:
case 303:
case 1857:
case 2886:
case 2356:
case 1694:
case 1871:
case 1952:
case 1055:
case 2232:
case 3659:
case 3268:
case 1471:
case 929:
case 821:
case 656:
case 1457:
case 2750:
case 2175:
case 3890:
case 2238:
case 3116:
case 1140:
case 3262:
case 260:
case 2262:
case 3257:
case 3271:
case 360:
case 1426:
case 3238:
case 732:
case 570:
case 355:
case 867:
case 3486:
case 2089:
case 1462:
case 2890:
case 1302:
case 3232:
case 3063:
case 2081:
case 29:
case 406:
case 1076:
case 1187:
case 3460:
case 1752:
case 3217:
case 2148:
case 3774:
case 1737:
case 3044:
case 2430:
case 2619:
case 351:
case 1758:
case 1746:
case 209:
case 2142:
case 47:
case 825:
case 403:
case 1021:
case 309:
case 1260:
case 1015:
case 2044:
case 3619:
case 3156:
case 2460:
case 934:
case 1892:
case 1767:
case 1997:
case 2217:
case 3148:
case 1479:
case 2300:
case 3081:
case 68:
case 2688:
case 3715:
case 1647:
case 1178:
case 3449:
case 2058:
case 412:
case 3123:
case 179:
case 3721:
case 1131:
case 2046:
case 2682:
case 1809:
case 421:
case 2052:
case 597:
case 1235:
case 1074:
case 1249:
case 760:
case 193:
case 3682:
case 2154:
case 1161:
case 2465:
case 3776:
case 2449:
case 3435:
case 3058:
case 2123:
case 138:
case 185:
case 1010:
case 2715:
case 1413:
case 953:
case 2441:
case 1145:
case 2755:
case 1453:
case 1241:
case 751:
case 806:
case 2598:
case 2904:
case 1050:
case 552:
case 1399:
case 3598:
case 1801:
case 956:
case 3224:
case 709:
case 629:
case 1789:
case 2484:
case 2895:
case 2012:
case 3441:
case 3114:
case 1139:
case 2775:
case 2150:
case 1473:
case 2069:
case 1247:
case 1482:
case 1236:
case 3428:
case 3306:
case 1070:
case 2282:
case 2273:
case 1488:
case 784:
case 2045:
case 2436:
case 1635:
case 3422:
case 1908:
case 1228:
case 2422:
case 3447:
case 3282:
case 3273:
case 427:
case 1266:
case 1222:
case 1902:
case 1807:
case 2306:
case 658:
case 2466:
case 3775:
case 1665:
case 2480:
case 2653:
case 1152:
case 3896:
case 2756:
case 595:
case 2083:
case 2072:
case 3061:
case 23:
case 3900:
case 3110:
case 2742:
case 41:
case 2503:
case 1641:
case 2078:
case 2624:
case 3727:
case 757:
case 1420:
case 669:
case 3624:
case 187:
case 3503:
case 844:
case 586:
case 3072:
case 2900:
case 3653:
case 465:
case 1684:
case 3756:
case 1397:
case 3723:
case 119:
case 2632:
case 136:
case 1285:
case 1778:
case 3668:
case 3115:
case 1048:
case 537:
case 694:
case 384:
case 3662:
case 2176:
case 1783:
case 3754:
case 220:
case 3211:
case 2662:
case 3176:
case 133:
case 3894:
case 1761:
case 3485:
case 392:
case 1163:
case 2225:
case 3507:
case 827:
case 1411:
case 1027:
case 2121:
case 2723:
case 3632:
case 1425:
case 198:
case 2626:
case 1419:
case 2129:
case 1745:
case 2251:
case 1264:
case 2714:
case 2277:
case 1075:
case 1769:
case 2219:
case 958:
case 2304:
case 257:
case 1451:
case 2155:
case 2770:
case 3464:
case 865:
case 1660:
case 3770:
case 3155:
case 1234:
case 808:
case 1803:
case 2679:
case 3219:
case 3129:
case 2617:
case 73:
case 3277:
case 1016:
case 2434:
case 565:
case 486:
case 2709:
case 1876:
case 3863:
case 508:
case 2924:
case 1518:
case 2204:
case 3550:
case 3844:
case 1815:
case 51:
case 1821:
case 3204:
case 3833:
case 1098:
case 1334:
case 3881:
case 495:
case 3709:
case 60:
case 964:
case 641:
case 114:
case 3103:
case 3701:
case 271:
case 126:
case 4030:
case 343:
case 1855:
case 3325:
case 645:
case 3311:
case 3913:
case 2311:
case 4060:
case 0:
case 330:
case 2913:
case 1293:
case 1608:
case 561:
case 346:
case 243:
case 1795:
case 2090:
case 1558:
case 3510:
case 1602:
case 3917:
case 3812:
case 3320:
case 3576:
case 1850:
case 101:
case 1380:
case 2521:
case 886:
case 3818:
case 3979:
case 4035:
case 3107:
case 3095:
case 2979:
case 3515:
case 4049:
case 2107:
case 2095:
case 1790:
case 1533:
case 895:
case 2320:
case 1581:
case 4065:
case 2812:
case 2846:
case 2858:
case 3798:
case 3968:
case 2388:
case 976:
case 999:
case 3555:
case 317:
case 4041:
case 2971:
case 849:
case 3867:
case 262:
case 2382:
case 3792:
case 1009:
case 90:
case 3605:
case 973:
case 3938:
case 2605:
case 1691:
case 3971:
case 1874:
case 362:
case 3852:
case 2962:
case 2792:
case 1196:
case 2206:
case 3932:
case 2555:
case 168:
case 105:
case 1810:
case 771:
case 3858:
case 3388:
case 2951:
case 3861:
case 613:
case 1964:
case 1794:
case 2109:
case 2883:
case 902:
case 26:
case 3096:
case 2516:
case 1341:
case 2878:
case 2919:
case 2324:
case 2831:
case 2575:
case 215:
case 1823:
case 616:
case 57:
case 1934:
case 3878:
case 174:
case 36:
case 2096:
case 3499:
case 3516:
case 852:
case 3977:
case 1854:
case 506:
case 3353:
case 777:
case 1870:
case 3491:
case 142:
case 2869:
case 3959:
case 3101:
case 211:
case 3703:
case 222:
case 290:
case 3313:
case 1335:
case 3556:
case 3205:
case 3925:
case 1349:
case 1587:
case 248:
case 322:
case 947:
case 2911:
case 1291:
case 2839:
case 3869:
case 2959:
case 2542:
case 2101:
case 311:
case 1007:
case 3527:
case 2491:
case 1365:
case 3200:
case 3920:
case 647:
case 1561:
case 980:
case 2840:
case 4085:
case 3707:
case 715:
case 1875:
case 1531:
case 1360:
case 1578:
case 2707:
case 2379:
case 1400:
case 2200:
case 1572:
case 166:
case 3408:
case 2332:
case 1936:
case 939:
case 2988:
case 2338:
case 2094:
case 1856:
case 2887:
case 2973:
case 1848:
case 4043:
case 3362:
case 2982:
case 748:
case 3357:
case 1796:
case 1966:
case 3887:
case 204:
case 3371:
case 2192:
case 497:
case 3973:
case 1693:
case 3982:
case 3338:
case 602:
case 3094:
case 790:
case 913:
case 4034:
case 521:
case 512:
case 978:
case 711:
case 1569:
case 1827:
case 2326:
case 2408:
case 1202:
case 1922:
case 1025:
case 2117:
case 3248:
case 3505:
case 3629:
case 252:
case 2808:
case 1427:
case 2720:
case 3655:
case 3487:
case 1059:
case 1390:
case 2802:
case 2179:
case 2227:
case 2085:
case 3802:
case 3179:
case 158:
case 2242:
case 788:
case 1780:
case 3808:
case 1591:
case 1130:
case 3720:
case 1442:
case 1287:
case 2505:
case 2398:
case 2615:
case 1599:
case 3275:
case 532:
case 731:
case 1644:
case 297:
case 3157:
case 3171:
case 3782:
case 3676:
case 1766:
case 2162:
case 848:
case 1800:
case 3064:
case 770:
case 822:
case 2064:
case 1051:
case 2773:
case 3392:
case 2782:
case 1475:
case 1681:
case 3126:
case 169:
case 940:
case 1633:
case 936:
case 3398:
case 3034:
case 2275:
case 3168:
case 1019:
case 1747:
case 3469:
case 194:
case 509:
case 1239:
case 415:
case 3777:
case 2891:
case 3214:
case 2674:
case 235:
case 3047:
case 3719:
case 636:
case 2022:
case 640:
case 2439:
case 3022:
case 1141:
case 2036:
case 1502:
case 3439:
case 1646:
case 2124:
case 1269:
case 2719:
case 752:
case 1470:
case 1652:
case 2309:
case 2751:
case 3891:
case 1764:
case 1994:
case 2214:
case 3674:
case 1082:
case 2469:
case 1073:
case 2223:
case 3080:
case 2759:
case 448:
case 1618:
case 560:
case 3472:
case 3650:
case 1165:
case 1149:
case 1612:
case 1020:
case 2113:
case 2254:
case 1261:
case 411:
case 3113:
case 270:
case 2431:
case 954:
case 3461:
case 1785:
case 2472:
case 2650:
case 2483:
case 3903:
case 231:
case 3301:
case 1013:
case 3437:
case 3446:
case 4095:
case 1639:
case 2274:
case 557:
case 3458:
case 3035:
case 2049:
case 2065:
case 2779:
case 2307:
case 1806:
case 2467:
case 1474:
case 156:
case 1990:
case 1760:
case 786:
case 3467:
case 1180:
case 889:
case 3210:
case 1246:
case 2452:
case 795:
case 3065:
case 1237:
case 3779:
case 3307:
case 1669:
case 1645:
case 2614:
case 3049:
case 1730:
case 3120:
case 2437:
case 1593:
case 2623:
case 1122:
case 3732:
case 2726:
case 237:
case 3041:
case 520:
case 1218:
case 2504:
case 2998:
case 2768:
case 985:
case 3250:
case 2412:
case 993:
case 1128:
case 3738:
case 2992:
case 749:
case 1661:
case 2654:
case 3757:
case 1683:
case 2182:
case 3897:
case 75:
case 3084:
case 3504:
case 996:
case 979:
case 1147:
case 2250:
case 2188:
case 3623:
case 2041:
case 3151:
case 2893:
case 3648:
case 3753:
case 3177:
case 283:
case 3909:
case 134:
case 3255:
case 3642:
case 1026:
case 3119:
case 1289:
case 295:
case 2119:
case 685:
case 638:
case 2255:
case 2642:
case 1429:
case 1741:
case 1143:
case 1032:
case 1057:
case 1071:
case 1164:
case 82:
case 2753:
case 2648:
case 383:
case 2229:
case 6:
case 2909:
case 2656:
case 3675:
case 1995:
case 2215:
case 1765:
case 3481:
case 2463:
case 2901:
case 2111:
case 2444:
case 25:
case 3030:
case 2713:
case 2616:
case 3276:
case 1415:
case 1421:
case 1017:
case 2433:
case 249:
case 862:
case 3125:
case 3111:
case 35:
case 2030:
case 471:
case 3616:
case 2276:
case 3159:
case 3303:
case 430:
case 1233:
case 1804:
case 291:
case 3060:
case 2675:
case 1476:
case 2481:
case 1185:
case 3463:
case 737:
case 3533:
case 3790:
case 3960:
case 3001:
case 524:
case 2699:
case 1515:
case 714:
case 3297:
case 3581:
case 2930:
case 3930:
case 3563:
case 834:
case 2297:
case 1917:
case 34:
case 1107:
case 2533:
case 925:
case 259:
case 580:
case 1497:
case 301:
case 2960:
case 2790:
case 3380:
case 3196:
case 3366:
case 162:
case 1957:
case 2986:
case 1971:
case 723:
case 603:
case 3328:
case 912:
case 1938:
case 2009:
case 4053:
case 921:
case 829:
case 513:
case 1846:
case 1837:
case 2336:
case 3336:
case 1206:
case 1555:
case 967:
case 3589:
case 606:
case 726:
case 2810:
case 205:
case 2406:
case 2328:
case 1529:
case 539:
case 516:
case 2196:
case 3334:
case 3098:
case 189:
case 4038:
case 1833:
case 1924:
case 2343:
case 3815:
case 4057:
case 4071:
case 314:
case 2404:
case 4032:
case 853:
case 97:
case 2876:
case 1351:
case 3984:
case 1863:
case 612:
case 3194:
case 3876:
case 3364:
case 4026:
case 3512:
case 3343:
case 74:
case 4062:
case 3941:
case 2098:
case 175:
case 856:
case 701:
case 2567:
case 3608:
case 130:
case 2829:
case 3546:
case 547:
case 3558:
case 226:
case 705:
case 3965:
case 3795:
case 2855:
case 2385:
case 768:
case 3537:
case 2965:
case 3385:
case 143:
case 1701:
case 1090:
case 1103:
case 2293:
case 1311:
case 3829:
case 3567:
case 1325:
case 2552:
case 2949:
case 4079:
case 3400:
case 707:
case 545:
case 1604:
case 3003:
case 400:
case 1523:
case 2330:
case 2561:
case 882:
case 3572:
case 3583:
case 1840:
case 3816:
case 774:
case 894:
case 3330:
case 4059:
case 1200:
case 2003:
case 3980:
case 2531:
case 944:
case 2360:
case 4025:
case 2400:
case 661:
case 1379:
case 1707:
case 2578:
case 3208:
case 972:
case 3928:
case 650:
case 2539:
case 3545:
case 518:
case 1094:
case 1982:
case 1371:
case 469:
case 1357:
case 3796:
case 2856:
case 3922:
case 2936:
case 665:
case 3569:
case 2947:
case 608:
case 728:
case 2569:
case 50:
case 1198:
case 2922:
case 177:
case 1408:
case 541:
case 3848:
case 263:
case 3856:
case 2208:
case 576:
case 61:
case 1402:
case 2943:
case 564:
case 2299:
case 1883:
case 1109:
case 4088:
case 800:
case 3384:
case 1951:
case 3697:
case 374:
case 2540:
case 1096:
case 1861:
case 950:
case 2384:
case 3794:
case 3964:
case 2697:
case 2934:
case 115:
case 2823:
case 3299:
case 965:
case 207:
case 2814:
case 3587:
case 763:
case 3349:
case 2985:
case 3365:
case 869:
case 3195:
case 3007:
case 111:
case 1869:
case 1101:
case 1959:
case 1542:
case 2405:
case 1606:
case 228:
case 3985:
case 3870:
case 2587:
case 1205:
case 3335:
case 1548:
case 1839:
case 3814:
case 3269:
case 135:
case 2734:
case 3088:
case 3637:
case 1610:
case 1439:
case 3646:
case 3658:
case 3414:
case 294:
case 407:
case 3073:
case 2805:
case 1674:
case 3994:
case 3508:
case 700:
case 382:
case 2239:
case 1028:
case 2184:
case 3470:
case 2764:
case 2994:
case 1153:
case 1309:
case 3667:
case 1777:
case 3239:
case 3184:
case 2245:
case 2470:
case 684:
case 394:
case 2073:
case 3805:
case 2082:
case 2502:
case 2646:
case 2141:
case 2658:
case 1047:
case 2269:
case 1124:
case 3734:
case 2088:
case 4007:
case 863:
case 3135:
case 1254:
case 1711:
case 2020:
case 3272:
case 2612:
case 1759:
case 1301:
case 3231:
case 2618:
case 3165:
case 1650:
case 1472:
case 2785:
case 3395:
case 2278:
case 1899:
case 2231:
case 1478:
case 2272:
case 2283:
case 1500:
case 3423:
case 1431:
case 2135:
case 3780:
case 2390:
case 3448:
case 2160:
case 358:
case 2689:
case 1907:
case 1227:
case 1179:
case 807:
case 1802:
case 3287:
case 3442:
case 874:
case 2011:
case 782:
case 1808:
case 581:
case 2427:
case 152:
case 2130:
case 3011:
case 3427:
case 1629:
case 2442:
case 794:
case 3689:
case 2780:
case 3059:
case 1487:
case 3160:
case 1242:
case 258:
case 2766:
case 63:
case 596:
case 2728:
case 2644:
case 3747:
case 1398:
case 1621:
case 197:
case 3633:
case 2722:
case 463:
case 3736:
case 1126:
case 842:
case 1132:
case 3722:
case 1043:
case 2736:
case 593:
case 3644:
case 5:
case 3416:
case 2077:
case 3800:
case 585:
case 992:
case 3728:
case 2240:
case 466:
case 2475:
case 3766:
case 1676:
case 1171:
case 1773:
case 3143:
case 951:
case 2068:
case 753:
case 3687:
case 3455:
case 3394:
case 3038:
case 2784:
case 1893:
case 3164:
case 234:
case 1489:
case 334:
case 1086:
case 3062:
case 587:
case 2687:
case 1229:
case 2038:
case 3784:
case 1753:
case 1648:
case 1177:
case 2164:
case 186:
case 3134:
case 3289:
case 801:
case 3068:
case 1119:
case 2032:
case 2741:
case 1506:
case 1642:
case 1255:
case 78:
case 3640:
case 3281:
case 1713:
case 2749:
case 1125:
case 2017:
case 3597:
case 2244:
case 554:
case 1463:
case 1215:
case 2765:
case 1901:
case 955:
case 229:
case 3079:
case 3244:
case 3995:
case 2476:
case 3749:
case 3017:
case 2735:
case 3421:
case 2597:
case 149:
case 960:
case 1276:
case 2281:
case 1030:
case 3263:
case 3669:
case 1065:
case 3246:
case 2990:
case 1210:
case 2474:
case 256:
case 3258:
case 3180:
case 1467:
case 353:
case 4001:
case 459:
case 1120:
case 3730:
case 660:
case 2267:
case 3645:
case 3267:
case 1614:
case 1458:
case 44:
case 2645:
case 1446:
case 3639:
case 401:
case 2730:
case 1670:
case 3990:
case 3760:
case 2258:
case 2180:
case 2237:
case 823:
case 2128:
case 38:
case 69:
case 519:
case 536:
case 3053:
case 2396:
case 540:
case 1654:
case 2212:
case 1762:
case 1992:
case 1726:
case 3136:
case 2122:
case 1623:
case 1412:
case 729:
case 609:
case 1768:
case 1504:
case 1998:
case 3678:
case 3147:
case 4009:
case 1250:
case 533:
case 3218:
case 2678:
case 2147:
case 826:
case 2136:
case 1732:
case 2631:
case 3396:
case 2786:
case 2683:
case 2450:
case 3166:
case 1738:
case 932:
case 2053:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1754748002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,];
var gg_b = "1754748002/";

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
