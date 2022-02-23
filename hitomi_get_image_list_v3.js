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
case 3613:
case 1089:
case 3177:
case 199:
case 566:
case 523:
case 3013:
case 1437:
case 1363:
case 1082:
case 308:
case 3608:
case 3419:
case 2084:
case 2179:
case 679:
case 1228:
case 54:
case 3113:
case 3582:
case 3115:
case 445:
case 1628:
case 3014:
case 2543:
case 916:
case 2189:
case 497:
case 3864:
case 883:
case 878:
case 3587:
case 3290:
case 75:
case 3383:
case 504:
case 1633:
case 351:
case 2682:
case 1744:
case 3360:
case 3723:
case 966:
case 459:
case 2770:
case 3577:
case 4016:
case 1092:
case 3597:
case 1981:
case 1194:
case 3654:
case 2079:
case 1906:
case 1743:
case 2752:
case 3019:
case 3168:
case 860:
case 2106:
case 2031:
case 4043:
case 3521:
case 3093:
case 400:
case 2840:
case 14:
case 2284:
case 381:
case 498:
case 421:
case 368:
case 3486:
case 1013:
case 3929:
case 3069:
case 364:
case 648:
case 1900:
case 528:
case 2622:
case 1380:
case 1045:
case 2112:
case 2620:
case 2167:
case 2203:
case 3392:
case 101:
case 1344:
case 3:
case 1204:
case 3333:
case 2165:
case 1272:
case 3958:
case 4008:
case 438:
case 1561:
case 3541:
case 1639:
case 3218:
case 2615:
case 2982:
case 3788:
case 3240:
case 1837:
case 2688:
case 3932:
case 3296:
case 2785:
case 3779:
case 1592:
case 749:
case 3965:
case 3197:
case 3035:
case 3590:
case 3638:
case 3591:
case 36:
case 3090:
case 3318:
case 1849:
case 1393:
case 247:
case 2216:
case 2813:
case 3759:
case 3699:
case 2571:
case 3636:
case 3173:
case 1898:
case 1103:
case 1890:
case 3918:
case 2302:
case 282:
case 908:
case 2505:
case 3192:
case 66:
case 785:
case 1910:
case 1181:
case 229:
case 1557:
case 3223:
case 907:
case 2442:
case 3461:
case 515:
case 2942:
case 1007:
case 3347:
case 1980:
case 2573:
case 2163:
case 2917:
case 3773:
case 350:
case 3259:
case 1777:
case 857:
case 1424:
case 2204:
case 1880:
case 1672:
case 3096:
case 1422:
case 1517:
case 1828:
case 3778:
case 2451:
case 2859:
case 1088:
case 3415:
case 791:
case 2540:
case 2092:
case 3645:
case 3556:
case 284:
case 1605:
case 3585:
case 812:
case 1360:
case 3766:
case 371:
case 243:
case 3255:
case 2663:
case 3990:
case 449:
case 268:
case 2245:
case 2124:
case 4010:
case 3801:
case 2401:
case 2938:
case 1507:
case 1936:
case 1930:
case 3094:
case 3097:
case 1126:
case 1436:
case 2276:
case 2584:
case 3413:
case 1687:
case 3368:
case 1134:
case 3446:
case 3589:
case 115:
case 1465:
case 4019:
case 1873:
case 3802:
case 2725:
case 3678:
case 3261:
case 1856:
case 3156:
case 3689:
case 3403:
case 3153:
case 4041:
case 161:
case 3506:
case 2951:
case 3089:
case 2044:
case 2878:
case 2382:
case 2457:
case 2373:
case 705:
case 892:
case 3882:
case 4012:
case 577:
case 423:
case 2613:
case 3527:
case 1351:
case 2507:
case 1159:
case 1545:
case 2698:
case 534:
case 2339:
case 1935:
case 1010:
case 3137:
case 1074:
case 1425:
case 2407:
case 3106:
case 3159:
case 3272:
case 871:
case 896:
case 3189:
case 31:
case 1950:
case 525:
case 699:
case 3393:
case 565:
case 499:
case 1449:
case 2372:
case 822:
case 1375:
case 1197:
case 274:
case 2395:
case 2467:
case 178:
case 253:
case 1109:
case 2288:
case 1528:
case 389:
case 2465:
case 1461:
case 1196:
case 1921:
case 2755:
case 3221:
case 478:
case 3765:
case 3444:
case 2599:
case 1806:
case 1882:
case 298:
case 1180:
case 3144:
case 2417:
case 1858:
case 3317:
case 824:
case 3299:
case 3662:
case 2477:
case 782:
case 2213:
case 3311:
case 2904:
case 2713:
case 2568:
case 2386:
case 2450:
case 2738:
case 2010:
case 3349:
case 1610:
case 1046:
case 1370:
case 1745:
case 3129:
case 201:
case 3497:
case 126:
case 3925:
case 328:
case 2047:
case 856:
case 192:
case 1530:
case 3466:
case 1083:
case 198:
case 395:
case 2368:
case 3243:
case 853:
case 1417:
case 166:
case 3875:
case 1966:
case 3927:
case 182:
case 2127:
case 2100:
case 719:
case 3416:
case 233:
case 1359:
case 1129:
case 2607:
case 235:
case 3946:
case 1450:
case 2869:
case 2379:
case 3320:
case 1660:
case 2814:
case 2689:
case 778:
case 2603:
case 553:
case 1673:
case 949:
case 343:
case 2129:
case 1162:
case 2150:
case 412:
case 2759:
case 2131:
case 129:
case 3724:
case 753:
case 3799:
case 701:
case 607:
case 2344:
case 2660:
case 3307:
case 3816:
case 3017:
case 3697:
case 2307:
case 2556:
case 691:
case 4077:
case 1353:
case 85:
case 1030:
case 609:
case 1209:
case 2767:
case 2331:
case 2566:
case 409:
case 2593:
case 2678:
case 1840:
case 1923:
case 829:
case 3195:
case 3687:
case 208:
case 760:
case 2456:
case 176:
case 1976:
case 3650:
case 2003:
case 716:
case 1568:
case 3533:
case 1638:
case 1901:
case 2408:
case 1451:
case 3810:
case 3670:
case 2745:
case 1195:
case 952:
case 1944:
case 3921:
case 4026:
case 735:
case 2882:
case 2906:
case 4004:
case 1868:
case 1736:
case 4017:
case 3537:
case 568:
case 571:
case 2117:
case 1668:
case 1684:
case 814:
case 3394:
case 4062:
case 427:
case 1796:
case 74:
case 1587:
case 248:
case 26:
case 664:
case 2946:
case 45:
case 3635:
case 1818:
case 3316:
case 312:
case 1651:
case 304:
case 369:
case 3584:
case 1807:
case 1787:
case 3424:
case 850:
case 2105:
case 2523:
case 1539:
case 1242:
case 2562:
case 2601:
case 806:
case 1131:
case 2499:
case 2485:
case 1614:
case 2328:
case 696:
case 2493:
case 3073:
case 4033:
case 3869:
case 665:
case 426:
case 1117:
case 560:
case 1432:
case 3553:
case 1815:
case 1903:
case 2286:
case 1059:
case 1000:
case 2971:
case 1564:
case 414:
case 1538:
case 1608:
case 252:
case 1665:
case 309:
case 1459:
case 817:
case 974:
case 743:
case 2608:
case 2867:
case 2999:
case 2741:
case 690:
case 1118:
case 100:
case 3229:
case 1467:
case 3023:
case 3688:
case 1221:
case 3052:
case 885:
case 2064:
case 2438:
case 808:
case 2263:
case 3355:
case 2337:
case 1110:
case 3385:
case 1033:
case 1151:
case 2320:
case 1116:
case 2614:
case 2925:
case 244:
case 1522:
case 803:
case 2436:
case 188:
case 959:
case 3640:
case 3886:
case 2021:
case 2272:
case 453:
case 2091:
case 1578:
case 1372:
case 1979:
case 1214:
case 1470:
case 3857:
case 2762:
case 3154:
case 1908:
case 3205:
case 3964:
case 121:
case 2008:
case 877:
case 642:
case 1139:
case 2821:
case 2885:
case 3398:
case 3219:
case 1295:
case 2128:
case 1222:
case 3974:
case 3780:
case 2794:
case 3042:
case 2115:
case 3064:
case 2690:
case 2564:
case 125:
case 3762:
case 1254:
case 938:
case 3998:
case 1406:
case 1520:
case 2691:
case 864:
case 2483:
case 1166:
case 717:
case 352:
case 1104:
case 2627:
case 1525:
case 3325:
case 254:
case 2298:
case 1621:
case 1350:
case 1132:
case 3408:
case 3828:
case 2511:
case 1270:
case 3068:
case 4090:
case 673:
case 3607:
case 3525:
case 2267:
case 2744:
case 1343:
case 288:
case 798:
case 223:
case 651:
case 3991:
case 307:
case 1718:
case 3284:
case 2341:
case 1153:
case 1284:
case 3659:
case 363:
case 1549:
case 3260:
case 3651:
case 695:
case 2962:
case 265:
case 2371:
case 2137:
case 830:
case 2325:
case 538:
case 3961:
case 1899:
case 2435:
case 1853:
case 3438:
case 1067:
case 2756:
case 3210:
case 1239:
case 1141:
case 2708:
case 1290:
case 657:
case 2075:
case 3476:
case 358:
case 1994:
case 1971:
case 2830:
case 3010:
case 3728:
case 2444:
case 2336:
case 535:
case 3102:
case 3568:
case 2728:
case 958:
case 3609:
case 2883:
case 3704:
case 3435:
case 2240:
case 590:
case 2977:
case 2644:
case 1133:
case 4081:
case 2919:
case 320:
case 3729:
case 2586:
case 4018:
case 770:
case 2765:
case 1790:
case 3234:
case 1682:
case 3610:
case 473:
case 2414:
case 3922:
case 486:
case 3838:
case 3348:
case 3959:
case 2932:
case 2255:
case 394:
case 2461:
case 2657:
case 55:
case 1019:
case 1510:
case 184:
case 2626:
case 3719:
case 293:
case 240:
case 3353:
case 3600:
case 2712:
case 2338:
case 2498:
case 2097:
case 3344:
case 1999:
case 2367:
case 4:
case 2819:
case 3271:
case 305:
case 2489:
case 945:
case 1571:
case 1385:
case 1598:
case 3727:
case 467:
case 4082:
case 3725:
case 457:
case 1932:
case 195:
case 3594:
case 3605:
case 3852:
case 3978:
case 3062:
case 3872:
case 2891:
case 1177:
case 2356:
case 213:
case 1624:
case 2396:
case 2458:
case 128:
case 3328:
case 3363:
case 3909:
case 3060:
case 3981:
case 3305:
case 1991:
case 3377:
case 3047:
case 3842:
case 1907:
case 2554:
case 1391:
case 280:
case 1860:
case 1146:
case 2086:
case 1911:
case 2684:
case 3212:
case 955:
case 1190:
case 2168:
case 936:
case 251:
case 3141:
case 1201:
case 788:
case 1801:
case 3781:
case 832:
case 172:
case 334:
case 3475:
case 2949:
case 2306:
case 2017:
case 1872:
case 3075:
case 1004:
case 1997:
case 333:
case 131:
case 463:
case 3708:
case 894:
case 1707:
case 1331:
case 3912:
case 756:
case 3273:
case 3427:
case 1426:
case 2265:
case 2935:
case 3063:
case 1662:
case 1042:
case 2164:
case 3566:
case 3975:
case 1594:
case 838:
case 455:
case 928:
case 3649:
case 1582:
case 130:
case 627:
case 1150:
case 2:
case 2718:
case 1365:
case 2822:
case 3827:
case 4034:
case 2455:
case 1845:
case 1078:
case 3295:
case 3709:
case 370:
case 781:
case 586:
case 3968:
case 3084:
case 3569:
case 3578:
case 2134:
case 3489:
case 286:
case 2965:
case 1367:
case 20:
case 1313:
case 1036:
case 872:
case 2311:
case 653:
case 1034:
case 2074:
case 2900:
case 4006:
case 1183:
case 3275:
case 3095:
case 357:
case 531:
case 1835:
case 3920:
case 96:
case 1541:
case 1251:
case 3119:
case 3352:
case 3431:
case 2377:
case 56:
case 273:
case 868:
case 1206:
case 3915:
case 3558:
case 1709:
case 2269:
case 711:
case 2873:
case 3924:
case 3890:
case 3606:
case 1028:
case 3056:
case 1446:
case 3891:
case 2176:
case 216:
case 2798:
case 3623:
case 3370:
case 1240:
case 3716:
case 713:
case 2322:
case 136:
case 2669:
case 58:
case 3233:
case 2820:
case 86:
case 1769:
case 2970:
case 2012:
case 344:
case 1577:
case 3449:
case 1025:
case 1199:
case 794:
case 3081:
case 714:
case 43:
case 3443:
case 2842:
case 599:
case 144:
case 2888:
case 1212:
case 416:
case 2696:
case 3351:
case 2733:
case 2370:
case 2335:
case 623:
case 1708:
case 3873:
case 2474:
case 2646:
case 3931:
case 464:
case 1804:
case 4074:
case 1847:
case 3602:
case 2863:
case 2496:
case 3903:
case 3133:
case 329:
case 1825:
case 1931:
case 3963:
case 3629:
case 209:
case 2492:
case 3806:
case 256:
case 1652:
case 3390:
case 1471:
case 141:
case 1876:
case 2730:
case 1256:
case 3107:
case 1055:
case 289:
case 3917:
case 2856:
case 1472:
case 2529:
case 3935:
case 2330:
case 674:
case 715:
case 2397:
case 1802:
case 603:
case 150:
case 3540:
case 204:
case 1305:
case 1283:
case 2406:
case 1001:
case 3330:
case 336:
case 3559:
case 1547:
case 3547:
case 3749:
case 505:
case 4085:
case 1863:
case 783:
case 2981:
case 1296:
case 3563:
case 3241:
case 1324:
case 3372:
case 186:
case 232:
case 1189:
case 482:
case 3183:
case 52:
case 2606:
case 2099:
case 520:
case 2922:
case 3694:
case 986:
case 684:
case 3487:
case 678:
case 1798:
case 2845:
case 1066:
case 840:
case 1488:
case 1068:
case 3157:
case 3718:
case 1099:
case 2352:
case 3070:
case 596:
case 1754:
case 3555:
case 140:
case 72:
case 4089:
case 111:
case 1721:
case 2210:
case 2549:
case 2088:
case 24:
case 1094:
case 2353:
case 3999:
case 1620:
case 2803:
case 2598:
case 2746:
case 3960:
case 558:
case 999:
case 2563:
case 1740:
case 2875:
case 4054:
case 1218:
case 3251:
case 1681:
case 173:
case 640:
case 3565:
case 616:
case 2102:
case 582:
case 2763:
case 3395:
case 3867:
case 3939:
case 1398:
case 1555:
case 767:
case 1362:
case 2939:
case 676:
case 2036:
case 3905:
case 2791:
case 439:
case 326:
case 2956:
case 149:
case 2220:
case 1357:
case 2532:
case 3914:
case 3712:
case 295:
case 2475:
case 81:
case 2061:
case 2806:
case 1238:
case 1737:
case 3472:
case 1827:
case 2273:
case 874:
case 3365:
case 3754:
case 2709:
case 1235:
case 2023:
case 768:
case 1404:
case 834:
case 3859:
case 1540:
case 3705:
case 3789:
case 306:
case 3945:
case 1325:
case 1719:
case 2230:
case 3884:
case 539:
case 1573:
case 3309:
case 1524:
case 4084:
case 1824:
case 1253:
case 2145:
case 594:
case 3519:
case 4028:
case 608:
case 543:
case 3879:
case 2053:
case 521:
case 876:
case 965:
case 1597:
case 1107:
case 1663:
case 3302:
case 2357:
case 384:
case 410:
case 1039:
case 2912:
case 2494:
case 2139:
case 1258:
case 2256:
case 948:
case 214:
case 3169:
case 2735:
case 3139:
case 2894:
case 2376:
case 1231:
case 875:
case 1287:
case 2809:
case 686:
case 2364:
case 975:
case 167:
case 2334:
case 685:
case 2666:
case 3733:
case 1288:
case 2314:
case 970:
case 1279:
case 3423:
case 3086:
case 2125:
case 3310:
case 3714:
case 2590:
case 544:
case 636:
case 2369:
case 2807:
case 644:
case 1830:
case 3167:
case 2545:
case 3211:
case 3130:
case 628:
case 649:
case 2764:
case 3531:
case 3011:
case 3092:
case 1836:
case 2141:
case 1226:
case 2780:
case 1282:
case 488:
case 3112:
case 2659:
case 218:
case 1895:
case 3123:
case 3730:
case 3336:
case 1247:
case 1550:
case 3738:
case 18:
case 2868:
case 2980:
case 3420:
case 3807:
case 929:
case 3570:
case 50:
case 3202:
case 2058:
case 1241:
case 13:
case 1008:
case 2028:
case 913:
case 2257:
case 2915:
case 2065:
case 2381:
case 3846:
case 3696:
case 937:
case 1252:
case 2118:
case 2716:
case 1321:
case 919:
case 1974:
case 152:
case 862:
case 1506:
case 537:
case 1397:
case 3517:
case 2865:
case 2662:
case 2542:
case 1657:
case 841:
case 2720:
case 2926:
case 3843:
case 1774:
case 2006:
case 1354:
case 259:
case 2433:
case 2656:
case 2121:
case 1347:
case 847:
case 1462:
case 3916:
case 1635:
case 1838:
case 1626:
case 592:
case 967:
case 1826:
case 2052:
case 2988:
case 3661:
case 82:
case 127:
case 3174:
case 706:
case 3201:
case 2153:
case 2243:
case 1589:
case 1330:
case 1987:
case 1644:
case 635:
case 3849:
case 4052:
case 2950:
case 1975:
case 3265:
case 3439:
case 1485:
case 1128:
case 3072:
case 3769:
case 4060:
case 1213:
case 925:
case 2185:
case 2349:
case 2071:
case 1233:
case 4093:
case 28:
case 693:
case 1676:
case 1875:
case 278:
case 1889:
case 2076:
case 2537:
case 3015:
case 2650:
case 983:
case 614:
case 3213:
case 3434:
case 1264:
case 659:
case 1710:
case 4059:
case 2430:
case 1939:
case 1943:
case 3546:
case 1304:
case 3280:
case 2519:
case 2866:
case 226:
case 377:
case 2521:
case 858:
case 1733:
case 406:
case 1203:
case 3281:
case 2416:
case 3677:
case 1:
case 3692:
case 1479:
case 2680:
case 3319:
case 721:
case 1458:
case 1865:
case 2082:
case 4042:
case 3399:
case 116:
case 750:
case 3482:
case 3896:
case 3300:
case 2087:
case 956:
case 1237:
case 2881:
case 2802:
case 3865:
case 196:
case 3954:
case 3256:
case 1631:
case 725:
case 1703:
case 1985:
case 3976:
case 3430:
case 2486:
case 1225:
case 1154:
case 1079:
case 1266:
case 174:
case 1855:
case 3198:
case 3876:
case 2901:
case 2109:
case 245:
case 943:
case 3756:
case 2212:
case 962:
case 2136:
case 1998:
case 3892:
case 3282:
case 2544:
case 3331:
case 3002:
case 2570:
case 1140:
case 2202:
case 2345:
case 189:
case 2941:
case 3033:
case 2111:
case 3518:
case 3339:
case 3203:
case 1381:
case 3586:
case 1463:
case 2552:
case 109:
case 680:
case 1784:
case 2972:
case 581:
case 1106:
case 2404:
case 4040:
case 1648:
case 262:
case 1072:
case 2113:
case 2154:
case 2877:
case 914:
case 4064:
case 2750:
case 2043:
case 2655:
case 291:
case 2260:
case 3498:
case 3805:
case 2954:
case 1469:
case 3226:
case 2318:
case 1688:
case 3796:
case 3856:
case 1630:
case 1202:
case 3267:
case 2215:
case 3841:
case 3405:
case 904:
case 1143:
case 991:
case 1448:
case 1017:
case 1098:
case 2736:
case 294:
case 3732:
case 1280:
case 1249:
case 1526:
case 4068:
case 4075:
case 837:
case 1405:
case 3948:
case 1770:
case 148:
case 387:
case 3793:
case 2940:
case 1487:
case 210:
case 3837:
case 169:
case 3224:
case 3291:
case 2844:
case 4031:
case 1466:
case 429:
case 630:
case 435:
case 681:
case 1481:
case 2811:
case 3804:
case 3944:
case 2921:
case 3194:
case 3000:
case 2834:
case 3593:
case 1852:
case 1075:
case 2249:
case 3734:
case 1090:
case 1416:
case 1760:
case 3067:
case 212:
case 508:
case 193:
case 3345:
case 710:
case 1529:
case 2156:
case 219:
case 1232:
case 2026:
case 2431:
case 2610:
case 1531:
case 1593:
case 1887:
case 3396:
case 3898:
case 3270:
case 816:
case 1374:
case 102:
case 2624:
case 2020:
case 2459:
case 3463:
case 1917:
case 181:
case 1611:
case 2449:
case 401:
case 2715:
case 1983:
case 931:
case 2581:
case 415:
case 4007:
case 3757:
case 425:
case 3289:
case 462:
case 1519:
case 3441:
case 1590:
case 3016:
case 197:
case 3957:
case 697:
case 1480:
case 4049:
case 1081:
case 2171:
case 1456:
case 2742:
case 1544:
case 296:
case 1496:
case 1692:
case 2576:
case 1265:
case 3970:
case 354:
case 2643:
case 2905:
case 1006:
case 3899:
case 155:
case 1808:
case 314:
case 3142:
case 10:
case 2515:
case 3071:
case 1552:
case 3079:
case 3567:
case 2825:
case 3509:
case 1720:
case 1145:
case 1513:
case 3030:
case 1909:
case 1482:
case 468:
case 267:
case 1447:
case 559:
case 3048:
case 3743:
case 2287:
case 345:
case 3858:
case 3715:
case 2175:
case 276:
case 1423:
case 2978:
case 1984:
case 3764:
case 2205:
case 2034:
case 3034:
case 4067:
case 792:
case 2896:
case 3604:
case 1715:
case 3825:
case 2850:
case 1810:
case 437:
case 171:
case 2056:
case 3774:
case 3078:
case 1358:
case 745:
case 670:
case 2454:
case 546:
case 1444:
case 4087:
case 926:
case 1292:
case 3571:
case 2579:
case 2886:
case 3329:
case 3800:
case 957:
case 3761:
case 3513:
case 2638:
case 2616:
case 2135:
case 1757:
case 2144:
case 2948:
case 133:
case 1678:
case 2317:
case 3646:
case 324:
case 4022:
case 915:
case 76:
case 360:
case 3074:
case 2534:
case 2648:
case 2490:
case 2805:
case 2625:
case 1616:
case 1767:
case 1114:
case 758:
case 1021:
case 1326:
case 408:
case 200:
case 1080:
case 2633:
case 1711:
case 392:
case 1821:
case 1738:
case 1475:
case 2094:
case 900:
case 3009:
case 2388:
case 1982:
case 2947:
case 3853:
case 2855:
case 964:
case 533:
case 3655:
case 513:
case 2920:
case 2182:
case 1595:
case 2968:
case 1563:
case 137:
case 1894:
case 2760:
case 851:
case 3429:
case 2836:
case 813:
case 3190:
case 315:
case 59:
case 1337:
case 2463:
case 112:
case 302:
case 3840:
case 3228:
case 3045:
case 42:
case 1857:
case 1378:
case 702:
case 3055:
case 2470:
case 617:
case 3374:
case 1584:
case 3274:
case 120:
case 4073:
case 2546:
case 2826:
case 3027:
case 2651:
case 2363:
case 1111:
case 1622:
case 2772:
case 1379:
case 2705:
case 2162:
case 1184:
case 1866:
case 2327:
case 3495:
case 906:
case 3549:
case 618:
case 626:
case 790:
case 311:
case 2623:
case 383:
case 3268:
case 1352:
case 526:
case 2018:
case 2394:
case 2989:
case 49:
case 2073:
case 1977:
case 2592:
case 2016:
case 2693:
case 4009:
case 2953:
case 2080:
case 2722:
case 225:
case 3904:
case 861:
case 1315:
case 2387:
case 3175:
case 3006:
case 237:
case 1349:
case 1947:
case 3971:
case 88:
case 3986:
case 123:
case 3242:
case 2635:
case 2234:
case 600:
case 1615:
case 2817:
case 3246:
case 3923:
case 527:
case 349:
case 1833:
case 2280:
case 2748:
case 3652:
case 2731:
case 1579:
case 2217:
case 79:
case 1334:
case 3753:
case 1492:
case 1799:
case 32:
case 2779:
case 1407:
case 839:
case 4014:
case 4053:
case 3598:
case 1342:
case 584:
case 2944:
case 1210:
case 158:
case 2441:
case 2226:
case 2060:
case 3894:
case 1735:
case 1084:
case 3817:
case 3989:
case 1020:
case 4078:
case 2351:
case 1335:
case 2572:
case 1410:
case 2157:
case 809:
case 51:
case 490:
case 2183:
case 1346:
case 4091:
case 1937:
case 1617:
case 2832:
case 2902:
case 3862:
case 1477:
case 1957:
case 1996:
case 2797:
case 3248:
case 3573:
case 772:
case 1904:
case 1961:
case 469:
case 2434:
case 97:
case 2398:
case 1216:
case 733:
case 1803:
case 793:
case 3901:
case 122:
case 2309:
case 1168:
case 895:
case 1445:
case 3057:
case 3747:
case 3772:
case 3051:
case 3885:
case 1049:
case 2159:
case 238:
case 318:
case 3477:
case 3454:
case 1749:
case 2828:
case 2253:
case 1174:
case 475:
case 1756:
case 432:
case 3669:
case 3700:
case 2421:
case 450:
case 1655:
case 3680:
case 1160:
case 4027:
case 2778:
case 1536:
case 1468:
case 4029:
case 889:
case 1724:
case 899:
case 3630:
case 536:
case 2550:
case 2839:
case 1156:
case 77:
case 1291:
case 2392:
case 2142:
case 2751:
case 632:
case 1521:
case 2403:
case 37:
case 881:
case 2695:
case 2268:
case 722:
case 461:
case 2899:
case 2701:
case 338:
case 168:
case 3116:
case 3742:
case 980:
case 3834:
case 93:
case 3181:
case 3172:
case 135:
case 2200:
case 3322:
case 1236:
case 3937:
case 2585:
case 3893:
case 1440:
case 3782:
case 3088:
case 3907:
case 1697:
case 1097:
case 3507:
case 2310:
case 2876:
case 2000:
case 1023:
case 142:
case 1680:
case 4039:
case 1361:
case 2223:
case 2116:
case 2277:
case 1003:
case 3277:
case 1739:
case 316:
case 3109:
case 407:
case 1716:
case 339:
case 3101:
case 2609:
case 4076:
case 1087:
case 23:
case 3855:
case 3818:
case 3483:
case 3949:
case 3222:
case 1317:
case 1732:
case 4058:
case 1178:
case 3410:
case 2480:
case 2214:
case 1765:
case 3848:
case 1188:
case 637:
case 98:
case 2719:
case 3777:
case 1043:
case 3956:
case 3987:
case 2799:
case 2908:
case 2192:
case 63:
case 107:
case 2810:
case 441:
case 1831:
case 2717:
case 3061:
case 440:
case 3628:
case 2600:
case 2812:
case 3179:
case 1748:
case 374:
case 1640:
case 729:
case 1320:
case 2439:
case 501:
case 2697:
case 2800:
case 67:
case 1161:
case 2054:
case 3326:
case 1968:
case 3985:
case 2472:
case 823:
case 3633:
case 529:
case 2597:
case 1916:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1645581601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,];
var gg_b = "1645581601/";

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
      if (x < 4096) subdomainx = String.fromCharCode(97 + gg_m[x]);
      else subdomainx = String.fromCharCode(97 + 0);
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
