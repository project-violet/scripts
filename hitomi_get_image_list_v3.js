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
case 626:
case 1932:
case 3473:
case 248:
case 3690:
case 4069:
case 2632:
case 191:
case 1690:
case 3991:
case 106:
case 765:
case 399:
case 3505:
case 1606:
case 2041:
case 1534:
case 1051:
case 1011:
case 3308:
case 1118:
case 1318:
case 753:
case 534:
case 1967:
case 1122:
case 213:
case 896:
case 2980:
case 2140:
case 2141:
case 636:
case 1453:
case 2373:
case 3239:
case 3234:
case 2227:
case 3407:
case 962:
case 3557:
case 2282:
case 3490:
case 1319:
case 2423:
case 2170:
case 2305:
case 977:
case 1391:
case 350:
case 601:
case 1720:
case 1306:
case 385:
case 294:
case 1182:
case 1341:
case 1289:
case 192:
case 3848:
case 3896:
case 2262:
case 3599:
case 3815:
case 2417:
case 3651:
case 2053:
case 2725:
case 1706:
case 414:
case 978:
case 1646:
case 232:
case 462:
case 2634:
case 737:
case 3424:
case 1063:
case 1915:
case 1124:
case 2701:
case 801:
case 870:
case 2479:
case 3673:
case 682:
case 168:
case 2769:
case 4062:
case 950:
case 2046:
case 2828:
case 2106:
case 3610:
case 1241:
case 60:
case 502:
case 1013:
case 1046:
case 1527:
case 2806:
case 3589:
case 2935:
case 914:
case 3337:
case 2883:
case 257:
case 2184:
case 3157:
case 2380:
case 3295:
case 3419:
case 3079:
case 3191:
case 162:
case 2433:
case 382:
case 87:
case 96:
case 431:
case 3753:
case 1493:
case 3567:
case 2510:
case 803:
case 3762:
case 3546:
case 2029:
case 4086:
case 417:
case 2824:
case 2447:
case 403:
case 1500:
case 516:
case 2943:
case 2736:
case 4078:
case 2211:
case 1750:
case 2608:
case 553:
case 3909:
case 3738:
case 2646:
case 2436:
case 3982:
case 2015:
case 1902:
case 3594:
case 856:
case 699:
case 270:
case 2561:
case 2916:
case 482:
case 820:
case 4039:
case 3465:
case 1376:
case 3821:
case 2768:
case 439:
case 2381:
case 1299:
case 3326:
case 4058:
case 3803:
case 1741:
case 2421:
case 201:
case 2906:
case 3712:
case 1652:
case 2570:
case 1746:
case 3040:
case 2273:
case 1624:
case 3179:
case 3190:
case 284:
case 3808:
case 3227:
case 1864:
case 3873:
case 3003:
case 1410:
case 3954:
case 2582:
case 3802:
case 1713:
case 2259:
case 1165:
case 4021:
case 2713:
case 352:
case 2671:
case 3148:
case 565:
case 1769:
case 2414:
case 442:
case 3186:
case 155:
case 2753:
case 2761:
case 2246:
case 1459:
case 3932:
case 720:
case 1384:
case 491:
case 2910:
case 1997:
case 1292:
case 1270:
case 418:
case 1430:
case 2954:
case 983:
case 939:
case 2997:
case 3770:
case 3069:
case 845:
case 4001:
case 1212:
case 2971:
case 2623:
case 570:
case 2042:
case 1906:
case 3153:
case 2406:
case 3275:
case 2581:
case 2727:
case 3265:
case 1112:
case 527:
case 1017:
case 3386:
case 3388:
case 985:
case 460:
case 1061:
case 1393:
case 2527:
case 630:
case 1131:
case 1333:
case 1710:
case 1614:
case 2171:
case 3812:
case 2836:
case 552:
case 2777:
case 2774:
case 739:
case 2003:
case 2210:
case 426:
case 667:
case 2895:
case 1495:
case 2137:
case 2059:
case 117:
case 1012:
case 1987:
case 1962:
case 2366:
case 639:
case 3108:
case 3314:
case 159:
case 2395:
case 2056:
case 3509:
case 3779:
case 197:
case 1510:
case 3451:
case 1120:
case 768:
case 772:
case 3582:
case 2034:
case 2060:
case 3899:
case 596:
case 1254:
case 2848:
case 2351:
case 2696:
case 1048:
case 3144:
case 3988:
case 1793:
case 509:
case 1278:
case 2346:
case 2164:
case 3708:
case 370:
case 47:
case 1620:
case 2213:
case 163:
case 3394:
case 3136:
case 18:
case 2069:
case 298:
case 3553:
case 1030:
case 2912:
case 3273:
case 422:
case 1172:
case 1040:
case 2091:
case 3321:
case 3592:
case 1219:
case 371:
case 3059:
case 310:
case 466:
case 2583:
case 3117:
case 3721:
case 757:
case 115:
case 3418:
case 1351:
case 1187:
case 1893:
case 2698:
case 3046:
case 3717:
case 1021:
case 2884:
case 3658:
case 3038:
case 3494:
case 3032:
case 474:
case 2236:
case 3421:
case 3075:
case 3200:
case 3515:
case 494:
case 1968:
case 1043:
case 1560:
case 1601:
case 16:
case 2886:
case 893:
case 3869:
case 2374:
case 2864:
case 2951:
case 3412:
case 2186:
case 2519:
case 872:
case 4002:
case 2609:
case 3014:
case 3169:
case 1429:
case 339:
case 1135:
case 3921:
case 3838:
case 3163:
case 877:
case 3880:
case 141:
case 984:
case 3718:
case 1566:
case 3313:
case 1514:
case 1834:
case 1445:
case 62:
case 2333:
case 1848:
case 1083:
case 1316:
case 2224:
case 4095:
case 430:
case 2799:
case 1670:
case 1585:
case 1428:
case 3235:
case 3929:
case 2968:
case 3078:
case 1972:
case 321:
case 2448:
case 930:
case 179:
case 1056:
case 937:
case 876:
case 1095:
case 3787:
case 35:
case 2559:
case 3090:
case 3701:
case 2697:
case 3785:
case 2129:
case 3731:
case 666:
case 2669:
case 2555:
case 873:
case 694:
case 1245:
case 571:
case 3583:
case 2088:
case 290:
case 3013:
case 919:
case 3872:
case 2021:
case 2986:
case 992:
case 1873:
case 3181:
case 3516:
case 535:
case 2683:
case 3560:
case 44:
case 3777:
case 634:
case 744:
case 3607:
case 127:
case 2416:
case 2267:
case 987:
case 3591:
case 19:
case 966:
case 2462:
case 3211:
case 1448:
case 108:
case 3724:
case 1760:
case 1978:
case 2963:
case 3404:
case 3483:
case 2763:
case 3007:
case 1729:
case 2240:
case 1062:
case 2204:
case 834:
case 2027:
case 184:
case 1142:
case 2377:
case 3885:
case 2431:
case 2112:
case 114:
case 2660:
case 1910:
case 484:
case 1213:
case 2430:
case 3048:
case 2767:
case 702:
case 3670:
case 1536:
case 508:
case 3347:
case 941:
case 265:
case 716:
case 2084:
case 3795:
case 1085:
case 66:
case 3694:
case 2691:
case 1676:
case 2772:
case 1235:
case 396:
case 4090:
case 3332:
case 3656:
case 2588:
case 177:
case 3450:
case 512:
case 1403:
case 1919:
case 3037:
case 3074:
case 1894:
case 884:
case 3217:
case 1667:
case 4047:
case 1596:
case 3750:
case 2983:
case 1106:
case 3086:
case 2784:
case 1809:
case 2638:
case 3436:
case 2428:
case 2899:
case 2365:
case 1458:
case 2156:
case 1718:
case 381:
case 2071:
case 3311:
case 2177:
case 3384:
case 3884:
case 1091:
case 3793:
case 1108:
case 1472:
case 604:
case 1071:
case 366:
case 814:
case 233:
case 7:
case 2283:
case 433:
case 3076:
case 2640:
case 1302:
case 789:
case 3657:
case 3809:
case 309:
case 1116:
case 1660:
case 525:
case 3328:
case 435:
case 3639:
case 2386:
case 3981:
case 1305:
case 1941:
case 1151:
case 2932:
case 49:
case 3427:
case 1348:
case 910:
case 3958:
case 1072:
case 749:
case 2326:
case 1533:
case 2680:
case 3939:
case 3439:
case 1477:
case 3586:
case 651:
case 2950:
case 3004:
case 1412:
case 1374:
case 3825:
case 3452:
case 2703:
case 3983:
case 2520:
case 1740:
case 1881:
case 1078:
case 2391:
case 3333:
case 632:
case 721:
case 3292:
case 3495:
case 2396:
case 1742:
case 3497:
case 2966:
case 794:
case 1101:
case 1683:
case 1107:
case 3024:
case 890:
case 445:
case 2457:
case 2944:
case 974:
case 451:
case 272:
case 1579:
case 3300:
case 3083:
case 2009:
case 2941:
case 2115:
case 1175:
case 3475:
case 1169:
case 1285:
case 2689:
case 1249:
case 922:
case 3596:
case 4089:
case 3446:
case 3398:
case 448:
case 2553:
case 1027:
case 3011:
case 1930:
case 1248:
case 1484:
case 3908:
case 189:
case 2318:
case 1714:
case 3449:
case 612:
case 241:
case 551:
case 1756:
case 2090:
case 1759:
case 1466:
case 2766:
case 1934:
case 322:
case 27:
case 1708:
case 678:
case 2585:
case 3316:
case 957:
case 3822:
case 384:
case 1593:
case 3066:
case 1034:
case 4004:
case 2874:
case 2208:
case 776:
case 283:
case 2451:
case 3654:
case 306:
case 1039:
case 77:
case 1736:
case 3971:
case 1950:
case 3365:
case 39:
case 1600:
case 464:
case 2528:
case 1724:
case 228:
case 807:
case 3866:
case 1725:
case 3061:
case 1441:
case 208:
case 3263:
case 1047:
case 1438:
case 2721:
case 1211:
case 3290:
case 185:
case 2410:
case 771:
case 1416:
case 3317:
case 559:
case 3707:
case 3240:
case 810:
case 50:
case 2393:
case 3773:
case 17:
case 3030:
case 1198:
case 1167:
case 423:
case 929:
case 1573:
case 714:
case 2111:
case 2190:
case 853:
case 2605:
case 1522:
case 858:
case 2062:
case 2484:
case 1049:
case 1291:
case 46:
case 774:
case 128:
case 1790:
case 1130:
case 1783:
case 3409:
case 1679:
case 3026:
case 332:
case 3767:
case 2087:
case 2002:
case 2181:
case 2441:
case 701:
case 3373:
case 2477:
case 2035:
case 3249:
case 1300:
case 1309:
case 2299:
case 1674:
case 2397:
case 543:
case 2459:
case 2900:
case 1594:
case 3879:
case 3361:
case 927:
case 4035:
case 3655:
case 1494:
case 3888:
case 2051:
case 2764:
case 1127:
case 662:
case 330:
case 3956:
case 1186:
case 1203:
case 848:
case 2530:
case 209:
case 1033:
case 664:
case 2514:
case 137:
case 2624:
case 2364:
case 375:
case 3293:
case 2260:
case 762:
case 267:
case 3054:
case 2263:
case 550:
case 2547:
case 3677:
case 3736:
case 1498:
case 3739:
case 244:
case 313:
case 231:
case 3057:
case 2666:
case 1634:
case 446:
case 3222:
case 3381:
case 360:
case 3070:
case 2453:
case 2749:
case 3919:
case 4050:
case 1419:
case 3570:
case 670:
case 495:
case 2862:
case 1368:
case 2390:
case 708:
case 3109:
case 2219:
case 1141:
case 3550:
case 3618:
case 2408:
case 274:
case 3460:
case 4020:
case 3563:
case 3826:
case 3710:
case 1366:
case 480:
case 1506:
case 2748:
case 793:
case 1395:
case 3088:
case 3598:
case 3095:
case 2313:
case 769:
case 3609:
case 2353:
case 5:
case 1888:
case 1329:
case 424:
case 2564:
case 3715:
case 1258:
case 2536:
case 2392:
case 2081:
case 3142:
case 2903:
case 1529:
case 1722:
case 1444:
case 2261:
case 583:
case 1925:
case 421:
case 3878:
case 2594:
case 2915:
case 3816:
case 3197:
case 717:
case 1088:
case 489:
case 3164:
case 548:
case 4075:
case 29:
case 988:
case 784:
case 2845:
case 510:
case 3924:
case 3015:
case 94:
case 1695:
case 1528:
case 2896:
case 895:
case 2329:
case 1313:
case 150:
case 1214:
case 327:
case 221:
case 116:
case 1733:
case 3395:
case 3360:
case 2180:
case 1792:
case 815:
case 341:
case 2704:
case 412:
case 3608:
case 1921:
case 2505:
case 343:
case 1109:
case 2121:
case 511:
case 2331:
case 86:
case 2248:
case 3008:
case 1764:
case 3705:
case 643:
case 485:
case 611:
case 2482:
case 1805:
case 3646:
case 425:
case 1726:
case 2162:
case 1504:
case 2032:
case 2005:
case 1959:
case 3420:
case 1312:
case 674:
case 3945:
case 3238:
case 358:
case 677:
case 82:
case 2278:
case 1282:
case 3965:
case 37:
case 655:
case 1446:
case 10:
case 455:
case 671:
case 3478:
case 1629:
case 469:
case 2187:
case 3366:
case 593:
case 3633:
case 817:
case 237:
case 2574:
case 2359:
case 3968:
case 1811:
case 3350:
case 3104:
case 1735:
case 2468:
case 3353:
case 132:
case 1290:
case 3119:
case 2953:
case 2289:
case 2975:
case 1768:
case 2746:
case 1550:
case 2490:
case 6:
case 615:
case 1147:
case 2825:
case 2803:
case 1326:
case 1568:
case 1571:
case 97:
case 3335:
case 280:
case 3319:
case 238:
case 2058:
case 3722:
case 3987:
case 3474:
case 3307:
case 1129:
case 1350:
case 1815:
case 323:
case 3358:
case 2715:
case 3854:
case 709:
case 1275:
case 3284:
case 1772:
case 538:
case 3944:
case 1195:
case 4082:
case 1745:
case 781:
case 1433:
case 3:
case 802:
case 680:
case 2474:
case 3966:
case 152:
case 461:
case 3967:
case 183:
case 1396:
case 4077:
case 3502:
case 276:
case 3641:
case 1426:
case 2762:
case 2076:
case 2264:
case 3554:
case 3479:
case 2371:
case 2330:
case 2493:
case 3102:
case 2765:
case 3962:
case 617:
case 4023:
case 1650:
case 2401:
case 2253:
case 3277:
case 3370:
case 826:
case 3737:
case 2050:
case 305:
case 2794:
case 2304:
case 3877:
case 1364:
case 2134:
case 2153:
case 3524:
case 1115:
case 2846:
case 960:
case 2743:
case 1311:
case 3204:
case 2780:
case 880:
case 3937:
case 2149:
case 1886:
case 2729:
case 304:
case 3379:
case 597:
case 1242:
case 2880:
case 934:
case 1641:
case 1470:
case 1944:
case 1662:
case 407:
case 118:
case 58:
case 3902:
case 427:
case 3220:
case 2668:
case 2840:
case 2132:
case 1044:
case 1481:
case 175:
case 1991:
case 697:
case 3406:
case 1575:
case 638:
case 3440:
case 2717:
case 654:
case 120:
case 2312:
case 52:
case 3367:
case 897:
case 505:
case 3298:
case 3576:
case 2856:
case 156:
case 2089:
case 1737:
case 3106:
case 1609:
case 2315:
case 695:
case 901:
case 2776:
case 3925:
case 1904:
case 2358:
case 3743:
case 2641:
case 408:
case 3430:
case 1583:
case 1487:
case 1228:
case 308:
case 3012:
case 2600:
case 1885:
case 1134:
case 3296:
case 819:
case 1562:
case 1677:
case 4014:
case 292:
case 2871:
case 1295:
case 2165:
case 852:
case 1780:
case 891:
case 2786:
case 432:
case 38:
case 1287:
case 1280:
case 2251:
case 1132:
case 861:
case 130:
case 264:
case 4024:
case 2642:
case 1372:
case 1486:
case 1825:
case 2999:
case 1819:
case 1563:
case 1335:
case 584:
case 3676:
case 2411:
case 3029:
case 1936:
case 444:
case 2077:
case 3123:
case 1649:
case 3871:
case 1707:
case 1303:
case 805:
case 337:
case 3847:
case 712:
case 3389:
case 1635:
case 2800:
case 372:
case 3242:
case 3917:
case 1784:
case 2064:
case 1655:
case 949:
case 521:
case 2648:
case 579:
case 3948:
case 2347:
case 683:
case 1984:
case 3184:
case 202:
case 1369:
case 400:
case 3943:
case 3813:
case 591:
case 924:
case 311:
case 1557:
case 3202:
case 514:
case 1773:
case 2218:
case 3752:
case 599:
case 1253:
case 2446:
case 2631:
case 2792:
case 1145:
case 3952:
case 2793:
case 3336:
case 4093:
case 999:
case 2987:
case 4003:
case 2247:
case 1003:
case 4:
case 3647:
case 1218:
case 2887:
case 2178:
case 1608:
case 1866:
case 2432:
case 1762:
case 1479:
case 2543:
case 849:
case 2039:
case 907:
case 3369:
case 1938:
case 1990:
case 205:
case 3051:
case 1035:
case 688:
case 2143:
case 704:
case 2890:
case 3512:
case 2541:
case 669:
case 1751:
case 1712:
case 3669:
case 2781:
case 278:
case 2688:
case 2737:
case 3867:
case 2150:
case 2319:
case 1178:
case 2354:
case 867:
case 2571:
case 531:
case 1375:
case 1215:
case 2499:
case 2876:
case 2722:
case 3453:
case 1653:
case 1853:
case 788:
case 948:
case 1098:
case 627:
case 226:
case 3310:
case 4017:
case 2127:
case 3804:
case 12:
case 8:
case 833:
case 1462:
case 1619:
case 970:
case 3264:
case 1625:
case 700:
case 2307:
case 83:
case 2873:
case 2556:
case 1891:
case 3893:
case 1691:
case 3689:
case 1678:
case 68:
case 2503:
case 3159:
case 578:
case 1946:
case 3334:
case 333:
case 740:
case 320:
case 3005:
case 610:
case 3703:
case 2198:
case 2852:
case 2387:
case 2078:
case 67:
case 2223:
case 4010:
case 713:
case 715:
case 2579:
case 28:
case 3514:
case 951:
case 249:
case 42:
case 2973:
case 3318:
case 3747:
case 4005:
case 1317:
case 4087:
case 840:
case 1298:
case 230:
case 1251:
case 3687:
case 3374:
case 2155:
case 1973:
case 101:
case 1681:
case 3223:
case 3130:
case 3855:
case 3532:
case 3604:
case 2478:
case 933:
case 4049:
case 1871:
case 2488:
case 1561:
case 2810:
case 3760:
case 1971:
case 2110:
case 864:
case 2047:
case 3819:
case 2128:
case 2664:
case 1200:
case 2826:
case 2849:
case 2188:
case 1781:
case 1417:
case 1346:
case 3229:
case 3858:
case 1065:
case 1460:
case 2808:
case 2586:
case 2357:
case 748:
case 1378:
case 523:
case 199:
case 2928:
case 2256:
case 1604:
case 2124:
case 1622:
case 3883:
case 429:
case 1032:
case 2723:
case 4028:
case 3941:
case 1344:
case 1899:
case 1022:
case 2079:
case 3454:
case 3096:
case 3016:
case 1133:
case 775:
case 3330:
case 2145:
case 2521:
case 1192:
case 1535:
case 1844:
case 3174:
case 200:
case 2984:
case 1373:
case 2829:
case 813:
case 3533:
case 706:
case 837:
case 2004:
case 3799:
case 356:
case 2508:
case 797:
case 928:
case 2097:
case 653:
case 3432:
case 2837:
case 212:
case 3257:
case 3537:
case 2193:
case 1036:
case 2909:
case 2738:
case 1702:
case 1144:
case 679:
case 2639:
case 1521:
case 3182:
case 1748:
case 2822:
case 2266:
case 3339:
case 2991:
case 3206:
case 3709:
case 3429:
case 3556:
case 1841:
case 2226:
case 1824:
case 3978:
case 2610:
case 1225:
case 2726:
case 3720:
case 2324:
case 1931:
case 585:
case 3824:
case 1905:
case 1659:
case 1496:
case 1386:
case 78:
case 3653:
case 1163:
case 2645:
case 1826:
case 3638:
case 787:
case 3118:
case 2135:
case 105:
case 1779:
case 3864:
case 1995:
case 2185:
case 3416:
case 2472:
case 3225:
case 3833:
case 3621:
case 2061:
case 2925:
case 526:
case 719:
case 2476:
case 3573:
case 376:
case 63:
case 1577:
case 2557:
case 3000:
case 3170:
case 2878:
case 1705:
case 2495:
case 3052:
case 573:
case 3784:
case 3579:
case 2788:
case 3711:
case 3605:
case 1673:
case 3957:
case 2467:
case 1954:
case 1276:
case 660:
case 3480:
case 1952:
case 3023:
case 144:
case 2919:
case 616:
case 613:
case 1820:
case 470:
case 1389:
case 2022:
case 365:
case 2498:
case 1911:
case 3091:
case 3931:
case 1156:
case 2257:
case 792:
case 3810:
case 3894:
case 886:
case 3587:
case 1782:
case 1279:
case 1197:
case 2923:
case 1102:
case 1358:
case 1730:
case 812:
case 3726:
case 1157:
case 3759:
case 404:
case 149:
case 3112:
case 2752:
case 4085:
case 1607:
case 301:
case 1206:
case 3247:
case 1975:
case 1345:
case 2389:
case 59:
case 547:
case 4042:
case 2496:
case 2142:
case 2626:
case 3740:
case 874:
case 1555:
case 3196:
case 1150:
case 2994:
case 3062:
case 3928:
case 1288:
case 253:
case 555:
case 883:
case 1626:
case 3994:
case 2161:
case 109:
case 756:
case 2040:
case 1505:
case 3953:
case 3093:
case 998:
case 1777:
case 3876:
case 3769:
case 61:
case 1789:
case 3536:
case 554:
case 1491:
case 1816:
case 2635:
case 2517:
case 3595:
case 1492:
case 648:
case 620:
case 2538:
case 3897:
case 2119:
case 3492:
case 3735:
case 3975:
case 1081:
case 3270:
case 3774:
case 2576:
case 3700:
case 1963:
case 589:
case 3161:
case 879:
case 1823:
case 1362:
case 1723:
case 2068:
case 291:
case 2341:
case 2025:
case 1526:
case 532:
case 1159:
case 3659:
case 689:
case 3269:
case 3632:
case 1976:
case 3636:
case 831:
case 3135:
case 378:
case 2045:
case 915:
case 3288:
case 1543:
case 1113:
case 2159:
case 1268:
case 3124:
case 465:
case 2540:
case 349:
case 3665:
case 3980:
case 4018:
case 2265:
case 1576:
case 3230:
case 2754:
case 3056:
case 1998:
case 2043:
case 2655:
case 2426:
case 1696:
case 2291:
case 549:
case 3207:
case 3322:
case 32:
case 4022:
case 1605:
case 492:
case 1105:
case 122:
case 2099:
case 2197:
case 2744:
case 3577:
case 763:
case 2276:
case 277:
case 3410:
case 2385:
case 2630:
case 1179:
case 3614:
case 3734:
case 259:
case 1847:
case 2946:
case 3642:
case 2827:
case 3291:
case 3692:
case 2654:
case 72:
case 45:
case 1070:
case 1685:
case 1423:
case 3566:
case 3213:
case 170:
case 1692:
case 2268:
case 3959:
case 923:
case 1749:
case 1810:
case 506:
case 3139:
case 1549:
case 113:
case 1226:
case 2676:
case 1349:
case 1531:
case 282:
case 952:
case 2230:
case 2327:
case 92:
case 2151:
case 1337:
case 963:
case 1342:
case 3027:
case 2300:
case 3624:
case 539:
case 3484:
case 2298:
case 602:
case 641:
case 1181:
case 273:
case 2894:
case 3581:
case 2863:
case 1143:
case 3329:
case 3071:
case 2838:
case 3210:
case 3558:
case 136:
case 3488:
case 2672:
case 2603:
case 687:
case 3171:
case 3252:
case 3820:
case 1277:
case 3274:
case 3063:
case 1402:
case 468:
case 3526:
case 644:
case 3499:
case 1654:
case 1465:
case 1830:
case 3422:
case 3951:
case 3413:
case 2567:
case 85:
case 289:
case 3493:
case 1637:
case 4083:
case 1664:
case 2525:
case 329:
case 3116:
case 3622:
case 3789:
case 1304:
case 315:
case 3856:
case 2293:
case 1587:
case 1267:
case 1160:
case 2235:
case 1703:
case 3857:
case 2183:
case 1119:
case 2350:
case 2901:
case 2996:
case 1621:
case 1838:
case 2572:
case 637:
case 40:
case 98:
case 2551:
case 838:
case 2082:
case 3248:
case 1442:
case 2107:
case 2288:
case 1089:
case 1709:
case 1983:
case 1525:
case 2209:
case 3552:
case 2398:
case 2904:
case 3571:
case 2798:
case 1435:
case 3527:
case 530:
case 568:
case 2905:
case 809:
case 3085:
case 2795:
case 3489:
case 529:
case 1262:
case 3772:
case 1917:
case 860:
case 2998:
case 3974:
case 2922:
case 3836:
case 3627:
case 2250:
case 790:
case 3907:
case 1933:
case 567:
case 4031:
case 79:
case 3778:
case 367:
case 419:
case 4067:
case 2455:
case 2860:
case 1656:
case 1007:
case 346:
case 2404:
case 2791:
case 3236:
case 3031:
case 3979:
case 3892:
case 3303:
case 3244:
case 1392:
case 180:
case 3501:
case 1986:
case 3289:
case 1152:
case 216:
case 1863:
case 2182:
case 397:
case 656:
case 1890:
case 628:
case 3997:
case 314:
case 245:
case 3455:
case 515:
case 3845:
case 3019:
case 2244:
case 964:
case 3603:
case 2413:
case 3126:
case 1388:
case 2400:
case 140:
case 2518:
case 2685:
case 1352:
case 2552:
case 3018:
case 3152:
case 498:
case 133:
case 1093:
case 2851:
case 1684:
case 2272:
case 428:
case 3613:
case 851:
case 3755:
case 1413:
case 2336:
case 2094:
case 2322:
case 1613:
case 953:
case 2681:
case 2175:
case 3748:
case 3851:
case 389:
case 2597:
case 3193:
case 2842:
case 449:
case 1538:
case 3072:
case 3521:
case 2169:
case 2757:
case 647:
case 2470:
case 1697:
case 2270:
case 750:
case 2360:
case 943:
case 1173:
case 2818:
case 501:
case 1185:
case 1831:
case 2348:
case 2018:
case 2700:
case 3470:
case 885:
case 926:
case 2382:
case 1516:
case 2812:
case 157:
case 2442:
case 1574:
case 2939:
case 3900:
case 3172:
case 1842:
case 251:
case 3323:
case 2176:
case 1000:
case 629:
case 3232:
case 1532:
case 3927:
case 3702:
case 2706:
case 1817:
case 657:
case 3397:
case 3049:
case 3485:
case 3895:
case 1913:
case 2789:
case 326:
case 1642:
case 2607:
case 1717:
case 447:
case 2673:
case 1979:
case 2497:
case 1923:
case 3315:
case 2694:
case 3246:
case 2008:
case 2692:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1667613602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,];
var gg_b = "1667613602/";

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
