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
var o = 0;
switch (g) {
case 2928:
case 1518:
case 3037:
case 502:
case 950:
case 1333:
case 3033:
case 128:
case 1297:
case 3720:
case 1293:
case 4024:
case 2612:
case 2897:
case 778:
case 3571:
case 3790:
case 1227:
case 3664:
case 1146:
case 781:
case 1223:
case 4094:
case 3530:
case 3476:
case 3606:
case 2178:
case 2750:
case 865:
case 3161:
case 540:
case 567:
case 2388:
case 2998:
case 964:
case 2209:
case 3866:
case 1809:
case 1989:
case 2416:
case 3305:
case 3441:
case 1381:
case 2035:
case 3984:
case 2839:
case 3081:
case 3804:
case 3945:
case 3409:
case 2855:
case 1495:
case 2434:
case 3679:
case 1255:
case 1466:
case 2059:
case 3216:
case 1322:
case 476:
case 801:
case 2241:
case 2354:
case 3022:
case 1841:
case 3118:
case 1802:
case 67:
case 1982:
case 2202:
case 2832:
case 3672:
case 1024:
case 2052:
case 2511:
case 1921:
case 661:
case 2100:
case 93:
case 1329:
case 3825:
case 164:
case 3873:
case 1701:
case 3785:
case 310:
case 2589:
case 2426:
case 2731:
case 3551:
case 1603:
case 4040:
case 1312:
case 1607:
case 1473:
case 3143:
case 3147:
case 1749:
case 2369:
case 2006:
case 3978:
case 1036:
case 2064:
case 2496:
case 1319:
case 3815:
case 2256:
case 3019:
case 2465:
case 867:
case 3314:
case 662:
case 450:
case 2158:
case 1014:
case 30:
case 2521:
case 1543:
case 2681:
case 794:
case 1547:
case 658:
case 2145:
case 2918:
case 2699:
case 2622:
case 4014:
case 150:
case 730:
case 43:
case 3710:
case 993:
case 1968:
case 2875:
case 2817:
case 272:
case 3880:
case 636:
case 3340:
case 2072:
case 1863:
case 923:
case 1707:
case 2597:
case 2134:
case 1703:
case 1166:
case 2737:
case 2868:
case 2733:
case 939:
case 1268:
case 998:
case 3418:
case 1601:
case 724:
case 679:
case 3557:
case 174:
case 2116:
case 1818:
case 653:
case 4086:
case 3102:
case 236:
case 1350:
case 1642:
case 2963:
case 3050:
case 877:
case 3830:
case 3200:
case 2527:
case 2090:
case 1913:
case 301:
case 1541:
case 3759:
case 1157:
case 2555:
case 207:
case 365:
case 2799:
case 50:
case 3525:
case 2956:
case 3461:
case 510:
case 2811:
case 1638:
case 3965:
case 1086:
case 2532:
case 474:
case 2792:
case 1502:
case 1955:
case 2712:
case 768:
case 3620:
case 2941:
case 2044:
case 1331:
case 1289:
case 2889:
case 3577:
case 432:
case 1451:
case 3284:
case 439:
case 2650:
case 1221:
case 1180:
case 2719:
case 261:
case 1282:
case 3764:
case 3167:
case 1177:
case 3428:
case 1774:
case 220:
case 1383:
case 3443:
case 309:
case 180:
case 1997:
case 3083:
case 759:
case 466:
case 2228:
case 974:
case 340:
case 2126:
case 367:
case 205:
case 2247:
case 2196:
case 671:
case 796:
case 1567:
case 3772:
case 2165:
case 3008:
case 1923:
case 3156:
case 66:
case 1927:
case 1115:
case 3498:
case 3258:
case 2314:
case 3521:
case 4074:
case 2815:
case 3496:
case 3256:
case 3582:
case 2336:
case 3064:
case 1865:
case 1306:
case 2456:
case 2978:
case 569:
case 1069:
case 2226:
case 3637:
case 562:
case 2012:
case 2551:
case 2744:
case 3426:
case 210:
case 2785:
case 1277:
case 1584:
case 601:
case 2652:
case 3072:
case 3629:
case 3817:
case 2900:
case 2467:
case 4062:
case 3813:
case 2880:
case 558:
case 1558:
case 1121:
case 3184:
case 353:
case 3079:
case 3875:
case 1191:
case 1379:
case 1074:
case 1189:
case 2710:
case 3783:
case 1475:
case 3681:
case 3145:
case 1694:
case 3276:
case 2161:
case 3388:
case 3998:
case 36:
case 4054:
case 3848:
case 2476:
case 2958:
case 869:
case 371:
case 2720:
case 667:
case 3893:
case 390:
case 2571:
case 3612:
case 334:
case 148:
case 2853:
case 104:
case 1257:
case 1225:
case 2546:
case 3052:
case 2672:
case 2324:
case 1578:
case 3832:
case 404:
case 2092:
case 1439:
case 3354:
case 1951:
case 2022:
case 1054:
case 3434:
case 561:
case 1359:
case 2945:
case 2409:
case 3059:
case 3035:
case 277:
case 1204:
case 2441:
case 1168:
case 2804:
case 836:
case 2866:
case 2234:
case 2099:
case 3209:
case 1295:
case 1266:
case 2305:
case 57:
case 1455:
case 2163:
case 2706:
case 853:
case 1565:
case 3902:
case 361:
case 3882:
case 1421:
case 879:
case 3719:
case 1925:
case 3650:
case 3821:
case 1714:
case 1482:
case 1175:
case 2284:
case 3891:
case 918:
case 2577:
case 1884:
case 2573:
case 1904:
case 1001:
case 1966:
case 3445:
case 2934:
case 937:
case 3889:
case 1344:
case 3484:
case 1491:
case 3044:
case 2620:
case 677:
case 1526:
case 3349:
case 1489:
case 1858:
case 1686:
case 4001:
case 2008:
case 534:
case 3976:
case 3458:
case 906:
case 1038:
case 3165:
case 3243:
case 240:
case 305:
case 143:
case 1310:
case 320:
case 2083:
case 2447:
case 3010:
case 2428:
case 437:
case 3090:
case 553:
case 1390:
case 201:
case 579:
case 3967:
case 336:
case 2050:
case 935:
case 3631:
case 1468:
case 3218:
case 2553:
case 943:
case 2557:
case 1155:
case 2418:
case 3134:
case 2644:
case 3020:
case 2176:
case 888:
case 362:
case 3792:
case 2965:
case 2386:
case 2996:
case 1878:
case 2461:
case 1148:
case 3811:
case 834:
case 3729:
case 1127:
case 2846:
case 3956:
case 3478:
case 2525:
case 3608:
case 1246:
case 1534:
case 1197:
case 1794:
case 265:
case 307:
case 3781:
case 137:
case 1977:
case 3555:
case 1516:
case 2610:
case 369:
case 3687:
case 3936:
case 68:
case 2592:
case 454:
case 844:
case 2969:
case 3011:
case 3552:
case 3914:
case 2046:
case 1698:
case 2486:
case 2529:
case 3103:
case 1709:
case 3107:
case 3795:
case 2962:
case 4000:
case 421:
case 1647:
case 3535:
case 2755:
case 3559:
case 263:
case 314:
case 1554:
case 1912:
case 486:
case 2522:
case 3890:
case 121:
case 696:
case 1000:
case 922:
case 447:
case 857:
case 226:
case 76:
case 1490:
case 460:
case 2621:
case 555:
case 1588:
case 3154:
case 2689:
case 2318:
case 154:
case 1420:
case 945:
case 1135:
case 1368:
case 49:
case 2071:
case 2974:
case 2797:
case 788:
case 1507:
case 544:
case 1058:
case 921:
case 508:
case 282:
case 3438:
case 3780:
case 3646:
case 1208:
case 2136:
case 986:
case 4045:
case 3572:
case 2238:
case 1763:
case 1410:
case 2347:
case 2328:
case 145:
case 289:
case 2887:
case 230:
case 624:
case 1287:
case 3810:
case 1574:
case 1937:
case 2775:
case 1569:
case 2140:
case 3082:
case 1756:
case 1929:
case 3715:
case 433:
case 99:
case 557:
case 3021:
case 3924:
case 1321:
case 1270:
case 445:
case 422:
case 1981:
case 1562:
case 3777:
case 1801:
case 3885:
case 3905:
case 1999:
case 1389:
case 4058:
case 1618:
case 2831:
case 3089:
case 3401:
case 2051:
case 1045:
case 1485:
case 3345:
case 3746:
case 2829:
case 2025:
case 1190:
case 1663:
case 2942:
case 3224:
case 2711:
case 1667:
case 3032:
case 2613:
case 762:
case 2424:
case 2617:
case 2892:
case 2302:
case 915:
case 2341:
case 1435:
case 2822:
case 846:
case 769:
case 2494:
case 2675:
case 2405:
case 3316:
case 1355:
case 3835:
case 1339:
case 3454:
case 357:
case 2881:
case 492:
case 1459:
case 3205:
case 1120:
case 3615:
case 156:
case 2550:
case 2938:
case 2186:
case 682:
case 887:
case 3048:
case 4034:
case 814:
case 3023:
case 251:
case 503:
case 3590:
case 3771:
case 1807:
case 1987:
case 1397:
case 138:
case 3520:
case 2837:
case 1233:
case 2768:
case 1237:
case 3403:
case 2057:
case 3407:
case 689:
case 2053:
case 184:
case 3240:
case 2367:
case 1538:
case 1950:
case 1313:
case 1472:
case 2440:
case 3013:
case 252:
case 1602:
case 2080:
case 2632:
case 1375:
case 3879:
case 938:
case 999:
case 2655:
case 720:
case 1641:
case 170:
case 1185:
case 2587:
case 259:
case 917:
case 42:
case 984:
case 678:
case 3149:
case 3214:
case 1464:
case 77:
case 2015:
case 1676:
case 1406:
case 2356:
case 2819:
case 2627:
case 3864:
case 3236:
case 3806:
case 3986:
case 2648:
case 3138:
case 3365:
case 1869:
case 1549:
case 3326:
case 2812:
case 2697:
case 1212:
case 3751:
case 3462:
case 2531:
case 2789:
case 1501:
case 3653:
case 491:
case 2077:
case 2262:
case 3657:
case 2162:
case 1210:
case 389:
case 2810:
case 3883:
case 1112:
case 1028:
case 2260:
case 608:
case 3343:
case 125:
case 1043:
case 644:
case 394:
case 149:
case 1487:
case 285:
case 775:
case 3611:
case 2572:
case 3238:
case 3398:
case 3988:
case 524:
case 1098:
case 2646:
case 382:
case 3717:
case 868:
case 3713:
case 3114:
case 3249:
case 1959:
case 3668:
case 442:
case 852:
case 1244:
case 3954:
case 2844:
case 41:
case 2089:
case 1935:
case 3201:
case 2994:
case 2091:
case 2777:
case 2021:
case 3870:
case 1952:
case 400:
case 616:
case 2564:
case 1536:
case 4047:
case 2442:
case 2630:
case 4028:
case 3140:
case 3522:
case 214:
case 1716:
case 3755:
case 1133:
case 127:
case 2535:
case 3599:
case 1505:
case 3046:
case 1346:
case 3529:
case 2552:
case 1524:
case 1886:
case 568:
case 2188:
case 3071:
case 3974:
case 2651:
case 3105:
case 1199:
case 3533:
case 1181:
case 552:
case 1645:
case 1684:
case 2753:
case 3691:
case 1122:
case 3689:
case 2154:
case 1018:
case 596:
case 949:
case 1192:
case 1330:
case 3748:
case 3124:
case 3723:
case 2300:
case 246:
case 91:
case 1450:
case 2890:
case 1129:
case 1290:
case 255:
case 2149:
case 44:
case 767:
case 2474:
case 2695:
case 1634:
case 995:
case 3583:
case 359:
case 3274:
case 412:
case 4056:
case 581:
case 1616:
case 578:
case 3440:
case 702:
case 3080:
case 352:
case 2625:
case 1272:
case 3363:
case 2872:
case 1840:
case 1063:
case 396:
case 3367:
case 2653:
case 3791:
case 1377:
case 3073:
case 3262:
case 1784:
case 3531:
case 119:
case 4063:
case 368:
case 3693:
case 2462:
case 4067:
case 687:
case 1745:
case 2326:
case 1419:
case 2396:
case 3269:
case 2365:
case 3627:
case 563:
case 889:
case 3623:
case 2864:
case 2469:
case 3015:
case 3819:
case 3356:
case 1315:
case 2214:
case 894:
case 3570:
case 3436:
case 38:
case 1985:
case 3066:
case 55:
case 997:
case 3899:
case 1805:
case 3095:
case 2205:
case 1894:
case 2454:
case 1304:
case 826:
case 3881:
case 1235:
case 4076:
case 2055:
case 3675:
case 1259:
case 3949:
case 1499:
case 3405:
case 1481:
case 1944:
case 3822:
case 3494:
case 1002:
case 2680:
case 878:
case 3617:
case 2032:
case 216:
case 1150:
case 1429:
case 1824:
case 3942:
case 2852:
case 1492:
case 912:
case 3711:
case 2224:
case 1325:
case 3025:
case 603:
case 1433:
case 1437:
case 1353:
case 3057:
case 2403:
case 3053:
case 195:
case 1357:
case 4002:
case 2407:
case 2673:
case 3768:
case 1626:
case 411:
case 685:
case 3203:
case 208:
case 1910:
case 3207:
case 701:
case 2027:
case 589:
case 2048:
case 530:
case 4009:
case 3550:
case 3186:
case 594:
case 2615:
case 1076:
case 1652:
case 4012:
case 3863:
case 1340:
case 3738:
case 2413:
case 3867:
case 2182:
case 574:
case 1467:
case 1463:
case 2121:
case 2558:
case 2930:
case 410:
case 3968:
case 1659:
case 3275:
case 700:
case 2189:
case 3654:
case 2971:
case 2074:
case 3528:
case 3151:
case 2475:
case 866:
case 3547:
case 2760:
case 3543:
case 10:
case 3742:
case 1314:
case 3856:
case 1336:
case 1198:
case 880:
case 3036:
case 475:
case 898:
case 823:
case 1978:
case 2896:
case 1265:
case 1296:
case 1147:
case 1226:
case 1143:
case 1744:
case 3607:
case 3473:
case 1551:
case 637:
case 977:
case 2273:
case 1877:
case 2062:
case 1546:
case 3329:
case 4037:
case 4033:
case 1029:
case 2225:
case 1324:
case 2640:
case 1672:
case 3130:
case 874:
case 3425:
case 1092:
case 3561:
case 3841:
case 1022:
case 1118:
case 3322:
case 3404:
case 1216:
case 3466:
case 1409:
case 1394:
case 1984:
case 2335:
case 727:
case 1441:
case 177:
case 3171:
case 1305:
case 3989:
case 2834:
case 3005:
case 1234:
case 1866:
case 3876:
case 2427:
case 2614:
case 539:
case 580:
case 1606:
case 1530:
case 3146:
case 1790:
case 4081:
case 1664:
case 3227:
case 3457:
case 3293:
case 635:
case 2003:
case 3297:
case 2007:
case 1720:
case 643:
case 532:
case 3333:
case 204:
case 2257:
case 3662:
case 2493:
case 4092:
case 1258:
case 528:
case 3927:
case 332:
case 1156:
case 3923:
case 102:
case 3898:
case 3567:
case 1772:
case 2038:
case 3060:
case 167:
case 2953:
case 3843:
case 140:
case 235:
case 3828:
case 380:
case 339:
case 648:
case 398:
case 4070:
case 2310:
case 1087:
case 109:
case 3383:
case 3173:
case 1428:
case 1779:
case 3177:
case 2565:
case 3769:
case 1167:
case 1706:
case 3932:
case 1163:
case 1764:
case 3282:
case 2421:
case 850:
case 74:
case 2736:
case 2117:
case 2113:
case 3370:
case 1070:
case 2001:
case 1573:
case 3939:
case 402:
case 3451:
case 3762:
case 719:
case 2385:
case 2995:
case 2966:
case 3289:
case 965:
case 1851:
case 2491:
case 2251:
case 4008:
case 1245:
case 2489:
case 2526:
case 3955:
case 3861:
case 828:
case 2411:
case 1176:
case 1386:
case 3446:
case 1278:
case 3086:
case 2148:
case 1461:
case 1752:
case 2724:
case 2246:
case 1846:
case 2193:
case 2705:
case 2197:
case 53:
case 3509:
case 1595:
case 2660:
case 1504:
case 2973:
case 165:
case 876:
case 1759:
case 1926:
case 3754:
case 613:
case 1610:
case 3541:
case 3913:
case 101:
case 3917:
case 331:
case 3125:
case 1830:
case 902:
case 550:
case 2230:
case 206:
case 2132:
case 1102:
case 3430:
case 3788:
case 3576:
case 2468:
case 940:
case 3818:
case 374:
case 795:
case 1553:
case 1418:
case 3649:
case 2139:
case 3104:
case 909:
case 2271:
case 3195:
case 1109:
case 1416:
case 3834:
case 3266:
case 1209:
case 3295:
case 3168:
case 3204:
case 1035:
case 2381:
case 806:
case 2239:
case 1059:
case 1434:
case 7:
case 1855:
case 747:
case 46:
case 3951:
case 1241:
case 1354:
case 2322:
case 434:
case 2392:
case 2982:
case 2232:
case 2425:
case 3786:
case 1052:
case 1511:
case 488:
case 3640:
case 490:
case 2329:
case 1100:
case 623:
case 1928:
case 3493:
case 348:
case 698:
case 1947:
case 754:
case 3253:
case 639:
case 293:
case 2337:
case 3003:
case 2457:
case 188:
case 1897:
case 1612:
case 1303:
case 228:
case 1893:
case 2223:
case 3636:
case 1823:
case 2248:
case 972:
case 786:
case 1178:
case 16:
case 632:
case 3614:
case 3427:
case 837:
case 1388:
case 3448:
case 818:
case 3088:
case 1619:
case 1145:
case 3760:
case 2547:
case 2543:
case 4064:
case 3605:
case 4006:
case 3475:
case 1918:
case 1374:
case 3074:
case 250:
case 745:
case 3191:
case 990:
case 1875:
case 1184:
case 2275:
case 2968:
case 1079:
case 3121:
case 2213:
case 172:
case 1817:
case 3280:
case 3182:
case 1629:
case 2598:
case 1267:
case 2863:
case 2040:
case 1072:
case 2738:
case 2480:
case 3584:
case 313:
case 1426:
case 1589:
case 2607:
case 4072:
case 3826:
case 1633:
case 3306:
case 3069:
case 1006:
case 1369:
case 3364:
case 4079:
case 453:
case 1256:
case 3946:
case 2319:
case 2911:
case 479:
case 1521:
case 835:
case 2742:
case 1770:
case 436:
case 2754:
case 1683:
case 2157:
case 3516:
case 3977:
case 4090:
case 3794:
case 3973:
case 2509:
case 3197:
case 318:
case 3534:
case 3123:
case 3246:
case 3127:
case 1729:
case 513:
case 3915:
case 848:
case 458:
case 1532:
case 2502:
case 1792:
case 63:
case 162:
case 1261:
case 2166:
case 3320:
case 738:
case 1134:
case 1020:
case 1733:
case 1868:
case 2649:
case 920:
case 1116:
case 274:
case 784:
case 650:
case 462:
case 1218:
case 3468:
case 2788:
case 306:
case 3132:
case 1670:
case 1400:
case 756:
case 1548:
case 3230:
case 3390:
case 3980:
case 407:
case 1523:
case 2125:
case 792:
case 1527:
case 2917:
case 231:
case 2173:
case 183:
case 2177:
case 2387:
case 298:
case 1010:
case 2383:
case 120:
case 2774:
case 2828:
case 1228:
case 693:
case 628:
case 461:
case 2060:
case 1243:
case 3740:
case 813:
case 2567:
case 3038:
case 1196:
case 1976:
case 2898:
case 1458:
case 791:
case 232:
case 676:
case 2923:
case 1513:
case 4085:
case 2948:
case 969:
case 3845:
case 3489:
case 3526:
case 3491:
case 3344:
case 1484:
case 1712:
case 1445:
case 3995:
case 1085:
case 3966:
case 2331:
case 1301:
case 3482:
case 1342:
case 2221:
case 4010:
case 3042:
case 266:
case 72:
case 2556:
case 483:
case 2282:
case 3421:
case 1882:
case 161:
case 2769:
case 3565:
case 2726:
case 3045:
case 2431:
case 1401:
case 1174:
case 1089:
case 1885:
case 3389:
case 1905:
case 3231:
case 3084:
case 3981:
case 3562:
case 1777:
case 3444:
case 1384:
case 1091:
case 713:
case 3270:
case 3321:
case 2514:
case 3842:
case 1021:
case 3929:
case 403:
case 3756:
case 1715:
case 3382:
case 2536:
case 3992:
case 2470:
case 2600:
case 1082:
case 1564:
case 611:
case 2796:
case 2765:
case 1630:
case 103:
case 592:
case 329:
case 4021:
case 200:
case 3574:
case 1810:
case 345:
case 2028:
case 556:
case 185:
case 2487:
case 4082:
case 249:
case 82:
case 2860:
case 2047:
case 225:
case 2483:
case 3410:
case 3106:
case 242:
case 1169:
case 1646:
case 2098:
case 4091:
case 322:
case 1358:
case 4089:
case 538:
case 21:
case 599:
case 903:
case 2371:
case 4011:
case 2645:
case 3368:
case 591:
case 704:
case 748:
case 2684:
case 354:
case 1154:
case 414:
case 3588:
case 2192:
case 3490:
case 2972:
case 241:
case 3152:
case 570:
case 2330:
case 2290:
case 2129:
case 2450:
case 1300:
case 146:
case 321:
case 3741:
case 892:
case 3912:
case 360:
case 2716:
case 619:
case 446:
case 1704:
case 227:
case 187:
case 2505:
case 52:
case 1766:
case 3919:
case 4068:
case 3698:
case 1914:
case 1011:
case 3311:
case 884:
case 3078:
case 1286:
case 1378:
case 1188:
case 2061:
case 838:
case 2964:
case 515:
case 2373:
case 2784:
case 4017:
case 2412:
case 2377:
case 4013:
case 2187:
case 1585:
case 2183:
case 1751:
case 1462:
case 3212:
case 1544:
case 315:
case 547:
case 2206:
case 3869:
case 833:
case 3096:
case 3065:
case 1986:
case 1236:
case 2108:
case 24:
case 829:
case 916:
case 212:
case 3676:
case 1469:
case 2056:
case 3542:
case 3464:
case 32:
case 1604:
case 3747:
case 1666:
case 3728:
case 743:
case 3609:
case 3185:
case 2920:
case 3874:
case 3641:
case 2131:
case 2616:
case 908:
case 2279:
case 521:
case 3375:
case 1101:
case 2170:
case 2758:
case 1013:
case 641:
case 3317:
case 3602:
case 3313:
case 2990:
case 3798:
case 554:
case 2063:
case 3950:
case 416:
case 2437:
case 2433:
case 1407:
case 600:
case 1403:
case 89:
case 2353:
case 317:
case 3233:
case 1520:
case 3803:
case 1097:
case 108:
case 625:
case 144:
case 338:
case 1093:
case 649:
case 399:
case 2700:
case 3323:
case 860:
case 392:
case 4039:
case 847:
case 2665:
case 1488:
case 8:
case 529:
case 356:
case 4055:
case 61:
case 3888:
case 1205:
case 3931:
case 2366:
case 2009:
case 3459:
case 1334:
case 157:
case 737:
case 4023:
case 1294:
case 2304:
case 3281:
case 4027:
case 3339:
case 886:
case 1859:
case 1316:
case 3355:
case 3435:
case 2041:
case 3854:
case 821:
case 2944:
case 3292:
case 1680:
case 2586:
case 2429:
case 2150:
case 444:
case 2252:
case 854:
case 3970:
case 1852:
case 2824:
case 211:
case 1746:
case 1727:
case 3129:
case 3290:
case 221:
case 3450:
case 1030:
case 2152:
case 1748:
case 286:
case 1850:
case 2250:
case 2588:
case 811:
case 994:
case 1318:
case 3018:
case 2420:
case 1691:
case 670:
case 2159:
case 254:
case 793:
case 1537:
case 4046:
case 3645:
case 3181:
case 2507:
case 1105:
case 1071:
case 728:
case 3061:
case 3964:
case 1361:
case 1592:
case 2702:
case 3658:
case 1969:
case 1732:
case 519:
case 2311:
case 2919:
case 1486:
case 3346:
case 95:
case 2698:
case 3734:
case 2709:
case 2628:
case 327:
case 2647:
case 1739:
case 3594:
case 3137:
case 512:
case 481:
case 1962:
case 1581:
case 3716:
case 1755:
case 426:
case 2554:
case 2172:
case 2569:
case 2382:
case 2992:
case 3600:
case 494:
case 2929:
case 2756:
case 2321:
case 430:
case 3514:
case 2842:
case 1870:
case 15:
case 2801:
case 2084:
case 2391:
case 482:
case 2562:
case 2981:
case 3935:
case 1201:
case 764:
case 2444:
case 3285:
case 2618:
case 2231:
case 963:
case 3244:
case 1249:
case 3431:
case 2058:
case 1114:
case 222:
case 2661:
case 3119:
case 1136:
case 2208:
case 595:
case 1398:
case 2164:
case 1808:
case 2763:
case 692:
case 342:
case 1238:
case 2106:
case 4051:
case 1611:
case 2838:
case 349:
case 638:
case 3043:
case 1343:
case 3028:
case 617:
case 1328:
case 2574:
case 300:
case 2287:
case 229:
case 1883:
case 45:
case 3210:
case 1907:
case 750:
case 245:
case 684:
case 2283:
case 2933:
case 549:
case 2656:
case 996:
case 1288:
case 525:
case 2908:
case 1376:
case 4066:
case 952:
case 3700:
case 2983:
case 2803:
case 2397:
case 238:
case 2987:
case 299:
case 959:
case 1833:
case 2237:
case 3626:
case 774:
case 3357:
case 1053:
case 645:
case 124:
case 633:
case 3433:
case 2229:
case 2190:
case 3252:
case 2667:
case 2970:
case 3824:
case 1942:
case 3429:
case 3150:
case 2452:
case 424:
case 2292:
case 4053:
case 1494:
case 3041:
case 2854:
case 3944:
case 1822:
case 2435:
case 1341:
case 1254:
case 3481:
case 2222:
case 2355:
case 3499:
case 1405:
case 968:
case 3259:
case 2016:
case 451:
case 841:
case 1004:
case 1901:
case 2281:
case 3894:
case 2339:
case 3422:
case 1095:
case 3009:
case 2120:
case 2034:
case 1899:
case 2459:
case 3805:
case 1570:
case 18:
case 1436:
case 2542:
case 825:
case 22:
case 2464:
case 1819:
case 527:
case 3056:
case 2676:
case 1015:
case 1623:
case 3108:
case 800:
case 1627:
case 2869:
case 1648:
case 2065:
case 2026:
case 1160:
case 2549:
case 1693:
case 2212:
case 496:
case 6:
case 319:
case 3183:
case 1262:
case 3412:
case 1077:
case 2862:
case 452:
case 397:
case 647:
case 3377:
case 2950:
case 468:
case 621:
case 3063:
case 3272:
case 3067:
case 1363:
case 2798:
case 4073:
case 2602:
case 152:
case 291:
case 1440:
case 3380:
case 2472:
case 3990:
case 2313:
case 3170:
case 3758:
case 1655:
case 3279:
case 4015:
case 3616:
case 173:
case 2375:
case 739:
case 159:
case 798:
case 270:
case 780:
case 1274:
case 48:
case 2874:
case 2609:
case 924:
case 3634:
case 2743:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1760428801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,];
var gg_b = "1760428801/";

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
