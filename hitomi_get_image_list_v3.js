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
case 1815:
case 86:
case 278:
case 148:
case 2608:
case 1962:
case 469:
case 3584:
case 4026:
case 68:
case 3026:
case 2412:
case 2804:
case 3757:
case 2576:
case 793:
case 3148:
case 3956:
case 1003:
case 3931:
case 3728:
case 3447:
case 3616:
case 1887:
case 1210:
case 1172:
case 2536:
case 3326:
case 2820:
case 3194:
case 2551:
case 3413:
case 1701:
case 3019:
case 3364:
case 787:
case 4019:
case 3091:
case 2709:
case 1987:
case 3525:
case 1786:
case 3831:
case 2284:
case 4091:
case 3856:
case 2350:
case 1409:
case 3105:
case 783:
case 4064:
case 1765:
case 1670:
case 2465:
case 3276:
case 3474:
case 3319:
case 2792:
case 3064:
case 3682:
case 52:
case 157:
case 2050:
case 739:
case 3629:
case 1655:
case 3434:
case 2895:
case 494:
case 3236:
case 3391:
case 3613:
case 1190:
case 1006:
case 3467:
case 2573:
case 2089:
case 4037:
case 3647:
case 620:
case 3897:
case 3323:
case 3377:
case 698:
case 3141:
case 2389:
case 2952:
case 1580:
case 3721:
case 3337:
case 2527:
case 2408:
case 3023:
case 3269:
case 349:
case 84:
case 2558:
case 2322:
case 3978:
case 4023:
case 1:
case 14:
case 3878:
case 4044:
case 1430:
case 3634:
case 2755:
case 471:
case 2730:
case 3159:
case 27:
case 2445:
case 371:
case 1060:
case 2852:
case 2665:
case 3674:
case 1470:
case 200:
case 2770:
case 688:
case 1081:
case 417:
case 317:
case 2569:
case 230:
case 3853:
case 1783:
case 1360:
case 3398:
case 580:
case 3257:
case 3592:
case 960:
case 3228:
case 1710:
case 3397:
case 443:
case 3944:
case 306:
case 3998:
case 406:
case 447:
case 1201:
case 290:
case 1534:
case 3605:
case 2593:
case 3837:
case 3097:
case 1981:
case 3129:
case 1212:
case 2889:
case 2352:
case 3338:
case 319:
case 4053:
case 3661:
case 1342:
case 2108:
case 2989:
case 2557:
case 3776:
case 1707:
case 419:
case 3053:
case 1906:
case 766:
case 2292:
case 3977:
case 2922:
case 1881:
case 3736:
case 1513:
case 3937:
case 3441:
case 775:
case 3353:
case 3648:
case 2052:
case 3293:
case 358:
case 1042:
case 1672:
case 1286:
case 3694:
case 3078:
case 2784:
case 3468:
case 3919:
case 3134:
case 3659:
case 2020:
case 1625:
case 1315:
case 3174:
case 3991:
case 1803:
case 3530:
case 1988:
case 3405:
case 2004:
case 251:
case 1529:
case 3964:
case 2975:
case 60:
case 463:
case 3714:
case 1940:
case 3570:
case 1015:
case 955:
case 2935:
case 654:
case 404:
case 3668:
case 2095:
case 1690:
case 3296:
case 3331:
case 3356:
case 1684:
case 3480:
case 733:
case 2101:
case 1840:
case 2732:
case 3758:
case 2875:
case 3147:
case 737:
case 1432:
case 3641:
case 789:
case 2255:
case 1567:
case 3891:
case 764:
case 2395:
case 3031:
case 3733:
case 3461:
case 2607:
case 2270:
case 362:
case 1083:
case 2925:
case 3949:
case 1579:
case 1807:
case 2370:
case 3876:
case 3100:
case 2481:
case 3851:
case 431:
case 2330:
case 3520:
case 2295:
case 331:
case 155:
case 270:
case 254:
case 1760:
case 2688:
case 3798:
case 140:
case 3231:
case 2890:
case 3396:
case 301:
case 1650:
case 2884:
case 1045:
case 3256:
case 2055:
case 401:
case 2640:
case 723:
case 3143:
case 2984:
case 959:
case 3602:
case 2990:
case 3723:
case 2220:
case 3595:
case 702:
case 3611:
case 1152:
case 1215:
case 3737:
case 1422:
case 2142:
case 1308:
case 2722:
case 2603:
case 324:
case 732:
case 2789:
case 1489:
case 2531:
case 2825:
case 2204:
case 2309:
case 256:
case 2440:
case 1120:
case 2872:
case 2735:
case 1435:
case 3139:
case 3914:
case 2832:
case 2488:
case 2775:
case 3253:
case 3393:
case 2187:
case 1524:
case 3873:
case 2009:
case 2681:
case 415:
case 2252:
case 628:
case 2162:
case 426:
case 1689:
case 1312:
case 1001:
case 3499:
case 326:
case 1517:
case 1566:
case 4057:
case 3028:
case 238:
case 741:
case 1622:
case 3869:
case 3057:
case 2553:
case 3411:
case 1703:
case 3163:
case 860:
case 2578:
case 3958:
case 1301:
case 1012:
case 3814:
case 3552:
case 3328:
case 208:
case 2972:
case 3297:
case 2332:
case 3771:
case 1260:
case 777:
case 3033:
case 2372:
case 3928:
case 1886:
case 3731:
case 2577:
case 3073:
case 3957:
case 556:
case 3589:
case 3111:
case 4058:
case 1652:
case 2642:
case 3333:
case 9:
case 1912:
case 711:
case 3058:
case 2032:
case 2892:
case 968:
case 1495:
case 3199:
case 3685:
case 2795:
case 298:
case 1281:
case 1518:
case 2462:
case 1715:
case 4014:
case 600:
case 288:
case 474:
case 2222:
case 412:
case 2415:
case 445:
case 1404:
case 3600:
case 1812:
case 2289:
case 1965:
case 3314:
case 508:
case 3479:
case 630:
case 1986:
case 3828:
case 1787:
case 2188:
case 2720:
case 2140:
case 729:
case 2106:
case 53:
case 2662:
case 2084:
case 3485:
case 1189:
case 1695:
case 3336:
case 381:
case 28:
case 948:
case 2752:
case 3376:
case 2870:
case 2442:
case 792:
case 678:
case 4051:
case 2235:
case 3896:
case 2250:
case 3417:
case 2384:
case 50:
case 4036:
case 3051:
case 1240:
case 1599:
case 3076:
case 1007:
case 3466:
case 1288:
case 3443:
case 3424:
case 3049:
case 2025:
case 3639:
case 4049:
case 3996:
case 2160:
case 2687:
case 476:
case 3550:
case 2970:
case 782:
case 96:
case 376:
case 2325:
case 3349:
case 3821:
case 2615:
case 2930:
case 2955:
case 491:
case 365:
case 1203:
case 1324:
case 177:
case 247:
case 206:
case 2998:
case 2823:
case 2397:
case 1565:
case 1954:
case 1247:
case 2592:
case 3410:
case 1614:
case 2749:
case 1586:
case 111:
case 236:
case 1759:
case 1024:
case 586:
case 1449:
case 2129:
case 1300:
case 2182:
case 428:
case 972:
case 914:
case 328:
case 3593:
case 2937:
case 1017:
case 1451:
case 1673:
case 1436:
case 571:
case 2977:
case 596:
case 811:
case 1274:
case 3528:
case 3352:
case 2338:
case 1512:
case 2694:
case 1854:
case 1317:
case 517:
case 2923:
case 2167:
case 1768:
case 1627:
case 480:
case 1366:
case 2293:
case 513:
case 1658:
case 4052:
case 380:
case 135:
case 569:
case 662:
case 1469:
case 3165:
case 1583:
case 1811:
case 1079:
case 3020:
case 2659:
case 631:
case 2134:
case 1039:
case 916:
case 1216:
case 997:
case 1802:
case 3935:
case 204:
case 2714:
case 2570:
case 1705:
case 601:
case 2555:
case 451:
case 3975:
case 2964:
case 1545:
case 25:
case 2405:
case 3320:
case 2926:
case 1458:
case 1128:
case 2727:
case 909:
case 1748:
case 3875:
case 1427:
case 983:
case 1508:
case 3732:
case 3101:
case 4095:
case 1902:
case 2494:
case 3835:
case 2331:
case 1780:
case 2296:
case 2668:
case 939:
case 2819:
case 2461:
case 1433:
case 892:
case 182:
case 221:
case 1636:
case 3395:
case 2891:
case 3112:
case 1651:
case 1046:
case 835:
case 2590:
case 3804:
case 1259:
case 2026:
case 1399:
case 681:
case 2584:
case 895:
case 478:
case 3608:
case 185:
case 3995:
case 378:
case 861:
case 1133:
case 534:
case 1311:
case 1002:
case 1099:
case 2413:
case 2194:
case 2971:
case 127:
case 55:
case 567:
case 3820:
case 3401:
case 3536:
case 2667:
case 1713:
case 504:
case 2931:
case 2447:
case 1127:
case 2148:
case 1428:
case 2757:
case 1507:
case 1846:
case 1979:
case 2831:
case 3549:
case 1696:
case 1863:
case 1268:
case 3709:
case 937:
case 2091:
case 823:
case 102:
case 3683:
case 2019:
case 1493:
case 1939:
case 1114:
case 827:
case 933:
case 3895:
case 2434:
case 4050:
case 1734:
case 294:
case 1241:
case 521:
case 3050:
case 2319:
case 989:
case 3075:
case 2474:
case 691:
case 903:
case 1169:
case 1774:
case 2897:
case 1917:
case 3022:
case 3601:
case 2467:
case 1205:
case 506:
case 547:
case 1966:
case 2168:
case 1176:
case 249:
case 3558:
case 3408:
case 1985:
case 179:
case 3527:
case 1018:
case 3952:
case 286:
case 3612:
case 1151:
case 2377:
case 1800:
case 1421:
case 1900:
case 612:
case 944:
case 300:
case 2233:
case 296:
case 2482:
case 650:
case 400:
case 2838:
case 2429:
case 3445:
case 1054:
case 879:
case 1885:
case 2044:
case 47:
case 2634:
case 1729:
case 141:
case 2398:
case 2227:
case 430:
case 1693:
case 3483:
case 330:
case 558:
case 3569:
case 1496:
case 1294:
case 2344:
case 2589:
case 1746:
case 3577:
case 2756:
case 2463:
case 1394:
case 2617:
case 2928:
case 3809:
case 2244:
case 1126:
case 2446:
case 2033:
case 1471:
case 2666:
case 2327:
case 1348:
case 1653:
case 2643:
case 320:
case 2522:
case 3462:
case 1080:
case 2685:
case 844:
case 3795:
case 2199:
case 686:
case 498:
case 875:
case 979:
case 1048:
case 2058:
case 515:
case 3523:
case 542:
case 2027:
case 649:
case 3544:
case 1974:
case 941:
case 3289:
case 526:
case 671:
case 3992:
case 3415:
case 1119:
case 488:
case 2014:
case 3222:
case 1934:
case 2237:
case 1560:
case 1739:
case 1218:
case 3720:
case 1581:
case 3188:
case 3909:
case 1697:
case 2828:
case 1779:
case 1164:
case 2479:
case 2314:
case 2857:
case 2069:
case 1438:
case 2219:
case 846:
case 1882:
case 3870:
case 2376:
case 3442:
case 122:
case 2921:
case 985:
case 38:
case 1478:
case 2336:
case 2291:
case 3830:
case 1068:
case 199:
case 1785:
case 2351:
case 3855:
case 4090:
case 2485:
case 864:
case 531:
case 3662:
case 2778:
case 3106:
case 1341:
case 2443:
case 1123:
case 1766:
case 1453:
case 3275:
case 2753:
case 2264:
case 1503:
case 1671:
case 2076:
case 923:
case 1743:
case 2646:
case 3250:
case 1656:
case 1041:
case 3384:
case 2896:
case 2663:
case 3235:
case 833:
case 1368:
case 927:
case 2036:
case 1816:
case 3687:
case 2679:
case 133:
case 2996:
case 3160:
case 3519:
case 1497:
case 902:
case 4025:
case 1724:
case 759:
case 2154:
case 1144:
case 1867:
case 164:
case 1929:
case 3564:
case 3955:
case 49:
case 189:
case 1588:
case 1211:
case 899:
case 291:
case 39:
case 524:
case 103:
case 2821:
case 2349:
case 995:
case 276:
case 3181:
case 822:
case 1359:
case 694:
case 1299:
case 3970:
case 1540:
case 718:
case 2550:
case 3330:
case 992:
case 43:
case 2851:
case 1329:
case 1382:
case 1619:
case 2876:
case 3370:
case 634:
case 935:
case 2949:
case 1444:
case 2124:
case 3640:
case 3884:
case 1029:
case 2454:
case 2256:
case 30:
case 2396:
case 2231:
case 3890:
case 201:
case 1868:
case 2744:
case 667:
case 883:
case 3688:
case 454:
case 4070:
case 1082:
case 197:
case 3460:
case 663:
case 3070:
case 897:
case 1239:
case 2021:
case 2117:
case 1626:
case 109:
case 2723:
case 3990:
case 2166:
case 2602:
case 183:
case 3984:
case 2143:
case 1477:
case 3204:
case 2849:
case 3406:
case 1067:
case 2185:
case 3789:
case 2777:
case 3556:
case 1178:
case 3571:
case 3603:
case 591:
case 1437:
case 76:
case 982:
case 3722:
case 139:
case 565:
case 1016:
case 3142:
case 1138:
case 2611:
case 816:
case 643:
case 3187:
case 2827:
case 2393:
case 3660:
case 1266:
case 2179:
case 3092:
case 2253:
case 2764:
case 3775:
case 2858:
case 1243:
case 1905:
case 1034:
case 2914:
case 456:
case 1894:
case 606:
case 3750:
case 2654:
case 1880:
case 3440:
case 977:
case 3309:
case 1644:
case 3392:
case 242:
case 215:
case 3597:
case 1374:
case 2093:
case 1419:
case 172:
case 1285:
case 2969:
case 1491:
case 911:
case 636:
case 438:
case 3553:
case 512:
case 2057:
case 2869:
case 545:
case 338:
case 1711:
case 872:
case 2933:
case 226:
case 814:
case 1799:
case 3162:
case 1677:
case 1623:
case 2297:
case 1980:
case 2328:
case 1702:
case 1171:
case 1994:
case 658:
case 2402:
case 2357:
case 3932:
case 1224:
case 1805:
case 1426:
case 3578:
case 2927:
case 2618:
case 2726:
case 1401:
case 427:
case 1536:
case 3713:
case 2172:
case 2701:
case 1551:
case 2541:
case 3747:
case 3428:
case 4011:
case 3158:
case 423:
case 2887:
case 3302:
case 3127:
case 3011:
case 323:
case 3399:
case 98:
case 3173:
case 3621:
case 2568:
case 1412:
case 2303:
case 385:
case 4002:
case 731:
case 2040:
case 2655:
case 2862:
case 1645:
case 3241:
case 2915:
case 495:
case 26:
case 361:
case 1035:
case 2630:
case 3774:
case 3510:
case 2492:
case 1792:
case 99:
case 518:
case 1465:
case 3863:
case 3979:
case 1290:
case 2786:
case 1549:
case 2987:
case 3268:
case 1350:
case 1284:
case 1375:
case 3939:
case 559:
case 3114:
case 1683:
case 610:
case 1527:
case 2:
case 2548:
case 479:
case 1107:
case 1558:
case 3176:
case 2708:
case 1612:
case 4018:
case 3151:
case 51:
case 3800:
case 3421:
case 715:
case 1952:
case 3018:
case 3136:
case 2942:
case 742:
case 1022:
case 3657:
case 1533:
case 2561:
case 3628:
case 3966:
case 3318:
case 1601:
case 3943:
case 2006:
case 830:
case 130:
case 1110:
case 3866:
case 2360:
case 1686:
case 3354:
case 3280:
case 3817:
case 2609:
case 2081:
case 3496:
case 2470:
case 2842:
case 1665:
case 2060:
case 726:
case 1770:
case 100:
case 4054:
case 2505:
case 341:
case 2745:
case 1445:
case 3149:
case 441:
case 2381:
case 3885:
case 2425:
case 3300:
case 2806:
case 21:
case 3759:
case 2130:
case 128:
case 1593:
case 5:
case 2170:
case 1822:
case 2960:
case 3213:
case 477:
case 190:
case 2201:
case 880:
case 3000:
case 2710:
case 373:
case 1183:
case 3954:
case 3317:
case 3854:
case 1209:
case 3768:
case 3085:
case 3512:
case 4085:
case 3343:
case 3658:
case 2042:
case 3918:
case 3627:
case 1052:
case 2860:
case 3366:
case 4017:
case 3673:
case 1922:
case 3741:
case 745:
case 3121:
case 828:
case 2513:
case 3385:
case 3451:
case 3476:
case 3633:
case 3274:
case 3066:
case 1352:
case 2547:
case 1292:
case 2707:
case 3043:
case 1557:
case 1989:
case 640:
case 1950:
case 305:
case 954:
case 3414:
case 3379:
case 970:
case 3802:
case 1004:
case 1320:
case 1975:
case 3545:
case 3339:
case 3469:
case 329:
case 3079:
case 435:
case 3583:
case 3811:
case 2803:
case 2192:
case 781:
case 2208:
case 335:
case 3899:
case 492:
case 3039:
case 3649:
case 392:
case 1596:
case 4039:
case 2516:
case 3761:
case 382:
case 776:
case 1270:
case 1112:
case 3046:
case 3651:
case 1255:
case 4063:
case 2903:
case 12:
case 765:
case 1395:
case 3473:
case 3636:
case 3427:
case 3157:
case 851:
case 2888:
case 3128:
case 1521:
case 1095:
case 1772:
case 2840:
case 1101:
case 3794:
case 2684:
case 1850:
case 3754:
case 3263:
case 10:
case 1890:
case 3868:
case 3246:
case 493:
case 2045:
case 1884:
case 154:
case 397:
case 3664:
case 3082:
case 1070:
case 170:
case 497:
case 1688:
case 4082:
case 2383:
case 1355:
case 1481:
case 769:
case 416:
case 2345:
case 13:
case 3691:
case 784:
case 316:
case 1295:
case 2781:
case 2579:
case 2083:
case 3382:
case 1370:
case 2546:
case 2907:
case 4067:
case 1825:
case 3067:
case 83:
case 2422:
case 425:
case 2215:
case 3437:
case 4016:
case 1571:
case 3941:
case 1722:
case 2308:
case 854:
case 3239:
case 870:
case 409:
case 3423:
case 483:
case 2287:
case 80:
case 3316:
case 2810:
case 510:
case 309:
case 3968:
case 3279:
case 3861:
case 3374:
case 2242:
case 1597:
case 372:
case 1252:
case 928:
case 786:
case 1392:
case 472:
case 3334:
case 2524:
case 749:
case 838:
case 2104:
case 1681:
case 3848:
case 1775:
case 4074:
case 1488:
case 3905:
case 260:
case 3074:
case 2788:
case 3698:
case 1187:
case 3266:
case 2475:
case 1735:
case 990:
case 3880:
case 1872:
case 3644:
case 1309:
case 1750:
case 3894:
case 2435:
case 2500:
case 3171:
case 3994:
case 3542:
case 717:
case 1972:
case 3623:
case 108:
case 3702:
case 980:
case 1538:
case 3131:
case 2585:
case 3313:
case 3805:
case 3224:
case 2012:
case 3426:
case 1578:
case 4047:
case 3711:
case 2566:
case 3047:
case 1553:
case 771:
case 2622:
case 2001:
case 3799:
case 2689:
case 3677:
case 3200:
case 1162:
case 2517:
case 2195:
case 2495:
case 3094:
case 2762:
case 3080:
case 1462:
case 2281:
case 198:
case 3361:
case 2865:
case 6:
case 1642:
case 2652:
case 3638:
case 3048:
case 2912:
case 3380:
case 2886:
case 3746:
case 3431:
case 3506:
case 3947:
case 706:
case 3653:
case 4061:
case 3348:
case 747:
case 3913:
case 3061:
case 1537:
case 3471:
case 1720:
case 3581:
case 3813:
case 1140:
case 2801:
case 3305:
case 820:
case 3739:
case 3164:
case 2175:
case 3697:
case 1188:
case 930:
case 2986:
case 3779:
case 1289:
case 3005:
case 97:
case 719:
case 1992:
case 2554:
case 64:
case 3974:
case 1598:
case 900:
case 2715:
case 475:
case 3119:
case 444:
case 1222:
case 375:
case 3671:
case 1275:
case 2007:
case 3743:
case 75:
case 555:
case 2288:
case 2511:
case 2883:
case 3453:
case 1390:
case 3717:
case 1235:
case 3631:
case 3916:
case 2599:
case 3656:
case 1384:
case 1250:
case 2502:
case 648:
case 3882:
case 978:
case 2122:
case 1442:
case 2307:
case 1870:
case 422:
case 2908:
case 2189:
case 1855:
case 4068:
case 1662:
case 3341:
case 3177:
case 18:
case 1090:
case 3478:
case 1830:
case 399:
case 2695:
case 464:
case 88:
case 2010:
case 19:
case 2203:
case 2808:
case 721:
case 1955:
case 3299:
case 1970:
case 3540:
case 3982:
case 307:
case 2604:
case 657:
case 3359:
case 407:
case 433:
case 3198:
case 2310:
case 252:
case 333:
case 1160:
case 3202:
case 1025:
case 3059:
case 1591:
case 437:
case 4059:
case 337:
case 2669:
case 798:
case 1182:
case 1837:
case 1097:
case 136:
case 819:
case 211:
case 2586:
case 31:
case 1749:
case 1877:
case 3806:
case 3425:
case 2449:
case 1459:
case 2024:
case 3212:
case 41:
case 1228:
case 2954:
case 3710:
case 1397:
case 2614:
case 2247:
case 1592:
case 3201:
case 3534:
case 106:
case 858:
case 720:
case 3960:
case 147:
case 806:
case 2918:
case 3860:
case 1038:
case 2627:
case 3042:
case 847:
case 1116:
case 2343:
case 3632:
case 1648:
case 3490:
case 2512:
case 1468:
case 843:
case 2085:
case 2768:
case 3672:
case 1923:
case 2317:
case 3484:
case 2854:
case 3707:
case 1776:
case 3547:
case 1977:
case 1053:
case 3906:
case 836:
case 2066:
case 3342:
case 2274:
case 119:
case 2633:
case 3881:
case 2451:
case 2017:
case 2121:
case 2501:
case 2436:
case 1751:
case 2339:
case 2545:
case 1964:
case 1555:
case 2705:
case 2267:
case 1826:
case 1405:
case 2802:
case 2193:
case 2414:
case 4015:
case 1659:
case 2649:
case 292:
case 1919:
case 2039:
case 962:
case 134:
case 3192:
case 4087:
case 2079:
case 2583:
case 229:
case 2469:
case 1991:
case 585:
case 3087:
case 1891:
case 2636:
case 2473:
case 595:
case 1031:
case 2911:
case 561:
case 3245:
case 3903:
case 1641:
case 2046:
case 2651:
case 1773:
case 834:
case 79:
case 2676:
case 1819:
case 639:
case 532:
case 625:
case 3516:
case 318:
case 1480:
case 2794:
case 1356:
case 3062:
case 2346:
case 804:
case 3472:
case 863:
case 4062:
case 1296:
case 1494:
case 3690:
case 2363:
case 1727:
case 3283:
case 1448:
case 3432:
case 2458:
case 3888:
case 1926:
case 1758:
case 2508:
case 2157:
case 867:
case 609:
case 1147:
case 1864:
case 459:
case 502:
case 2748:
case 2963:
case 2457:
case 2507:
case 1757:
case 1956:
case 2428:
case 3541:
case 227:
case 1971:
case 1413:
case 2099:
case 3701:
case 1667:
case 2713:
case 754:
case 770:
case 73:
case 3962:
case 2311:
case 169:
case 1161:
case 2621:
case 981:
case 1276:
case 1474:
case 3207:
case 603:
case 4088:
case 582:
case 1682:
case 1319:
case 353:
case 3492:
case 3765:
case 2510:
case 607:
case 3630:
case 457:
case 1391:
case 646:
case 3915:
case 869:
case 261:
case 1629:
case 2241:
case 357:
case 976:
case 194:
case 884:
case 3655:
case 3040:
case 202:
case 633:
case 2939:
case 1856:
case 2846:
case 1105:
case 3987:
case 3559:
case 2268:
case 1525:
case 1831:
case 3786:
case 1572:
case 1721:
case 896:
case 3594:
case 2421:
case 3306:
case 1141:
case 1377:
case 3708:
case 2176:
case 468:
case 3:
case 4:
case 368:
case 2985:
case 3006:
case 1953:
case 2205:
case 1467:
case 2943:
case 1168:
case 2767:
case 577:
case 3190:
case 2318:
case 1897:
case 3561:
case 2657:
case 1214:
case 1416:
case 817:
case 756:
case 573:
case 708:
case 2294:
case 4081:
case 2496:
case 3609:
case 1997:
case 3081:
case 2354:
case 2280:
case 1796:
case 2866:
case 1227:
case 1398:
case 2843:
case 2248:
case 2885:
case 44:
case 3381:
case 2054:
case 2149:
case 3125:
case 1429:
case 666:
case 34:
case 1878:
case 2729:
case 3745:
case 3505:
case 3430:
case 2900:
case 2782:
case 675:
case 3060:
case 1838:
case 950:
case 1482:
case 886:
case 2261:
case 3842:
case 1233:
case 679:
case 1027:
case 949:
case 514:
case 3865:
case 2874:
case 2361:
case 3281:
case 1685:
case 2080:
case 845:
case 728:
case 3762:
case 1199:
case 3495:
case 874:
case 1102:
case 2471:
case 2913:
case 1522:
case 1643:
case 2653:
case 2348:
case 1771:
case 2394:
case 2506:
case 2947:
case 1756:
case 1957:
case 1073:
case 1244:
case 3886:
case 2380:
case 1617:
case 2456:
case 3986:
case 1828:
case 3175:
case 1479:
case 2164:
case 2847:
case 2739:
case 1624:
case 3801:
case 917:
case 2581:
case 780:
case 2218:
case 3135:
case 1439:
case 150:
case 275:
case 1014:
case 996:
case 174:
case 2119:
case 244:
case 1237:
case 145:
case 266:
case 2974:
case 641:
case 3965:
case 3554:
case 3404:
case 3206:
case 2041:
case 2656:
case 3240:
case 3599:
case 1646:
case 2368:
case 2916:
case 1663:
case 2717:
case 1896:
case 2631:
case 4007:
case 2453:
case 2766:
case 597:
case 2123:
case 1443:
case 2967:
case 3288:
case 2743:
case 1076:
case 2671:
case 2503:
case 1264:
case 1753:
case 1466:
case 2785:
case 299:
case 181:
case 2341:
case 2829:
case 3845:
case 2177:
case 516:
case 1351:
case 1376:
case 2882:
case 1219:
case 3452:
case 2438:
case 3502:
case 685:
case 1921:
case 984:
case 1400:
case 695:
case 2982:
case 2700:
case 661:
case 2540:
case 246:
case 2299:
case 539:
case 165:
case 632:
case 3945:
case 2929:
case 3203:
case 4010:
case 203:
case 2588:
case 881:
case 525:
case 1639:
case 237:
case 2724:
case 2867:
case 2059:
case 2144:
case 1424:
case 3983:
case 587:
case 1049:
case 1996:
case 352:
case 1679:
case 2202:
case 1797:
case 310:
case 452:
case 583:
case 455:
case 904:
case 340:
case 2197:
case 963:
case 440:
case 2664:
case 1256:
case 3650:
case 2029:
case 1124:
case 2444:
case 95:
case 2246:
case 967:
case 1744:
case 2868:
case 4045:
case 2263:
case 3635:
case 2754:
case 1396:
case 293:
case 1504:
case 1876:
case 2619:
case 2382:
case 629:
case 1949:
case 3083:
case 934:
case 2959:
case 2691:
case 3781:
case 1836:
case 1520:
case 1096:
case 3345:
case 2329:
case 1100:
case 2841:
case 692:
case 1851:
case 599:
case 1951:
case 3308:
case 589:
case 2437:
case 503:
case 1737:
case 2138:
case 3152:
case 3422:
case 2016:
case 831:
case 862:
case 3489:
case 546:
case 2067:
case 2859:
case 1321:
case 507:
case 1849:
case 2477:
case 3706:
case 2178:
case 1699:
case 921:
case 283:
case 2279:
case 2968:
case 801:
case 3008:
case 2153:
case 287:
case 1418:
case 2626:
case 2718:
case 1791:
case 2285:
case 1278:
case 4086:
case 2491:
case 2334:
case 3524:
case 1969:
case 115:
case 142:
case 1238:
case 272:
case 2419:
case 826:
case 2374:
case 2861:
case 3365:
case 3435:
case 947:
case 2644:
case 2880:
case 3475:
case 1827:
case 1393:
case 2905:
case 1858:
case 360:
case 4065:
case 1253:
case 2848:
case 1146:
case 2805:
case 2224:
case 2313:
case 4012:
case 2131:
case 1927:
case 730:
case 1552:
case 2542:
case 1357:
case 958:
case 1499:
case 3195:
case 126:
case 2013:
case 2961:
case 4001:
case 3517:
case 700:
case 2200:
case 2677:
case 815:
case 3312:
case 3689:
case 842:
case 566:
case 3543:
case 1973:
case 1057:
case 1411:
case 544:
case 919:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1743400801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,];
var gg_b = "1743400801/";

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
