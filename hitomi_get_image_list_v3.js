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
case 1496:
case 3242:
case 2832:
case 2170:
case 569:
case 3173:
case 2731:
case 1515:
case 1893:
case 1876:
case 4068:
case 3196:
case 758:
case 345:
case 1826:
case 560:
case 4015:
case 3584:
case 1449:
case 1569:
case 2686:
case 1161:
case 1437:
case 3413:
case 173:
case 3148:
case 3575:
case 1423:
case 3757:
case 3149:
case 3541:
case 527:
case 3850:
case 2979:
case 507:
case 2456:
case 97:
case 4008:
case 3772:
case 210:
case 483:
case 1434:
case 2235:
case 2853:
case 281:
case 3871:
case 3587:
case 1191:
case 1599:
case 2083:
case 3821:
case 3955:
case 1712:
case 2943:
case 713:
case 2928:
case 1335:
case 1509:
case 3722:
case 219:
case 2789:
case 3940:
case 1508:
case 1466:
case 1546:
case 3042:
case 2929:
case 3643:
case 987:
case 1618:
case 1041:
case 1981:
case 1075:
case 3102:
case 3629:
case 1944:
case 2864:
case 3068:
case 2760:
case 81:
case 635:
case 880:
case 2682:
case 3299:
case 838:
case 1822:
case 949:
case 204:
case 1872:
case 3192:
case 445:
case 1854:
case 298:
case 1771:
case 889:
case 3209:
case 940:
case 3208:
case 3430:
case 533:
case 2836:
case 3246:
case 982:
case 2387:
case 1492:
case 1695:
case 3046:
case 1542:
case 1462:
case 3986:
case 468:
case 2114:
case 2424:
case 886:
case 3009:
case 2375:
case 620:
case 3215:
case 1716:
case 3703:
case 551:
case 224:
case 2341:
case 2485:
case 3269:
case 954:
case 1939:
case 3268:
case 1605:
case 2867:
case 2790:
case 3098:
case 3358:
case 1275:
case 662:
case 2474:
case 606:
case 134:
case 3359:
case 1241:
case 3793:
case 4080:
case 2557:
case 1316:
case 3303:
case 3883:
case 2775:
case 4094:
case 4067:
case 1962:
case 2613:
case 265:
case 2784:
case 2880:
case 1620:
case 3486:
case 2300:
case 2974:
case 3393:
case 855:
case 1670:
case 3531:
case 3139:
case 2216:
case 2952:
case 3376:
case 102:
case 2725:
case 996:
case 30:
case 2985:
case 301:
case 3053:
case 1438:
case 1594:
case 1200:
case 1902:
case 3835:
case 2245:
case 892:
case 1444:
case 3181:
case 1564:
case 1597:
case 999:
case 2522:
case 613:
case 2271:
case 2016:
case 2250:
case 169:
case 3363:
case 4036:
case 1481:
case 4007:
case 990:
case 1345:
case 2787:
case 2927:
case 127:
case 1536:
case 3930:
case 1090:
case 1507:
case 1260:
case 515:
case 160:
case 2221:
case 2572:
case 1350:
case 2933:
case 2554:
case 2630:
case 1934:
case 2898:
case 3297:
case 3094:
case 3264:
case 3067:
case 2899:
case 3627:
case 15:
case 151:
case 1031:
case 3991:
case 931:
case 2956:
case 700:
case 2478:
case 2165:
case 918:
case 3354:
case 2809:
case 1155:
case 2118:
case 3482:
case 2428:
case 2389:
case 1735:
case 3236:
case 2388:
case 3004:
case 3560:
case 4053:
case 1312:
case 1140:
case 203:
case 3455:
case 2563:
case 2443:
case 1182:
case 401:
case 709:
case 2815:
case 1858:
case 706:
case 2105:
case 223:
case 2576:
case 1532:
case 1996:
case 3204:
case 1973:
case 2195:
case 3357:
case 3961:
case 1614:
case 133:
case 2910:
case 720:
case 1088:
case 1949:
case 2869:
case 953:
case 2526:
case 1906:
case 1948:
case 3500:
case 1937:
case 3375:
case 1258:
case 789:
case 1124:
case 2703:
case 283:
case 410:
case 324:
case 1583:
case 3341:
case 3804:
case 3700:
case 2008:
case 3384:
case 2046:
case 3114:
case 747:
case 742:
case 711:
case 1315:
case 3474:
case 1185:
case 738:
case 1831:
case 599:
case 2099:
case 4083:
case 3790:
case 3325:
case 3864:
case 1889:
case 1177:
case 2628:
case 1346:
case 2643:
case 416:
case 2102:
case 3427:
case 17:
case 2209:
case 3836:
case 1399:
case 2246:
case 3387:
case 304:
case 4035:
case 1059:
case 372:
case 1417:
case 786:
case 2015:
case 3433:
case 1736:
case 1965:
case 381:
case 2587:
case 38:
case 2754:
case 268:
case 3979:
case 3456:
case 2491:
case 140:
case 2134:
case 2772:
case 2982:
case 3928:
case 319:
case 655:
case 187:
case 1644:
case 2042:
case 3929:
case 3083:
case 2821:
case 2955:
case 2401:
case 2173:
case 3558:
case 813:
case 3731:
case 146:
case 692:
case 875:
case 477:
case 3559:
case 1470:
case 678:
case 1767:
case 1890:
case 1794:
case 934:
case 1638:
case 2242:
case 1451:
case 3832:
case 3170:
case 1905:
case 2575:
case 2106:
case 518:
case 2757:
case 531:
case 3120:
case 2816:
case 2149:
case 2541:
case 53:
case 245:
case 1110:
case 1342:
case 3686:
case 404:
case 1800:
case 1704:
case 6:
case 2123:
case 1995:
case 1405:
case 2007:
case 2685:
case 1367:
case 809:
case 966:
case 1394:
case 826:
case 437:
case 3815:
case 1054:
case 1257:
case 2652:
case 835:
case 3105:
case 642:
case 611:
case 323:
case 3576:
case 196:
case 2674:
case 647:
case 3869:
case 1022:
case 3526:
case 448:
case 295:
case 1304:
case 1495:
case 2913:
case 3868:
case 2064:
case 1662:
case 3195:
case 2357:
case 3503:
case 2961:
case 689:
case 3956:
case 3212:
case 1550:
case 3479:
case 686:
case 2633:
case 2372:
case 3478:
case 1545:
case 4021:
case 1465:
case 2297:
case 2264:
case 1222:
case 1307:
case 1179:
case 1571:
case 820:
case 4045:
case 1419:
case 1129:
case 1521:
case 2677:
case 1272:
case 2455:
case 2901:
case 1128:
case 1254:
case 1057:
case 3118:
case 2482:
case 3428:
case 3389:
case 829:
case 1364:
case 3511:
case 862:
case 3846:
case 257:
case 2322:
case 3808:
case 1602:
case 3016:
case 3601:
case 3250:
case 3977:
case 2835:
case 3245:
case 1746:
case 2181:
case 1666:
case 1708:
case 755:
case 1709:
case 2311:
case 3271:
case 554:
case 951:
case 95:
case 332:
case 3572:
case 3554:
case 2656:
case 1917:
case 3787:
case 1353:
case 3927:
case 13:
case 1634:
case 2930:
case 131:
case 2326:
case 1011:
case 7:
case 1648:
case 582:
case 3784:
case 1769:
case 540:
case 2486:
case 1063:
case 2610:
case 1293:
case 2303:
case 2883:
case 3775:
case 1276:
case 153:
case 1226:
case 20:
case 1673:
case 3985:
case 3071:
case 403:
case 2759:
case 2393:
case 2138:
case 792:
case 2531:
case 2139:
case 3050:
case 2758:
case 2729:
case 1435:
case 508:
case 3660:
case 3844:
case 367:
case 2048:
case 2234:
case 795:
case 2611:
case 2988:
case 1366:
case 2728:
case 3020:
case 594:
case 1912:
case 1256:
case 1010:
case 683:
case 2663:
case 3301:
case 16:
case 3527:
case 2266:
case 3051:
case 2356:
case 991:
case 99:
case 362:
case 2779:
case 3954:
case 1517:
case 784:
case 1323:
case 1514:
case 3957:
case 2603:
case 2142:
case 3361:
case 3270:
case 2310:
case 2296:
case 2066:
case 1349:
case 3183:
case 335:
case 757:
case 2626:
case 1348:
case 823:
case 3574:
case 2676:
case 2223:
case 300:
case 752:
case 1210:
case 2693:
case 1396:
case 3220:
case 2206:
case 2034:
case 2237:
case 1632:
case 1373:
case 3847:
case 1033:
case 2374:
case 3458:
case 467:
case 156:
case 3976:
case 2092:
case 1667:
case 936:
case 420:
case 2385:
case 314:
case 1739:
case 1158:
case 4051:
case 1077:
case 2475:
case 2168:
case 2561:
case 3903:
case 2441:
case 1252:
case 2484:
case 1520:
case 3786:
case 2513:
case 2002:
case 2895:
case 721:
case 429:
case 2324:
case 406:
case 1607:
case 1945:
case 930:
case 2327:
case 426:
case 1392:
case 1971:
case 543:
case 2591:
case 3556:
case 2672:
case 2333:
case 2198:
case 150:
case 2:
case 1302:
case 1882:
case 2622:
case 3688:
case 297:
case 1664:
case 939:
case 2292:
case 2960:
case 645:
case 1744:
case 400:
case 2819:
case 1921:
case 1781:
case 2501:
case 2818:
case 3217:
case 684:
case 1450:
case 21:
case 1891:
case 2281:
case 280:
case 3145:
case 238:
case 2047:
case 2244:
case 3834:
case 2038:
case 1792:
case 1565:
case 4019:
case 593:
case 1471:
case 4018:
case 3150:
case 2039:
case 289:
case 2777:
case 4065:
case 1519:
case 783:
case 1518:
case 128:
case 1801:
case 1344:
case 804:
case 979:
case 872:
case 3866:
case 898:
case 3896:
case 1339:
case 2851:
case 824:
case 964:
case 2785:
case 2925:
case 3958:
case 2752:
case 3476:
case 4095:
case 3959:
case 1680:
case 2820:
case 3116:
case 3426:
case 657:
case 2238:
case 3848:
case 2044:
case 3806:
case 1762:
case 56:
case 561:
case 1861:
case 2941:
case 1737:
case 313:
case 621:
case 1748:
case 1668:
case 3205:
case 62:
case 1706:
case 3862:
case 1157:
case 375:
case 550:
case 1028:
case 3641:
case 2814:
case 816:
case 3018:
case 1043:
case 3761:
case 2104:
case 3675:
case 3019:
case 1723:
case 2659:
case 2194:
case 1615:
case 2658:
case 810:
case 3701:
case 2197:
case 2164:
case 2343:
case 3355:
case 2328:
case 745:
case 3382:
case 2489:
case 3802:
case 544:
case 2488:
case 2379:
case 94:
case 941:
case 3218:
case 819:
case 2378:
case 2756:
case 358:
case 1699:
case 1228:
case 601:
case 1830:
case 3005:
case 3892:
case 3199:
case 1187:
case 3654:
case 378:
case 1879:
case 3672:
case 3333:
case 96:
case 4066:
case 1317:
case 1953:
case 3202:
case 1534:
case 1499:
case 3487:
case 191:
case 3819:
case 3146:
case 3108:
case 3501:
case 3377:
case 3818:
case 2014:
case 564:
case 3622:
case 2911:
case 1566:
case 2689:
case 1408:
case 1230:
case 4023:
case 1932:
case 3262:
case 1596:
case 3990:
case 681:
case 3385:
case 3425:
case 579:
case 1125:
case 2993:
case 3374:
case 732:
case 2459:
case 4006:
case 4048:
case 2976:
case 3484:
case 1549:
case 993:
case 619:
case 3513:
case 3895:
case 1548:
case 1537:
case 80:
case 1523:
case 3169:
case 4073:
case 3296:
case 1562:
case 1795:
case 2600:
case 3066:
case 2183:
case 235:
case 1480:
case 478:
case 2524:
case 3626:
case 884:
case 3180:
case 1616:
case 703:
case 2957:
case 3603:
case 3142:
case 2361:
case 54:
case 226:
case 541:
case 3310:
case 512:
case 956:
case 2585:
case 2220:
case 3206:
case 1213:
case 3034:
case 3237:
case 3248:
case 698:
case 497:
case 895:
case 672:
case 200:
case 1091:
case 3931:
case 4:
case 2552:
case 1261:
case 136:
case 3693:
case 1061:
case 1718:
case 3663:
case 4092:
case 3023:
case 2301:
case 2881:
case 220:
case 1502:
case 1013:
case 3729:
case 2660:
case 3006:
case 2844:
case 267:
case 2740:
case 3048:
case 3989:
case 3234:
case 3611:
case 959:
case 2922:
case 3728:
case 2020:
case 2782:
case 2070:
case 3778:
case 3356:
case 2391:
case 229:
case 950:
case 2527:
case 3266:
case 3096:
case 3530:
case 1907:
case 928:
case 868:
case 486:
case 1544:
case 3489:
case 665:
case 2265:
case 2802:
case 2422:
case 1319:
case 1188:
case 179:
case 3164:
case 1581:
case 1877:
case 2355:
case 1282:
case 1827:
case 716:
case 2687:
case 1407:
case 1436:
case 2892:
case 3107:
case 4044:
case 3756:
case 258:
case 2791:
case 2641:
case 2761:
case 4039:
case 4047:
case 591:
case 59:
case 985:
case 2019:
case 480:
case 213:
case 1404:
case 2205:
case 2713:
case 442:
case 3586:
case 275:
case 411:
case 1720:
case 1082:
case 1395:
case 176:
case 3194:
case 447:
case 1770:
case 648:
case 164:
case 632:
case 1852:
case 2625:
case 994:
case 1131:
case 1539:
case 1547:
case 489:
case 1467:
case 1538:
case 908:
case 704:
case 2958:
case 2493:
case 1915:
case 772:
case 2476:
case 798:
case 3490:
case 539:
case 1432:
case 883:
case 1286:
case 1683:
case 2823:
case 603:
case 3941:
case 3724:
case 3239:
case 2426:
case 2849:
case 1969:
case 943:
case 3238:
case 2837:
case 3400:
case 2848:
case 3044:
case 3247:
case 2806:
case 588:
case 3047:
case 1998:
case 2834:
case 112:
case 141:
case 14:
case 3039:
case 1717:
case 623:
case 1856:
case 3733:
case 380:
case 3153:
case 2528:
case 1909:
case 1635:
case 1908:
case 3540:
case 1946:
case 2121:
case 2411:
case 1160:
case 525:
case 117:
case 3777:
case 724:
case 2543:
case 2463:
case 3555:
case 3651:
case 3447:
case 2332:
case 10:
case 863:
case 923:
case 3439:
case 101:
case 2715:
case 1139:
case 1758:
case 1759:
case 374:
case 3670:
case 1147:
case 2769:
case 2649:
case 2648:
case 1232:
case 2011:
case 3962:
case 3290:
case 2606:
case 3060:
case 3316:
case 253:
case 1883:
case 2276:
case 1610:
case 2293:
case 2063:
case 451:
case 2914:
case 2093:
case 756:
case 2917:
case 744:
case 1656:
case 360:
case 3350:
case 2076:
case 2634:
case 2211:
case 327:
case 23:
case 231:
case 1930:
case 433:
case 369:
case 89:
case 891:
case 322:
case 643:
case 1311:
case 903:
case 1253:
case 3902:
case 3597:
case 3444:
case 2666:
case 1901:
case 793:
case 2521:
case 937:
case 3966:
case 1236:
case 3735:
case 466:
case 2602:
case 1004:
case 1207:
case 1560:
case 2143:
case 402:
case 2364:
case 2397:
case 407:
case 608:
case 4060:
case 805:
case 3031:
case 1991:
case 1372:
case 152:
case 694:
case 35:
case 2222:
case 2887:
case 3288:
case 2336:
case 583:
case 2465:
case 839:
case 1264:
case 460:
case 836:
case 3937:
case 2662:
case 3948:
case 1267:
case 1500:
case 3088:
case 2780:
case 2022:
case 3614:
case 2516:
case 1961:
case 427:
case 965:
case 1357:
case 1685:
case 2394:
case 422:
case 1036:
case 3532:
case 2951:
case 761:
case 1204:
case 76:
case 3859:
case 184:
case 1674:
case 2072:
case 4000:
case 1652:
case 3858:
case 1757:
case 1541:
case 4025:
case 1816:
case 1148:
case 1137:
case 3423:
case 3113:
case 3448:
case 2704:
case 1123:
case 2380:
case 3406:
case 2110:
case 2420:
case 3449:
case 1584:
case 3826:
case 864:
case 254:
case 246:
case 2470:
case 1196:
case 1173:
case 4084:
case 3893:
case 3473:
case 2639:
case 1525:
case 1280:
case 4075:
case 2794:
case 2767:
case 2451:
case 2647:
case 3496:
case 2764:
case 1042:
case 2644:
case 287:
case 3546:
case 434:
case 977:
case 3712:
case 1401:
case 4087:
case 501:
case 1166:
case 50:
case 879:
case 1871:
case 3191:
case 2156:
case 1587:
case 998:
case 2707:
case 1845:
case 2965:
case 2736:
case 1134:
case 656:
case 168:
case 1850:
case 282:
case 1430:
case 1208:
case 3665:
case 817:
case 2133:
case 1209:
case 2058:
case 3854:
case 1015:
case 1679:
case 3872:
case 3130:
case 1678:
case 1192:
case 981:
case 3287:
case 2346:
case 2888:
case 1299:
case 1628:
case 3944:
case 1068:
case 1298:
case 1629:
case 1711:
case 2177:
case 2309:
case 3981:
case 841:
case 3619:
case 1102:
case 84:
case 3721:
case 1763:
case 919:
case 334:
case 2185:
case 1793:
case 2831:
case 916:
case 1359:
case 557:
case 3241:
case 1358:
case 2315:
case 1098:
case 1268:
case 66:
case 3605:
case 2174:
case 661:
case 2152:
case 3087:
case 2583:
case 183:
case 728:
case 1162:
case 2259:
case 2258:
case 2368:
case 1986:
case 1009:
case 552:
case 3542:
case 3462:
case 1046:
case 2614:
case 418:
case 3516:
case 1503:
case 43:
case 1195:
case 3875:
case 431:
case 2906:
case 598:
case 3495:
case 4076:
case 2937:
case 2089:
case 2948:
case 1868:
case 4093:
case 2949:
case 3780:
case 2088:
case 3304:
case 3920:
case 1331:
case 2859:
case 1105:
case 3970:
case 90:
case 577:
case 1815:
case 3257:
case 4003:
case 3394:
case 3367:
case 3405:
case 612:
case 641:
case 1846:
case 2966:
case 1511:
case 2735:
case 3602:
case 1808:
case 1809:
case 3364:
case 3397:
case 1428:
case 1563:
case 3254:
case 3057:
case 2312:
case 861:
case 3419:
case 3129:
case 103:
case 92:
case 3887:
case 4063:
case 3307:
case 3571:
case 3545:
case 3465:
case 4011:
case 1165:
case 1478:
case 390:
case 736:
case 1212:
case 1956:
case 2031:
case 1479:
case 3634:
case 3211:
case 33:
case 2992:
case 2371:
case 2090:
case 2345:
case 3353:
case 1787:
case 3799:
case 1933:
case 3917:
case 676:
case 1221:
case 3076:
case 2350:
case 1572:
case 1522:
case 137:
case 1271:
case 1360:
case 850:
case 4054:
case 3746:
case 2597:
case 496:
case 2444:
case 1977:
case 269:
case 2481:
case 3003:
case 516:
case 222:
case 957:
case 1952:
case 3715:
case 1216:
case 519:
case 274:
case 79:
case 1045:
case 791:
case 2447:
case 499:
case 3696:
case 3673:
case 3226:
case 984:
case 4057:
case 1985:
case 1071:
case 58:
case 995:
case 1021:
case 353:
case 3276:
case 1775:
case 3063:
case 1741:
case 510:
case 2186:
case 3914:
case 2620:
case 1784:
case 1880:
case 3649:
case 1300:
case 844:
case 3011:
case 2962:
case 1842:
case 2290:
case 1613:
case 490:
case 2060:
case 2504:
case 2938:
case 1790:
case 1867:
case 3732:
case 74:
case 1325:
case 503:
case 2939:
case 2087:
case 2284:
case 2275:
case 1424:
case 482:
case 2580:
case 1700:
case 2695:
case 2542:
case 808:
case 2462:
case 3369:
case 3583:
case 945:
case 3414:
case 2857:
case 3127:
case 172:
case 3417:
case 1433:
case 198:
case 636:
case 104:
case 3059:
case 625:
case 2665:
case 3753:
case 1387:
case 828:
case 968:
case 1836:
case 3399:
case 2771:
case 371:
case 3398:
case 2025:
case 2981:
case 2619:
case 1477:
case 3308:
case 2287:
case 3888:
case 1682:
case 1897:
case 446:
case 3535:
case 2402:
case 1640:
case 3309:
case 177:
case 3918:
case 1943:
case 663:
case 349:
case 1789:
case 3860:
case 119:
case 2811:
case 2546:
case 1928:
case 2101:
case 2509:
case 1978:
case 1979:
case 776:
case 382:
case 764:
case 1456:
case 181:
case 2599:
case 2191:
case 3156:
case 2434:
case 2598:
case 110:
case 1853:
case 1235:
case 3800:
case 2448:
case 2437:
case 2406:
case 548:
case 4058:
case 3110:
case 2449:
case 1686:
case 2161:
case 983:
case 3342:
case 1120:
case 215:
case 2803:
case 273:
case 2423:
case 2113:
case 843:
case 3639:
case 3890:
case 691:
case 3767:
case 3451:
case 69:
case 1170:
case 3647:
case 3638:
case 2496:
case 354:
case 1283:
case 346:
case 537:
case 3470:
case 1558:
case 2893:
case 2635:
case 4078:
case 1121:
case 2946:
case 2086:
case 500:
case 3344:
case 2909:
case 3518:
case 328:
case 1543:
case 3801:
case 1463:
case 2160:
case 3421:
case 3519:
case 217:
case 1150:
case 4043:
case 2999:
case 24:
case 1834:
case 2998:
case 1730:
case 3565:
case 1145:
case 4028:
case 1579:
case 535:
case 1403:
case 2100:
case 1823:
case 1837:
case 3762:
case 562:
case 3813:
case 1806:
case 529:
case 506:
case 1849:
case 1426:
case 394:
case 567:
case 1493:
case 2915:
case 1873:
case 3347:
case 520:
case 3338:
case 3176:
case 2432:
case 3339:
case 3079:
case 3615:
case 2852:
case 660:
case 276:
case 3078:
case 2770:
case 264:
case 2494:
case 2538:
case 2467:
case 1065:
case 3796:
case 1295:
case 2885:
case 3773:
case 1625:
case 428:
case 2539:
case 2305:
case 3983:
case 3723:
case 1019:
case 1675:
case 1018:
case 3043:
case 2720:
case 2082:
case 2824:
case 175:
case 3749:
case 2980:
case 2040:
case 3748:
case 3029:
case 1713:
case 1862:
case 3668:
case 1205:
case 3172:
case 3830:
case 3734:
case 91:
case 2240:
case 1005:
case 942:
case 1892:
case 3698:
case 1687:
case 849:
case 938:
case 3228:
case 485:
case 1791:
case 887:
case 3243:
case 1472:
case 1340:
case 607:
case 989:
case 3646:
case 2464:
case 2544:
case 494:
case 2497:
case 1095:
case 1802:
case 3935:
case 3608:
case 2581:
case 2189:
case 2318:
case 2877:
case 947:
case 3279:
case 2188:
case 3412:
case 2319:
case 288:
case 2650:
case 162:
case 3517:
case 230:
case 1954:
case 1391:
case 1070:
case 106:
case 1972:
case 2936:
case 992:
case 2765:
case 1051:
case 2671:
case 361:
case 1527:
case 1301:
case 1577:
case 2621:
case 733:
case 1881:
case 120:
case 3256:
case 1755:
case 4027:
case 239:
case 3366:
case 205:
case 890:
case 1660:
case 2013:
case 456:
case 167:
case 1740:
case 75:
case 1690:
case 751:
case 459:
case 3373:
case 3632:
case 2967:
case 1220:
case 1585:
case 2370:
case 2091:
case 1552:
case 3210:
case 4024:
case 236:
case 1574:
case 1313:
case 3348:
case 1524:
case 1251:
case 1600:
case 3349:
case 2795:
case 4074:
case 2320:
case 1183:
case 2904:
case 1270:
case 109:
case 126:
case 3323:
case 2001:
case 1957:
case 4085:
case 2506:
case 2537:
case 2175:
case 3362:
case 1926:
case 2141:
case 1786:
case 3520:
case 3916:
case 2184:
case 769:
case 1903:
case 46:
case 3077:
case 3274:
case 2523:
case 263:
case 2314:
case 722:
case 727:
case 3739:
case 3224:
case 853:
case 3158:
case 2573:
case 4010:
case 3694:
case 3551:
case 114:
case 1459:
case 356:
case 2125:
case 760:
case 1993:
case 2415:
case 1214:
case 1458:
case 83:
case 3855:
case 1963:
case 2843:
case 831:
case 2612:
case 673:
case 1014:
case 3921:
case 3781:
case 3664:
case 1689:
case 3697:
case 2230:
case 707:
case 2409:
case 1688:
case 3227:
case 3277:
case 350:
case 575:
case 702:
case 2317:
case 2187:
case 774:
case 3950:
case 29:
case 2499:
case 1330:
case 3085:
case 2953:
case 3607:
case 3636:
case 2498:
case 754:
case 746:
case 3833:
case 3255:
case 1378:
case 1756:
case 555:
case 1107:
case 1136:
case 2830:
case 2734:
case 2228:
case 3365:
case 3189:
case 3581:
case 379:
case 3318:
case 2122:
case 2412:
case 3319:
case 2609:
case 1488:
case 1329:
case 2646:
case 1328:
case 3497:
case 815:
case 3538:
case 618:
case 2796:
case 631:
case 3131:
case 3305:
case 4086:
case 2615:
case 740:
case 3852:
case 1658:
case 597:
case 1167:
case 1659:
case 2078:
case 3874:
case 2028:
case 3082:
case 2157:
case 2669:
case 2749:
case 787:
case 3404:
case 2748:
case 592:
case 2029:
case 3942:
case 2668:
case 578:
case 2706:
case 2983:
case 2723:
case 1814:
case 441:
case 2043:
case 1400:
case 3968:
case 1044:
case 834:
case 2595:
case 2813:
case 285:
case 2680:
case 3969:
case 2103:
case 1984:
case 3810:
case 3714:
case 699:
case 1941:
case 913:
case 1975:
case 2347:
case 2338:
case 1925:
case 479:
case 3432:
case 3190:
case 294:
case 1774:
case 1870:
case 1132:
case 1752:
case 2381:
case 228:
case 189:
case 2519:
case 317:
case 1777:
case 1540:
case 147:
case 3086:
case 2344:
case 3909:
case 2163:
case 4040:
case 1281:
case 180:
case 2450:
case 696:
case 4082:
case 3717:
case 1733:
case 11:
case 2471:
case 312:
case 1039:
case 4055:
case 1987:
case 3998:
case 1038:
case 1047:
case 2565:
case 2792:
case 3453:
case 197:
case 1292:
case 2697:
case 3230:
case 2840:
case 1960:
case 3408:
case 2302:
case 920:
case 4091:
case 1622:
case 2227:
case 436:
case 3828:
case 967:
case 2855:
case 1377:
case 753:
case 3612:
case 1146:
case 2921:
case 259:
case 1108:
case 2781:
case 1487:
case 39:
case 869:
case 3499:
case 2971:
case 1202:
case 3953:
case 2945:
case 2607:
case 822:
case 962:
case 2636:
case 1327:
case 2074:
case 3878:
case 3187:
case 178:
case 1591:
case 1199:
case 2052:
case 3879:
case 646:
case 2950:
case 2252:
case 935:
case 1657:
case 1441:
case 649:
case 2077:
case 363:
case 3314:
case 1475:
case 3506:
case 1324:
case 3537:
case 1900:
case 3175:
case 3468:
case 866:
case 687:
case 909:
case 3469:
case 3549:
case 1484:
case 2285:
case 874:
case 2520:
case 4013:
case 2570:
case 256:
case 244:
case 2033:
case 3125:
case 3415:
case 405:
case 1115:
case 439:
case 718:
case 2694:
case 3596:
case 1262:
case 2667:
case 1805:
case 2738:
case 3030:
case 3370:
case 547:
case 914:
case 1931:
case 2210:
case 1693:
case 336:
case 1223:
case 1676:
case 3213:
case 67:
case 671:
case 1034:
case 1237:
case 3351:
case 2396:
case 293:
case 2323:
case 49:
case 1603:
case 799:
case 491:
case 3616:
case 2514:
case 3480:
case 1273:
case 1626:
case 51:
case 2349:
case 1296:
case 511:
case 3320:
case 3904:
case 3936:
case 1266:
case 3592:
case 463:
case 3907:
case 3645:
case 1530:
case 3671:
case 261:
case 2334:
case 1073:
case 388:
case 3201:
case 1356:
case 2366:
case 586:
case 305:
case 1006:
case 3013:
case 3964:
case 1048:
case 1989:
case 1023:
case 3621:
case 3291:
case 1743:
case 2912:
case 1663:
case 339:
case 2010:
case 3718:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1750161601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,];
var gg_b = "1750161601/";

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
