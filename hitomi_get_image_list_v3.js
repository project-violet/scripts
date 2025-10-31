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
case 383:
case 3964:
case 1359:
case 860:
case 3820:
case 1791:
case 2500:
case 2817:
case 1499:
case 2811:
case 1000:
case 1305:
case 3028:
case 3056:
case 1774:
case 839:
case 105:
case 3370:
case 1333:
case 3888:
case 255:
case 1695:
case 319:
case 3080:
case 659:
case 2554:
case 3846:
case 584:
case 3723:
case 728:
case 3213:
case 1054:
case 2179:
case 3755:
case 3401:
case 3709:
case 2926:
case 2138:
case 3657:
case 3171:
case 2423:
case 2973:
case 3651:
case 2268:
case 2962:
case 396:
case 2633:
case 3834:
case 3182:
case 1481:
case 2090:
case 3776:
case 1789:
case 2395:
case 2707:
case 759:
case 2409:
case 3550:
case 3071:
case 1506:
case 870:
case 1946:
case 237:
case 3363:
case 3077:
case 3082:
case 3296:
case 208:
case 586:
case 24:
case 63:
case 3381:
case 1697:
case 186:
case 1674:
case 2204:
case 394:
case 2248:
case 1307:
case 1795:
case 3094:
case 1538:
case 1002:
case 37:
case 610:
case 1443:
case 2502:
case 350:
case 951:
case 2960:
case 1920:
case 3202:
case 792:
case 3655:
case 3548:
case 167:
case 4010:
case 1470:
case 1864:
case 193:
case 2824:
case 98:
case 432:
case 2391:
case 3609:
case 73:
case 2286:
case 2092:
case 3180:
case 2705:
case 1988:
case 3757:
case 4003:
case 2733:
case 1618:
case 942:
case 3676:
case 2607:
case 4029:
case 1689:
case 1271:
case 487:
case 593:
case 3399:
case 2084:
case 3128:
case 710:
case 1067:
case 2561:
case 1373:
case 1362:
case 332:
case 2322:
case 1061:
case 3035:
case 2567:
case 1734:
case 409:
case 3889:
case 1876:
case 1083:
case 3010:
case 905:
case 1746:
case 3029:
case 854:
case 1498:
case 2863:
case 2872:
case 387:
case 1855:
case 1809:
case 3442:
case 1141:
case 1147:
case 1358:
case 3003:
case 3137:
case 3874:
case 2933:
case 2662:
case 1622:
case 4082:
case 1165:
case 977:
case 3957:
case 1788:
case 4071:
case 3112:
case 2269:
case 3593:
case 2444:
case 173:
case 2139:
case 772:
case 721:
case 2760:
case 3744:
case 2905:
case 734:
case 2178:
case 3261:
case 984:
case 2626:
case 2658:
case 2870:
case 2388:
case 2319:
case 2078:
case 364:
case 8:
case 2642:
case 1525:
case 643:
case 1646:
case 3037:
case 2565:
case 1553:
case 3241:
case 986:
case 3332:
case 3031:
case 1065:
case 662:
case 2025:
case 929:
case 2053:
case 3764:
case 2740:
case 3012:
case 1997:
case 3311:
case 1991:
case 2762:
case 915:
case 1918:
case 3398:
case 376:
case 1212:
case 1722:
case 3129:
case 2773:
case 993:
case 2334:
case 967:
case 1237:
case 3895:
case 2901:
case 1041:
case 18:
case 483:
case 3458:
case 1989:
case 2907:
case 1342:
case 3265:
case 3103:
case 58:
case 197:
case 1430:
case 3955:
case 2121:
case 1620:
case 1161:
case 3473:
case 3135:
case 762:
case 419:
case 4075:
case 2843:
case 3644:
case 856:
case 1766:
case 3110:
case 802:
case 2790:
case 1089:
case 2914:
case 931:
case 1947:
case 330:
case 1338:
case 507:
case 1941:
case 538:
case 3291:
case 3386:
case 1379:
case 1835:
case 3297:
case 3861:
case 892:
case 3274:
case 3581:
case 2692:
case 847:
case 369:
case 3490:
case 3587:
case 3572:
case 1829:
case 3055:
case 2299:
case 107:
case 83:
case 441:
case 1306:
case 3023:
case 2428:
case 327:
case 2272:
case 1255:
case 2978:
case 1713:
case 1223:
case 3775:
case 2159:
case 1209:
case 2679:
case 3845:
case 406:
case 268:
case 575:
case 1091:
case 3218:
case 3304:
case 452:
case 1392:
case 2591:
case 3931:
case 1276:
case 1965:
case 3671:
case 3937:
case 2606:
case 1452:
case 2475:
case 1404:
case 249:
case 3492:
case 2690:
case 1191:
case 1197:
case 2243:
case 3057:
case 1533:
case 235:
case 1448:
case 3051:
case 2033:
case 1505:
case 3484:
case 1812:
case 828:
case 1945:
case 379:
case 3368:
case 2792:
case 2059:
case 1837:
case 1174:
case 3865:
case 404:
case 1983:
case 739:
case 3794:
case 3841:
case 3910:
case 1095:
case 4008:
case 2738:
case 989:
case 348:
case 2595:
case 1961:
case 4044:
case 2921:
case 3406:
case 499:
case 2477:
case 540:
case 117:
case 2779:
case 1189:
case 2107:
case 1257:
case 3438:
case 3782:
case 485:
case 278:
case 2270:
case 1600:
case 3543:
case 760:
case 3628:
case 2494:
case 3771:
case 913:
case 3479:
case 4036:
case 1118:
case 2354:
case 2285:
case 800:
case 2992:
case 1745:
case 2298:
case 3044:
case 3511:
case 1856:
case 2868:
case 3234:
case 1493:
case 1828:
case 862:
case 2520:
case 756:
case 40:
case 1020:
case 2365:
case 253:
case 3008:
case 3532:
case 938:
case 2984:
case 3036:
case 2588:
case 531:
case 1339:
case 1088:
case 1996:
case 3316:
case 6:
case 4057:
case 2410:
case 298:
case 3349:
case 3703:
case 656:
case 3219:
case 3637:
case 2173:
case 975:
case 2162:
case 316:
case 3977:
case 2906:
case 1665:
case 3971:
case 2678:
case 2232:
case 323:
case 2341:
case 2938:
case 2042:
case 688:
case 304:
case 2126:
case 1902:
case 1166:
case 1783:
case 3994:
case 1314:
case 1208:
case 2347:
case 2534:
case 2217:
case 2727:
case 7:
case 3598:
case 479:
case 1469:
case 2721:
case 1761:
case 1882:
case 2566:
case 3414:
case 2142:
case 314:
case 1066:
case 654:
case 1954:
case 1871:
case 3369:
case 427:
case 1741:
case 280:
case 1894:
case 1449:
case 3515:
case 1747:
case 2383:
case 1146:
case 2367:
case 1327:
case 2062:
case 306:
case 92:
case 1022:
case 2361:
case 2522:
case 1562:
case 2886:
case 513:
case 3712:
case 2040:
case 222:
case 271:
case 3928:
case 790:
case 126:
case 3478:
case 2230:
case 754:
case 2804:
case 3603:
case 430:
case 2848:
case 1188:
case 3439:
case 917:
case 2725:
case 1913:
case 3144:
case 4023:
case 4055:
case 3610:
case 2739:
case 3425:
case 3453:
case 3896:
case 41:
case 589:
case 3635:
case 469:
case 368:
case 3597:
case 2218:
case 2304:
case 2728:
case 2756:
case 1768:
case 1185:
case 1207:
case 3925:
case 2348:
case 2157:
case 560:
case 2937:
case 1201:
case 2151:
case 145:
case 3475:
case 2677:
case 765:
case 3133:
case 1400:
case 2599:
case 2694:
case 3428:
case 3272:
case 2780:
case 3105:
case 3638:
case 3263:
case 1752:
case 3679:
case 4058:
case 3281:
case 3574:
case 1382:
case 21:
case 2009:
case 1087:
case 1604:
case 3692:
case 2490:
case 1081:
case 1648:
case 357:
case 1555:
case 1523:
case 617:
case 884:
case 2563:
case 1072:
case 665:
case 2350:
case 1377:
case 2023:
case 640:
case 3007:
case 3914:
case 1394:
case 3001:
case 1576:
case 3684:
case 3518:
case 422:
case 2386:
case 72:
case 2438:
case 3270:
case 378:
case 886:
case 3849:
case 2628:
case 1233:
case 1402:
case 2656:
case 2479:
case 570:
case 775:
case 55:
case 2929:
case 2794:
case 2841:
case 1259:
case 453:
case 3738:
case 3482:
case 2680:
case 4060:
case 2935:
case 858:
case 3921:
case 607:
case 9:
case 3779:
case 2123:
case 2484:
case 3300:
case 3005:
case 1704:
case 1356:
case 3059:
case 1748:
case 1496:
case 1825:
case 4042:
case 988:
case 349:
case 893:
case 3690:
case 1878:
case 3313:
case 1993:
case 1380:
case 1085:
case 707:
case 3243:
case 1375:
case 2051:
case 498:
case 4059:
case 3678:
case 512:
case 1890:
case 223:
case 789:
case 3938:
case 2220:
case 3042:
case 190:
case 3347:
case 2994:
case 3639:
case 3727:
case 3217:
case 3721:
case 4005:
case 2735:
case 3429:
case 361:
case 3410:
case 398:
case 2982:
case 4033:
case 1115:
case 2637:
case 3435:
case 2729:
case 2219:
case 1461:
case 795:
case 2977:
case 554:
case 449:
case 2631:
case 3546:
case 2427:
case 3625:
case 2854:
case 2971:
case 3984:
case 3519:
case 2036:
case 2813:
case 1445:
case 285:
case 3588:
case 3852:
case 478:
case 2316:
case 2164:
case 299:
case 2044:
case 1649:
case 2234:
case 1011:
case 2800:
case 1508:
case 1331:
case 613:
case 1242:
case 2532:
case 2008:
case 2393:
case 241:
case 1884:
case 631:
case 2610:
case 1111:
case 3431:
case 3739:
case 851:
case 2453:
case 2896:
case 603:
case 3437:
case 1258:
case 2266:
case 2975:
case 1952:
case 1226:
case 1273:
case 371:
case 2222:
case 1968:
case 2928:
case 1262:
case 970:
case 2478:
case 3230:
case 95:
case 2136:
case 2603:
case 3804:
case 2524:
case 1669:
case 2737:
case 4001:
case 380:
case 1693:
case 842:
case 731:
case 3383:
case 1838:
case 1015:
case 1310:
case 863:
case 588:
case 2530:
case 3073:
case 724:
case 3062:
case 102:
case 468:
case 3522:
case 703:
case 252:
case 156:
case 502:
case 188:
case 1447:
case 556:
case 3142:
case 3026:
case 1441:
case 3058:
case 1198:
case 1329:
case 1806:
case 88:
case 3850:
case 2657:
case 510:
case 1930:
case 1670:
case 401:
case 3898:
case 3423:
case 3973:
case 1150:
case 2651:
case 3106:
case 192:
case 3268:
case 296:
case 715:
case 3633:
case 2177:
case 3962:
case 13:
case 3090:
case 3395:
case 3701:
case 3409:
case 1685:
case 962:
case 1418:
case 4078:
case 3659:
case 2846:
case 629:
case 1186:
case 3179:
case 943:
case 2213:
case 2723:
case 686:
case 2755:
case 1772:
case 2401:
case 4039:
case 2343:
case 2709:
case 2194:
case 225:
case 3476:
case 3605:
case 1489:
case 1148:
case 1351:
case 1575:
case 355:
case 2552:
case 3513:
case 26:
case 2254:
case 1104:
case 446:
case 219:
case 1799:
case 2385:
case 3832:
case 283:
case 1290:
case 786:
case 1860:
case 2820:
case 1643:
case 3500:
case 1556:
case 1528:
case 3811:
case 875:
case 3184:
case 1068:
case 3940:
case 128:
case 1770:
case 444:
case 2751:
case 2676:
case 2405:
case 3601:
case 1785:
case 2128:
case 1206:
case 2156:
case 3759:
case 1048:
case 3451:
case 1152:
case 320:
case 2908:
case 2433:
case 2175:
case 2548:
case 1932:
case 3824:
case 2623:
case 1911:
case 784:
case 4027:
case 1687:
case 1279:
case 1004:
case 3092:
case 209:
case 1681:
case 934:
case 2944:
case 1917:
case 3397:
case 677:
case 382:
case 2586:
case 840:
case 1292:
case 3318:
case 1376:
case 3389:
case 3248:
case 3815:
case 3038:
case 3502:
case 1355:
case 1050:
case 705:
case 2077:
case 1284:
case 2296:
case 308:
case 817:
case 2082:
case 1743:
case 1309:
case 865:
case 1495:
case 1488:
case 4038:
case 992:
case 1364:
case 3760:
case 2744:
case 2267:
case 482:
case 2261:
case 1419:
case 2897:
case 3626:
case 3658:
case 4079:
case 2951:
case 1420:
case 3673:
case 3408:
case 3662:
case 3933:
case 1630:
case 2131:
case 797:
case 3125:
case 2957:
case 3153:
case 763:
case 1970:
case 1093:
case 910:
case 651:
case 3269:
case 2593:
case 1615:
case 803:
case 437:
case 3293:
case 1434:
case 1069:
case 4084:
case 2664:
case 3863:
case 287:
case 1529:
case 3872:
case 2569:
case 536:
case 344:
case 1943:
case 3881:
case 2003:
case 3561:
case 1535:
case 642:
case 232:
case 663:
case 1807:
case 29:
case 1149:
case 3742:
case 1972:
case 2923:
case 2473:
case 2608:
case 2549:
case 1617:
case 572:
case 1049:
case 455:
case 2909:
case 1987:
case 172:
case 1169:
case 3334:
case 1730:
case 2895:
case 3901:
case 1466:
case 3907:
case 2265:
case 2976:
case 134:
case 3541:
case 2103:
case 3014:
case 4090:
case 1531:
case 1859:
case 2332:
case 333:
case 2031:
case 3025:
case 3053:
case 2247:
case 1214:
case 2764:
case 301:
case 2012:
case 1193:
case 900:
case 2317:
case 1512:
case 813:
case 1698:
case 889:
case 3388:
case 1833:
case 3078:
case 3885:
case 3642:
case 2440:
case 1725:
case 2188:
case 3:
case 2416:
case 723:
case 1804:
case 1040:
case 122:
case 171:
case 3262:
case 226:
case 704:
case 3258:
case 1437:
case 1431:
case 2667:
case 571:
case 522:
case 1739:
case 1627:
case 3111:
case 3884:
case 2683:
case 1778:
case 978:
case 2877:
case 3806:
case 580:
case 3198:
case 935:
case 2954:
case 2871:
case 460:
case 3441:
case 1026:
case 3303:
case 1058:
case 1142:
case 2558:
case 604:
case 2882:
case 1566:
case 2645:
case 439:
case 2321:
case 616:
case 1361:
case 3240:
case 2022:
case 2146:
case 1367:
case 2327:
case 445:
case 3838:
case 1383:
case 799:
case 2741:
case 180:
case 1653:
case 3467:
case 4085:
case 1546:
case 874:
case 1906:
case 3950:
case 89:
case 3461:
case 1173:
case 1435:
case 3115:
case 832:
case 198:
case 1410:
case 4070:
case 598:
case 1429:
case 2034:
case 3616:
case 1217:
case 1727:
case 1639:
case 3098:
case 3986:
case 1534:
case 390:
case 2208:
case 991:
case 1347:
case 1158:
case 1042:
case 1341:
case 968:
case 1403:
case 1678:
case 2353:
case 153:
case 45:
case 706:
case 2020:
case 1365:
case 2325:
case 1060:
case 3508:
case 752:
case 470:
case 2560:
case 1520:
case 866:
case 3544:
case 2856:
case 3649:
case 3017:
case 231:
case 1298:
case 2996:
case 4043:
case 1852:
case 1588:
case 2647:
case 1614:
case 553:
case 1519:
case 2880:
case 2641:
case 2378:
case 2019:
case 1471:
case 2967:
case 4011:
case 3652:
case 2450:
case 61:
case 1595:
case 35:
case 2613:
case 3814:
case 669:
case 3187:
case 3259:
case 922:
case 971:
case 1285:
case 3969:
case 3750:
case 1706:
case 894:
case 2118:
case 3233:
case 240:
case 3402:
case 1101:
case 2251:
case 1270:
case 2189:
case 2257:
case 727:
case 2448:
case 2533:
case 3070:
case 2796:
case 3375:
case 3839:
case 809:
case 3380:
case 1784:
case 71:
case 1313:
case 2191:
case 769:
case 412:
case 149:
case 3825:
case 2559:
case 3496:
case 3748:
case 549:
case 730:
case 3704:
case 3328:
case 3356:
case 1792:
case 3199:
case 381:
case 627:
case 535:
case 2505:
case 1939:
case 1281:
case 591:
case 1287:
case 2074:
case 275:
case 2713:
case 2223:
case 998:
case 1105:
case 3099:
case 1978:
case 1456:
case 86:
case 3650:
case 3201:
case 1925:
case 819:
case 3768:
case 456:
case 1597:
case 1480:
case 2091:
case 3413:
case 3821:
case 953:
case 2018:
case 3827:
case 2338:
case 4024:
case 2941:
case 2507:
case 2810:
case 1914:
case 3394:
case 2947:
case 1790:
case 2089:
case 1007:
case 3063:
case 1299:
case 3072:
case 3371:
case 3523:
case 2829:
case 3648:
case 3555:
case 60:
case 3604:
case 1692:
case 648:
case 896:
case 238:
case 2047:
case 1014:
case 1541:
case 3225:
case 1907:
case 546:
case 2231:
case 334:
case 28:
case 3466:
case 2237:
case 1901:
case 2688:
case 4068:
case 2722:
case 814:
case 321:
case 372:
case 3987:
case 806:
case 3611:
case 1216:
case 1726:
case 2183:
case 1758:
case 852:
case 2415:
case 69:
case 3981:
case 146:
case 3422:
case 242:
case 766:
case 1121:
case 632:
case 2161:
case 1660:
case 3632:
case 297:
case 1346:
case 3278:
case 3336:
case 94:
case 1885:
case 1642:
case 908:
case 1078:
case 1319:
case 2539:
case 1249:
case 3833:
case 2634:
case 1388:
case 3016:
case 1039:
case 787:
case 2857:
case 2424:
case 1870:
case 3805:
case 492:
case 251:
case 3512:
case 79:
case 3214:
case 3308:
case 732:
case 1053:
case 1025:
case 982:
case 2553:
case 133:
case 2525:
case 3859:
case 1899:
case 3615:
case 2719:
case 2411:
case 3093:
case 2788:
case 2203:
case 343:
case 899:
case 1408:
case 2622:
case 3420:
case 1673:
case 2235:
case 3221:
case 3711:
case 2340:
case 664:
case 2045:
case 3227:
case 1905:
case 3717:
case 1178:
case 2720:
case 2210:
case 1760:
case 1139:
case 3488:
case 3732:
case 273:
case 816:
case 3149:
case 2083:
case 4048:
case 2527:
case 336:
case 3798:
case 2362:
case 1322:
case 1027:
case 2373:
case 1114:
case 3943:
case 2141:
case 428:
case 1640:
case 1887:
case 1872:
case 3529:
case 823:
case 676:
case 1863:
case 955:
case 2746:
case 3069:
case 66:
case 3917:
case 1397:
case 2113:
case 3911:
case 3687:
case 2485:
case 2592:
case 436:
case 3840:
case 3932:
case 3663:
case 2864:
case 267:
case 796:
case 2294:
case 2277:
case 725:
case 3168:
case 2100:
case 520:
case 4069:
case 1607:
case 1374:
case 879:
case 2282:
case 3495:
case 258:
case 76:
case 443:
case 14:
case 2691:
case 3309:
case 3743:
case 108:
case 462:
case 3323:
case 3355:
case 80:
case 4093:
case 696:
case 1502:
case 2301:
case 625:
case 3699:
case 901:
case 300:
case 3376:
case 1248:
case 2307:
case 1830:
case 3086:
case 3292:
case 2154:
case 783:
case 1204:
case 1318:
case 3873:
case 2674:
case 3862:
case 1138:
case 694:
case 3781:
case 1605:
case 2275:
case 2966:
case 911:
case 1926:
case 2102:
case 1252:
case 2280:
case 830:
case 3186:
case 2054:
case 518:
case 1701:
case 3685:
case 2590:
case 2789:
case 3915:
case 709:
case 1268:
case 2256:
case 2718:
case 1962:
case 2228:
case 1633:
case 81:
case 2463:
case 1898:
case 1184:
case 77:
case 1811:
case 794:
case 2797:
case 472:
case 421:
case 3528:
case 1500:
case 2844:
case 2499:
case 2808:
case 2359:
case 3290:
case 827:
case 3924:
case 3491:
case 3799:
case 2013:
case 609:
case 2695:
case 3575:
case 4049:
case 3351:
case 205:
case 3052:
case 3357:
case 1311:
case 3991:
case 950:
case 351:
case 2344:
case 3997:
case 1012:
case 1247:
case 2724:
case 2308:
case 2214:
case 564:
case 2537:
case 484:
case 1031:
case 3525:
case 2859:
case 1037:
case 477:
case 3145:
case 2999:
case 871:
case 822:
case 3974:
case 3424:
case 2617:
case 3415:
case 2981:
case 1549:
case 405:
case 4013:
case 1608:
case 880:
case 1473:
case 363:
case 3430:
case 2278:
case 1955:
case 1636:
case 2253:
case 1265:
case 3342:
case 1976:
case 3231:
case 3514:
case 1458:
case 4000:
case 3688:
case 2169:
case 1129:
case 3918:
case 1398:
case 3722:
case 3212:
case 3326:
case 1003:
case 919:
case 3809:
case 532:
case 187:
case 59:
case 3855:
case 2624:
case 574:
case 2434:
case 3995:
case 174:
case 2801:
case 1010:
case 467:
case 587:
case 19:
case 701:
case 2149:
case 1889:
case 3876:
case 415:
case 733:
case 1245:
case 2798:
case 983:
case 898:
case 2535:
case 3666:
case 3235:
case 3045:
case 2717:
case 2227:
case 1744:
case 1267:
case 3210:
case 1708:
case 1324:
case 1283:
case 1593:
case 1736:
case 2985:
case 3719:
case 1112:
case 2093:
case 3203:
case 458:
case 3788:
case 2970:
case 3432:
case 2630:
case 3165:
case 633:
case 166:
case 3622:
case 746:
case 262:
case 2420:
case 150:
case 3301:
case 3443:
case 2699:
case 17:
case 194:
case 878:
case 2292:
case 329:
case 3154:
case 2873:
case 3579:
case 1586:
case 3934:
case 1381:
case 618:
case 964:
case 2582:
case 1866:
case 358:
case 2826:
case 3691:
case 2309:
case 1296:
case 1363:
case 1077:
case 2284:
case 2571:
case 2355:
case 550:
case 1071:
case 594:
case 755:
case 1550:
case 57:
case 2206:
case 1156:
case 3100:
case 2785:
case 1936:
case 1405:
case 1751:
case 3618:
case 1757:
case 228:
case 2770:
case 3282:
case 2279:
case 2004:
case 718:
case 3113:
case 109:
case 4067:
case 2911:
case 3485:
case 1609:
case 259:
case 3592:
case 1504:
case 3470:
case 1623:
case 1655:
case 1202:
case 976:
case 2152:
case 315:
case 1433:
case 1175:
case 655:
case 3920:
case 1080:
case 1385:
case 119:
case 3695:
case 2497:
case 1819:
case 2580:
case 74:
case 463:
case 16:
case 3333:
case 987:
case 305:
case 737:
case 2148:
case 2357:
case 891:
case 3000:
case 3797:
case 974:
case 1568:
case 2528:
case 2643:
case 3844:
case 3499:
case 2474:
case 2860:
case 1820:
case 782:
case 4047:
case 3359:
case 2290:
case 56:
case 1964:
case 183:
case 932:
case 2842:
case 4065:
case 2685:
case 3487:
case 64:
case 2915:
case 1182:
case 292:
case 1834:
case 720:
case 3228:
case 3718:
case 1171:
case 1657:
case 2930:
case 525:
case 2781:
case 596:
case 3275:
case 125:
case 1401:
case 2787:
case 1755:
case 2772:
case 682:
case 2763:
case 2186:
case 3054:
case 1723:
case 966:
case 2879:
case 514:
case 256:
case 3321:
case 3573:
case 2335:
case 202:
case 753:
case 1530:
case 3327:
case 2015:
case 661:
case 2838:
case 979:
case 846:
case 1515:
case 698:
case 2329:
case 2441:
case 3066:
case 2749:
case 552:
case 288:
case 3526:
case 1414:
case 3645:
case 1108:
case 1266:
case 1975:
case 2952:
case 2716:
case 395:
case 2226:
case 1453:
case 313:
case 1896:
case 1425:
case 1610:
case 407:
case 2111:
case 833:
case 141:
case 2884:
case 2117:
case 1144:
case 3913:
case 3765:
case 1439:
case 3188:
case 2669:
case 1737:
case 2564:
case 3416:
case 2:
case 389:
case 2892:
case 3540:
case 1712:
case 2968:
case 2273:
case 3119:
case 3900:
case 3088:
case 599:
case 1036:
case 3647:
case 91:
case 2793:
case 3019:
case 1246:
case 1008:
case 2331:
case 811:
case 2242:
case 3325:
case 303:
case 2032:
case 3560:
case 4095:
case 417:
case 1517:
case 2011:
case 3856:
case 3828:
case 3493:
case 1234:
case 1511:
case 2017:
case 1044:
case 585:
case 465:
case 2904:
case 930:
case 3745:
case 1735:
case 3761:
case 3034:
case 844:
case 3767:
case 3244:
case 2986:
case 3208:
case 3783:
case 2260:
case 1220:
case 123:
case 42:
case 516:
case 254:
case 2890:
case 1854:
case 0:
case 504:
case 3236:
case 2130:
case 1977:
case 212:
case 523:
case 1421:
case 2769:
case 1637:
case 1219:
case 927:
case 680:
case 1349:
case 2483:
case 3831:
case 3559:
case 2496:
case 32:
case 3945:
case 4034:
case 1368:
case 3812:
case 3505:
case 3448:
case 2557:
case 757:
case 2070:
case 2839:
case 2551:
case 668:
case 820:
case 2993:
case 4046:
case 1585:
case 691:
case 3404:
case 1929:
case 548:
case 2969:
case 1777:
case 3118:
case 4019:
case 50:
case 4088:
case 2233:
case 2402:
case 340:
case 3251:
case 882:
case 1438:
case 1782:
case 1176:
case 2043:
case 3189:
case 1123:
case 2205:
case 2172:
case 808:
case 365:
case 2652:
case 1935:
case 3961:
case 3450:
case 4020:
case 1680:
case 1847:
case 148:
case 3390:
case 2187:
case 1794:
case 837:
case 3702:
case 403:
case 3306:
case 1023:
case 2377:
case 1055:
case 818:
case 307:
case 1350:
case 2523:
case 1563:
case 1572:
case 1587:
case 1274:
case 3195:
case 2949:
case 2382:
case 413:
case 569:
case 489:
case 2827:
case 51:
case 1867:
case 3696:
case 1883:
case 3941:
case 2576:
case 3501:
case 1151:
case 2650:
case 2170:
case 1348:
case 1157:
case 3276:
case 3700:
case 649:
case 3097:
case 2185:
case 1304:
case 1218:
case 1756:
case 2768:
case 3392:
case 1845:
case 2413:
case 4022:
case 3074:
case 916:
case 2916:
case 375:
case 778:
case 3713:
case 1780:
case 2099:
case 3468:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1761940801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,];
var gg_b = "1761940801/";

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
