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
case 382:
case 3120:
case 3513:
case 2236:
case 40:
case 3660:
case 2133:
case 1581:
case 332:
case 392:
case 1780:
case 2468:
case 3781:
case 784:
case 909:
case 3731:
case 3380:
case 3374:
case 441:
case 3550:
case 1347:
case 2139:
case 716:
case 759:
case 1349:
case 1002:
case 3161:
case 2632:
case 3797:
case 2010:
case 3468:
case 1881:
case 1843:
case 1610:
case 1943:
case 2450:
case 538:
case 828:
case 1595:
case 155:
case 1460:
case 2679:
case 1383:
case 36:
case 2234:
case 1962:
case 1641:
case 1227:
case 2048:
case 3828:
case 2149:
case 1039:
case 3877:
case 3491:
case 1181:
case 944:
case 3659:
case 2374:
case 3145:
case 460:
case 3962:
case 2095:
case 223:
case 553:
case 3559:
case 2337:
case 997:
case 589:
case 3339:
case 1737:
case 2420:
case 2719:
case 3860:
case 2460:
case 663:
case 2782:
case 3531:
case 517:
case 324:
case 1197:
case 3547:
case 3340:
case 761:
case 1808:
case 2529:
case 875:
case 422:
case 1763:
case 3424:
case 1148:
case 3866:
case 420:
case 859:
case 1506:
case 224:
case 1870:
case 1315:
case 763:
case 1699:
case 2625:
case 2433:
case 2472:
case 3984:
case 3609:
case 3381:
case 3039:
case 4056:
case 3823:
case 3510:
case 2187:
case 3229:
case 3483:
case 1576:
case 1248:
case 2642:
case 4079:
case 1979:
case 3925:
case 1696:
case 1264:
case 3851:
case 292:
case 3868:
case 2482:
case 1913:
case 3729:
case 3614:
case 950:
case 3589:
case 2555:
case 1611:
case 2940:
case 70:
case 1340:
case 2680:
case 3480:
case 2357:
case 2791:
case 348:
case 3378:
case 741:
case 1568:
case 187:
case 3292:
case 509:
case 2386:
case 3406:
case 1625:
case 4008:
case 2025:
case 1617:
case 1872:
case 982:
case 1183:
case 2067:
case 372:
case 611:
case 1368:
case 1212:
case 2251:
case 101:
case 591:
case 993:
case 3565:
case 3695:
case 3044:
case 3196:
case 1998:
case 1928:
case 2647:
case 906:
case 4030:
case 3922:
case 949:
case 2946:
case 1526:
case 41:
case 1089:
case 206:
case 3455:
case 3895:
case 1464:
case 1179:
case 870:
case 3239:
case 1265:
case 975:
case 892:
case 2945:
case 1454:
case 1826:
case 3974:
case 3880:
case 3359:
case 3516:
case 2107:
case 1775:
case 1470:
case 3876:
case 1820:
case 677:
case 2404:
case 4031:
case 1268:
case 3021:
case 435:
case 3186:
case 2707:
case 1955:
case 2060:
case 3002:
case 379:
case 26:
case 3283:
case 480:
case 3664:
case 2818:
case 983:
case 3152:
case 3934:
case 445:
case 2308:
case 3347:
case 3237:
case 359:
case 2657:
case 1312:
case 1216:
case 2416:
case 2820:
case 2532:
case 1846:
case 3929:
case 2396:
case 2641:
case 1279:
case 2716:
case 976:
case 2783:
case 2980:
case 3066:
case 299:
case 4002:
case 3140:
case 1245:
case 1936:
case 3276:
case 165:
case 2473:
case 1363:
case 434:
case 3611:
case 3103:
case 1243:
case 550:
case 3543:
case 81:
case 548:
case 3:
case 790:
case 3136:
case 1103:
case 820:
case 1259:
case 3252:
case 2007:
case 2338:
case 1921:
case 1853:
case 2760:
case 2816:
case 3582:
case 3730:
case 2999:
case 3714:
case 917:
case 3686:
case 565:
case 1519:
case 3586:
case 3037:
case 1765:
case 3815:
case 1257:
case 3371:
case 2005:
case 1263:
case 795:
case 504:
case 3184:
case 3916:
case 1572:
case 3629:
case 3330:
case 415:
case 672:
case 2654:
case 3544:
case 1582:
case 1897:
case 2035:
case 836:
case 2904:
case 2885:
case 3438:
case 3794:
case 3116:
case 2754:
case 225:
case 1462:
case 115:
case 3635:
case 1947:
case 3427:
case 689:
case 3687:
case 1795:
case 2702:
case 2101:
case 1273:
case 1573:
case 1538:
case 3284:
case 2503:
case 2325:
case 1876:
case 286:
case 1437:
case 2941:
case 3269:
case 1917:
case 3360:
case 3681:
case 51:
case 3243:
case 2252:
case 1356:
case 2633:
case 3478:
case 1034:
case 2378:
case 1166:
case 746:
case 3180:
case 2467:
case 3914:
case 1342:
case 3673:
case 2903:
case 801:
case 1090:
case 3581:
case 139:
case 2517:
case 3189:
case 2241:
case 743:
case 2723:
case 1158:
case 2008:
case 2653:
case 3633:
case 3658:
case 3561:
case 1165:
case 3121:
case 2722:
case 4084:
case 1145:
case 3098:
case 466:
case 1793:
case 590:
case 2406:
case 275:
case 4060:
case 3997:
case 3367:
case 2430:
case 4074:
case 3587:
case 973:
case 1176:
case 1552:
case 2056:
case 220:
case 1405:
case 732:
case 3125:
case 2011:
case 1136:
case 2157:
case 1031:
case 690:
case 2737:
case 1691:
case 97:
case 137:
case 3592:
case 126:
case 3114:
case 3663:
case 705:
case 2342:
case 4075:
case 1924:
case 3226:
case 926:
case 2293:
case 2330:
case 713:
case 2413:
case 3383:
case 3767:
case 199:
case 3907:
case 2951:
case 1373:
case 3275:
case 2718:
case 2340:
case 1718:
case 2169:
case 451:
case 456:
case 3387:
case 1616:
case 1293:
case 4071:
case 1992:
case 216:
case 3883:
case 4035:
case 1457:
case 1311:
case 331:
case 251:
case 721:
case 658:
case 3694:
case 2070:
case 2912:
case 3836:
case 3770:
case 1848:
case 755:
case 3738:
case 1785:
case 2226:
case 1901:
case 2552:
case 1123:
case 3194:
case 3564:
case 4:
case 3159:
case 3317:
case 2074:
case 2554:
case 464:
case 2309:
case 2822:
case 2199:
case 319:
case 452:
case 242:
case 2414:
case 2856:
case 3652:
case 2129:
case 2361:
case 968:
case 737:
case 722:
case 720:
case 3277:
case 2735:
case 2565:
case 2582:
case 2500:
case 2176:
case 3520:
case 6:
case 1828:
case 3972:
case 3344:
case 279:
case 621:
case 3075:
case 3898:
case 3752:
case 4085:
case 1815:
case 1801:
case 440:
case 885:
case 3431:
case 27:
case 1036:
case 3118:
case 375:
case 374:
case 3363:
case 3048:
case 2497:
case 3769:
case 1586:
case 3058:
case 1811:
case 501:
case 3372:
case 326:
case 1067:
case 3247:
case 1022:
case 2958:
case 3185:
case 511:
case 114:
case 3987:
case 3725:
case 2038:
case 618:
case 2671:
case 1704:
case 1027:
case 733:
case 3242:
case 913:
case 1664:
case 619:
case 2880:
case 3257:
case 2105:
case 3627:
case 3996:
case 2329:
case 1944:
case 486:
case 408:
case 25:
case 3771:
case 2997:
case 3467:
case 198:
case 1382:
case 2986:
case 612:
case 246:
case 2277:
case 2016:
case 1615:
case 4073:
case 557:
case 2318:
case 2485:
case 2079:
case 3580:
case 1973:
case 2183:
case 2266:
case 540:
case 252:
case 2584:
case 2069:
case 3034:
case 939:
case 3289:
case 669:
case 3076:
case 681:
case 484:
case 1233:
case 1632:
case 2465:
case 282:
case 1060:
case 489:
case 2023:
case 2302:
case 2094:
case 1636:
case 1640:
case 1346:
case 2202:
case 563:
case 2088:
case 2210:
case 1262:
case 3290:
case 3421:
case 1062:
case 2445:
case 750:
case 3128:
case 1882:
case 3656:
case 1740:
case 532:
case 1489:
case 2209:
case 1180:
case 1997:
case 304:
case 3690:
case 1608:
case 1218:
case 598:
case 4055:
case 2159:
case 2901:
case 1159:
case 2217:
case 3935:
case 695:
case 4039:
case 712:
case 2123:
case 1446:
case 1799:
case 1495:
case 129:
case 208:
case 3316:
case 570:
case 2154:
case 927:
case 1046:
case 2077:
case 1861:
case 3985:
case 844:
case 84:
case 2267:
case 594:
case 986:
case 2171:
case 2863:
case 643:
case 1121:
case 1841:
case 1949:
case 76:
case 325:
case 838:
case 1932:
case 2359:
case 2836:
case 1171:
case 786:
case 2140:
case 2984:
case 254:
case 2542:
case 183:
case 3556:
case 1488:
case 904:
case 3423:
case 1110:
case 1422:
case 901:
case 1750:
case 230:
case 2796:
case 2228:
case 260:
case 992:
case 462:
case 1864:
case 2926:
case 1475:
case 2201:
case 4020:
case 969:
case 1982:
case 1057:
case 1377:
case 659:
case 1099:
case 175:
case 94:
case 1904:
case 1536:
case 347:
case 3835:
case 1561:
case 2354:
case 1902:
case 2771:
case 2046:
case 706:
case 3440:
case 2185:
case 3932:
case 234:
case 1896:
case 3414:
case 3626:
case 1682:
case 2407:
case 3666:
case 552:
case 3217:
case 2615:
case 1465:
case 368:
case 717:
case 2537:
case 843:
case 3758:
case 1139:
case 267:
case 4014:
case 264:
case 1587:
case 3849:
case 3006:
case 3603:
case 2683:
case 574:
case 2062:
case 2919:
case 882:
case 1170:
case 4022:
case 121:
case 812:
case 661:
case 1530:
case 1916:
case 2753:
case 614:
case 991:
case 1702:
case 1821:
case 463:
case 935:
case 751:
case 2320:
case 1802:
case 1658:
case 239:
case 2191:
case 600:
case 482:
case 3436:
case 2977:
case 3553:
case 2400:
case 1550:
case 1432:
case 2238:
case 1957:
case 3336:
case 413:
case 1307:
case 1766:
case 1030:
case 1845:
case 439:
case 1627:
case 745:
case 1744:
case 823:
case 1072:
case 3596:
case 177:
case 2220:
case 2221:
case 683:
case 1786:
case 2410:
case 345:
case 366:
case 1773:
case 333:
case 2666:
case 2874:
case 1502:
case 3593:
case 2996:
case 1280:
case 2664:
case 2668:
case 1365:
case 2827:
case 3029:
case 2587:
case 1516:
case 3900:
case 3869:
case 789:
case 4032:
case 1575:
case 2049:
case 1574:
case 2810:
case 938:
case 1471:
case 1073:
case 2261:
case 3708:
case 2672:
case 145:
case 3706:
case 3809:
case 1814:
case 2071:
case 1594:
case 2761:
case 2090:
case 648:
case 1007:
case 3998:
case 2384:
case 1893:
case 2443:
case 3790:
case 1151:
case 3549:
case 3307:
case 3591:
case 1609:
case 3288:
case 3624:
case 835:
case 3255:
case 2435:
case 2583:
case 2184:
case 3791:
case 2490:
case 1292:
case 3182:
case 1890:
case 329:
case 3053:
case 2352:
case 954:
case 1112:
case 2135:
case 3224:
case 2788:
case 2648:
case 378:
case 2250:
case 3508:
case 957:
case 418:
case 498:
case 1155:
case 1187:
case 1379:
case 1940:
case 3068:
case 2502:
case 390:
case 3796:
case 201:
case 1798:
case 1520:
case 389:
case 1807:
case 469:
case 2138:
case 1020:
case 3607:
case 12:
case 2458:
case 2797:
case 4076:
case 1667:
case 3845:
case 1400:
case 2158:
case 65:
case 2020:
case 3090:
case 3942:
case 2190:
case 2276:
case 3967:
case 67:
case 2703:
case 978:
case 3545:
case 1712:
case 2456:
case 3873:
case 1250:
case 2895:
case 825:
case 1244:
case 424:
case 3682:
case 2512:
case 2921:
case 2375:
case 731:
case 579:
case 2578:
case 19:
case 59:
case 1023:
case 3858:
case 2331:
case 313:
case 1905:
case 640:
case 3422:
case 2388:
case 1698:
case 3529:
case 2493:
case 289:
case 3763:
case 2546:
case 2804:
case 1009:
case 1721:
case 3958:
case 2355:
case 66:
case 1088:
case 3954:
case 3190:
case 1862:
case 2258:
case 3199:
case 972:
case 533:
case 1481:
case 2313:
case 148:
case 1156:
case 29:
case 386:
case 3735:
case 3240:
case 1215:
case 3742:
case 2508:
case 1381:
case 2563:
case 2397:
case 120:
case 1115:
case 170:
case 941:
case 3715:
case 3408:
case 210:
case 1685:
case 3777:
case 777:
case 2710:
case 1028:
case 3376:
case 4091:
case 3560:
case 174:
case 1106:
case 2419:
case 852:
case 1849:
case 479:
case 1063:
case 999:
case 3453:
case 2147:
case 2851:
case 426:
case 510:
case 1656:
case 2865:
case 3792:
case 518:
case 1401:
case 3302:
case 3755:
case 454:
case 2240:
case 903:
case 4007:
case 3445:
case 3539:
case 2441:
case 1015:
case 3806:
case 3082:
case 1016:
case 3012:
case 2401:
case 988:
case 96:
case 671:
case 3920:
case 1970:
case 1225:
case 2832:
case 3133:
case 682:
case 2505:
case 2096:
case 2891:
case 2918:
case 1271:
case 3060:
case 1412:
case 3072:
case 1080:
case 3343:
case 2741:
case 478:
case 2518:
case 1205:
case 1336:
case 1736:
case 4080:
case 425:
case 3978:
case 2853:
case 3986:
case 1198:
case 60:
case 1172:
case 1743:
case 2126:
case 1892:
case 3734:
case 782:
case 3293:
case 2585:
case 3345:
case 2117:
case 2113:
case 3323:
case 1549:
case 3905:
case 2431:
case 3507:
case 3496:
case 2207:
case 2173:
case 196:
case 2288:
case 889:
case 3524:
case 3171:
case 2910:
case 320:
case 1467:
case 353:
case 3349:
case 1385:
case 3697:
case 1644:
case 2153:
case 2229:
case 3350:
case 3700:
case 1478:
case 2535:
case 3824:
case 2752:
case 2272:
case 352:
case 2730:
case 1816:
case 3862:
case 905:
case 775:
case 3175:
case 2923:
case 561:
case 876:
case 2558:
case 1436:
case 3477:
case 360:
case 2198:
case 3689:
case 1044:
case 1326:
case 377:
case 3650:
case 832:
case 3908:
case 1096:
case 2655:
case 896:
case 1836:
case 757:
case 142:
case 2944:
case 3917:
case 3130:
case 3621:
case 2835:
case 610:
case 4013:
case 617:
case 3274:
case 2660:
case 3400:
case 1642:
case 700:
case 1965:
case 296:
case 3070:
case 443:
case 1082:
case 815:
case 673:
case 1425:
case 1348:
case 1498:
case 2560:
case 3109:
case 3528:
case 2837:
case 1355:
case 3303:
case 778:
case 1429:
case 86:
case 3699:
case 2969:
case 3110:
case 2815:
case 2223:
case 229:
case 1577:
case 3933:
case 98:
case 2042:
case 1781:
case 2146:
case 4003:
case 1693:
case 1727:
case 3181:
case 3639:
case 3894:
case 2787:
case 1993:
case 3749:
case 3636:
case 1068:
case 2884:
case 1871:
case 769:
case 1503:
case 2592:
case 147:
case 3101:
case 1323:
case 2104:
case 3377:
case 678:
case 4050:
case 3782:
case 1191:
case 188:
case 3713:
case 914:
case 3846:
case 1485:
case 336:
case 768:
case 2952:
case 1990:
case 2619:
case 912:
case 3074:
case 3150:
case 1599:
case 770:
case 1032:
case 3458:
case 2344:
case 3355:
case 2769:
case 809:
case 554:
case 3170:
case 133:
case 1421:
case 4019:
case 371:
case 1058:
case 14:
case 2740:
case 2515:
case 2170:
case 2834:
case 1935:
case 2182:
case 1177:
case 3404:
case 634:
case 1499:
case 1234:
case 2081:
case 416:
case 1652:
case 657:
case 895:
case 2122:
case 558:
case 1678:
case 3602:
case 2065:
case 502:
case 3332:
case 531:
case 1012:
case 1701:
case 288:
case 3441:
case 1048:
case 2137:
case 2576:
case 2166:
case 168:
case 2369:
case 3953:
case 1850:
case 1133:
case 3741:
case 3429:
case 2281:
case 1822:
case 1592:
case 2639:
case 3281:
case 668:
case 3702:
case 194:
case 4041:
case 866:
case 322:
case 1175:
case 2975:
case 1146:
case 214:
case 3913:
case 1003:
case 960:
case 3909:
case 1472:
case 536:
case 3955:
case 2640:
case 1369:
case 1360:
case 2303:
case 3346:
case 2708:
case 781:
case 653:
case 2888:
case 2312:
case 338:
case 2480:
case 2028:
case 323:
case 2933:
case 3338:
case 2106:
case 2128:
case 1463:
case 1098:
case 1768:
case 3812:
case 1392:
case 1756:
case 1251:
case 340:
case 2889:
case 692:
case 2686:
case 344:
case 2947:
case 1922:
case 1518:
case 837:
case 461:
case 3499:
case 103:
case 1960:
case 1202:
case 1877:
case 2245:
case 915:
case 3951:
case 1769:
case 2319:
case 2076:
case 1803:
case 3995:
case 3746:
case 3622:
case 1357:
case 3390:
case 2323:
case 2531:
case 1980:
case 1130:
case 4045:
case 193:
case 3787:
case 1224:
case 3092:
case 87:
case 2743:
case 56:
case 996:
case 1542:
case 3250:
case 3122:
case 294:
case 1200:
case 3005:
case 3142:
case 2459:
case 1321:
case 3366:
case 1588:
case 3050:
case 529:
case 1239:
case 1889:
case 2784:
case 3924:
case 1209:
case 3961:
case 273:
case 432:
case 702:
case 476:
case 1527:
case 1161:
case 920:
case 315:
case 2321:
case 89:
case 2897:
case 1477:
case 2750:
case 2699:
case 3490:
case 1269:
case 1310:
case 1600:
case 3875:
case 1206:
case 64:
case 2704:
case 842:
case 2998:
case 3847:
case 1418:
case 520:
case 4089:
case 3701:
case 2477:
case 3889:
case 1255:
case 1086:
case 2001:
case 2540:
case 1566:
case 585:
case 2193:
case 2434:
case 2882:
case 738:
case 1590:
case 604:
case 652:
case 3216:
case 2871:
case 500:
case 118:
case 3433:
case 3512:
case 2892:
case 2821:
case 1211:
case 1095:
case 1049:
case 468:
case 1222:
case 2604:
case 1886:
case 3032:
case 1500:
case 3784:
case 3398:
case 263:
case 3503:
case 3306:
case 2772:
case 874:
case 335:
case 1314:
case 2111:
case 232:
case 1194:
case 405:
case 3334:
case 3854:
case 1105:
case 2637:
case 1083:
case 301:
case 406:
case 2345:
case 2868:
case 4010:
case 3321:
case 499:
case 1466:
case 1069:
case 1895:
case 1505:
case 758:
case 3348:
case 1042:
case 179:
case 3753:
case 1013:
case 1966:
case 2626:
case 1331:
case 1967:
case 3572:
case 3661:
case 2907:
case 93:
case 3811:
case 63:
case 1777:
case 3813:
case 1705:
case 204:
case 1852:
case 1399:
case 3234:
case 2055:
case 756:
case 3859:
case 2121:
case 2731:
case 3213:
case 280:
case 1237:
case 1942:
case 2569:
case 1272:
case 3221:
case 1856:
case 1676:
case 1684:
case 2438:
case 308:
case 3108:
case 2439:
case 3402:
case 3291:
case 524:
case 3608:
case 1345:
case 1267:
case 4028:
case 1584:
case 2867:
case 2424:
case 724:
case 1898:
case 122:
case 1468:
case 2390:
case 1555:
case 3246:
case 475:
case 1920:
case 2948:
case 1825:
case 49:
case 3003:
case 2972:
case 530:
case 2152:
case 2216:
case 1919:
case 1343:
case 2479:
case 1351:
case 1132:
case 1569:
case 4086:
case 3959:
case 4083:
case 1509:
case 1613:
case 507:
case 779:
case 2964:
case 1327:
case 1533:
case 670:
case 1752:
case 3979:
case 3218:
case 2253:
case 472:
case 2589:
case 977:
case 1309:
case 2047:
case 24:
case 1540:
case 560:
case 3325:
case 2706:
case 1064:
case 3672:
case 880:
case 3816:
case 3019:
case 1674:
case 2391:
case 1402:
case 2967:
case 1996:
case 1427:
case 1220:
case 635:
case 1038:
case 2900:
case 4042:
case 2448:
case 3138:
case 613:
case 3521:
case 1623:
case 754:
case 2444:
case 3382:
case 2393:
case 2284:
case 3887:
case 1299:
case 309:
case 473:
case 1236:
case 2749:
case 1295:
case 1328:
case 922:
case 3655:
case 2150:
case 931:
case 3319:
case 2720:
case 4061:
case 1278:
case 1963:
case 3179:
case 2553:
case 2721:
case 3937:
case 742:
case 3097:
case 583:
case 2914:
case 2044:
case 1879:
case 1885:
case 3728:
case 3757:
case 303:
case 3956:
case 1298:
case 1424:
case 3793:
case 3335:
case 3251:
case 1653:
case 3405:
case 1282:
case 1946:
case 3492:
case 417:
case 2155:
case 481:
case 158:
case 791:
case 3117:
case 2324:
case 2849:
case 752:
case 5:
case 808:
case 3649:
case 1366:
case 1621:
case 1716:
case 2073:
case 3446:
case 3619:
case 3474:
case 1335:
case 2239:
case 3654:
case 1606:
case 2833:
case 680:
case 2151:
case 3802:
case 1669:
case 184:
case 1386:
case 1851:
case 2523:
case 2132:
case 354:
case 249:
case 3271:
case 714:
case 907:
case 1645:
case 8:
case 2949:
case 749:
case 3709:
case 1720:
case 2114:
case 71:
case 2496:
case 2304:
case 3357:
case 2385:
case 525:
case 4009:
case 2275:
case 3819:
case 34:
case 4001:
case 3921:
case 13:
case 2347:
case 3203:
case 15:
case 457:
case 804:
case 2524:
case 3683:
case 2286:
case 2296:
case 3570:
case 136:
case 310:
case 1646:
case 2873:
case 2860:
case 3059:
case 3837:
case 2965:
case 625:
case 3534:
case 355:
case 2539:
case 2144:
case 1313:
case 3394:
case 2618:
case 361:
case 2955:
case 3279:
case 2525:
case 1761:
case 2929:
case 3129:
case 624:
case 306:
case 2314:
case 1256:
case 2246:
case 1969:
case 3473:
case 2806:
case 3992:
case 3341:
case 2828:
case 2339:
case 3577:
case 2970:
case 16:
case 942:
case 4057:
case 3172:
case 2861:
case 293:
case 1835:
case 1275:
case 883:
case 1900:
case 2068:
case 740:
case 3805:
case 515:
case 516:
case 3093:
case 2125:
case 3941:
case 514:
case 1977:
case 503:
case 238:
case 261:
case 3707:
case 1954:
case 2915:
case 356:
case 2260:
case 1389:
case 1918:
case 688:
case 545:
case 1398:
case 2748:
case 1277:
case 1971:
case 1688:
case 753:
case 3618:
case 615:
case 1025:
case 3231:
case 492:
case 3643:
case 4068:
case 1208:
case 1751:
case 1504:
case 3296:
case 2411:
case 547:
case 3232:
case 162:
case 2214:
case 2814:
case 2387:
case 964:
case 2423:
case 985:
case 599:
case 2383:
case 3878:
case 1071:
case 1865:
case 1630:
case 3648:
case 2514:
case 3766:
case 3156:
case 2451:
case 3375:
case 1875:
case 1717:
case 1868:
case 3386:
case 1859:
case 241:
case 1598:
case 576:
case 2475:
case 1819:
case 1660:
case 3613:
case 1637:
case 1907:
case 2289:
case 2086:
case 2599:
case 1978:
case 3311:
case 3680:
case 312:
case 1948:
case 1794:
case 3219:
case 2789:
case 3067:
case 3430:
case 391:
case 1857:
case 1874:
case 1104:
case 785:
case 3428:
case 1787:
case 277:
case 3575:
case 1732:
case 2040:
case 4078:
case 2409:
case 3891:
case 4090:
case 496:
case 212:
case 2489:
case 2032:
case 3585:
case 2636:
case 3223:
case 734:
case 3867:
case 1931:
case 2550:
case 1953:
case 3442:
case 1809:
case 1933:
case 2054:
case 1812:
case 80:
case 4082:
case 900:
case 271:
case 2381:
case 2934:
case 2924:
case 4081:
case 3008:
case 450:
case 2428:
case 3022:
case 3280:
case 2898:
case 1087:
case 95:
case 527:
case 1596:
case 1316:
case 1956:
case 951:
case 1011:
case 566:
case 1854:
case 3385:
case 1742:
case 505:
case 2852:
case 1511:
case 2676:
case 2808:
case 167:
case 2902:
case 3818:
case 1199:
case 3143:
case 3465:
case 1408:
case 1317:
case 3612:
case 1423:
case 2131:
case 1591:
case 3644:
case 2709:
case 1934:
case 1513:
case 2798:
case 274:
case 3536:
case 3668:
case 21:
case 1776:
case 526:
case 910:
case 816:
case 1375:
case 240:
case 3094:
case 4044:
case 660:
case 287:
case 1242:
case 2896:
case 1544:
case 3301:
case 1004:
case 1374:
case 2488:
case 255:
case 4087:
case 393:
case 3415:
case 2362:
case 248:
case 2588:
case 730:
case 2775:
case 3041:
case 3982:
case 2939:
case 2976:
case 400:
case 873:
case 1195:
case 2620:
case 567:
case 2463:
case 1758:
case 3514:
case 2436:
case 1730:
case 696:
case 3046:
case 1951:
case 2242:
case 1866:
case 3736:
case 2306:
case 1085:
case 3245:
case 3645:
case 2608:
case 872:
case 3010:
case 2959:
case 1439:
case 2982:
case 564:
case 2449:
case 1643:
case 3260:
case 3764:
case 1451:
case 1441:
case 458:
case 381:
case 817:
case 2950:
case 3598:
case 131:
case 3396:
case 2732:
case 3031:
case 2440:
case 638:
case 1281:
case 1844:
case 1125:
case 3447:
case 1480:
case 2697:
case 1580:
case 2658:
case 2669:
case 403:
case 2432:
case 1804:
case 2425:
case 1120:
case 1541:
case 627:
case 1396:
case 3885:
case 127:
case 38:
case 2474:
case 940:
case 278:
case 2780:
case 1056:
case 1122:
case 2747:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1658343601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,];
var gg_b = "1658343601/";

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
