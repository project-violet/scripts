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
case 1473:
case 1150:
case 885:
case 3519:
case 2471:
case 1141:
case 2775:
case 3059:
case 3477:
case 4078:
case 4083:
case 214:
case 3715:
case 410:
case 3516:
case 321:
case 3422:
case 2966:
case 2806:
case 479:
case 2458:
case 1952:
case 3850:
case 466:
case 503:
case 1271:
case 1720:
case 2339:
case 408:
case 4040:
case 3056:
case 2847:
case 3154:
case 2579:
case 2000:
case 4051:
case 2273:
case 1619:
case 3197:
case 2405:
case 665:
case 2979:
case 1012:
case 2304:
case 1438:
case 732:
case 2932:
case 1703:
case 226:
case 1021:
case 2566:
case 3545:
case 4068:
case 3467:
case 3746:
case 1193:
case 389:
case 2023:
case 2701:
case 2130:
case 1616:
case 579:
case 1897:
case 510:
case 2569:
case 3919:
case 1356:
case 784:
case 642:
case 2362:
case 170:
case 1205:
case 467:
case 2389:
case 403:
case 2582:
case 1261:
case 119:
case 906:
case 2598:
case 3872:
case 3091:
case 2610:
case 3123:
case 2744:
case 3781:
case 3306:
case 803:
case 690:
case 686:
case 36:
case 1127:
case 1242:
case 3255:
case 3836:
case 1139:
case 1757:
case 1718:
case 1823:
case 3827:
case 2812:
case 1560:
case 3670:
case 3502:
case 134:
case 2292:
case 2393:
case 1186:
case 1391:
case 3334:
case 810:
case 2159:
case 1960:
case 1664:
case 3902:
case 3574:
case 3862:
case 808:
case 3043:
case 1794:
case 687:
case 1104:
case 2525:
case 239:
case 485:
case 1162:
case 3100:
case 650:
case 2156:
case 2729:
case 3080:
case 304:
case 1009:
case 3964:
case 1602:
case 2998:
case 3804:
case 704:
case 3121:
case 1598:
case 2034:
case 4024:
case 282:
case 483:
case 3625:
case 942:
case 1341:
case 2242:
case 874:
case 3783:
case 3354:
case 29:
case 3455:
case 4015:
case 1442:
case 2172:
case 1821:
case 97:
case 309:
case 1812:
case 3614:
case 234:
case 3740:
case 1393:
case 2186:
case 2084:
case 1737:
case 2391:
case 3408:
case 4007:
case 3510:
case 2800:
case 2664:
case 3698:
case 611:
case 488:
case 3856:
case 2047:
case 1726:
case 3397:
case 712:
case 3733:
case 3041:
case 2548:
case 2104:
case 2006:
case 76:
case 851:
case 3859:
case 1729:
case 530:
case 2570:
case 2330:
case 373:
case 1514:
case 4049:
case 2473:
case 3211:
case 1143:
case 384:
case 2488:
case 451:
case 1471:
case 2141:
case 1809:
case 1327:
case 3595:
case 4081:
case 2258:
case 3323:
case 3184:
case 3086:
case 341:
case 405:
case 2854:
case 3147:
case 127:
case 3666:
case 1628:
case 1336:
case 1:
case 888:
case 3843:
case 247:
case 607:
case 789:
case 3928:
case 4053:
case 3413:
case 2720:
case 3089:
case 1288:
case 1273:
case 3669:
case 1304:
case 2438:
case 1461:
case 1932:
case 2619:
case 1405:
case 1695:
case 1979:
case 622:
case 2552:
case 4031:
case 1191:
case 3036:
case 126:
case 2021:
case 830:
case 3676:
case 1566:
case 1765:
case 721:
case 1023:
case 505:
case 883:
case 606:
case 668:
case 3072:
case 1834:
case 3891:
case 1362:
case 270:
case 1569:
case 3679:
case 3995:
case 2356:
case 986:
case 1582:
case 2261:
case 491:
case 1647:
case 3475:
case 967:
case 1064:
case 171:
case 3128:
case 3374:
case 1215:
case 2777:
case 2299:
case 1684:
case 194:
case 2593:
case 776:
case 1606:
case 1348:
case 2424:
case 806:
case 2325:
case 3771:
case 868:
case 2941:
case 630:
case 3906:
case 3866:
case 2654:
case 1169:
case 2711:
case 2296:
case 259:
case 1224:
case 1182:
case 1499:
case 1609:
case 2314:
case 1530:
case 1002:
case 3717:
case 3758:
case 3680:
case 908:
case 2767:
case 777:
case 966:
case 3547:
case 3879:
case 2398:
case 3401:
case 3832:
case 2446:
case 1930:
case 299:
case 688:
case 3761:
case 979:
case 411:
case 1249:
case 2816:
case 2541:
case 863:
case 807:
case 3048:
case 3506:
case 3195:
case 2407:
case 2550:
case 3876:
case 1132:
case 1246:
case 154:
case 2819:
case 3203:
case 3070:
case 1360:
case 2481:
case 2095:
case 605:
case 1019:
case 1483:
case 3814:
case 752:
case 2240:
case 2586:
case 4088:
case 651:
case 2366:
case 3110:
case 3345:
case 522:
case 2453:
case 1016:
case 1114:
case 2170:
case 3921:
case 148:
case 3825:
case 407:
case 506:
case 2283:
case 2927:
case 2369:
case 1556:
case 568:
case 3912:
case 1281:
case 1810:
case 2562:
case 3319:
case 2431:
case 1468:
case 2962:
case 2802:
case 2536:
case 223:
case 1198:
case 4038:
case 1708:
case 4063:
case 1959:
case 2160:
case 3316:
case 3429:
case 674:
case 2539:
case 3656:
case 2379:
case 2904:
case 2572:
case 3898:
case 2864:
case 2233:
case 2490:
case 792:
case 507:
case 563:
case 406:
case 2268:
case 1231:
case 392:
case 1481:
case 145:
case 2483:
case 1972:
case 1504:
case 1148:
case 2478:
case 2612:
case 2125:
case 11:
case 1939:
case 1095:
case 1251:
case 128:
case 4071:
case 2253:
case 2352:
case 3076:
case 2621:
case 3328:
case 542:
case 608:
case 3923:
case 2451:
case 3287:
case 2016:
case 2114:
case 1936:
case 1170:
case 2440:
case 248:
case 1278:
case 1382:
case 162:
case 679:
case 2755:
case 1283:
case 988:
case 2281:
case 3032:
case 4017:
case 3500:
case 3457:
case 3672:
case 1874:
case 1369:
case 2556:
case 225:
case 3079:
case 1431:
case 3494:
case 2468:
case 3860:
case 3900:
case 1962:
case 3604:
case 1802:
case 1527:
case 2290:
case 2433:
case 2045:
case 123:
case 2198:
case 3066:
case 1735:
case 465:
case 47:
case 603:
case 667:
case 442:
case 3237:
case 3792:
case 1904:
case 1572:
case 1864:
case 1600:
case 1490:
case 1379:
case 3226:
case 2231:
case 3689:
case 3310:
case 2166:
case 3098:
case 2064:
case 271:
case 991:
case 1152:
case 3145:
case 2684:
case 294:
case 486:
case 490:
case 1299:
case 3650:
case 3597:
case 2348:
case 3788:
case 3773:
case 2496:
case 1654:
case 2169:
case 3420:
case 2828:
case 2713:
case 70:
case 159:
case 2224:
case 2182:
case 2370:
case 377:
case 1314:
case 2002:
case 2530:
case 4042:
case 865:
case 87:
case 1722:
case 3693:
case 590:
case 586:
case 1398:
case 1010:
case 1446:
case 2930:
case 199:
case 3119:
case 3025:
case 1407:
case 1550:
case 1816:
case 1541:
case 3763:
case 2207:
case 1449:
case 3554:
case 905:
case 2580:
case 2360:
case 951:
case 3144:
case 2857:
case 3046:
case 3410:
case 832:
case 2001:
case 3187:
case 1270:
case 2214:
case 1721:
case 98:
case 1183:
case 1324:
case 1178:
case 2448:
case 1425:
case 3007:
case 3851:
case 620:
case 2181:
case 60:
case 272:
case 3642:
case 3049:
case 992:
case 1248:
case 12:
case 1151:
case 1315:
case 2399:
case 1414:
case 3878:
case 3883:
case 118:
case 2470:
case 509:
case 2153:
case 3303:
case 3759:
case 3202:
case 1260:
case 785:
case 3137:
case 1346:
case 383:
case 4093:
case 2131:
case 1307:
case 1829:
case 952:
case 3756:
case 1542:
case 3555:
case 1837:
case 573:
case 3264:
case 3015:
case 3129:
case 2460:
case 541:
case 135:
case 2563:
case 1505:
case 2378:
case 710:
case 3031:
case 1094:
case 2538:
case 2124:
case 2383:
case 977:
case 584:
case 1747:
case 3428:
case 1466:
case 1784:
case 2452:
case 2037:
case 1917:
case 3175:
case 1958:
case 1709:
case 1252:
case 2622:
case 4039:
case 3780:
case 3896:
case 4072:
case 1199:
case 2115:
case 1613:
case 1482:
case 2973:
case 3318:
case 2611:
case 3605:
case 969:
case 3661:
case 3394:
case 1331:
case 2279:
case 2797:
case 441:
case 2333:
case 2588:
case 873:
case 2232:
case 2146:
case 767:
case 2044:
case 3165:
case 4004:
case 1734:
case 351:
case 3791:
case 296:
case 1517:
case 1558:
case 4062:
case 2276:
case 257:
case 233:
case 4089:
case 432:
case 1479:
case 1905:
case 1865:
case 1432:
case 1390:
case 1961:
case 2938:
case 1801:
case 3219:
case 2963:
case 3513:
case 3741:
case 1563:
case 3673:
case 3688:
case 2706:
case 489:
case 235:
case 3750:
case 1378:
case 3911:
case 1282:
case 2094:
case 1538:
case 1026:
case 1383:
case 1124:
case 3815:
case 2747:
case 1452:
case 1037:
case 1677:
case 2917:
case 964:
case 2958:
case 2466:
case 2784:
case 3922:
case 2353:
case 875:
case 2252:
case 1266:
case 156:
case 2199:
case 3977:
case 1115:
case 3824:
case 1622:
case 2482:
case 1973:
case 1754:
case 2971:
case 3120:
case 652:
case 1611:
case 521:
case 705:
case 3638:
case 804:
case 3083:
case 1368:
case 2331:
case 692:
case 4059:
case 3419:
case 1107:
case 1333:
case 1588:
case 1232:
case 3337:
case 3849:
case 2476:
case 3793:
case 1044:
case 196:
case 3807:
case 3051:
case 2517:
case 2558:
case 3040:
case 3416:
case 4056:
case 68:
case 1276:
case 157:
case 379:
case 2057:
case 2390:
case 1938:
case 421:
case 1149:
case 2905:
case 1803:
case 90:
case 3295:
case 56:
case 1857:
case 1818:
case 3474:
case 1723:
case 1001:
case 3535:
case 1065:
case 2003:
case 1214:
case 4043:
case 2942:
case 1396:
case 2324:
case 115:
case 3853:
case 821:
case 2655:
case 783:
case 3118:
case 3739:
case 4080:
case 22:
case 2248:
case 2414:
case 1592:
case 218:
case 3210:
case 3881:
case 676:
case 3985:
case 512:
case 385:
case 2260:
case 3585:
case 3890:
case 2346:
case 2608:
case 1992:
case 46:
case 3464:
case 475:
case 1635:
case 4091:
case 3194:
case 1131:
case 3096:
case 1700:
case 3762:
case 4030:
case 889:
case 2542:
case 1190:
case 213:
case 412:
case 1460:
case 3402:
case 3831:
case 1894:
case 365:
case 37:
case 2388:
case 2272:
case 877:
case 3681:
case 909:
case 4066:
case 3005:
case 3957:
case 1371:
case 3918:
case 3594:
case 3061:
case 2710:
case 3423:
case 1774:
case 1953:
case 2687:
case 3185:
case 298:
case 763:
case 2940:
case 978:
case 2951:
case 3770:
case 3221:
case 253:
case 2236:
case 4082:
case 452:
case 3653:
case 4069:
case 1358:
case 1317:
case 1885:
case 1439:
case 1590:
case 2978:
case 1472:
case 2983:
case 1618:
case 1657:
case 1694:
case 3892:
case 3631:
case 2578:
case 1361:
case 2583:
case 2338:
case 1404:
case 155:
case 2363:
case 2262:
case 706:
case 869:
case 2459:
case 3135:
case 1764:
case 101:
case 1486:
case 293:
case 973:
case 2286:
case 1192:
case 1259:
case 621:
case 3760:
case 1835:
case 3400:
case 3518:
case 1462:
case 2968:
case 48:
case 3994:
case 2808:
case 1931:
case 2933:
case 722:
case 1915:
case 2999:
case 124:
case 1811:
case 1546:
case 1280:
case 4025:
case 1745:
case 3209:
case 3752:
case 2728:
case 2813:
case 3920:
case 1441:
case 3624:
case 2443:
case 387:
case 88:
case 1243:
case 577:
case 476:
case 1549:
case 281:
case 2250:
case 2117:
case 3615:
case 3122:
case 3284:
case 892:
case 3888:
case 3873:
case 117:
case 244:
case 2665:
case 3167:
case 66:
case 2795:
case 1719:
case 2161:
case 3607:
case 1949:
case 160:
case 612:
case 3042:
case 1055:
case 477:
case 1867:
case 576:
case 540:
case 1716:
case 3903:
case 2599:
case 1946:
case 2811:
case 2546:
case 40:
case 3501:
case 3447:
case 4048:
case 1999:
case 3565:
case 3484:
case 1728:
case 311:
case 1813:
case 3406:
case 2441:
case 1443:
case 2173:
case 2188:
case 2924:
case 786:
case 790:
case 3871:
case 673:
case 1480:
case 144:
case 3776:
case 2603:
case 1085:
case 1665:
case 520:
case 3335:
case 1795:
case 2719:
case 1105:
case 1161:
case 2138:
case 3297:
case 3779:
case 249:
case 2867:
case 4060:
case 787:
case 2055:
case 2946:
case 1430:
case 1293:
case 3861:
case 2515:
case 989:
case 1599:
case 1533:
case 3063:
case 1272:
case 1373:
case 1239:
case 3725:
case 3683:
case 2531:
case 3526:
case 3038:
case 322:
case 1067:
case 1951:
case 3421:
case 1940:
case 1855:
case 3987:
case 137:
case 153:
case 3714:
case 1236:
case 3529:
case 2358:
case 3223:
case 368:
case 3322:
case 3640:
case 96:
case 2590:
case 1978:
case 3311:
case 1983:
case 2618:
case 2472:
case 1142:
case 2657:
case 2439:
case 1626:
case 684:
case 2404:
case 1338:
case 3088:
case 1262:
case 3633:
case 3200:
case 255:
case 2256:
case 3929:
case 904:
case 1077:
case 3587:
case 2764:
case 3798:
case 193:
case 1629:
case 731:
case 2192:
case 80:
case 2259:
case 307:
case 820:
case 1011:
case 1808:
case 3926:
case 765:
case 1204:
case 2013:
case 2489:
case 3136:
case 1091:
case 953:
case 1347:
case 1839:
case 1123:
case 1384:
case 1648:
case 1306:
case 4075:
case 739:
case 1781:
case 838:
case 2778:
case 39:
case 660:
case 2455:
case 897:
case 3718:
case 3560:
case 1670:
case 1030:
case 1502:
case 616:
case 2614:
case 572:
case 1753:
case 2285:
case 1309:
case 334:
case 2740:
case 3186:
case 415:
case 624:
case 3800:
case 3960:
case 1902:
case 3391:
case 2408:
case 1334:
case 936:
case 1435:
case 1043:
case 3794:
case 2768:
case 35:
case 2397:
case 4001:
case 3104:
case 4065:
case 2733:
case 1790:
case 880:
case 2859:
case 3330:
case 273:
case 3492:
case 3602:
case 1804:
case 1660:
case 993:
case 4087:
case 3488:
case 3473:
case 480:
case 496:
case 3141:
case 702:
case 1312:
case 655:
case 1519:
case 3217:
case 872:
case 2222:
case 241:
case 2323:
case 3645:
case 3854:
case 1652:
case 2147:
case 1321:
case 2666:
case 2799:
case 2277:
case 1715:
case 726:
case 2109:
case 1945:
case 121:
case 1422:
case 2413:
case 3271:
case 1411:
case 1154:
case 2669:
case 4037:
case 3012:
case 580:
case 497:
case 1467:
case 4026:
case 7:
case 2036:
case 3021:
case 3359:
case 1916:
case 3703:
case 3897:
case 3616:
case 2267:
case 727:
case 370:
case 2072:
case 3356:
case 2679:
case 2995:
case 2039:
case 1749:
case 533:
case 557:
case 770:
case 3982:
case 1880:
case 1796:
case 2519:
case 3327:
case 3969:
case 2213:
case 1004:
case 2312:
case 1222:
case 141:
case 535:
case 1184:
case 800:
case 3336:
case 3628:
case 2059:
case 2652:
case 1147:
case 3180:
case 658:
case 1799:
case 2715:
case 3:
case 924:
case 3806:
case 2841:
case 221:
case 2850:
case 1109:
case 2945:
case 4057:
case 3417:
case 3458:
case 1682:
case 3884:
case 132:
case 2056:
case 3847:
case 3339:
case 3273:
case 3288:
case 3372:
case 3979:
case 949:
case 960:
case 2197:
case 1830:
case 813:
case 3461:
case 1036:
case 1134:
case 1676:
case 326:
case 4094:
case 2467:
case 435:
case 3701:
case 698:
case 2746:
case 289:
case 3976:
case 3130:
case 637:
case 2919:
case 3569:
case 1679:
case 3362:
case 3263:
case 1632:
case 1891:
case 3389:
case 2749:
case 302:
case 2893:
case 3610:
case 3914:
case 2564:
case 1121:
case 2091:
case 2384:
case 1093:
case 3744:
case 2306:
case 995:
case 1112:
case 3341:
case 3350:
case 3097:
case 275:
case 26:
case 2255:
case 629:
case 1778:
case 2836:
case 518:
case 1354:
case 109:
case 75:
case 4020:
case 2753:
case 2827:
case 2974:
case 3812:
case 1614:
case 1751:
case 500:
case 52:
case 1740:
case 2889:
case 3159:
case 1698:
case 2902:
case 2574:
case 2862:
case 734:
case 79:
case 1041:
case 1733:
case 1050:
case 2886:
case 339:
case 955:
case 681:
case 3054:
case 400:
case 1235:
case 2208:
case 2080:
case 644:
case 3514:
case 782:
case 3998:
case 2660:
case 972:
case 493:
case 4077:
case 1814:
case 844:
case 3483:
case 2870:
case 2627:
case 3019:
case 3352:
case 1345:
case 1110:
case 2174:
case 1444:
case 2244:
case 723:
case 2923:
case 1825:
case 4011:
case 348:
case 2848:
case 94:
case 553:
case 537:
case 2500:
case 2418:
case 3810:
case 3556:
case 2639:
case 325:
case 2604:
case 762:
case 1512:
case 3468:
case 1319:
case 498:
case 3433:
case 2164:
case 1521:
case 661:
case 2229:
case 2102:
case 3959:
case 343:
case 2662:
case 1656:
case 1294:
case 453:
case 2689:
case 437:
case 3064:
case 1534:
case 3591:
case 2145:
case 956:
case 1869:
case 3647:
case 3684:
case 3980:
case 3215:
case 33:
case 2597:
case 2650:
case 2773:
case 853:
case 2641:
case 3348:
case 4085:
case 1771:
case 799:
case 544:
case 3943:
case 898:
case 3224:
case 1060:
case 3370:
case 613:
case 3609:
case 997:
case 3499:
case 164:
case 1758:
case 581:
case 2275:
case 1691:
case 3634:
case 3176:
case 3930:
case 3074:
case 1364:
case 1401:
case 957:
case 1465:
case 1705:
case 3543:
case 858:
case 1195:
case 2025:
case 4035:
case 120:
case 2763:
case 444:
case 3207:
case 269:
case 62:
case 2997:
case 2554:
case 1876:
case 3132:
case 2201:
case 618:
case 3246:
case 3580:
case 354:
case 2265:
case 481:
case 2014:
case 3360:
case 2116:
case 1630:
case 1203:
case 3991:
case 996:
case 980:
case 2475:
case 2869:
case 3152:
case 3777:
case 3593:
case 3424:
case 3325:
case 1597:
case 1650:
case 2220:
case 2643:
case 1420:
case 3654:
case 3950:
case 3296:
case 359:
case 517:
case 416:
case 3415:
case 4055:
case 177:
case 2717:
case 1275:
case 264:
case 3722:
case 3767:
case 1403:
case 1693:
case 2691:
case 3398:
case 2364:
case 3010:
case 2401:
case 1738:
case 399:
case 2506:
case 3816:
case 3541:
case 2048:
case 20:
case 3407:
case 3550:
case 1119:
case 424:
case 3697:
case 615:
case 672:
case 2876:
case 1997:
case 3449:
case 1554:
case 3993:
case 3819:
case 176:
case 2203:
case 401:
case 192:
case 2257:
case 1627:
case 900:
case 3939:
case 31:
case 92:
case 3148:
case 817:
case 2814:
case 1870:
case 3623:
case 455:
case 3366:
case 696:
case 1076:
case 743:
case 2444:
case 1636:
case 3785:
case 2345:
case 1244:
case 595:
case 4013:
case 3453:
case 3170:
case 633:
case 1848:
case 18:
case 2825:
case 1287:
case 3589:
case 3278:
case 2742:
case 3382:
case 362:
case 1639:
case 3927:
case 1032:
case 1457:
case 2912:
case 2319:
case 3527:
case 1860:
case 1604:
case 3962:
case 2512:
case 3431:
case 725:
case 3989:
case 3028:
case 3536:
case 849:
case 1164:
case 2521:
case 1066:
case 3376:
case 860:
case 2052:
case 2437:
case 913:
case 555:
case 1686:
case 2429:
case 495:
case 3986:
case 1237:
case 3379:
case 1069:
case 3539:
case 3490:
case 3332:
case 3572:
case 3233:
case 1689:
case 2294:
case 3706:
case 2033:
case 2673:
case 335:
case 2750:
case 1743:
case 1671:
case 3561:
case 2911:
case 426:
case 2815:
case 527:
case 959:
case 3747:
case 3917:
case 2445:
case 1175:
case 2567:
case 2344:
case 733:
case 3466:
case 402:
case 3252:
case 1245:
case 267:
case 203:
case 191:
case 2977:
case 780:
case 643:
case 514:
case 3971:
case 1090:
case 1318:
case 3469:
case 3875:
case 3331:
case 3571:
case 2078:
case 526:
case 1495:
case 1605:
case 105:
case 2577:
case 2337:
case 3476:
case 756:
case 839:
case 738:
case 2051:
case 3558:
case 2329:
case 2416:
case 2040:
case 1053:
case 266:
case 3801:
case 3432:
case 279:
case 999:
case 1219:
case 625:
case 1410:
case 1144:
case 1046:
case 2535:
case 3721:
case 3270:
case 8:
case 1007:
case 3425:
case 3178:
case 3942:
case 1840:
case 188:
case 2853:
case 1049:
case 2118:
case 2157:
case 1320:
case 32:
case 3248:
case 827:
case 91:
case 2772:
case 1883:
case 3140:
case 654:
case 1878:
case 3315:
case 2210:
case 2881:
case 285:
case 2985:
case 439:
case 3260:
case 671:
case 1759:
case 2585:
case 2464:
case 3498:
case 3346:
case 2365:
case 1137:
case 3133:
case 2194:
case 1756:
case 2762:
case 3837:
case 3542:
case 313:
case 923:
case 1908:
case 2692:
case 2402:
case 2099:
case 4006:
case 3065:
case 45:
case 2508:
case 3857:
case 2046:
case 3818:
case 3723:
case 2187:
case 2955:
case 699:
case 288:
case 2851:
case 2007:
case 925:
case 582:
case 4084:
case 372:
case 1772:
case 534:
case 3470:
case 59:
case 185:
case 1985:
case 1585:
case 718:
case 2137:
case 3075:
case 1301:
case 55:
case 3992:
case 1704:
case 700:
case 0:
case 2024:
case 2126:
case 1194:
case 3131:
case 72:
case 230:
case 1762:
case 2756:
case 2555:
case 1789:
case 2833:
case 2264:
case 3298:
case 1692:
case 1831:
case 2908:
case 2868:
case 3460:
case 1402:
case 1688:
case 1741:
case 2899:
case 4021:
case 1815:
case 2743:
case 2031:
case 3538:
case 3124:
case 834:
case 3282:
case 623:
case 1344:
case 1922:
case 1445:
case 3452:
case 4012:
case 3037:
case 3677:
case 167:
case 3266:
case 356:
case 103:
case 1228:
case 2245:
case 1824:
case 338:
case 3340:
case 2780:
case 274:
case 3115:
case 3351:
case 994:
case 2658:
case 3029:
case 446:
case 3754:
case 93:
case 3988:
case 2318:
case 3107:
case 2495:
case 645:
case 1419:
case 1083:
case 1326:
case 3368:
case 2661:
case 3797:
case 205:
case 3573:
case 3232:
case 3588:
case 1793:
case 3044:
case 2101:
case 628:
case 2165:
case 380:
case 2791:
case 1416:
case 761:
case 1040:
case 108:
case 1051:
case 570:
case 1967:
case 333:
case 2730:
case 3276:
case 519:
case 1511:
case 179:
case 662:
case 1846:
case 546:
case 2513:
case 3008:
case 2501:
case 324:
case 3280:
case 9:
case 862:
case 3915:
case 1177:
case 211:
case 2766:
case 2484:
case 1752:
case 499:
case 2385:
case 2858:
case 4010:
case 3450:
case 3441:
case 3822:
case 1624:
case 65:
case 1454:
case 3243:
case 828:
case 3924:
case 3342:
case 3620:
case 2769:
case 1206:
case 729:
case 2113:
case 2871:
case 2409:
case 1615:
case 845:
case 1888:
case 927:
case 81:
case 3230:
case 2776:
case 3493:
case 1167:
case 2335:
case 3719:
case 190:
case 186:
case 902:
case 3949:
case 1497:
case 3524:
case 3138:
case 2297:
case 69:
case 823:
case 360:
case 1649:
case 3907:
case 3055:
case 1520:
case 1042:
case 3291:
case 316:
case 1903:
case 926:
case 459:
case 2901:
case 2861:
case 634:
case 2965:
case 3515:
case 17:
case 2725:
case 165:
case 2412:
case 3531:
case 2678:
case 1594:
case 1061:
case 1957:
case 2683:
case 4028:
case 3427:
case 3774:
case 545:
case 131:
case 2377:
case 2537:
case 736:
case 51:
case 859:
case 2842:
case 2421:
case 2987:
case 562:
case 1221:
case 2714:
case 3358:
case 3317:
case 2651:
case 268:
case 793:
case 2322:
case 2640:
case 2944:
case 2223:
case 3981:
case 142:
case 1212:
case 395:
case 3472:
case 3590:
case 2155:
case 2311:
case 3439:
case 3361:
case 1071:
case 3694:
case 1631:
case 1892:
case 3305:
case 523:
case 2073:
case 2200:
case 3581:
case 2929:
case 2367:
case 753:
case 2544:
case 3764:
case 2798:
case 1017:
case 1058:
case 2937:
case 3192:
case 899:
case 462:
case 3702:
case 3259:
case 798:
case 263:
case 1994:
case 3931:
case 2926:
case 3489:
case 27:
case 3239:
case 3373:
case 3533:
case 3272:
case 1063:
case 2005:
case 1678:
case 2594:
case 3568:
case 1526:
case 2061:
case 4045:
case 2957:
case 2918:
case 2423:
case 231:
case 1421:
case 3940:
case 3951:
case 1377:
case 934:
case 106:
case 353:
case 1714:
case 337:
case 83:
case 1944:
case 525:
case 1529:
case 1651:
case 3227:
case 2313:
case 242:
case 548:
case 3983:
case 602:
case 894:
case 3978:
case 1311:
case 1155:
case 3289:
case 3583:
case 3578:
case 2631:
case 854:
case 2892:
case 1073:
case 1633:
case 3363:
case 1088:
case 4019:
case 1544:
case 3459:
case 1108:
case 3637:
case 1929:
case 1367:
case 393:
case 627:
case 425:
case 614:
case 3022:
case 3286:
case 3540:
case 2017:
case 3629:
case 1937:
case 2760:
case 336:
case 3456:
case 4016:
case 3968:
case 3808:
case 2400:
case 2518:
case 543:
case 3204:
case 3035:
case 3999:
case 1565:
case 1447:
case 53:
case 716:
case 1385:
case 2209:
case 3728:
case 111:
case 3813:
case 1484:
case 1696:
case 1406:
case 1817:
case 4074:
case 1858:
case 571:
case 848:
case 594:
case 1254:
case 639:
case 1782:
case 250:
case 3250:
case 454:
case 1975:
case 2284:
case 1092:
case 2873:
case 344:
case 1335:
case 3665:
case 946:
case 2646:
case 43:
case 717:
case 290:
case 494:
case 3161:
case 329:
case 3596:
case 4064:
case 471:
case 1779:
case 2042:
case 4002:
case 2649:
case 2234:
case 2863:
case 3599:
case 1965:
case 1805:
case 1901:
case 3430:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1754658002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,];
var gg_b = "1754658002/";

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
