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
case 833:
case 199:
case 3068:
case 1652:
case 2163:
case 196:
case 990:
case 3084:
case 257:
case 3669:
case 273:
case 852:
case 1070:
case 4057:
case 634:
case 1699:
case 53:
case 4086:
case 3883:
case 2581:
case 3826:
case 3214:
case 2217:
case 2937:
case 1944:
case 2339:
case 4006:
case 3818:
case 776:
case 679:
case 1002:
case 2278:
case 4028:
case 2039:
case 2025:
case 1187:
case 2837:
case 1339:
case 2105:
case 901:
case 1298:
case 2084:
case 3936:
case 1599:
case 2077:
case 3957:
case 2963:
case 1300:
case 2990:
case 3086:
case 3420:
case 3864:
case 1767:
case 1345:
case 2208:
case 3533:
case 3925:
case 3887:
case 3982:
case 3006:
case 1634:
case 914:
case 4000:
case 786:
case 387:
case 2682:
case 1898:
case 1024:
case 3837:
case 4013:
case 440:
case 1026:
case 3155:
case 4058:
case 1211:
case 2494:
case 2010:
case 2294:
case 2862:
case 443:
case 152:
case 1001:
case 2644:
case 1072:
case 3399:
case 1684:
case 441:
case 979:
case 2456:
case 3665:
case 2273:
case 2969:
case 1138:
case 297:
case 1506:
case 2835:
case 1514:
case 2037:
case 2760:
case 835:
case 2002:
case 2869:
case 446:
case 3192:
case 1532:
case 4070:
case 1217:
case 2795:
case 1922:
case 3057:
case 1928:
case 3662:
case 3295:
case 2371:
case 2452:
case 2941:
case 3467:
case 3555:
case 736:
case 2699:
case 1305:
case 1388:
case 3688:
case 2577:
case 536:
case 2884:
case 2598:
case 1633:
case 3395:
case 1460:
case 3963:
case 476:
case 328:
case 2597:
case 1377:
case 593:
case 3364:
case 1614:
case 3604:
case 1814:
case 3158:
case 2399:
case 1926:
case 480:
case 2164:
case 1319:
case 2113:
case 3279:
case 11:
case 830:
case 343:
case 2960:
case 3170:
case 627:
case 2756:
case 2180:
case 182:
case 555:
case 290:
case 1046:
case 3366:
case 113:
case 1784:
case 3379:
case 377:
case 2197:
case 1672:
case 900:
case 1956:
case 2279:
case 2413:
case 3183:
case 690:
case 789:
case 1554:
case 2694:
case 1927:
case 3496:
case 173:
case 3456:
case 1661:
case 0:
case 4018:
case 3424:
case 3734:
case 2250:
case 3672:
case 3075:
case 1304:
case 955:
case 3657:
case 2427:
case 860:
case 742:
case 665:
case 1688:
case 1432:
case 1637:
case 9:
case 2203:
case 2074:
case 3716:
case 2488:
case 2807:
case 1487:
case 2641:
case 231:
case 735:
case 2543:
case 332:
case 3494:
case 2589:
case 1605:
case 1446:
case 3539:
case 1021:
case 1362:
case 3050:
case 2957:
case 3417:
case 444:
case 3059:
case 1158:
case 3607:
case 1312:
case 2429:
case 99:
case 1332:
case 3121:
case 1877:
case 2499:
case 2257:
case 164:
case 684:
case 128:
case 3532:
case 3436:
case 1308:
case 1868:
case 844:
case 3489:
case 2202:
case 264:
case 3371:
case 2071:
case 1534:
case 3890:
case 2550:
case 2059:
case 2546:
case 2992:
case 790:
case 2594:
case 598:
case 582:
case 3897:
case 849:
case 2567:
case 3088:
case 3443:
case 218:
case 4094:
case 624:
case 2241:
case 2830:
case 305:
case 3000:
case 1930:
case 396:
case 349:
case 2566:
case 1760:
case 2601:
case 3234:
case 1023:
case 3133:
case 1730:
case 2977:
case 828:
case 2715:
case 1265:
case 1693:
case 3612:
case 894:
case 3796:
case 309:
case 4091:
case 895:
case 4023:
case 97:
case 728:
case 1787:
case 999:
case 3101:
case 3609:
case 3237:
case 744:
case 1673:
case 1192:
case 1768:
case 1948:
case 1395:
case 1561:
case 527:
case 3160:
case 315:
case 1883:
case 1667:
case 2215:
case 3859:
case 2813:
case 313:
case 3821:
case 494:
case 1618:
case 3876:
case 3137:
case 1295:
case 1524:
case 3582:
case 3136:
case 2412:
case 326:
case 1509:
case 2101:
case 2214:
case 2603:
case 3996:
case 2325:
case 3445:
case 2438:
case 871:
case 3577:
case 3437:
case 2441:
case 317:
case 2154:
case 4061:
case 272:
case 3932:
case 2548:
case 2055:
case 1859:
case 1223:
case 92:
case 3728:
case 419:
case 1533:
case 3847:
case 1850:
case 209:
case 2345:
case 2868:
case 3762:
case 354:
case 3980:
case 1387:
case 1326:
case 2162:
case 1354:
case 2857:
case 2251:
case 927:
case 3491:
case 1338:
case 3713:
case 3303:
case 235:
case 1686:
case 3511:
case 1994:
case 13:
case 282:
case 792:
case 1971:
case 244:
case 822:
case 2687:
case 3673:
case 2731:
case 734:
case 1680:
case 3232:
case 1411:
case 3605:
case 1159:
case 3476:
case 1857:
case 3305:
case 2086:
case 487:
case 2619:
case 2945:
case 1485:
case 1451:
case 1918:
case 2924:
case 1789:
case 2901:
case 924:
case 3377:
case 537:
case 1828:
case 3917:
case 2512:
case 1979:
case 3955:
case 3546:
case 942:
case 2855:
case 2859:
case 3574:
case 1953:
case 1669:
case 722:
case 730:
case 3217:
case 2676:
case 21:
case 811:
case 3103:
case 2152:
case 1697:
case 215:
case 1654:
case 1529:
case 2007:
case 1289:
case 2207:
case 863:
case 963:
case 528:
case 2818:
case 3265:
case 242:
case 3531:
case 1038:
case 3490:
case 3066:
case 2643:
case 3648:
case 1671:
case 429:
case 496:
case 3236:
case 3862:
case 2741:
case 3242:
case 1507:
case 449:
case 2684:
case 333:
case 1896:
case 3832:
case 2131:
case 1856:
case 2738:
case 2061:
case 3586:
case 2595:
case 3413:
case 2258:
case 1729:
case 471:
case 2541:
case 2370:
case 1486:
case 3181:
case 3962:
case 2310:
case 3913:
case 2407:
case 672:
case 319:
case 80:
case 1602:
case 414:
case 2787:
case 1004:
case 2754:
case 1976:
case 1166:
case 3639:
case 32:
case 3358:
case 2666:
case 2792:
case 3026:
case 1351:
case 929:
case 1892:
case 93:
case 2729:
case 3958:
case 2947:
case 308:
case 959:
case 2655:
case 2454:
case 2466:
case 3156:
case 2229:
case 3990:
case 579:
case 2364:
case 2547:
case 287:
case 3575:
case 334:
case 2335:
case 516:
case 3679:
case 402:
case 539:
case 3504:
case 1250:
case 864:
case 1520:
case 994:
case 1449:
case 2388:
case 1059:
case 1005:
case 1723:
case 2621:
case 265:
case 3257:
case 3677:
case 3045:
case 3312:
case 307:
case 3503:
case 3879:
case 245:
case 1412:
case 1122:
case 1755:
case 1744:
case 1391:
case 1257:
case 1276:
case 1457:
case 3529:
case 2773:
case 1185:
case 2628:
case 837:
case 3123:
case 3327:
case 379:
case 2393:
case 2501:
case 3509:
case 3302:
case 638:
case 2519:
case 2263:
case 1665:
case 1307:
case 2397:
case 1310:
case 3419:
case 158:
case 3131:
case 1190:
case 1982:
case 5:
case 2887:
case 1441:
case 1186:
case 82:
case 3888:
case 1957:
case 1734:
case 3195:
case 1774:
case 3126:
case 800:
case 2833:
case 2669:
case 2171:
case 775:
case 1266:
case 3190:
case 2496:
case 2720:
case 3626:
case 3850:
case 2609:
case 2088:
case 550:
case 424:
case 3369:
case 2981:
case 2442:
case 42:
case 408:
case 533:
case 2961:
case 1041:
case 2938:
case 359:
case 1003:
case 1196:
case 1476:
case 507:
case 2614:
case 177:
case 3182:
case 1649:
case 1012:
case 1400:
case 1840:
case 3747:
case 1399:
case 2372:
case 1801:
case 2701:
case 3619:
case 4090:
case 1173:
case 391:
case 3954:
case 3187:
case 2355:
case 3707:
case 1725:
case 1299:
case 3207:
case 3943:
case 1050:
case 3041:
case 1581:
case 118:
case 3218:
case 562:
case 3471:
case 3793:
case 705:
case 2490:
case 3272:
case 1869:
case 1103:
case 974:
case 3292:
case 1662:
case 3779:
case 2260:
case 17:
case 3092:
case 75:
case 1636:
case 2539:
case 1785:
case 193:
case 2946:
case 294:
case 3019:
case 1218:
case 3663:
case 841:
case 2054:
case 1813:
case 3941:
case 2714:
case 323:
case 2118:
case 2124:
case 1694:
case 2181:
case 1321:
case 3390:
case 79:
case 1142:
case 534:
case 3108:
case 2735:
case 2253:
case 1521:
case 3282:
case 1689:
case 203:
case 781:
case 167:
case 2730:
case 3548:
case 3291:
case 1252:
case 1385:
case 2537:
case 1224:
case 3697:
case 762:
case 3683:
case 692:
case 1361:
case 2811:
case 858:
case 3402:
case 2395:
case 3321:
case 3987:
case 376:
case 2028:
case 3215:
case 310:
case 1707:
case 2971:
case 2141:
case 1259:
case 2492:
case 3342:
case 913:
case 3184:
case 3831:
case 3625:
case 1549:
case 1231:
case 3481:
case 357:
case 712:
case 3545:
case 699:
case 425:
case 3221:
case 2379:
case 2816:
case 3271:
case 2359:
case 2220:
case 1780:
case 3430:
case 3711:
case 587:
case 2210:
case 2246:
case 2904:
case 3595:
case 1347:
case 3880:
case 804:
case 295:
case 1097:
case 240:
case 221:
case 2271:
case 1195:
case 2045:
case 2098:
case 227:
case 1590:
case 3258:
case 561:
case 108:
case 3034:
case 2094:
case 163:
case 3152:
case 1943:
case 59:
case 2437:
case 2196:
case 1060:
case 2398:
case 3268:
case 204:
case 3946:
case 132:
case 1987:
case 1285:
case 1202:
case 892:
case 1337:
case 3830:
case 1036:
case 1709:
case 1144:
case 765:
case 3699:
case 1471:
case 252:
case 1031:
case 1175:
case 284:
case 103:
case 669:
case 155:
case 2302:
case 64:
case 985:
case 52:
case 2218:
case 3761:
case 920:
case 1200:
case 1286:
case 2538:
case 1498:
case 300:
case 1408:
case 3455:
case 880:
case 2650:
case 3867:
case 653:
case 695:
case 3458:
case 41:
case 3708:
case 2667:
case 378:
case 3729:
case 2703:
case 3882:
case 3120:
case 224:
case 1280:
case 881:
case 1258:
case 2902:
case 1335:
case 571:
case 723:
case 2498:
case 1715:
case 548:
case 3198:
case 2995:
case 255:
case 1993:
case 902:
case 2050:
case 2132:
case 2677:
case 2889:
case 3102:
case 125:
case 3865:
case 3140:
case 481:
case 945:
case 1382:
case 260:
case 4016:
case 2057:
case 678:
case 2227:
case 2725:
case 2468:
case 1550:
case 3387:
case 225:
case 1727:
case 3296:
case 716:
case 1578:
case 2354:
case 1821:
case 609:
case 1496:
case 1539:
case 1106:
case 1357:
case 1253:
case 560:
case 966:
case 2587:
case 2713:
case 120:
case 3977:
case 1242:
case 2662:
case 3107:
case 3175:
case 847:
case 2381:
case 1073:
case 2630:
case 2880:
case 1765:
case 3111:
case 2691:
case 2956:
case 1576:
case 2922:
case 478:
case 1740:
case 1045:
case 677:
case 1604:
case 1811:
case 2385:
case 848:
case 216:
case 3145:
case 1706:
case 3341:
case 30:
case 2053:
case 3638:
case 3036:
case 1952:
case 3992:
case 2026:
case 3139:
case 3128:
case 923:
case 3301:
case 2736:
case 814:
case 220:
case 1884:
case 2953:
case 1148:
case 632:
case 2786:
case 3692:
case 3820:
case 1448:
case 3801:
case 3642:
case 3171:
case 2882:
case 2137:
case 1137:
case 656:
case 7:
case 325:
case 1469:
case 2205:
case 1553:
case 2242:
case 3572:
case 943:
case 2605:
case 463:
case 3405:
case 127:
case 1386:
case 2551:
case 2556:
case 1565:
case 3394:
case 2660:
case 2233:
case 3937:
case 1897:
case 3746:
case 2828:
case 1112:
case 1149:
case 2534:
case 1006:
case 724:
case 37:
case 523:
case 1710:
case 1823:
case 1327:
case 296:
case 4025:
case 832:
case 3273:
case 2524:
case 3562:
case 479:
case 545:
case 3620:
case 845:
case 2803:
case 1468:
case 1397:
case 1879:
case 2681:
case 1772:
case 3618:
case 957:
case 1995:
case 3817:
case 1123:
case 2238:
case 1063:
case 1798:
case 3299:
case 2375:
case 3117:
case 831:
case 3951:
case 746:
case 1615:
case 596:
case 2410:
case 616:
case 1488:
case 3868:
case 404:
case 1851:
case 411:
case 613:
case 2579:
case 1423:
case 563:
case 4001:
case 78:
case 1356:
case 3206:
case 2110:
case 907:
case 2338:
case 2506:
case 2802:
case 1650:
case 2275:
case 803:
case 3153:
case 3410:
case 1044:
case 540:
case 3961:
case 1216:
case 3386:
case 3323:
case 2261:
case 2361:
case 72:
case 2873:
case 996:
case 750:
case 727:
case 3281:
case 3486:
case 1124:
case 2763:
case 2400:
case 3055:
case 1104:
case 3800:
case 1642:
case 71:
case 3403:
case 1724:
case 887:
case 3671:
case 1317:
case 680:
case 851:
case 1084:
case 1414:
case 401:
case 289:
case 1255:
case 107:
case 3189:
case 906:
case 2315:
case 2613:
case 3337:
case 1497:
case 1235:
case 3448:
case 3035:
case 2528:
case 1974:
case 1888:
case 769:
case 1499:
case 2565:
case 458:
case 217:
case 2531:
case 2301:
case 566:
case 3979:
case 3560:
case 1316:
case 73:
case 190:
case 2671:
case 3811:
case 3300:
case 140:
case 1812:
case 543:
case 3833:
case 2935:
case 602:
case 3930:
case 106:
case 951:
case 2082:
case 1199:
case 2114:
case 2779:
case 3985:
case 483:
case 3764:
case 3441:
case 2422:
case 842:
case 839:
case 2272:
case 50:
case 397:
case 336:
case 1428:
case 2446:
case 1865:
case 2610:
case 439:
case 501:
case 3022:
case 1510:
case 3899:
case 3998:
case 437:
case 3591:
case 2043:
case 457:
case 3294:
case 1670:
case 3211:
case 2252:
case 4076:
case 939:
case 3645:
case 2277:
case 1048:
case 2697:
case 2867:
case 1232:
case 1829:
case 3587:
case 3756:
case 1752:
case 515:
case 2234:
case 314:
case 4048:
case 2604:
case 2362:
case 1489:
case 973:
case 2690:
case 2664:
case 2559:
case 3983:
case 689:
case 121:
case 3843:
case 2685:
case 3185:
case 965:
case 3512:
case 267:
case 2165:
case 1455:
case 1052:
case 2991:
case 2482:
case 797:
case 1464:
case 3550:
case 1824:
case 131:
case 2750:
case 2737:
case 4092:
case 2129:
case 2225:
case 1949:
case 1505:
case 3365:
case 3288:
case 3725:
case 2319:
case 3078:
case 3730:
case 1015:
case 2533:
case 1692:
case 3339:
case 3174:
case 3616:
case 4093:
case 3146:
case 2540:
case 3538:
case 1000:
case 2588:
case 3514:
case 1616:
case 867:
case 1758:
case 1788:
case 502:
case 327:
case 1226:
case 1570:
case 2909:
case 905:
case 247:
case 344:
case 910:
case 987:
case 2219:
case 783:
case 2198:
case 509:
case 1608:
case 1168:
case 1107:
case 2337:
case 3855:
case 2586:
case 3655:
case 421:
case 3911:
case 115:
case 915:
case 2236:
case 897:
case 3750:
case 3011:
case 2308:
case 713:
case 3536:
case 1786:
case 1583:
case 810:
case 2011:
case 766:
case 3500:
case 126:
case 2525:
case 1643:
case 2764:
case 2155:
case 1666:
case 886:
case 2374:
case 3564:
case 3848:
case 1984:
case 1528:
case 976:
case 1427:
case 3513:
case 2911:
case 3589:
case 3244:
case 708:
case 2415:
case 3842:
case 1988:
case 1933:
case 1992:
case 3594:
case 1612:
case 3554:
case 1165:
case 2500:
case 2449:
case 1938:
case 3771:
case 782:
case 506:
case 2431:
case 1958:
case 802:
case 1201:
case 3871:
case 868:
case 2416:
case 3429:
case 2732:
case 972:
case 890:
case 3009:
case 3602:
case 153:
case 19:
case 47:
case 1042:
case 1998:
case 1586:
case 1209:
case 2176:
case 123:
case 2932:
case 1623:
case 2418:
case 3241:
case 1678:
case 3854:
case 4047:
case 4079:
case 3335:
case 1240:
case 3081:
case 3507:
case 35:
case 662:
case 2517:
case 704:
case 1973:
case 686:
case 2240:
case 3789:
case 646:
case 2877:
case 451:
case 3039:
case 1065:
case 3674:
case 3289:
case 3021:
case 2194:
case 1941:
case 3644:
case 1368:
case 3173:
case 3164:
case 3480:
case 3661:
case 3462:
case 529:
case 2451:
case 1796:
case 618:
case 3576:
case 1996:
case 3040:
case 1281:
case 2955:
case 2896:
case 469:
case 1313:
case 2746:
case 2624:
case 1852:
case 2747:
case 3347:
case 3825:
case 1648:
case 1220:
case 1492:
case 1645:
case 1278:
case 1267:
case 2634:
case 48:
case 3628:
case 161:
case 954:
case 2788:
case 2504:
case 2142:
case 2259:
case 4030:
case 1037:
case 1763:
case 1167:
case 2744:
case 1940:
case 1711:
case 1490:
case 2417:
case 3398:
case 485:
case 1683:
case 398:
case 230:
case 1743:
case 2759:
case 1375:
case 1251:
case 3743:
case 757:
case 3881:
case 3290:
case 1133:
case 2535:
case 101:
case 1272:
case 729:
case 2562:
case 114:
case 2356:
case 3240:
case 1145:
case 3877:
case 3125:
case 1378:
case 3910:
case 809:
case 3352:
case 2876:
case 385:
case 1658:
case 853:
case 1095:
case 448:
case 346:
case 1212:
case 3065:
case 1093:
case 2424:
case 2748:
case 4045:
case 3308:
case 330:
case 460:
case 3104:
case 3950:
case 1087:
case 2790:
case 731:
case 1027:
case 292:
case 741:
case 2480:
case 1696:
case 1716:
case 2895:
case 2688:
case 772:
case 3601:
case 824:
case 1474:
case 1114:
case 521:
case 1034:
case 3893:
case 165:
case 559:
case 825:
case 3723:
case 1197:
case 2159:
case 1681:
case 2323:
case 3551:
case 3239:
case 4011:
case 2283:
case 3894:
case 2897:
case 1116:
case 3231:
case 3598:
case 4005:
case 2170:
case 764:
case 1986:
case 175:
case 1588:
case 1875:
case 3834:
case 1560:
case 3615:
case 69:
case 3032:
case 3920:
case 2365:
case 3412:
case 2351:
case 2847:
case 791:
case 2542:
case 259:
case 3317:
case 3235:
case 2530:
case 879:
case 513:
case 3453:
case 2975:
case 2237:
case 3161:
case 3056:
case 3993:
case 3311:
case 160:
case 3001:
case 1169:
case 1947:
case 639:
case 1512:
case 3525:
case 420:
case 263:
case 1769:
case 2058:
case 3561:
case 1775:
case 1279:
case 2211:
case 4074:
case 3046:
case 1407:
case 3208:
case 46:
case 747:
case 2120:
case 3647:
case 1392:
case 3680:
case 2515:
case 1819:
case 94:
case 2081:
case 337:
case 3378:
case 1323:
case 283:
case 399:
case 936:
case 181:
case 2692:
case 1484:
case 3516:
case 1771:
case 1366:
case 3753:
case 2485:
case 1519:
case 454:
case 3024:
case 1254:
case 3269:
case 3896:
case 176:
case 3425:
case 3799:
case 1409:
case 2772:
case 799:
case 1381:
case 2951:
case 3008:
case 3933:
case 2140:
case 1322:
case 2970:
case 1401:
case 2366:
case 3768:
case 888:
case 24:
case 3095:
case 3906:
case 430:
case 2809:
case 932:
case 3852:
case 159:
case 410:
case 2839:
case 186:
case 1444:
case 2099:
case 1624:
case 3080:
case 1677:
case 1833:
case 3654:
case 696:
case 3909:
case 3857:
case 2125:
case 1816:
case 3025:
case 2367:
case 721:
case 823:
case 3033:
case 578:
case 3836:
case 4042:
case 3989:
case 2353:
case 928:
case 1708:
case 1585:
case 1617:
case 1152:
case 1193:
case 997:
case 2123:
case 1183:
case 2046:
case 3495:
case 3889:
case 363:
case 1290:
case 2382:
case 1685:
case 2224:
case 141:
case 1719:
case 921:
case 2031:
case 861:
case 3666:
case 1530:
case 850:
case 530:
case 1500:
case 436:
case 4020:
case 2916:
case 967:
case 2287:
case 3652:
case 3559:
case 3714:
case 1151:
case 2966:
case 1238:
case 1263:
case 532:
case 3169:
case 1551:
case 1105:
case 2127:
case 1119:
case 3434:
case 1726:
case 510:
case 1640:
case 2503:
case 3597:
case 838:
case 3853:
case 211:
case 3238:
case 3530:
case 3782:
case 2188:
case 3766:
case 3176:
case 1902:
case 4072:
case 2049:
case 1873:
case 1155:
case 2478:
case 3900:
case 1700:
case 4082:
case 1591:
case 2148:
case 2368:
case 3567:
case 2048:
case 1965:
case 156:
case 3464:
case 3087:
case 233:
case 2707:
case 986:
case 1454:
case 238:
case 1153:
case 4015:
case 2936:
case 3875:
case 3224:
case 1713:
case 4067:
case 2926:
case 3749:
case 2014:
case 1260:
case 1563:
case 432:
case 1889:
case 3710:
case 2445:
case 2575:
case 2616:
case 2473:
case 367:
case 2122:
case 373:
case 3149:
case 2328:
case 2078:
case 3623:
case 3966:
case 2139:
case 3824:
case 3874:
case 3929:
case 2510:
case 4024:
case 3147:
case 1188:
case 876:
case 2288:
case 29:
case 1573:
case 188:
case 3656:
case 919:
case 266:
case 583:
case 1127:
case 971:
case 2235:
case 1806:
case 2434:
case 3392:
case 2791:
case 694:
case 505:
case 442:
case 3357:
case 1917:
case 4078:
case 2632:
case 1781:
case 1206:
case 3077:
case 2794:
case 2783:
case 2177:
case 3736:
case 2347:
case 588:
case 339:
case 1416:
case 3681:
case 2107:
case 1655:
case 2384:
case 3916:
case 3986:
case 520:
case 2727:
case 3423:
case 3042:
case 1017:
case 2983:
case 2314:
case 403:
case 1066:
case 2153:
case 934:
case 564:
case 3573:
case 1380:
case 3640:
case 2849:
case 2649:
case 3440:
case 2825:
case 3689:
case 3861:
case 301:
case 3732:
case 3521:
case 2545:
case 2918:
case 1010:
case 2640:
case 2680:
case 1420:
case 1635:
case 553:
case 3017:
case 2212:
case 1282:
case 2767:
case 170:
case 2289:
case 1249:
case 977:
case 3785:
case 2964:
case 4052:
case 2848:
case 3484:
case 1626:
case 3076:
case 3938:
case 673:
case 2318:
case 650:
case 1931:
case 2785:
case 1778:
case 3431:
case 3585:
case 258:
case 641:
case 629:
case 807:
case 3827:
case 3043:
case 280:
case 2024:
case 3439:
case 3569:
case 1904:
case 3016:
case 1848:
case 1418:
case 322:
case 3988:
case 229:
case 3256:
case 3840:
case 657:
case 1336:
case 192:
case 1547:
case 4032:
case 1609:
case 3247:
case 2386:
case 1748:
case 171:
case 3014:
case 3611:
case 2958:
case 1701:
case 1120:
case 2578:
case 2652:
case 1182:
case 983:
case 1198:
case 1627:
case 3580:
case 2346:
case 324:
case 2532:
case 3318:
case 1846:
case 147:
case 4009:
case 3775:
case 2758:
case 361:
case 2179:
case 2075:
case 4002:
case 1690:
case 2917:
case 1732:
case 56:
case 3372:
case 1822:
case 1270:
case 3515:
case 254:
case 565:
case 1517:
case 1651:
case 1978:
case 522:
case 998:
case 1035:
case 2608:
case 2709:
case 3510:
case 3106:
case 558:
case 137:
case 4039:
case 1143:
case 2635:
case 2553:
case 2771:
case 2178:
case 2200:
case 891:
case 55:
case 2290:
case 1595:
case 3664:
case 1475:
case 2008:
case 3193:
case 2035:
case 1125:
case 2908:
case 1537:
case 347:
case 3808:
case 2570:
case 144:
case 2309:
case 1359:
case 2784:
case 3356:
case 2881:
case 1545:
case 2063:
case 2940:
case 2521:
case 2457:
case 2698:
case 3466:
case 753:
case 1676:
case 956:
case 884:
case 226:
case 2913:
case 1178:
case 1433:
case 1862:
case 2822:
case 749:
case 1082:
case 43:
case 3912:
case 935:
case 1007:
case 174:
case 1014:
case 3421:
case 2104:
case 3924:
case 1863:
case 183:
case 2561:
case 988:
case 1881:
case 2143:
case 2854:
case 2592:
case 817:
case 3096:
case 1092:
case 262:
case 2201:
case 3005:
case 752:
case 3659:
case 3:
case 531:
case 390:
case 1951:
case 2484:
case 759:
case 3748:
case 3754:
case 3013:
case 2423:
case 1494:
case 1029:
case 1404:
case 3029:
case 1809:
case 2116:
case 3863:
case 3872:
case 3498:
case 303:
case 172:
case 1346:
case 302:
case 1962:
case 1016:
case 2820:
case 1777:
case 2933:
case 1593:
case 3435:
case 2812:
case 1606:
case 3792:
case 1698:
case 3452:
case 2728:
case 1177:
case 538:
case 467:
case 2073:
case 1915:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1736539201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,];
var gg_b = "1736539201/";

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
    if (rr["hasavif"] == 1) rr["haswebp"] = 1;
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
