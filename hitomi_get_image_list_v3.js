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
case 1107:
case 58:
case 696:
case 794:
case 3832:
case 1021:
case 2734:
case 508:
case 3130:
case 3367:
case 2425:
case 2672:
case 1325:
case 649:
case 3195:
case 1028:
case 1400:
case 885:
case 960:
case 2921:
case 2526:
case 1262:
case 287:
case 2497:
case 2539:
case 2811:
case 68:
case 338:
case 2191:
case 107:
case 2089:
case 3788:
case 3404:
case 3766:
case 2127:
case 3657:
case 3865:
case 72:
case 461:
case 2771:
case 3585:
case 3561:
case 3861:
case 3231:
case 1740:
case 561:
case 2591:
case 3266:
case 4000:
case 416:
case 329:
case 152:
case 4060:
case 3046:
case 876:
case 1285:
case 3906:
case 971:
case 1540:
case 1435:
case 2876:
case 3112:
case 3446:
case 2858:
case 3633:
case 233:
case 2989:
case 1472:
case 1127:
case 641:
case 3474:
case 3313:
case 3818:
case 3434:
case 3383:
case 2933:
case 2330:
case 1534:
case 403:
case 3656:
case 3287:
case 3866:
case 1445:
case 570:
case 4013:
case 2819:
case 842:
case 3381:
case 203:
case 2090:
case 3787:
case 1378:
case 981:
case 890:
case 3421:
case 3042:
case 1377:
case 3326:
case 4076:
case 3593:
case 3578:
case 3977:
case 2321:
case 3330:
case 3428:
case 2230:
case 2703:
case 2020:
case 606:
case 29:
case 749:
case 2359:
case 2773:
case 2597:
case 942:
case 2634:
case 1364:
case 1719:
case 2666:
case 2139:
case 2779:
case 3454:
case 127:
case 1275:
case 1643:
case 2013:
case 2832:
case 2546:
case 2944:
case 2887:
case 3539:
case 3340:
case 1947:
case 1645:
case 2042:
case 1474:
case 1830:
case 3289:
case 24:
case 2593:
case 826:
case 3576:
case 2064:
case 1138:
case 2747:
case 1974:
case 2581:
case 1343:
case 2950:
case 1219:
case 277:
case 661:
case 1886:
case 364:
case 3184:
case 3028:
case 2961:
case 3213:
case 460:
case 1369:
case 4006:
case 439:
case 3021:
case 2963:
case 281:
case 1093:
case 1723:
case 3640:
case 816:
case 1546:
case 1616:
case 2379:
case 80:
case 741:
case 470:
case 3423:
case 2883:
case 352:
case 1623:
case 3389:
case 2585:
case 1600:
case 2270:
case 1506:
case 3583:
case 611:
case 819:
case 3447:
case 1256:
case 2488:
case 3170:
case 2812:
case 301:
case 660:
case 1462:
case 571:
case 2653:
case 792:
case 53:
case 1209:
case 3940:
case 1562:
case 1156:
case 2156:
case 4059:
case 1513:
case 2023:
case 3073:
case 1322:
case 359:
case 1372:
case 1831:
case 3192:
case 2422:
case 1855:
case 592:
case 3845:
case 3321:
case 1337:
case 2486:
case 1146:
case 1813:
case 1489:
case 2594:
case 3746:
case 2931:
case 501:
case 3424:
case 3007:
case 2571:
case 225:
case 2670:
case 1025:
case 3081:
case 1860:
case 3554:
case 2271:
case 256:
case 3889:
case 3548:
case 3230:
case 3052:
case 235:
case 3930:
case 3319:
case 3406:
case 1939:
case 755:
case 2479:
case 2910:
case 1314:
case 2763:
case 3534:
case 3161:
case 1761:
case 1990:
case 2355:
case 1949:
case 262:
case 3491:
case 2507:
case 2210:
case 2185:
case 3925:
case 2340:
case 1373:
case 3552:
case 1331:
case 821:
case 56:
case 637:
case 2435:
case 3844:
case 3937:
case 11:
case 358:
case 2317:
case 2788:
case 834:
case 105:
case 1567:
case 1296:
case 805:
case 2218:
case 3061:
case 1760:
case 1491:
case 441:
case 1674:
case 2494:
case 20:
case 631:
case 912:
case 3814:
case 2687:
case 900:
case 498:
case 954:
case 1304:
case 3555:
case 1844:
case 1184:
case 4023:
case 93:
case 349:
case 1042:
case 1801:
case 1479:
case 3178:
case 2159:
case 1619:
case 3478:
case 722:
case 1210:
case 937:
case 1963:
case 50:
case 1940:
case 1907:
case 1098:
case 443:
case 2117:
case 2664:
case 3119:
case 212:
case 3288:
case 129:
case 3817:
case 1178:
case 3390:
case 3009:
case 121:
case 1664:
case 2730:
case 2109:
case 2956:
case 2624:
case 3225:
case 2287:
case 2513:
case 2554:
case 3620:
case 456:
case 3538:
case 1848:
case 1954:
case 3857:
case 3047:
case 3867:
case 1957:
case 1233:
case 782:
case 4058:
case 3106:
case 326:
case 2175:
case 865:
case 3090:
case 3559:
case 1737:
case 480:
case 2010:
case 2344:
case 929:
case 3958:
case 1862:
case 543:
case 3310:
case 3272:
case 963:
case 1374:
case 530:
case 3673:
case 2043:
case 67:
case 1587:
case 1153:
case 1363:
case 1009:
case 54:
case 3544:
case 787:
case 1246:
case 1316:
case 1700:
case 2201:
case 2292:
case 1575:
case 2138:
case 3431:
case 1952:
case 3694:
case 1932:
case 3176:
case 2035:
case 1690:
case 3342:
case 1841:
case 2455:
case 1544:
case 932:
case 158:
case 4037:
case 3591:
case 12:
case 2300:
case 656:
case 3199:
case 3642:
case 2841:
case 1715:
case 112:
case 1685:
case 1449:
case 2852:
case 1807:
case 2155:
case 3813:
case 3066:
case 1318:
case 3278:
case 1237:
case 3113:
case 2229:
case 2732:
case 2791:
case 3414:
case 1677:
case 3994:
case 196:
case 893:
case 2432:
case 42:
case 381:
case 880:
case 1119:
case 3386:
case 986:
case 1667:
case 3638:
case 3939:
case 2236:
case 1362:
case 3886:
case 1383:
case 3262:
case 3008:
case 3957:
case 2639:
case 2464:
case 884:
case 1395:
case 2205:
case 674:
case 270:
case 3361:
case 520:
case 226:
case 3372:
case 2879:
case 164:
case 3951:
case 1438:
case 1941:
case 744:
case 4:
case 195:
case 2402:
case 3457:
case 447:
case 2453:
case 3749:
case 2555:
case 778:
case 2816:
case 3827:
case 2262:
case 2969:
case 3947:
case 2948:
case 2394:
case 2040:
case 3122:
case 64:
case 1911:
case 1389:
case 670:
case 486:
case 3592:
case 1197:
case 1392:
case 4054:
case 216:
case 1487:
case 1387:
case 2415:
case 3273:
case 2037:
case 3678:
case 994:
case 2301:
case 2900:
case 5:
case 1576:
case 135:
case 599:
case 1244:
case 2246:
case 1520:
case 361:
case 3547:
case 903:
case 3284:
case 4033:
case 850:
case 2990:
case 1948:
case 1341:
case 3616:
case 1488:
case 2873:
case 3280:
case 250:
case 2004:
case 1016:
case 3307:
case 1166:
case 2178:
case 160:
case 405:
case 2823:
case 3582:
case 3385:
case 1366:
case 4009:
case 2102:
case 3371:
case 2578:
case 555:
case 2886:
case 2865:
case 2403:
case 3153:
case 644:
case 1370:
case 640:
case 2825:
case 2991:
case 591:
case 2786:
case 1514:
case 2679:
case 759:
case 2792:
case 933:
case 2920:
case 3551:
case 3974:
case 2540:
case 3000:
case 1944:
case 1603:
case 2845:
case 3594:
case 1049:
case 2987:
case 2356:
case 3687:
case 113:
case 3665:
case 1695:
case 1017:
case 2278:
case 2756:
case 1274:
case 3952:
case 1805:
case 1010:
case 2088:
case 2282:
case 3079:
case 764:
case 2187:
case 1972:
case 31:
case 2575:
case 784:
case 3837:
case 1504:
case 2794:
case 2715:
case 3019:
case 731:
case 218:
case 3141:
case 2251:
case 1857:
case 3015:
case 3482:
case 3933:
case 1007:
case 1105:
case 4021:
case 1346:
case 4085:
case 3246:
case 2133:
case 2719:
case 3804:
case 1987:
case 1298:
case 14:
case 170:
case 4016:
case 197:
case 1188:
case 2273:
case 1066:
case 1177:
case 1149:
case 907:
case 4001:
case 1201:
case 544:
case 44:
case 32:
case 676:
case 4086:
case 3419:
case 3610:
case 429:
case 339:
case 825:
case 2313:
case 972:
case 3901:
case 2296:
case 3798:
case 2150:
case 547:
case 3876:
case 1885:
case 1477:
case 368:
case 3020:
case 3222:
case 2548:
case 679:
case 999:
case 2055:
case 2294:
case 1139:
case 3811:
case 1081:
case 2951:
case 3243:
case 628:
case 458:
case 1650:
case 1100:
case 3997:
case 3455:
case 3013:
case 3023:
case 309:
case 2691:
case 483:
case 3718:
case 3270:
case 425:
case 1329:
case 1646:
case 1340:
case 4057:
case 768:
case 1586:
case 485:
case 3056:
case 1348:
case 3781:
case 1819:
case 2239:
case 2473:
case 1577:
case 130:
case 939:
case 2559:
case 1309:
case 2595:
case 2345:
case 1319:
case 1390:
case 1293:
case 263:
case 632:
case 3523:
case 917:
case 3374:
case 1483:
case 538:
case 2614:
case 4064:
case 3895:
case 1074:
case 284:
case 1425:
case 2658:
case 3072:
case 3185:
case 3295:
case 1260:
case 3285:
case 2645:
case 518:
case 1115:
case 1969:
case 1164:
case 2566:
case 328:
case 215:
case 3907:
case 3762:
case 3368:
case 2628:
case 3358:
case 1440:
case 633:
case 217:
case 1558:
case 2949:
case 988:
case 108:
case 1691:
case 2352:
case 2195:
case 931:
case 2517:
case 4026:
case 273:
case 2986:
case 1712:
case 1904:
case 3420:
case 1011:
case 257:
case 123:
case 305:
case 1515:
case 4083:
case 1924:
case 3497:
case 1113:
case 3878:
case 791:
case 3509:
case 3396:
case 3016:
case 1732:
case 2235:
case 2649:
case 455:
case 161:
case 1032:
case 1432:
case 1507:
case 975:
case 535:
case 3493:
case 3705:
case 1853:
case 1281:
case 1063:
case 3245:
case 408:
case 3659:
case 514:
case 2924:
case 843:
case 269:
case 3785:
case 3212:
case 297:
case 2700:
case 522:
case 3392:
case 323:
case 2800:
case 1118:
case 3775:
case 1596:
case 1876:
case 835:
case 984:
case 3756:
case 327:
case 1284:
case 3566:
case 2635:
case 862:
case 2009:
case 2266:
case 584:
case 3863:
case 2075:
case 2283:
case 3733:
case 2389:
case 3104:
case 3751:
case 3301:
case 3155:
case 1056:
case 3944:
case 1809:
case 366:
case 3154:
case 1634:
case 1744:
case 1689:
case 2125:
case 3908:
case 4005:
case 615:
case 1151:
case 2121:
case 2429:
case 423:
case 2972:
case 750:
case 13:
case 2652:
case 3182:
case 4074:
case 3189:
case 2809:
case 2269:
case 3347:
case 3477:
case 1222:
case 2122:
case 2587:
case 118:
case 2241:
case 453:
case 3352:
case 169:
case 260:
case 690:
case 1097:
case 1655:
case 2514:
case 2491:
case 1535:
case 1538:
case 1539:
case 828:
case 71:
case 1145:
case 2197:
case 925:
case 1606:
case 856:
case 2314:
case 362:
case 1382:
case 99:
case 1782:
case 3526:
case 2760:
case 149:
case 171:
case 1822:
case 2290:
case 1170:
case 1867:
case 718:
case 3233:
case 2612:
case 2542:
case 2913:
case 474:
case 2144:
case 3430:
case 3507:
case 141:
case 3206:
case 454:
case 138:
case 3601:
case 2028:
case 1961:
case 2215:
case 1960:
case 3445:
case 813:
case 66:
case 1729:
case 3588:
case 1595:
case 1516:
case 2598:
case 882:
case 1946:
case 2457:
case 849:
case 1301:
case 1776:
case 614:
case 2790:
case 1906:
case 1300:
case 3187:
case 2078:
case 179:
case 3748:
case 3452:
case 3502:
case 1608:
case 3408:
case 303:
case 967:
case 1031:
case 1749:
case 695:
case 2331:
case 2237:
case 2772:
case 2596:
case 627:
case 3953:
case 987:
case 897:
case 2896:
case 3963:
case 2207:
case 1214:
case 1739:
case 3712:
case 2255:
case 2844:
case 2885:
case 1977:
case 2777:
case 3883:
case 3160:
case 1510:
case 227:
case 3467:
case 2211:
case 3697:
case 2311:
case 3059:
case 3679:
case 3932:
case 2094:
case 3511:
case 210:
case 1951:
case 1277:
case 693:
case 2862:
case 3228:
case 2871:
case 1399:
case 2492:
case 659:
case 2060:
case 2400:
case 3631:
case 2433:
case 3823:
case 36:
case 1451:
case 59:
case 957:
case 966:
case 2417:
case 198:
case 1861:
case 4048:
case 3510:
case 3713:
case 473:
case 3465:
case 1657:
case 94:
case 1625:
case 1497:
case 1686:
case 1988:
case 3668:
case 3909:
case 1583:
case 3690:
case 342:
case 1356:
case 717:
case 3351:
case 1087:
case 3078:
case 2308:
case 1286:
case 61:
case 1182:
case 2045:
case 1484:
case 3365:
case 2416:
case 1950:
case 3820:
case 3308:
case 1832:
case 2325:
case 2768:
case 2032:
case 3556:
case 2406:
case 1090:
case 3834:
case 3470:
case 1059:
case 40:
case 3125:
case 95:
case 2363:
case 2600:
case 2916:
case 86:
case 1269:
case 511:
case 1635:
case 2434:
case 3123:
case 4081:
case 1459:
case 619:
case 2758:
case 2903:
case 3472:
case 1414:
case 3693:
case 111:
case 3214:
case 1243:
case 3205:
case 3645:
case 2469:
case 2907:
case 2718:
case 26:
case 1797:
case 3822:
case 3051:
case 1261:
case 1825:
case 870:
case 3664:
case 1055:
case 3649:
case 1292:
case 2803:
case 3765:
case 1707:
case 730:
case 391:
case 3053:
case 3924:
case 394:
case 1018:
case 3458:
case 6:
case 767:
case 1330:
case 3017:
case 2519:
case 3074:
case 3514:
case 2267:
case 1682:
case 1792:
case 550:
case 1375:
case 832:
case 238:
case 3303:
case 3780:
case 1597:
case 3127:
case 3778:
case 3149:
case 1916:
case 3296:
case 3450:
case 574:
case 2087:
case 2151:
case 45:
case 1970:
case 1381:
case 2692:
case 2908:
case 3579:
case 712:
case 436:
case 714:
case 635:
case 1973:
case 1353:
case 1883:
case 2096:
case 2646:
case 3259:
case 3197:
case 1283:
case 1361:
case 799:
case 1771:
case 1458:
case 757:
case 2869:
case 1930:
case 3632:
case 2745:
case 738:
case 777:
case 1339:
case 3382:
case 1043:
case 3630:
case 1320:
case 223:
case 1102:
case 4077:
case 4088:
case 3239:
case 2577:
case 2234:
case 2250:
case 444:
case 1991:
case 1818:
case 211:
case 1044:
case 982:
case 3760:
case 3654:
case 2606:
case 2442:
case 3416:
case 776:
case 1798:
case 4039:
case 3935:
case 145:
case 891:
case 1267:
case 1875:
case 2904:
case 3186:
case 3109:
case 587:
case 334:
case 3851:
case 1624:
case 840:
case 98:
case 1518:
case 4090:
case 2332:
case 2080:
case 231:
case 1194:
case 3661:
case 3006:
case 1580:
case 662:
case 1163:
case 2017:
case 1169:
case 4011:
case 1738:
case 1779:
case 317:
case 3293:
case 1200:
case 1123:
case 3067:
case 1143:
case 2733:
case 837:
case 3050:
case 2166:
case 507:
case 2529:
case 117:
case 1659:
case 2110:
case 1397:
case 3854:
case 3379:
case 745:
case 2132:
case 463:
case 140:
case 1495:
case 3543:
case 3075:
case 2615:
case 2118:
case 669:
case 1128:
case 3031:
case 808:
case 1206:
case 2988:
case 910:
case 1639:
case 3432:
case 866:
case 1784:
case 516:
case 424:
case 949:
case 1168:
case 697:
case 2018:
case 3722:
case 1512:
case 186:
case 174:
case 2611:
case 4079:
case 222:
case 626:
case 475:
case 2580:
case 1172:
case 3991:
case 1250:
case 147:
case 723:
case 3010:
case 1582:
case 2971:
case 908:
case 1628:
case 414:
case 148:
case 2081:
case 1651:
case 970:
case 3327:
case 1384:
case 2731:
case 3204:
case 1404:
case 1720:
case 1310:
case 1542:
case 3435:
case 684:
case 28:
case 4068:
case 1559:
case 3604:
case 719:
case 131:
case 1591:
case 1509:
case 812:
case 521:
case 1878:
case 412:
case 1391:
case 1152:
case 1140:
case 3218:
case 2753:
case 2082:
case 464:
case 647:
case 3515:
case 3481:
case 1050:
case 110:
case 1302:
case 2562:
case 3282:
case 1085:
case 1754:
case 1881:
case 3776:
case 3322:
case 1473:
case 1421:
case 3337:
case 1803:
case 2813:
case 38:
case 2184:
case 3391:
case 2336:
case 1476:
case 1649:
case 3012:
case 154:
case 955:
case 2749:
case 4056:
case 857:
case 435:
case 502:
case 1144:
case 1637:
case 202:
case 1027:
case 2674:
case 1282:
case 3084:
case 387:
case 1486:
case 3750:
case 1180:
case 1424:
case 1251:
case 2305:
case 740:
case 827:
case 1817:
case 941:
case 1589:
case 3615:
case 594:
case 2874:
case 1475:
case 883:
case 557:
case 2592:
case 1692:
case 3333:
case 3689:
case 1937:
case 2880:
case 1721:
case 3923:
case 30:
case 797:
case 3560:
case 3448:
case 3503:
case 3473:
case 2889:
case 1294:
case 1778:
case 2374:
case 1768:
case 3812:
case 1679:
case 2240:
case 3643:
case 1773:
case 3647:
case 3513:
case 1663:
case 1668:
case 2878:
case 2661:
case 3962:
case 1014:
case 742:
case 205:
case 2663:
case 2654:
case 3405:
case 3897:
case 3236:
case 1654:
case 1003:
case 1259:
case 833:
case 1332:
case 3790:
case 1162:
case 2564:
case 1843:
case 1871:
case 2888:
case 1431:
case 1694:
case 251:
case 2698:
case 1403:
case 2627:
case 3567:
case 4030:
case 1071:
case 3959:
case 410:
case 3134:
case 2589:
case 2937:
case 1828:
case 847:
case 2985:
case 3410:
case 2092:
case 720:
case 848:
case 3931:
case 2522:
case 2069:
case 3971:
case 3456:
case 3366:
case 65:
case 3893:
case 1336:
case 953:
case 165:
case 168:
case 4034:
case 909:
case 1770:
case 389:
case 1232:
case 3979:
case 62:
case 1333:
case 2929:
case 2545:
case 4078:
case 1824:
case 209:
case 2826:
case 2260:
case 2552:
case 1917:
case 2049:
case 969:
case 3172:
case 505:
case 2638:
case 392:
case 3037:
case 1705:
case 3528:
case 2034:
case 3362:
case 920:
case 247:
case 3708:
case 822:
case 2147:
case 596:
case 1161:
case 1317:
case 1433:
case 3485:
case 2111:
case 2012:
case 3698:
case 1763:
case 680:
case 2898:
case 2227:
case 2558:
case 2675:
case 1981:
case 3521:
case 3613:
case 1842:
case 1469:
case 1688:
case 120:
case 1735:
case 2436:
case 3805:
case 2818:
case 3360:
case 510:
case 3459:
case 922:
case 22:
case 3574:
case 1838:
case 4071:
case 3495:
case 92:
case 1923:
case 2534:
case 407:
case 376:
case 1226:
case 3563:
case 294:
case 3058:
case 2349:
case 2831:
case 3516:
case 1247:
case 3598:
case 3294:
case 1186:
case 795:
case 2863:
case 3129:
case 3429:
case 1345:
case 709:
case 1088:
case 1039:
case 3584:
case 1870:
case 1647:
case 646:
case 3345:
case 2124:
case 1287:
case 2219:
case 1379:
case 2569:
case 4092:
case 1204:
case 2005:
case 2820:
case 1897:
case 2471:
case 2637:
case 3695:
case 181:
case 3097:
case 1015:
case 2902:
case 4027:
case 442:
case 1242:
case 2386:
case 4003:
case 1777:
case 1069:
case 3167:
case 527:
case 760:
case 248:
case 422:
case 798:
case 437:
case 4017:
case 3662:
case 1898:
case 1877:
case 2953:
case 4082:
case 427:
case 944:
case 1187:
case 3777:
case 1678:
case 3258:
case 3469:
case 3546:
case 996:
case 2481:
case 3607:
case 2259:
case 2808:
case 898:
case 1767:
case 653:
case 3768:
case 1753:
case 2153:
case 255:
case 1965:
case 23:
case 357:
case 180:
case 2850:
case 3646:
case 2101:
case 1673:
case 363:
case 159:
case 2722:
case 864:
case 285:
case 3799:
case 3644:
case 3966:
case 977:
case 2549:
case 3086:
case 3174:
case 3989:
case 1968:
case 803:
case 1945:
case 3063:
case 2456:
case 2829:
case 1531:
case 3108:
case 2640:
case 1609:
case 554:
case 230:
case 1638:
case 3341:
case 3255:
case 698:
case 1004:
case 1327:
case 254:
case 563:
case 2047:
case 2072:
case 3018:
case 3054:
case 1833:
case 2279:
case 283:
case 1903:
case 1024:
case 3619:
case 906:
case 3117:
case 568:
case 1354:
case 2550:
case 3092:
case 1899:
case 2179:
case 1405:
case 3128:
case 3033:
case 1173:
case 1411:
case 3094:
case 938:
case 1038:
case 3568:
case 1415:
case 3057:
case 1789:
case 2833:
case 753:
case 3499:
case 1075:
case 3961:
case 3915:
case 2725:
case 3163:
case 347:
case 2053:
case 902:
case 188:
case 3151:
case 546:
case 2135:
case 2074:
case 2838:
case 1755:
case 1829:
case 2855:
case 1717:
case 1521:
case 2050:
case 2914:
case 3975:
case 494:
case 3596:
case 621:
case 1114:
case 3714:
case 681:
case 3918:
case 1134:
case 2467:
case 4031:
case 3355:
case 234:
case 2553:
case 3810:
case 1155:
case 3483:
case 783:
case 556:
case 1001:
case 1555:
case 3743:
case 630:
case 2955:
case 1697:
case 1569:
case 4024:
case 2029:
case 998:
case 2263:
case 63:
case 1159:
case 2315:
case 1727:
case 2866:
case 1708:
case 3888:
case 3220:
case 1212:
case 2192:
case 2893:
case 3835:
case 3508:
case 1427:
case 2828:
case 824:
case 472:
case 1648:
case 2030:
case 3297:
case 3492:
case 3586:
case 1279:
case 3783:
case 315:
case 766:
case 1834:
case 2439:
case 3745:
case 3030:
case 2441:
case 2502:
case 3741:
case 3920:
case 3821:
case 1584:
case 213:
case 178:
case 1266:
case 3650:
case 1388:
case 2846:
case 3044:
case 2382:
case 2446:
case 3842:
case 3384:
case 3022:
case 3984:
case 1278:
case 2426:
case 2752:
case 1856:
case 1062:
case 384:
case 3549:
case 3609:
case 945:
case 3910:
case 2120:
case 4080:
case 651:
case 1416:
case 3139:
case 1103:
case 2107:
case 3565:
case 1175:
case 504:
case 2482:
case 3400:
case 3232:
case 1772:
case 2385:
case 3298:
case 1265:
case 1052:
case 1993:
case 1759:
case 2584:
case 2391:
case 1231:
case 2405:
case 1571:
case 2699:
case 128:
case 3411:
case 19:
case 2630:
case 1089:
case 106:
case 3964:
case 3808:
case 2460:
case 3268:
case 2129:
case 3956:
case 3742:
case 1501:
case 1918:
case 1470:
case 3444:
case 1503:
case 3098:
case 1572:
case 2249:
case 532:
case 1485:
case 430:
case 137:
case 2570:
case 2462:
case 2512:
case 1253:
case 104:
case 1633:
case 1554:
case 1349:
case 2867:
case 3978:
case 3148:
case 4069:
case 1846:
case 220:
case 2411:
case 1141:
case 3934:
case 2641:
case 300:
case 1808:
case 552:
case 1607:
case 3169:
case 2177:
case 462:
case 3001:
case 3077:
case 3738:
case 1189:
case 3202:
case 671:
case 1035:
case 3140:
case 2746:
case 2449:
case 688:
case 1552:
case 307:
case 1526:
case 193:
case 2795:
case 151:
case 2443:
case 1174:
case 1073:
case 3274:
case 3471:
case 299:
case 1714:
case 1733:
case 2126:
case 3441:
case 564:
case 4002:
case 2387:
case 2189:
case 691:
case 603:
case 1548:
case 2970:
case 2625:
case 2775:
case 2856:
case 2265:
case 2430:
case 3759:
case 2834:
case 2954:
case 3120:
case 3025:
case 503:
case 2371:
case 3948:
case 769:
case 2123:
case 258:
case 553:
case 558:
case 3029:
case 1255:
case 3096:
case 2113:
case 2515:
case 3711:
case 1008:
case 1528:
case 728:
case 2076:
case 623:
case 913:
case 2576:
case 2372:
case 871:
case 360:
case 2254:
case 2547:
case 1023:
case 2697:
case 1442:
case 2461:
case 1882:
case 1741:
case 2086:
case 668:
case 2485:
case 69:
case 636:
case 904:
case 2146:
case 3950:
case 1910:
case 2673:
case 2350:
case 3036:
case 528:
case 3207:
case 991:
case 1879:
case 3305:
case 3870:
case 2341:
case 3238:
case 289:
case 3462:
case 264:
case 335:
case 2568:
case 3375:
case 1437:
case 162:
case 3209:
case 2487:
case 467:
case 1743:
case 1215:
case 3772:
case 415:
case 2343:
case 3024:
case 2347:
case 2851:
case 1787:
case 841:
case 1396:
case 1468:
case 3332:
case 1412:
case 869:
case 823:
case 459:
case 2601:
case 1419:
case 3353:
case 1124:
case 3581:
case 3875:
case 3344:
case 2006:
case 525:
case 3099:
case 2810:
case 3691:
case 1579:
case 3949:
case 353:
case 3348:
case 3680:
case 1959:
case 3261:
case 2079:
case 993:
case 2690:
case 2702:
case 699:
case 678:
case 3484:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1660449602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,];
var gg_b = "1660446001/";

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
