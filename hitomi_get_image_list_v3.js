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
var o = 1;
switch (g) {
case 1414:
case 1778:
case 4078:
case 94:
case 3698:
case 4075:
case 3067:
case 602:
case 706:
case 3075:
case 2803:
case 2193:
case 2174:
case 3443:
case 1212:
case 1534:
case 1521:
case 603:
case 1487:
case 1338:
case 476:
case 3643:
case 3260:
case 3368:
case 2636:
case 625:
case 3615:
case 295:
case 3991:
case 3:
case 3982:
case 1933:
case 3918:
case 150:
case 618:
case 600:
case 1080:
case 1808:
case 1746:
case 3059:
case 2711:
case 828:
case 1:
case 1304:
case 539:
case 3371:
case 3476:
case 403:
case 1103:
case 3477:
case 1033:
case 3960:
case 3336:
case 2343:
case 1899:
case 2361:
case 209:
case 887:
case 513:
case 1457:
case 3914:
case 861:
case 2783:
case 3242:
case 1668:
case 173:
case 535:
case 3290:
case 3046:
case 3903:
case 2579:
case 3218:
case 1200:
case 3794:
case 3594:
case 1505:
case 3475:
case 1031:
case 429:
case 2439:
case 1667:
case 367:
case 3104:
case 830:
case 2454:
case 1220:
case 3129:
case 3798:
case 3093:
case 462:
case 2030:
case 2818:
case 211:
case 934:
case 390:
case 1529:
case 257:
case 1606:
case 3802:
case 2509:
case 763:
case 2667:
case 95:
case 4008:
case 1972:
case 560:
case 2184:
case 1635:
case 1867:
case 558:
case 2671:
case 1811:
case 3026:
case 3415:
case 1159:
case 1417:
case 1192:
case 3751:
case 2449:
case 3208:
case 2469:
case 3395:
case 1907:
case 469:
case 506:
case 430:
case 1765:
case 3488:
case 3555:
case 2101:
case 3936:
case 2092:
case 2793:
case 3652:
case 1813:
case 2230:
case 2154:
case 3348:
case 1089:
case 409:
case 3264:
case 3716:
case 3682:
case 2773:
case 3353:
case 3818:
case 1000:
case 2878:
case 1464:
case 324:
case 1472:
case 3696:
case 2955:
case 2517:
case 2032:
case 1110:
case 577:
case 141:
case 975:
case 1111:
case 2054:
case 1711:
case 1828:
case 1248:
case 2649:
case 2261:
case 1714:
case 870:
case 414:
case 1069:
case 3718:
case 2650:
case 3614:
case 573:
case 432:
case 2396:
case 667:
case 20:
case 832:
case 780:
case 3952:
case 3337:
case 697:
case 485:
case 2643:
case 1332:
case 2431:
case 3425:
case 1436:
case 3812:
case 1548:
case 4009:
case 399:
case 4095:
case 3335:
case 2373:
case 1308:
case 189:
case 1346:
case 1336:
case 377:
case 1185:
case 3717:
case 1672:
case 2563:
case 2559:
case 983:
case 768:
case 2441:
case 1035:
case 2270:
case 3374:
case 2996:
case 3512:
case 1627:
case 582:
case 792:
case 2050:
case 415:
case 153:
case 3414:
case 3010:
case 672:
case 1151:
case 2528:
case 3641:
case 3022:
case 311:
case 2706:
case 2035:
case 2195:
case 3576:
case 3411:
case 297:
case 2124:
case 779:
case 555:
case 3166:
case 2625:
case 3253:
case 1438:
case 3470:
case 3178:
case 3551:
case 3780:
case 3867:
case 3102:
case 815:
case 1824:
case 2997:
case 2821:
case 574:
case 3723:
case 2747:
case 3943:
case 3947:
case 3483:
case 396:
case 2651:
case 557:
case 2970:
case 789:
case 2188:
case 3232:
case 1633:
case 2942:
case 990:
case 386:
case 3965:
case 465:
case 1943:
case 16:
case 4020:
case 3814:
case 391:
case 1825:
case 3683:
case 2374:
case 1045:
case 791:
case 1928:
case 3471:
case 1986:
case 2524:
case 884:
case 3078:
case 3494:
case 3062:
case 1282:
case 450:
case 2857:
case 164:
case 1334:
case 1761:
case 457:
case 42:
case 816:
case 1376:
case 2056:
case 986:
case 404:
case 3935:
case 2737:
case 3695:
case 3640:
case 1335:
case 2606:
case 2334:
case 2516:
case 3954:
case 2424:
case 1725:
case 699:
case 4086:
case 1924:
case 1305:
case 1407:
case 3496:
case 384:
case 1775:
case 2031:
case 1852:
case 2647:
case 2026:
case 3292:
case 3133:
case 2034:
case 75:
case 624:
case 3090:
case 1512:
case 682:
case 951:
case 2918:
case 3272:
case 2401:
case 3407:
case 1121:
case 2241:
case 438:
case 2397:
case 2219:
case 2669:
case 3715:
case 2683:
case 1203:
case 3255:
case 3052:
case 2165:
case 361:
case 2066:
case 2411:
case 646:
case 3135:
case 3908:
case 1411:
case 3968:
case 2170:
case 1510:
case 2308:
case 1588:
case 2988:
case 731:
case 286:
case 3140:
case 737:
case 2421:
case 2973:
case 1603:
case 1340:
case 1166:
case 1508:
case 1423:
case 236:
case 1754:
case 1772:
case 1647:
case 3149:
case 3501:
case 1646:
case 2052:
case 3849:
case 2626:
case 1897:
case 2428:
case 1842:
case 3002:
case 1942:
case 4025:
case 2075:
case 2804:
case 407:
case 2078:
case 1455:
case 2197:
case 1285:
case 3949:
case 957:
case 443:
case 3600:
case 1485:
case 1996:
case 2104:
case 2890:
case 3844:
case 161:
case 1475:
case 2817:
case 700:
case 571:
case 1805:
case 2394:
case 3191:
case 2766:
case 3532:
case 2273:
case 3216:
case 2827:
case 1991:
case 3632:
case 556:
case 3164:
case 3326:
case 681:
case 3426:
case 3360:
case 375:
case 3156:
case 1379:
case 2903:
case 1408:
case 1107:
case 1394:
case 1047:
case 1339:
case 3977:
case 378:
case 3738:
case 2153:
case 1680:
case 512:
case 2879:
case 3510:
case 3152:
case 2016:
case 3076:
case 2328:
case 2402:
case 1820:
case 14:
case 1876:
case 3484:
case 812:
case 2107:
case 3386:
case 5:
case 3460:
case 2534:
case 1320:
case 305:
case 2676:
case 1568:
case 497:
case 3269:
case 1126:
case 1055:
case 3270:
case 3429:
case 3146:
case 3305:
case 1578:
case 2730:
case 3301:
case 1421:
case 2505:
case 1024:
case 327:
case 2268:
case 1309:
case 2904:
case 230:
case 1079:
case 1755:
case 250:
case 3589:
case 588:
case 1649:
case 124:
case 3155:
case 1188:
case 3870:
case 1404:
case 1826:
case 202:
case 2633:
case 2577:
case 1697:
case 2292:
case 1131:
case 1222:
case 3541:
case 1058:
case 3591:
case 475:
case 2999:
case 803:
case 3334:
case 3781:
case 2760:
case 1118:
case 470:
case 69:
case 1625:
case 3919:
case 482:
case 3821:
case 328:
case 3248:
case 580:
case 3045:
case 1988:
case 2584:
case 1718:
case 687:
case 3842:
case 2596:
case 3548:
case 1387:
case 1138:
case 2609:
case 2240:
case 2704:
case 1446:
case 402:
case 1717:
case 1412:
case 3986:
case 2467:
case 898:
case 2113:
case 2450:
case 61:
case 383:
case 1491:
case 3764:
case 2503:
case 2471:
case 1797:
case 1786:
case 2631:
case 310:
case 1053:
case 3006:
case 1315:
case 4019:
case 29:
case 688:
case 755:
case 1920:
case 1559:
case 304:
case 2529:
case 776:
case 1272:
case 3226:
case 677:
case 1216:
case 2781:
case 3782:
case 2236:
case 3745:
case 2111:
case 380:
case 3186:
case 3352:
case 927:
case 2318:
case 3159:
case 1020:
case 3626:
case 2853:
case 2072:
case 3950:
case 2213:
case 3233:
case 2436:
case 1693:
case 3749:
case 529:
case 3354:
case 1691:
case 3944:
case 3154:
case 440:
case 353:
case 1936:
case 2952:
case 2629:
case 2750:
case 2395:
case 1269:
case 3896:
case 3910:
case 3892:
case 4010:
case 3933:
case 2757:
case 2364:
case 2038:
case 2873:
case 2059:
case 1171:
case 1589:
case 1204:
case 2264:
case 2938:
case 3996:
case 2164:
case 2387:
case 2118:
case 275:
case 2872:
case 1395:
case 719:
case 372:
case 1581:
case 4055:
case 3097:
case 3288:
case 1068:
case 3886:
case 326:
case 627:
case 130:
case 2086:
case 342:
case 2302:
case 139:
case 564:
case 3525:
case 1839:
case 595:
case 2522:
case 2168:
case 1698:
case 3446:
case 2701:
case 546:
case 3083:
case 2947:
case 1145:
case 346:
case 1630:
case 1193:
case 2432:
case 258:
case 2042:
case 3452:
case 2896:
case 1100:
case 3676:
case 1181:
case 1410:
case 348:
case 2641:
case 4000:
case 943:
case 2476:
case 633:
case 2598:
case 2403:
case 1023:
case 1009:
case 2363:
case 1458:
case 1694:
case 1815:
case 2810:
case 309:
case 3985:
case 3181:
case 1546:
case 2663:
case 2306:
case 3268:
case 674:
case 1724:
case 2233:
case 4074:
case 2087:
case 33:
case 3604:
case 635:
case 716:
case 2322:
case 1307:
case 3869:
case 904:
case 3627:
case 537:
case 3957:
case 3618:
case 1628:
case 2859:
case 1498:
case 425:
case 2425:
case 1344:
case 21:
case 1792:
case 2209:
case 2301:
case 3708:
case 2360:
case 3948:
case 264:
case 3528:
case 2695:
case 2842:
case 2187:
case 106:
case 2464:
case 45:
case 2069:
case 1088:
case 2485:
case 1880:
case 1555:
case 1310:
case 1835:
case 2659:
case 1439:
case 1278:
case 3403:
case 3727:
case 1147:
case 1442:
case 2102:
case 214:
case 2294:
case 3520:
case 3822:
case 2122:
case 1252:
case 1227:
case 232:
case 1300:
case 1540:
case 2147:
case 696:
case 1434:
case 2608:
case 3039:
case 2375:
case 2370:
case 785:
case 3125:
case 4046:
case 3572:
case 1180:
case 1120:
case 4027:
case 35:
case 3138:
case 1492:
case 290:
case 2867:
case 2022:
case 1545:
case 1502:
case 2854:
case 645:
case 1091:
case 2225:
case 2200:
case 1554:
case 408:
case 660:
case 1011:
case 1622:
case 3817:
case 2218:
case 3120:
case 2442:
case 2540:
case 851:
case 1891:
case 1228:
case 3771:
case 71:
case 3559:
case 3070:
case 1389:
case 200:
case 2163:
case 518:
case 1572:
case 3493:
case 1947:
case 742:
case 3171:
case 459:
case 3068:
case 3313:
case 3058:
case 1614:
case 2247:
case 2562:
case 2542:
case 3307:
case 177:
case 3373:
case 805:
case 4073:
case 2815:
case 3569:
case 442:
case 3161:
case 2734:
case 859:
case 167:
case 717:
case 912:
case 3550:
case 2743:
case 2981:
case 1424:
case 981:
case 607:
case 3127:
case 3546:
case 609:
case 750:
case 2290:
case 3857:
case 1123:
case 120:
case 854:
case 103:
case 1150:
case 2731:
case 1366:
case 2148:
case 1836:
case 3440:
case 2752:
case 3316:
case 3351:
case 79:
case 2935:
case 3089:
case 410:
case 3863:
case 2905:
case 3535:
case 2243:
case 1896:
case 997:
case 2826:
case 433:
case 1631:
case 47:
case 2646:
case 2176:
case 1070:
case 1493:
case 478:
case 3412:
case 2976:
case 463:
case 1863:
case 3852:
case 3202:
case 2837:
case 886:
case 1156:
case 1830:
case 729:
case 3177:
case 1262:
case 640:
case 183:
case 2338:
case 1684:
case 769:
case 3489:
case 2678:
case 3722:
case 686:
case 1806:
case 794:
case 1971:
case 2657:
case 1333:
case 269:
case 1865:
case 1057:
case 1905:
case 1154:
case 2083:
case 1795:
case 3012:
case 3665:
case 376:
case 2489:
case 1085:
case 3401:
case 3951:
case 623:
case 3032:
case 1782:
case 3029:
case 3958:
case 261:
case 2346:
case 3245:
case 1342:
case 536:
case 691:
case 2131:
case 1553:
case 3579:
case 1384:
case 1980:
case 3967:
case 1137:
case 1989:
case 4044:
case 2823:
case 3777:
case 1270:
case 2772:
case 878:
case 3023:
case 288:
case 3603:
case 3905:
case 3271:
case 4012:
case 2098:
case 910:
case 788:
case 1059:
case 322:
case 1187:
case 1445:
case 108:
case 364:
case 2435:
case 3706:
case 2407:
case 2205:
case 3480:
case 2876:
case 2860:
case 3447:
case 1610:
case 2357:
case 4045:
case 649:
case 3053:
case 1219:
case 2062:
case 733:
case 2191:
case 1090:
case 1273:
case 2171:
case 3071:
case 3779:
case 2894:
case 1801:
case 1321:
case 1679:
case 3122:
case 2960:
case 1922:
case 3565:
case 2096:
case 330:
case 3404:
case 3725:
case 3092:
case 1742:
case 2887:
case 1084:
case 1016:
case 1712:
case 2520:
case 25:
case 3741:
case 268:
case 163:
case 1976:
case 3831:
case 848:
case 3577:
case 1784:
case 3511:
case 675:
case 2109:
case 3733:
case 2473:
case 2238:
case 2000:
case 1207:
case 2687:
case 1573:
case 3391:
case 1659:
case 225:
case 3730:
case 3668:
case 1750:
case 1082:
case 468:
case 388:
case 1560:
case 2094:
case 1076:
case 941:
case 3664:
case 1225:
case 913:
case 1879:
case 2621:
case 217:
case 280:
case 3515:
case 852:
case 2463:
case 924:
case 1757:
case 950:
case 654:
case 2079:
case 3139:
case 2897:
case 1316:
case 592:
case 3757:
case 19:
case 2162:
case 3430:
case 3282:
case 778:
case 3413:
case 2378:
case 3656:
case 632:
case 2791:
case 1513:
case 2414:
case 1477:
case 1488:
case 3620:
case 2018:
case 259:
case 1739:
case 455:
case 2868:
case 3276:
case 1155:
case 1819:
case 3422:
case 1284:
case 3455:
case 1083:
case 589:
case 3973:
case 2941:
case 488:
case 1737:
case 3324:
case 3832:
case 978:
case 2175:
case 3566:
case 2684:
case 1970:
case 240:
case 1814:
case 937:
case 2686:
case 3889:
case 2358:
case 3810:
case 3773:
case 1317:
case 3256:
case 2796:
case 2782:
case 3636:
case 2786:
case 3065:
case 1803:
case 3174:
case 143:
case 2949:
case 2351:
case 1893:
case 2985:
case 3219:
case 2616:
case 659:
case 2910:
case 766:
case 3613:
case 1882:
case 4060:
case 2581:
case 2012:
case 3843:
case 2875:
case 277:
case 3461:
case 142:
case 2323:
case 1274:
case 2861:
case 3020:
case 278:
case 1889:
case 3464:
case 1027:
case 265:
case 4070:
case 3984:
case 683:
case 473:
case 1551:
case 3624:
case 2462:
case 3366:
case 928:
case 3375:
case 1328:
case 837:
case 862:
case 663:
case 1129:
case 1456:
case 1768:
case 552:
case 1148:
case 1002:
case 3322:
case 2386:
case 3961:
case 2388:
case 3827:
case 2284:
case 104:
case 401:
case 2959:
case 137:
case 3073:
case 533:
case 1462:
case 3445:
case 2961:
case 323:
case 2591:
case 110:
case 1800:
case 1453:
case 4040:
case 3448:
case 2967:
case 1314:
case 2501:
case 1619:
case 1022:
case 2883:
case 1323:
case 2551:
case 1132:
case 2372:
case 3005:
case 65:
case 2321:
case 2210:
case 517:
case 604:
case 111:
case 1140:
case 2145:
case 2531:
case 2932:
case 2954:
case 15:
case 1067:
case 3616:
case 1655:
case 60:
case 2097:
case 3701:
case 893:
case 2182:
case 2452:
case 422:
case 1780:
case 3497:
case 2788:
case 1683:
case 2041:
case 525:
case 744:
case 777:
case 1850:
case 3927:
case 3365:
case 3658:
case 3231:
case 2924:
case 74:
case 1692:
case 2618:
case 922:
case 2183:
case 1251:
case 3382:
case 4061:
case 2108:
case 720:
case 3105:
case 2776:
case 703:
case 2587:
case 3596:
case 2423:
case 4029:
case 2106:
case 182:
case 1661:
case 2966:
case 3019:
case 3647:
case 2552:
case 4032:
case 1253:
case 1848:
case 3554:
case 796:
case 1771:
case 2925:
case 1983:
case 3145:
case 3188:
case 58:
case 1956:
case 1073:
case 3673:
case 3298:
case 381:
case 734:
case 721:
case 3157:
case 2446:
case 991:
case 1311:
case 99:
case 37:
case 793:
case 1730:
case 1538:
case 2806:
case 3031:
case 1415:
case 740:
case 1833:
case 1990:
case 2333:
case 271:
case 89:
case 3196:
case 91:
case 1556:
case 2071:
case 2203:
case 1189:
case 1235:
case 2177:
case 3408:
case 1608:
case 119:
case 1461:
case 1198:
case 2:
case 3953:
case 1167:
case 3699:
case 521:
case 3608:
case 2662:
case 3478:
case 771:
case 3522:
case 661:
case 157:
case 3459:
case 3598:
case 4031:
case 2377:
case 472:
case 1443:
case 3079:
case 960:
case 1051:
case 2820:
case 2558:
case 3739:
case 2313:
case 2159:
case 3144:
case 1122:
case 3704:
case 195:
case 162:
case 4005:
case 2865:
case 3211:
case 2530:
case 491:
case 2451:
case 2215:
case 2077:
case 673:
case 1509:
case 1435:
case 1104:
case 2214:
case 563:
case 3257:
case 4016:
case 2846:
case 1624:
case 940:
case 2232:
case 50:
case 3785:
case 256:
case 1484:
case 1841:
case 1374:
case 3597:
case 689:
case 2877:
case 1353:
case 3561:
case 3420:
case 2603:
case 2576:
case 1158:
case 3103:
case 3009:
case 3891:
case 601:
case 1731:
case 1799:
case 2437:
case 685:
case 1469:
case 1318:
case 4092:
case 2160:
case 753:
case 1900:
case 493:
case 694:
case 2211:
case 2886:
case 3653:
case 2824:
case 1392:
case 4013:
case 3137:
case 393:
case 3574:
case 1325:
case 817:
case 3906:
case 923:
case 2475:
case 289:
case 8:
case 135:
case 3607:
case 2754:
case 2833:
case 813:
case 73:
case 2074:
case 2692:
case 611:
case 915:
case 2060:
case 648:
case 1888:
case 3503:
case 3907:
case 2139:
case 905:
case 783:
case 2487:
case 1473:
case 2186:
case 3372:
case 1358:
case 890:
case 1209:
case 1391:
case 1385:
case 2547:
case 3542:
case 2315:
case 1802:
case 2048:
case 2017:
case 1507:
case 191:
case 1798:
case 1247:
case 2672:
case 4093:
case 88:
case 522:
case 3747:
case 665:
case 993:
case 735:
case 1486:
case 3911:
case 3648:
case 918:
case 3524:
case 1955:
case 84:
case 1586:
case 916:
case 3099:
case 3946:
case 3909:
case 1500:
case 3898:
case 2201:
case 1702:
case 109:
case 929:
case 3940:
case 2337:
case 169:
case 1594:
case 959:
case 3942:
case 3571:
case 281:
case 2656:
case 3505:
case 3367:
case 2080:
case 3434:
case 2819:
case 444:
case 2305:
case 2652:
case 1634:
case 1651:
case 2919:
case 3517:
case 2511:
case 1054:
case 127:
case 818:
case 1052:
case 2564:
case 3731:
case 1066:
case 1255:
case 2780:
case 245:
case 2972:
case 707:
case 3703:
case 1617:
case 3769:
case 3295:
case 93:
case 629:
case 1354:
case 770:
case 1822:
case 3853:
case 1182:
case 3502:
case 3660:
case 3176:
case 431:
case 2417:
case 2456:
case 1014:
case 321:
case 1355:
case 2697:
case 1677:
case 1997:
case 2384:
case 2765:
case 3168:
case 3890:
case 1175:
case 3813:
case 3277:
case 996:
case 3014:
case 977:
case 1239:
case 247:
case 7:
case 728:
case 2978:
case 2430:
case 4084:
case 66:
case 3795:
case 961:
case 806:
case 2640:
case 3631:
case 3518:
case 676:
case 968:
case 1520:
case 1565:
case 2256:
case 2753:
case 3278:
case 906:
case 9:
case 844:
case 2610:
case 1327:
case 2255:
case 185:
case 3378:
case 3265:
case 3409:
case 2989:
case 2001:
case 772:
case 3713:
case 205:
case 1923:
case 2112:
case 3808:
case 739:
case 568:
case 711:
case 2851:
case 1656:
case 1233:
case 1277:
case 3274:
case 3670:
case 2091:
case 2590:
case 2119:
case 3815:
case 2158:
case 1400:
case 4077:
case 57:
case 3490:
case 823:
case 1361:
case 1950:
case 2105:
case 1547:
case 2480:
case 301:
case 3671:
case 1343:
case 208:
case 2881:
case 1823:
case 585:
case 1183:
case 273:
case 746:
case 26:
case 4081:
case 3533:
case 148:
case 193:
case 34:
case 4082:
case 255:
case 3585:
case 1494:
case 3893:
case 2554:
case 363:
case 2458:
case 3405:
case 3289:
case 1758:
case 821:
case 2588:
case 298:
case 3047:
case 2281:
case 2053:
case 2134:
case 3358:
case 2802:
case 597:
case 4018:
case 1263:
case 1377:
case 1978:
case 10:
case 398:
case 3628:
case 2383:
case 1902:
case 495:
case 3879:
case 559:
case 1113:
case 3612:
case 1095:
case 3030:
case 3237:
case 3332:
case 2192:
case 3463:
case 3833:
case 2556:
case 333:
case 253:
case 615:
case 849:
case 3768:
case 2518:
case 881:
case 216:
case 466:
case 2172:
case 105:
case 1177:
case 3983:
case 338:
case 2155:
case 3469:
case 958:
case 1501:
case 2221:
case 3252:
case 3118:
case 1007:
case 1790:
case 718:
case 2070:
case 2916:
case 2223:
case 790:
case 204:
case 3534:
case 3599:
case 145:
case 1426:
case 129:
case 3306:
case 3959:
case 2653:
case 3036:
case 3592:
case 2553:
case 3393:
case 2984:
case 1241:
case 1767:
case 2298:
case 138:
case 2379:
case 1341:
case 3694:
case 2974:
case 113:
case 3975:
case 3189:
case 3003:
case 460:
case 2644:
case 1662:
case 2638:
case 1452:
case 2557:
case 1099:
case 713:
case 3427:
case 2254:
case 2675:
case 3998:
case 2990:
case 1874:
case 2850:
case 2714:
case 751:
case 1503:
case 252:
case 2835:
case 2724:
case 3519:
case 181:
case 2666:
case 1386:
case 2746:
case 4034:
case 3192:
case 899:
case 3659:
case 165:
case 1689:
case 2723:
case 2325:
case 1096:
case 2682:
case 107:
case 1726:
case 1770:
case 1575:
case 2693:
case 822:
case 3702:
case 4007:
case 3179:
case 3758:
case 3685:
case 1995:
case 2852:
case 781:
case 2369:
case 490:
case 3912:
case 4054:
case 3830:
case 566:
case 1420:
case 4024:
case 3837:
case 1375:
case 2541:
case 2252:
case 879:
case 1925:
case 2265:
case 471:
case 2392:
case 3457:
case 1812:
case 2433:
case 1654:
case 2769:
case 3451:
case 2523:
case 1237:
case 213:
case 3760:
case 550:
case 1319:
case 2622:
case 293:
case 1968:
case 3562:
case 1236:
case 355:
case 1041:
case 2412:
case 2257:
case 1687:
case 1349:
case 3116:
case 939:
case 3130:
case 1837:
case 1482:
case 931:
case 3583:
case 270:
case 1931:
case 3667:
case 1748:
case 2549:
case 2327:
case 3416:
case 1985:
case 1723:
case 62:
case 1403:
case 998:
case 394:
case 3763:
case 1312:
case 2908:
case 1878:
case 144:
case 1605:
case 1427:
case 1168:
case 2316:
case 1291:
case 3885:
case 2005:
case 2228:
case 542:
case 2836:
case 586:
case 3096:
case 3082:
case 901:
case 1371:
case 334:
case 30:
case 644:
case 3966:
case 2013:
case 2736:
case 1763:
case 452:
case 3327:
case 2128:
case 1441:
case 486:
case 285:
case 3498:
case 2506:
case 756:
case 4011:
case 1940:
case 1849:
case 930:
case 914:
case 1729:
case 909:
case 2130:
case 1984:
case 3308:
case 2019:
case 2937:
case 96:
case 2507:
case 3172:
case 2242:
case 3283:
case 3147:
case 831:
case 3124:
case 3819:
case 671:
case 3173:
case 2814:
case 267:
case 3697:
case 78:
case 3128:
case 303:
case 1658:
case 2293:
case 3902:
case 3521:
case 3241:
case 2365:
case 787:
case 1480:
case 2207:
case 748:
case 500:
case 1643:
case 804:
case 159:
case 3622:
case 12:
case 3860:
case 2698:
case 3586:
case 3655:
case 314:
case 2805:
case 541:
case 995:
case 2655:
case 2912:
case 1202:
case 2968:
case 3778:
case 279:
case 266:
case 2906:
case 956:
case 1416:
case 896:
case 1541:
case 4015:
case 263:
case 235:
case 2129:
case 1652:
case 3871:
case 826:
case 210:
case 112:
case 2637:
case 583:
case 4006:
case 3999:
case 619:
case 3945:
case 23:
case 1115:
case 3772:
case 2021:
case 1779:
case 2619:
case 2601:
case 1467:
case 1604:
case 1276:
case 1564:
case 1703:
case 3468:
case 2995:
case 3877:
case 3897:
case 2234:
case 67:
case 2519:
case 2229:
case 1217:
case 1657:
case 318:
case 3587:
case 925:
case 2561:
case 3876:
case 2527:
case 2987:
case 653:
case 842:
case 2838:
case 2934:
case 3588:
case 2194:
case 4068:
case 3238:
case 3828:
case 1856:
case 2310:
case 2169:
case 1101:
case 3394:
case 1454:
case 1675:
case 3376:
case 4:
case 1612:
case 3635:
case 1234:
case 3369:
case 3873:
case 1735:
case 3972:
case 68:
case 2864:
case 745:
case 3187:
case 3318:
case 2336:
case 2936:
case 3025:
case 2196:
case 1437:
case 690:
case 3397:
case 1218:
case 634:
case 3580:
case 1939:
case 2975:
case 3719:
case 3472:
case 784:
case 515:
case 1752:
case 2681:
case 1039:
case 2335:
case 354:
case 3801:
case 1078:
case 2761:
case 2566:
case 188:
case 2920:
case 551:
case 843:
case 17:
case 479:
case 966:
case 1791:
case 569:
case 2728:
case 3539:
case 1197:
case 3721:
case 532:
case 2889:
case 565:
case 3929:
case 3770:
case 2355:
case 2767:
case 3529:
case 1448:
case 1720:
case 2349:
case 593:
case 3858:
case 2088:
case 3467:
case 2624:
case 3987:
case 2278:
case 1048:
case 1576:
case 3866:
case 1184:
case 797:
case 1640:
case 1843:
case 1028:
case 43:
case 2178:
case 982:
case 369:
case 3109:
case 819:
case 2739:
case 2691:
case 833:
case 3523:
case 1616:
case 3329:
case 1296:
case 1601:
case 52:
case 2085:
case 1701:
case 754:
case 3750:
case 3540:
case 3570:
case 2785:
case 502:
case 3072:
case 3355:
case 3642:
case 2272:
case 2359:
case 4002:
case 1072:
case 3874:
case 233:
case 3454:
case 3417:
case 1172:
case 1383:
case 3500:
case 1577:
case 406:
case 724:
case 1663:
case 3581:
case 2748:
case 1911:
case 2367:
case 3556:
case 1838:
case 2607:
case 2444:
case 1164:
case 2993:
case 1620:
case 1914:
case 1855:
case 292:
case 2741:
case 4062:
case 795:
case 1597:
case 1470:
case 3547:
case 171:
case 2948:
case 2409:
case 1938:
case 2166:
case 1539:
case 2371:
case 3955:
case 357:
case 570:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1682208001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,];
var gg_b = "1682204401/";

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
