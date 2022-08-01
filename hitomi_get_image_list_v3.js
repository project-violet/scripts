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
case 3974:
case 1458:
case 164:
case 450:
case 1211:
case 1888:
case 466:
case 3497:
case 499:
case 4093:
case 2530:
case 1451:
case 3610:
case 911:
case 1582:
case 3519:
case 2036:
case 2066:
case 3309:
case 3907:
case 3197:
case 3032:
case 3363:
case 445:
case 3559:
case 987:
case 2901:
case 1018:
case 468:
case 2023:
case 3778:
case 3922:
case 2701:
case 1890:
case 2464:
case 3278:
case 2576:
case 3994:
case 401:
case 1292:
case 3860:
case 2496:
case 1400:
case 2290:
case 1506:
case 2554:
case 2224:
case 3256:
case 2515:
case 503:
case 627:
case 208:
case 3535:
case 3608:
case 3896:
case 2982:
case 1106:
case 1394:
case 1901:
case 1961:
case 3769:
case 1735:
case 3486:
case 3115:
case 2673:
case 2127:
case 1965:
case 2049:
case 386:
case 3390:
case 866:
case 3816:
case 3558:
case 2376:
case 751:
case 3895:
case 1445:
case 3142:
case 777:
case 2775:
case 3260:
case 2445:
case 3036:
case 2400:
case 322:
case 2118:
case 3948:
case 3168:
case 3347:
case 730:
case 2514:
case 1016:
case 2934:
case 3236:
case 1808:
case 3332:
case 964:
case 1383:
case 3046:
case 3515:
case 1171:
case 2422:
case 3990:
case 978:
case 4045:
case 53:
case 761:
case 3839:
case 702:
case 2654:
case 3545:
case 721:
case 3262:
case 1043:
case 2814:
case 111:
case 1805:
case 2137:
case 979:
case 1264:
case 595:
case 3466:
case 2282:
case 2749:
case 1867:
case 949:
case 1563:
case 3534:
case 1788:
case 2208:
case 3493:
case 434:
case 802:
case 2682:
case 3611:
case 1140:
case 896:
case 3117:
case 2853:
case 2058:
case 2259:
case 1995:
case 3865:
case 1385:
case 770:
case 1589:
case 206:
case 4055:
case 1446:
case 3564:
case 1302:
case 709:
case 1853:
case 2276:
case 3748:
case 1049:
case 234:
case 43:
case 3376:
case 3976:
case 3276:
case 390:
case 2804:
case 3089:
case 2715:
case 2820:
case 3489:
case 1771:
case 3598:
case 1435:
case 279:
case 307:
case 3405:
case 2667:
case 4083:
case 1473:
case 2008:
case 2434:
case 1668:
case 83:
case 500:
case 1943:
case 2247:
case 491:
case 513:
case 3047:
case 4092:
case 1337:
case 292:
case 2054:
case 3715:
case 1880:
case 2120:
case 3107:
case 3218:
case 128:
case 2575:
case 1207:
case 2117:
case 3416:
case 3200:
case 912:
case 1414:
case 984:
case 553:
case 6:
case 732:
case 3604:
case 1570:
case 2840:
case 1439:
case 2815:
case 448:
case 449:
case 1437:
case 3206:
case 538:
case 1767:
case 2336:
case 3296:
case 24:
case 2359:
case 2620:
case 2598:
case 2959:
case 1444:
case 430:
case 867:
case 47:
case 3000:
case 226:
case 1525:
case 664:
case 920:
case 2427:
case 3699:
case 2895:
case 4095:
case 2891:
case 3669:
case 3134:
case 4000:
case 2756:
case 832:
case 1600:
case 341:
case 2312:
case 1191:
case 482:
case 568:
case 1455:
case 1462:
case 2653:
case 3509:
case 554:
case 2616:
case 1350:
case 2503:
case 1135:
case 3644:
case 3151:
case 2632:
case 2083:
case 1818:
case 2279:
case 3523:
case 1031:
case 3210:
case 2328:
case 2174:
case 2139:
case 1082:
case 1433:
case 3205:
case 353:
case 122:
case 2001:
case 3178:
case 4076:
case 1816:
case 3150:
case 2581:
case 2912:
case 397:
case 2341:
case 2052:
case 1917:
case 2604:
case 2663:
case 2717:
case 373:
case 3341:
case 342:
case 725:
case 2262:
case 706:
case 2495:
case 511:
case 1630:
case 1131:
case 193:
case 2173:
case 2130:
case 3426:
case 2265:
case 1636:
case 3161:
case 1951:
case 3145:
case 76:
case 3143:
case 3464:
case 3344:
case 728:
case 1527:
case 3479:
case 2533:
case 274:
case 3463:
case 1651:
case 823:
case 2353:
case 231:
case 1320:
case 3268:
case 1652:
case 2389:
case 1792:
case 1904:
case 109:
case 1813:
case 349:
case 2076:
case 1404:
case 1778:
case 1347:
case 3525:
case 3664:
case 3163:
case 1006:
case 1844:
case 3696:
case 3775:
case 2459:
case 77:
case 1256:
case 2727:
case 2350:
case 1618:
case 2594:
case 1345:
case 2220:
case 1263:
case 2744:
case 2297:
case 413:
case 2557:
case 616:
case 1845:
case 1229:
case 354:
case 242:
case 1331:
case 2473:
case 2708:
case 2746:
case 2332:
case 1369:
case 2908:
case 2283:
case 2914:
case 1571:
case 977:
case 2670:
case 1009:
case 1731:
case 2807:
case 3317:
case 762:
case 559:
case 3507:
case 2987:
case 2869:
case 998:
case 4:
case 2517:
case 1399:
case 2617:
case 3435:
case 2685:
case 1078:
case 1973:
case 3743:
case 1945:
case 2787:
case 2843:
case 3355:
case 2697:
case 3625:
case 518:
case 1801:
case 363:
case 148:
case 1086:
case 3756:
case 2364:
case 3263:
case 3320:
case 1648:
case 4038:
case 213:
case 2205:
case 3939:
case 16:
case 2437:
case 3485:
case 740:
case 1914:
case 1241:
case 1126:
case 254:
case 1684:
case 1448:
case 1885:
case 3684:
case 865:
case 1928:
case 2758:
case 3899:
case 2683:
case 988:
case 1713:
case 2896:
case 997:
case 2765:
case 3657:
case 2236:
case 1298:
case 945:
case 1423:
case 3179:
case 624:
case 432:
case 2073:
case 3514:
case 452:
case 2145:
case 1269:
case 2585:
case 663:
case 2261:
case 1677:
case 3226:
case 1532:
case 3337:
case 3005:
case 2161:
case 1058:
case 1312:
case 2071:
case 2090:
case 2214:
case 207:
case 2757:
case 3460:
case 1500:
case 3011:
case 2920:
case 3505:
case 639:
case 2219:
case 4051:
case 2627:
case 2769:
case 384:
case 601:
case 821:
case 2240:
case 1431:
case 3287:
case 3204:
case 882:
case 851:
case 2179:
case 722:
case 4084:
case 1215:
case 3112:
case 1060:
case 2131:
case 1469:
case 2886:
case 3481:
case 3687:
case 3288:
case 2146:
case 999:
case 3826:
case 3709:
case 403:
case 2156:
case 58:
case 3755:
case 827:
case 3862:
case 1796:
case 3813:
case 3271:
case 1332:
case 3679:
case 2204:
case 3992:
case 378:
case 2198:
case 2638:
case 1290:
case 2491:
case 1882:
case 2613:
case 2294:
case 815:
case 469:
case 1966:
case 2394:
case 1277:
case 2555:
case 2781:
case 2323:
case 3093:
case 771:
case 644:
case 3945:
case 1212:
case 520:
case 3201:
case 3028:
case 3052:
case 1548:
case 548:
case 93:
case 3239:
case 183:
case 2509:
case 1726:
case 27:
case 2789:
case 3936:
case 2425:
case 3824:
case 3085:
case 318:
case 2561:
case 3470:
case 4041:
case 646:
case 1861:
case 2652:
case 2614:
case 71:
case 2114:
case 574:
case 3822:
case 3797:
case 3282:
case 954:
case 1344:
case 2426:
case 3909:
case 4073:
case 916:
case 3284:
case 547:
case 3031:
case 3703:
case 3080:
case 48:
case 3674:
case 1583:
case 1010:
case 1204:
case 369:
case 560:
case 173:
case 2852:
case 855:
case 1826:
case 3873:
case 237:
case 2091:
case 138:
case 525:
case 2842:
case 2797:
case 3619:
case 696:
case 2252:
case 667:
case 1109:
case 928:
case 617:
case 3855:
case 661:
case 3084:
case 2079:
case 2599:
case 3539:
case 1022:
case 1401:
case 1066:
case 2280:
case 3512:
case 4060:
case 2480:
case 2134:
case 3106:
case 2375:
case 1057:
case 1070:
case 1994:
case 1279:
case 1642:
case 3180:
case 1797:
case 1860:
case 2968:
case 2150:
case 3602:
case 3305:
case 3465:
case 2763:
case 419:
case 3360:
case 3109:
case 4029:
case 3546:
case 3960:
case 3941:
case 685:
case 2304:
case 2699:
case 966:
case 2217:
case 3152:
case 1064:
case 2337:
case 52:
case 3502:
case 493:
case 399:
case 2650:
case 3343:
case 2523:
case 1303:
case 81:
case 2288:
case 3780:
case 579:
case 2972:
case 2185:
case 2009:
case 3528:
case 3244:
case 1418:
case 3388:
case 1868:
case 55:
case 2905:
case 4027:
case 3499:
case 3542:
case 2570:
case 3164:
case 414:
case 1029:
case 2344:
case 3650:
case 976:
case 3879:
case 565:
case 653:
case 3847:
case 3275:
case 1003:
case 3626:
case 2500:
case 2916:
case 3101:
case 168:
case 313:
case 868:
case 2764:
case 425:
case 3451:
case 3667:
case 1146:
case 2516:
case 838:
case 3494:
case 3081:
case 2941:
case 1590:
case 842:
case 330:
case 1856:
case 1817:
case 317:
case 3949:
case 1710:
case 1420:
case 1107:
case 1756:
case 277:
case 4006:
case 1551:
case 2195:
case 3615:
case 1556:
case 3364:
case 57:
case 510:
case 3290:
case 1524:
case 856:
case 1803:
case 1983:
case 2045:
case 3875:
case 1913:
case 3600:
case 1065:
case 3606:
case 2007:
case 115:
case 3857:
case 275:
case 794:
case 2369:
case 1210:
case 2543:
case 3007:
case 1599:
case 3617:
case 577:
case 496:
case 682:
case 1700:
case 2144:
case 3555:
case 3356:
case 3398:
case 1760:
case 1902:
case 642:
case 3605:
case 1392:
case 2349:
case 3380:
case 1530:
case 3147:
case 2903:
case 3255:
case 2416:
case 2997:
case 816:
case 3620:
case 922:
case 2730:
case 3349:
case 1339:
case 2374:
case 2478:
case 3759:
case 3187:
case 1233:
case 828:
case 33:
case 681:
case 2031:
case 726:
case 3565:
case 3908:
case 2698:
case 629:
case 1596:
case 1915:
case 2187:
case 2909:
case 1041:
case 3893:
case 688:
case 2326:
case 3261:
case 459:
case 2551:
case 45:
case 3410:
case 3746:
case 2032:
case 1182:
case 2785:
case 1761:
case 1035:
case 3078:
case 905:
case 754:
case 1739:
case 1560:
case 2718:
case 3209:
case 540:
case 3054:
case 3400:
case 1360:
case 541:
case 3362:
case 1314:
case 605:
case 1981:
case 29:
case 1316:
case 1172:
case 483:
case 3193:
case 1783:
case 2196:
case 2245:
case 3594:
case 1365:
case 159:
case 3353:
case 3211:
case 3436:
case 2742:
case 18:
case 3501:
case 2725:
case 1774:
case 1386:
case 3227:
case 2676:
case 1454:
case 3368:
case 3385:
case 3677:
case 135:
case 1758:
case 3158:
case 1581:
case 733:
case 118:
case 2456:
case 3327:
case 3786:
case 3286:
case 3809:
case 212:
case 1663:
case 2281:
case 3527:
case 3737:
case 1843:
case 810:
case 2042:
case 869:
case 1486:
case 3477:
case 807:
case 2249:
case 243:
case 1234:
case 2331:
case 188:
case 2472:
case 3603:
case 1097:
case 2810:
case 2084:
case 1896:
case 152:
case 3898:
case 4078:
case 1040:
case 899:
case 3935:
case 1970:
case 3905:
case 1388:
case 879:
case 282:
case 2660:
case 2126:
case 2893:
case 497:
case 3182:
case 2345:
case 1855:
case 1733:
case 2147:
case 361:
case 1535:
case 1595:
case 1313:
case 3597:
case 495:
case 1886:
case 3336:
case 87:
case 1633:
case 801:
case 2726:
case 2666:
case 1503:
case 4094:
case 3437:
case 2014:
case 915:
case 200:
case 3258:
case 2411:
case 989:
case 1794:
case 233:
case 1547:
case 3091:
case 1823:
case 364:
case 1007:
case 3906:
case 2622:
case 1319:
case 3901:
case 1052:
case 2531:
case 819:
case 5:
case 3283:
case 1203:
case 1963:
case 3717:
case 1829:
case 2592:
case 3064:
case 3314:
case 952:
case 3720:
case 2803:
case 3001:
case 3731:
case 3627:
case 689:
case 2634:
case 767:
case 3541:
case 1837:
case 3462:
case 2393:
case 2839:
case 1637:
case 347:
case 3776:
case 1237:
case 3801:
case 731:
case 3874:
case 2646:
case 2741:
case 996:
case 150:
case 1824:
case 1246:
case 2286:
case 2771:
case 3418:
case 3695:
case 776:
case 2964:
case 1216:
case 3092:
case 3253:
case 1887:
case 227:
case 1056:
case 3195:
case 1100:
case 886:
case 49:
case 698:
case 3246:
case 625:
case 357:
case 1382:
case 3550:
case 3307:
case 2486:
case 3770:
case 3649:
case 1017:
case 3739:
case 4010:
case 3055:
case 3566:
case 1379:
case 992:
case 346:
case 1248:
case 1676:
case 753:
case 3259:
case 3324:
case 1695:
case 2647:
case 1998:
case 319:
case 1944:
case 3357:
case 585:
case 3075:
case 2363:
case 389:
case 26:
case 943:
case 91:
case 3113:
case 769:
case 2707:
case 1324:
case 2860:
case 3628:
case 2572:
case 3872:
case 2970:
case 3548:
case 256:
case 2973:
case 3725:
case 1604:
case 2201:
case 1283:
case 1357:
case 2088:
case 3693:
case 4050:
case 3881:
case 2695:
case 3549:
case 2502:
case 2125:
case 1158:
case 1258:
case 985:
case 3888:
case 1335:
case 2355:
case 1077:
case 1376:
case 2988:
case 481:
case 1625:
case 2253:
case 515:
case 3830:
case 926:
case 4079:
case 1515:
case 1660:
case 2263:
case 1773:
case 3734:
case 3891:
case 1285:
case 2111:
case 3547:
case 1857:
case 367:
case 2075:
case 2287:
case 137:
case 3633:
case 2870:
case 3987:
case 2483:
case 1219:
case 1662:
case 429:
case 2927:
case 994:
case 2672:
case 134:
case 1272:
case 2550:
case 1389:
case 2370:
case 423:
case 427:
case 2743:
case 1250:
case 1786:
case 352:
case 3993:
case 13:
case 3495:
case 1309:
case 1696:
case 60:
case 2833:
case 607:
case 834:
case 192:
case 962:
case 69:
case 3880:
case 1222:
case 2409:
case 1673:
case 484:
case 1545:
case 3124:
case 1755:
case 3636:
case 573:
case 1649:
case 2855:
case 2386:
case 268:
case 1080:
case 3733:
case 3473:
case 1895:
case 501:
case 3042:
case 3325:
case 3749:
case 3482:
case 1699:
case 240:
case 2640:
case 3199:
case 2135:
case 621:
case 3583:
case 2463:
case 2401:
case 2922:
case 2956:
case 651:
case 1806:
case 3422:
case 904:
case 619:
case 1195:
case 3837:
case 571:
case 514:
case 3506:
case 92:
case 3257:
case 2883:
case 1480:
case 2451:
case 2026:
case 3183:
case 2890:
case 1167:
case 2034:
case 54:
case 121:
case 217:
case 123:
case 2404:
case 2806:
case 3889:
case 1903:
case 965:
case 1297:
case 4058:
case 119:
case 476:
case 3334:
case 1421:
case 2099:
case 1449:
case 3377:
case 1828:
case 712:
case 474:
case 2232:
case 3369:
case 1939:
case 90:
case 1051:
case 362:
case 1465:
case 3103:
case 1555:
case 2924:
case 1045:
case 2965:
case 2750:
case 3249:
case 2149:
case 3126:
case 142:
case 2545:
case 774:
case 907:
case 2264:
case 358:
case 2387:
case 2963:
case 995:
case 719:
case 1881:
case 2450:
case 228:
case 302:
case 162:
case 530:
case 3795:
case 3461:
case 22:
case 2519:
case 3114:
case 2623:
case 933:
case 3800:
case 1691:
case 742:
case 402:
case 3520:
case 2923:
case 246:
case 1232:
case 2378:
case 1093:
case 3757:
case 3508:
case 3302:
case 3570:
case 1206:
case 3670:
case 2383:
case 967:
case 1102:
case 2548:
case 1924:
case 3270:
case 2865:
case 185:
case 1878:
case 107:
case 1701:
case 220:
case 1098:
case 859:
case 1266:
case 1133:
case 3311:
case 1946:
case 1268:
case 690:
case 3104:
case 2318:
case 4046:
case 2824:
case 894:
case 3723:
case 3618:
case 3607:
case 1574:
case 968:
case 2153:
case 3592:
case 529:
case 63:
case 1178:
case 2171:
case 778:
case 1002:
case 460:
case 3965:
case 2584:
case 593:
case 2017:
case 3913:
case 1679:
case 3894:
case 2152:
case 2574:
case 2334:
case 3924:
case 1670:
case 2246:
case 79:
case 662:
case 2655:
case 2966:
case 1822:
case 3640:
case 1120:
case 1608:
case 161:
case 3661:
case 3829:
case 2955:
case 2231:
case 2309:
case 3430:
case 3653:
case 2477:
case 960:
case 532:
case 948:
case 1202:
case 2974:
case 141:
case 2158:
case 3006:
case 3051:
case 1054:
case 1301:
case 1982:
case 3818:
case 184:
case 1866:
case 3071:
case 2050:
case 3424:
case 2414:
case 171:
case 2817:
case 3663:
case 3590:
case 3596:
case 1481:
case 287:
case 1145:
case 1497:
case 1592:
case 1452:
case 1252:
case 3854:
case 1300:
case 428:
case 266:
case 2735:
case 1336:
case 3869:
case 4012:
case 3233:
case 2241:
case 3445:
case 3266:
case 2907:
case 2194:
case 3639:
case 3728:
case 265:
case 2421:
case 566:
case 1505:
case 1459:
case 1704:
case 2844:
case 3591:
case 2978:
case 809:
case 2694:
case 2431:
case 820:
case 1782:
case 1478:
case 3554:
case 2772:
case 1021:
case 1196:
case 2512:
case 2022:
case 600:
case 1305:
case 1190:
case 2648:
case 2313:
case 2709:
case 1416:
case 1069:
case 181:
case 1593:
case 2382:
case 1293:
case 1827:
case 1628:
case 1743:
case 3323:
case 3409:
case 2455:
case 586:
case 3995:
case 637:
case 2739:
case 1745:
case 2684:
case 1429:
case 2596:
case 2289:
case 1841:
case 94:
case 890:
case 3455:
case 2142:
case 1978:
case 3851:
case 2950:
case 2573:
case 3414:
case 2327:
case 3668:
case 2123:
case 613:
case 1380:
case 1654:
case 44:
case 944:
case 1657:
case 3189:
case 835:
case 2864:
case 3771:
case 1020:
case 875:
case 2122:
case 3018:
case 3458:
case 3517:
case 2898:
case 199:
case 710:
case 3852:
case 634:
case 9:
case 895:
case 1664:
case 3914:
case 594:
case 2223:
case 1580:
case 3930:
case 355:
case 781:
case 2293:
case 2113:
case 1718:
case 2154:
case 3789:
case 1410:
case 2488:
case 478:
case 1584:
case 2975:
case 3754:
case 2183:
case 817:
case 655:
case 3449:
case 3456:
case 1034:
case 2528:
case 1397:
case 1366:
case 209:
case 2518:
case 580:
case 1942:
case 3474:
case 524:
case 3264:
case 2197:
case 2235:
case 1468:
case 3927:
case 1585:
case 1084:
case 1036:
case 280:
case 857:
case 1520:
case 3638:
case 1294:
case 2882:
case 3516:
case 1467:
case 2856:
case 3034:
case 1228:
case 2935:
case 1954:
case 2944:
case 3902:
case 1164:
case 3779:
case 759:
case 1800:
case 2723:
case 3454:
case 1685:
case 1722:
case 236:
case 3721:
case 2310:
case 2938:
case 715:
case 1712:
case 1752:
case 2108:
case 3814:
case 4074:
case 3798:
case 677:
case 3568:
case 848:
case 2408:
case 3116:
case 2925:
case 2338:
case 2812:
case 1708:
case 216:
case 351:
case 1348:
case 1311:
case 852:
case 2818:
case 3217:
case 2511:
case 3057:
case 3729:
case 760:
case 723:
case 1789:
case 1597:
case 2521:
case 2951:
case 1598:
case 3412:
case 804:
case 3056:
case 2937:
case 2879:
case 3468:
case 36:
case 576:
case 787:
case 4052:
case 1368:
case 2995:
case 1087:
case 385:
case 3983:
case 3065:
case 1008:
case 3225:
case 891:
case 229:
case 2700:
case 37:
case 3561:
case 1698:
case 3214:
case 734:
case 3425:
case 669:
case 3651:
case 2448:
case 2946:
case 3308:
case 2398:
case 1270:
case 955:
case 2593:
case 1937:
case 339:
case 4034:
case 929:
case 871:
case 814:
case 2621:
case 3428:
case 100:
case 2664:
case 736:
case 3706:
case 2101:
case 3531:
case 4090:
case 2866:
case 4018:
case 1044:
case 1479:
case 527:
case 3488:
case 3867:
case 564:
case 3102:
case 1199:
case 3411:
case 3503:
case 1576:
case 2275:
case 1645:
case 2784:
case 3359:
case 932:
case 3964:
case 249:
case 3254:
case 539:
case 2177:
case 2321:
case 3372:
case 1727:
case 2453:
case 2233:
case 1139:
case 3203:
case 2703:
case 2637:
case 2170:
case 1865:
case 3097:
case 3782:
case 3912:
case 3070:
case 3806:
case 441:
case 1905:
case 98:
case 179:
case 1014:
case 1372:
case 2046:
case 1306:
case 1116:
case 3352:
case 2112:
case 2953:
case 315:
case 2080:
case 4042:
case 4017:
case 3174:
case 1474:
case 304:
case 1284:
case 3950:
case 20:
case 591:
case 2449:
case 435:
case 11:
case 2176:
case 745:
case 2447:
case 3139:
case 89:
case 3744:
case 1516:
case 1355:
case 3630:
case 1194:
case 3108:
case 2424:
case 863:
case 2056:
case 3944:
case 2356:
case 963:
case 3354:
case 3682:
case 1607:
case 786:
case 1356:
case 4024:
case 1953:
case 1907:
case 1495:
case 3916:
case 800:
case 2549:
case 3658:
case 117:
case 1624:
case 3613:
case 3942:
case 2284:
case 2213:
case 1113:
case 310:
case 3250:
case 3447:
case 3858:
case 261:
case 1933:
case 2493:
case 3917:
case 1693:
case 775:
case 1426:
case 3892:
case 2417:
case 19:
case 1103:
case 305:
case 3396:
case 3700:
case 3274:
case 1766:
case 3557:
case 3484:
case 1027:
case 3137:
case 114:
case 3579:
case 3280:
case 902:
case 3407:
case 2722:
case 1038:
case 2298:
case 2696:
case 4053:
case 3453:
case 1992:
case 2300:
case 1114:
case 2103:
case 1442:
case 1528:
case 2038:
case 1575:
case 3167:
case 1047:
case 3133:
case 592:
case 3760:
case 2615:
case 2688:
case 3496:
case 2368:
case 1874:
case 2012:
case 3727:
case 2051:
case 570:
case 1436:
case 2307:
case 671:
case 3985:
case 3599:
case 1989:
case 563:
case 714:
case 1343:
case 2836:
case 50:
case 1762:
case 4008:
case 3423:
case 1688:
case 3443:
case 1406:
case 1889:
case 806:
case 3655:
case 1819:
case 2471:
case 3588:
case 1955:
case 4043:
case 2662:
case 2019:
case 845:
case 718:
case 692:
case 4003:
case 3954:
case 608:
case 1617:
case 463:
case 3646:
case 3346:
case 129:
case 3529:
case 901:
case 1791:
case 1169:
case 2104:
case 1160:
case 2643:
case 909:
case 1567:
case 218:
case 507:
case 3015:
case 877:
case 95:
case 3433:
case 3707:
case 2027:
case 3876:
case 2399:
case 2506:
case 3861:
case 365:
case 3711:
case 273:
case 1810:
case 2780:
case 3373:
case 3328:
case 139:
case 320:
case 569:
case 630:
case 2391:
case 244:
case 253:
case 1921:
case 3713:
case 32:
case 1689:
case 1317:
case 276:
case 693:
case 610:
case 2181:
case 1681:
case 2065:
case 2825:
case 1931:
case 370:
case 1518:
case 3149:
case 2906:
case 1748:
case 147:
case 1784:
case 1235:
case 884:
case 2498:
case 3401:
case 2351:
case 1554:
case 1174:
case 110:
case 1864:
case 2457:
case 2207:
case 3050:
case 3540:
case 2360:
case 1501:
case 793:
case 743:
case 1358:
case 73:
case 2121:
case 281:
case 3686:
case 2069:
case 1644:
case 2565:
case 837:
case 2352:
case 3735:
case 2226:
case 1352:
case 502:
case 803:
case 1028:
case 993:
case 2520:
case 3469:
case 798:
case 675:
case 2330:
case 3361:
case 2030:
case 1929:
case 140:
case 2811:
case 4072:
case 116:
case 3672:
case 2799:
case 1059:
case 3762:
case 3120:
case 2894:
case 2705:
case 1859:
case 285:
case 1187:
case 717:
case 1661:
case 3367:
case 2874:
case 942:
case 2482:
case 2228:
case 1231:
case 561:
case 1674:
case 1594:
case 1510:
case 3567:
case 4032:
case 1138:
case 883:
case 1225:
case 438:
case 858:
case 1747:
case 247:
case 3751:
case 34:
case 2295:
case 260:
case 3635:
case 3986:
case 956:
case 535:
case 113:
case 2296:
case 2949:
case 3010:
case 1180:
case 638:
case 1627:
case 2413:
case 1076:
case 2899:
case 3571:
case 368:
case 2460:
case 1282:
case 1540:
case 2876:
case 3041:
case 2656:
case 860:
case 2665:
case 3045:
case 703:
case 2039:
case 1564:
case 1650:
case 175:
case 3022:
case 1280:
case 1415:
case 2063:
case 2541:
case 684:
case 4049:
case 3752:
case 2385:
case 3207:
case 2266:
case 241:
case 269:
case 2900:
case 3933:
case 1226:
case 2257:
case 298:
case 2793:
case 2476:
case 3408:
case 420:
case 2504:
case 125:
case 1221:
case 1124:
case 3835:
case 232:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1659348001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,];
var gg_b = "1659348001/";

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
