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
case 484:
case 1442:
case 618:
case 2591:
case 2157:
case 709:
case 1133:
case 1763:
case 468:
case 3105:
case 1236:
case 1492:
case 4051:
case 2718:
case 1018:
case 1030:
case 3382:
case 1919:
case 1517:
case 3225:
case 1615:
case 837:
case 2345:
case 683:
case 2237:
case 120:
case 1974:
case 3001:
case 3459:
case 1643:
case 1704:
case 1253:
case 4073:
case 90:
case 3359:
case 4035:
case 2413:
case 3722:
case 1156:
case 1693:
case 1922:
case 2395:
case 2771:
case 2166:
case 3815:
case 2358:
case 327:
case 1036:
case 1368:
case 2495:
case 140:
case 3889:
case 2437:
case 3259:
case 2742:
case 2191:
case 2557:
case 1665:
case 739:
case 2213:
case 1677:
case 2245:
case 1184:
case 1807:
case 3649:
case 1453:
case 2698:
case 3194:
case 1042:
case 1533:
case 1268:
case 2823:
case 2116:
case 2560:
case 3607:
case 2141:
case 2888:
case 2258:
case 744:
case 2648:
case 3144:
case 2295:
case 3082:
case 4009:
case 347:
case 3139:
case 2404:
case 792:
case 2045:
case 76:
case 2013:
case 1985:
case 3301:
case 1713:
case 3958:
case 2304:
case 547:
case 697:
case 1834:
case 670:
case 1745:
case 2524:
case 905:
case 2138:
case 2095:
case 2110:
case 3282:
case 1292:
case 2058:
case 1371:
case 1336:
case 2959:
case 913:
case 1068:
case 1344:
case 2614:
case 3760:
case 3886:
case 2705:
case 2975:
case 1005:
case 604:
case 2202:
case 1444:
case 117:
case 1957:
case 1221:
case 581:
case 1846:
case 718:
case 2481:
case 522:
case 2119:
case 1394:
case 3067:
case 1960:
case 292:
case 3484:
case 609:
case 3250:
case 3880:
case 9:
case 3568:
case 850:
case 2002:
case 510:
case 1205:
case 665:
case 3056:
case 3808:
case 886:
case 244:
case 403:
case 3678:
case 2721:
case 2174:
case 2897:
case 4023:
case 1608:
case 4088:
case 239:
case 3772:
case 3267:
case 3417:
case 3275:
case 832:
case 381:
case 1680:
case 3233:
case 45:
case 1044:
case 3741:
case 265:
case 2620:
case 1182:
case 644:
case 594:
case 342:
case 166:
case 3518:
case 3530:
case 634:
case 3981:
case 157:
case 2873:
case 3827:
case 2744:
case 3350:
case 224:
case 881:
case 3333:
case 3084:
case 649:
case 3142:
case 822:
case 2081:
case 3433:
case 3367:
case 1916:
case 3553:
case 1941:
case 3475:
case 386:
case 204:
case 3456:
case 198:
case 443:
case 810:
case 2664:
case 3356:
case 2917:
case 174:
case 2402:
case 1244:
case 2169:
case 1861:
case 2851:
case 1159:
case 2281:
case 532:
case 41:
case 3632:
case 3284:
case 179:
case 2522:
case 295:
case 1512:
case 3123:
case 2177:
case 2920:
case 3841:
case 3188:
case 564:
case 1198:
case 1035:
case 3681:
case 33:
case 871:
case 1691:
case 2735:
case 525:
case 2165:
case 3100:
case 2903:
case 2396:
case 2773:
case 1148:
case 305:
case 1251:
case 82:
case 569:
case 1170:
case 3314:
case 2346:
case 3264:
case 3414:
case 376:
case 3226:
case 3003:
case 1641:
case 2894:
case 1954:
case 1162:
case 400:
case 3838:
case 168:
case 835:
case 184:
case 2032:
case 2543:
case 1273:
case 2515:
case 2617:
case 845:
case 1347:
case 576:
case 2839:
case 3487:
case 364:
case 69:
case 4030:
case 3203:
case 1497:
case 3026:
case 662:
case 1176:
case 2478:
case 756:
case 1309:
case 937:
case 54:
case 3064:
case 767:
case 3387:
case 53:
case 3754:
case 947:
case 1051:
case 1610:
case 2593:
case 2378:
case 412:
case 780:
case 1247:
case 3588:
case 1373:
case 2914:
case 864:
case 1112:
case 2290:
case 2667:
case 825:
case 1435:
case 3911:
case 1657:
case 1555:
case 2240:
case 3014:
case 1711:
case 751:
case 3287:
case 3403:
case 4068:
case 1570:
case 3420:
case 2046:
case 1209:
case 353:
case 262:
case 3303:
case 2650:
case 191:
case 2747:
case 1790:
case 32:
case 3780:
case 4042:
case 813:
case 695:
case 3079:
case 2821:
case 440:
case 2090:
case 1672:
case 2987:
case 553:
case 3978:
case 3940:
case 3506:
case 2143:
case 876:
case 1778:
case 2461:
case 1576:
case 4092:
case 1908:
case 716:
case 3872:
case 3326:
case 3364:
case 907:
case 2979:
case 2193:
case 1980:
case 2709:
case 2361:
case 2078:
case 3214:
case 3426:
case 1666:
case 371:
case 2040:
case 2955:
case 3276:
case 2007:
case 1965:
case 3231:
case 1799:
case 2842:
case 273:
case 4021:
case 461:
case 2682:
case 1120:
case 2234:
case 3070:
case 1514:
case 216:
case 2788:
case 2586:
case 1749:
case 3055:
case 3412:
case 3765:
case 2948:
case 1023:
case 3999:
case 1088:
case 2049:
case 3312:
case 3098:
case 3135:
case 762:
case 2383:
case 2299:
case 3270:
case 2034:
case 3695:
case 942:
case 79:
case 3597:
case 3151:
case 1685:
case 1734:
case 2154:
case 2962:
case 3031:
case 1813:
case 1126:
case 3076:
case 932:
case 1164:
case 2428:
case 251:
case 1858:
case 1006:
case 3752:
case 3645:
case 3547:
case 8:
case 1223:
case 3613:
case 1579:
case 2868:
case 2931:
case 2976:
case 986:
case 2706:
case 3885:
case 2508:
case 2499:
case 3470:
case 280:
case 133:
case 3819:
case 3348:
case 256:
case 2283:
case 498:
case 2912:
case 2853:
case 143:
case 11:
case 2818:
case 3498:
case 2186:
case 1488:
case 3455:
case 981:
case 3535:
case 3012:
case 1388:
case 1400:
case 2625:
case 3398:
case 1915:
case 2929:
case 3197:
case 1187:
case 2083:
case 2334:
case 2028:
case 616:
case 3476:
case 3331:
case 1526:
case 1728:
case 3822:
case 1564:
case 3376:
case 3029:
case 1179:
case 3983:
case 3462:
case 3212:
case 1622:
case 3928:
case 5:
case 3362:
case 2108:
case 3743:
case 3604:
case 795:
case 3715:
case 3874:
case 334:
case 4089:
case 980:
case 2568:
case 2766:
case 632:
case 3002:
case 1756:
case 1438:
case 967:
case 3847:
case 1697:
case 737:
case 592:
case 344:
case 1338:
case 2678:
case 1310:
case 1257:
case 4077:
case 2267:
case 3569:
case 2772:
case 3679:
case 2690:
case 3956:
case 824:
case 3122:
case 493:
case 349:
case 1647:
case 3809:
case 148:
case 1545:
case 1266:
case 2130:
case 809:
case 3614:
case 2886:
case 2256:
case 3967:
case 1060:
case 549:
case 202:
case 1341:
case 1491:
case 534:
case 1272:
case 2384:
case 1767:
case 2075:
case 2067:
case 1163:
case 1733:
case 2153:
case 3950:
case 2536:
case 2456:
case 3626:
case 602:
case 3302:
case 2168:
case 707:
case 1939:
case 3574:
case 2661:
case 86:
case 1195:
case 1038:
case 3402:
case 294:
case 3169:
case 3851:
case 1504:
case 309:
case 2284:
case 1372:
case 1145:
case 2632:
case 1113:
case 2017:
case 1826:
case 2741:
case 365:
case 839:
case 3620:
case 509:
case 3984:
case 2716:
case 2518:
case 242:
case 1360:
case 2981:
case 2827:
case 622:
case 1041:
case 324:
case 1944:
case 1673:
case 1457:
case 1803:
case 504:
case 2791:
case 1635:
case 2375:
case 250:
case 2367:
case 2433:
case 185:
case 329:
case 2553:
case 1820:
case 3794:
case 128:
case 2475:
case 1563:
case 286:
case 844:
case 2225:
case 1469:
case 1022:
case 786:
case 3172:
case 3345:
case 2539:
case 3237:
case 2001:
case 3445:
case 358:
case 2893:
case 1971:
case 4027:
case 750:
case 1936:
case 2359:
case 3736:
case 597:
case 732:
case 3510:
case 2683:
case 3458:
case 2628:
case 1074:
case 475:
case 3901:
case 3166:
case 1829:
case 3358:
case 2815:
case 2774:
case 2904:
case 227:
case 154:
case 1102:
case 637:
case 962:
case 3204:
case 3157:
case 3591:
case 3037:
case 1930:
case 2594:
case 1222:
case 794:
case 2963:
case 3541:
case 426:
case 1812:
case 3516:
case 818:
case 1274:
case 431:
case 2937:
case 558:
case 3925:
case 1759:
case 2139:
case 1831:
case 995:
case 3045:
case 1606:
case 3013:
case 1876:
case 4086:
case 2301:
case 3572:
case 2769:
case 3662:
case 2958:
case 3304:
case 1069:
case 318:
case 2059:
case 2401:
case 1968:
case 3524:
case 897:
case 1862:
case 2945:
case 3095:
case 446:
case 1374:
case 3110:
case 3138:
case 2634:
case 1085:
case 114:
case 3631:
case 3058:
case 607:
case 3959:
case 1848:
case 2889:
case 1600:
case 3982:
case 1623:
case 3463:
case 3245:
case 1688:
case 383:
case 2325:
case 2194:
case 3823:
case 627:
case 237:
case 2607:
case 3792:
case 3560:
case 3258:
case 1898:
case 518:
case 1285:
case 3648:
case 2699:
case 401:
case 3295:
case 3800:
case 858:
case 722:
case 247:
case 1540:
case 1161:
case 2695:
case 1731:
case 753:
case 3328:
case 3034:
case 2270:
case 1859:
case 2248:
case 1289:
case 472:
case 6:
case 2658:
case 3154:
case 1493:
case 2076:
case 1668:
case 3428:
case 2329:
case 1315:
case 867:
case 2645:
case 2613:
case 3580:
case 1415:
case 516:
case 929:
case 3659:
case 3508:
case 3706:
case 2885:
case 3955:
case 2276:
case 2789:
case 1900:
case 3007:
case 4066:
case 1770:
case 373:
case 2048:
case 1923:
case 2070:
case 3682:
case 2949:
case 3586:
case 1252:
case 3788:
case 1882:
case 4072:
case 1798:
case 909:
case 1065:
case 2777:
case 2412:
case 3948:
case 2173:
case 1077:
case 72:
case 2999:
case 551:
case 2312:
case 2098:
case 3929:
case 2551:
case 1093:
case 4016:
case 3334:
case 3028:
case 4041:
case 1178:
case 1561:
case 2331:
case 2822:
case 1636:
case 2793:
case 705:
case 1801:
case 2109:
case 485:
case 1015:
case 2029:
case 567:
case 3180:
case 428:
case 2983:
case 73:
case 2928:
case 1452:
case 3836:
case 2147:
case 1043:
case 2362:
case 3108:
case 2743:
case 1352:
case 992:
case 74:
case 3499:
case 2:
case 788:
case 1489:
case 725:
case 1111:
case 2819:
case 1389:
case 944:
case 1630:
case 2370:
case 3228:
case 1618:
case 764:
case 3912:
case 1293:
case 3407:
case 1477:
case 3818:
case 1365:
case 939:
case 2498:
case 1196:
case 2455:
case 1377:
case 2012:
case 2573:
case 2229:
case 3527:
case 949:
case 1465:
case 511:
case 1480:
case 60:
case 3490:
case 2838:
case 269:
case 3964:
case 3390:
case 2379:
case 2961:
case 3032:
case 3515:
case 1227:
case 3617:
case 89:
case 983:
case 3751:
case 2487:
case 653:
case 264:
case 645:
case 595:
case 2026:
case 2064:
case 3478:
case 126:
case 1528:
case 141:
case 635:
case 3061:
case 2387:
case 3593:
case 7:
case 288:
case 2754:
case 3340:
case 459:
case 2123:
case 1027:
case 24:
case 2816:
case 1149:
case 3684:
case 2841:
case 1486:
case 1694:
case 23:
case 3844:
case 3735:
case 4022:
case 3903:
case 62:
case 918:
case 1644:
case 1703:
case 1199:
case 1973:
case 2891:
case 3261:
case 3346:
case 2414:
case 276:
case 4074:
case 175:
case 2003:
case 1107:
case 3894:
case 3311:
case 63:
case 1856:
case 3296:
case 1008:
case 3552:
case 970:
case 2824:
case 1909:
case 997:
case 2780:
case 22:
case 2866:
case 3115:
case 3090:
case 1080:
case 3332:
case 64:
case 3143:
case 2708:
case 2940:
case 1354:
case 3461:
case 101:
case 2872:
case 613:
case 2602:
case 3797:
case 895:
case 2326:
case 1787:
case 3193:
case 3656:
case 3979:
case 2087:
case 1183:
case 2464:
case 3078:
case 3040:
case 2426:
case 2588:
case 3633:
case 4069:
case 1280:
case 419:
case 2279:
case 1850:
case 2523:
case 3290:
case 2946:
case 3565:
case 1427:
case 20:
case 2500:
case 1086:
case 1208:
case 2911:
case 235:
case 3240:
case 2320:
case 2014:
case 1599:
case 2403:
case 664:
case 39:
case 3046:
case 1507:
case 2420:
case 1605:
case 2303:
case 121:
case 3650:
case 3011:
case 4085:
case 1875:
case 1714:
case 1462:
case 3179:
case 1029:
case 2452:
case 1604:
case 543:
case 1362:
case 555:
case 3406:
case 450:
case 1874:
case 1715:
case 4084:
case 815:
case 693:
case 3187:
case 1431:
case 3804:
case 85:
case 2093:
case 3915:
case 1476:
case 3943:
case 3564:
case 1822:
case 706:
case 442:
case 2801:
case 1109:
case 1793:
case 2636:
case 2477:
case 2712:
case 1663:
case 3423:
case 3488:
case 3300:
case 2365:
case 1498:
case 1637:
case 3323:
case 494:
case 3619:
case 1398:
case 2465:
case 3400:
case 3388:
case 287:
case 1470:
case 1:
case 3503:
case 2111:
case 726:
case 2630:
case 3863:
case 2389:
case 343:
case 2293:
case 3520:
case 355:
case 1547:
case 1645:
case 2132:
case 1752:
case 3006:
case 503:
case 2343:
case 1934:
case 410:
case 843:
case 3669:
case 782:
case 1062:
case 855:
case 2443:
case 515:
case 2906:
case 2540:
case 1869:
case 2776:
case 746:
case 3685:
case 1248:
case 2289:
case 402:
case 966:
case 1695:
case 2859:
case 736:
case 323:
case 1509:
case 3734:
case 2668:
case 3164:
case 3126:
case 2882:
case 1055:
case 2798:
case 2252:
case 3749:
case 1777:
case 1262:
case 1412:
case 1907:
case 35:
case 2077:
case 3023:
case 979:
case 1765:
case 523:
case 2642:
case 3088:
case 2511:
case 1276:
case 2770:
case 1231:
case 2900:
case 3965:
case 303:
case 2546:
case 3103:
case 2748:
case 1070:
case 2923:
case 3977:
case 2089:
case 3707:
case 2692:
case 974:
case 3514:
case 2988:
case 1949:
case 4082:
case 201:
case 1872:
case 2621:
case 3778:
case 912:
case 447:
case 1326:
case 675:
case 2454:
case 2947:
case 606:
case 1426:
case 1214:
case 391:
case 2909:
case 3790:
case 2997:
case 3047:
case 1506:
case 1978:
case 626:
case 2867:
case 868:
case 135:
case 2599:
case 236:
case 3570:
case 1857:
case 1403:
case 145:
case 3209:
case 153:
case 2507:
case 884:
case 3986:
case 3796:
case 2327:
case 3598:
case 3373:
case 1860:
case 1588:
case 1523:
case 920:
case 1279:
case 2850:
case 282:
case 27:
case 4059:
case 3473:
case 1500:
case 2427:
case 3657:
case 1911:
case 3435:
case 2208:
case 3497:
case 596:
case 164:
case 2054:
case 1064:
case 3761:
case 3176:
case 2817:
case 1026:
case 1932:
case 1387:
case 2528:
case 226:
case 2726:
case 636:
case 389:
case 1220:
case 3610:
case 3051:
case 3409:
case 407:
case 940:
case 2308:
case 169:
case 3732:
case 368:
case 1838:
case 1810:
case 1961:
case 1106:
case 2408:
case 930:
case 2227:
case 2951:
case 3273:
case 3529:
case 427:
case 2199:
case 3170:
case 3927:
case 3148:
case 2644:
case 891:
case 206:
case 1264:
case 2254:
case 2720:
case 275:
case 3641:
case 1003:
case 3073:
case 2027:
case 1123:
case 1816:
case 3198:
case 1841:
case 3691:
case 13:
case 4001:
case 1100:
case 2386:
case 566:
case 194:
case 2504:
case 208:
case 3159:
case 2145:
case 379:
case 3501:
case 3294:
case 817:
case 2864:
case 1017:
case 2826:
case 557:
case 3832:
case 1536:
case 3654:
case 2424:
case 1168:
case 903:
case 1571:
case 777:
case 398:
case 3421:
case 1661:
case 915:
case 1356:
case 2195:
case 2010:
case 2038:
case 2324:
case 1333:
case 1217:
case 3525:
case 2944:
case 2635:
case 2537:
case 648:
case 1791:
case 1375:
case 3094:
case 2803:
case 3781:
case 1084:
case 2091:
case 3916:
case 574:
case 2784:
case 186:
case 2357:
case 3941:
case 2563:
case 2238:
case 2460:
case 2210:
case 1530:
case 1716:
case 142:
case 1450:
case 1827:
case 3991:
case 2360:
case 357:
case 923:
case 579:
case 1350:
case 2041:
case 3439:
case 866:
case 3608:
case 91:
case 2104:
case 628:
case 2921:
case 2257:
case 1417:
case 1267:
case 1902:
case 3680:
case 181:
case 4055:
case 2513:
case 3339:
case 2545:
case 248:
case 3966:
case 2647:
case 3101:
case 857:
case 1233:
case 1317:
case 1568:
case 4070:
case 1724:
case 3021:
case 1250:
case 933:
case 2410:
case 2260:
case 2609:
case 1136:
case 2756:
case 2558:
case 1808:
case 1056:
case 1640:
case 2066:
case 2024:
case 2338:
case 943:
case 1757:
case 1033:
case 719:
case 110:
case 898:
case 3846:
case 3394:
case 3811:
case 3125:
case 561:
case 2272:
case 2391:
case 3960:
case 2905:
case 1696:
case 1153:
case 1484:
case 1130:
case 2224:
case 1118:
case 28:
case 2416:
case 3896:
case 4076:
case 2060:
case 879:
case 102:
case 3471:
case 1945:
case 677:
case 2862:
case 3292:
case 1852:
case 540:
case 3556:
case 1913:
case 435:
case 3795:
case 214:
case 3336:
case 3242:
case 2759:
case 1139:
case 812:
case 1301:
case 1769:
case 3117:
case 2069:
case 3745:
case 3652:
case 3834:
case 3550:
case 352:
case 3268:
case 820:
case 3418:
case 471:
case 263:
case 3849:
case 1505:
case 137:
case 3318:
case 1082:
case 1144:
case 3092:
case 147:
case 989:
case 1865:
case 659:
case 3899:
case 2181:
case 1889:
case 340:
case 968:
case 2419:
case 1425:
case 3665:
case 3567:
case 3575:
case 3677:
case 3533:
case 1325:
case 3042:
case 2319:
case 3453:
case 3807:
case 1683:
case 476:
case 3922:
case 3693:
case 2385:
case 1628:
case 3218:
case 3468:
case 2829:
case 405:
case 1774:
case 1121:
case 3368:
case 830:
case 2102:
case 663:
case 254:
case 3036:
case 2022:
case 512:
case 3704:
case 728:
case 1001:
case 3974:
case 852:
case 320:
case 785:
case 2369:
case 2701:
case 2971:
case 3253:
case 1893:
case 1722:
case 2936:
case 3828:
case 3236:
case 1963:
case 2953:
case 2812:
case 488:
case 312:
case 1382:
case 2274:
case 1937:
case 277:
case 464:
case 3919:
case 4026:
case 1544:
case 1719:
case 2725:
case 991:
case 3167:
case 3053:
case 619:
case 3342:
case 469:
case 1240:
case 3867:
case 336:
case 2570:
case 2548:
case 3605:
case 954:
case 4095:
case 1633:
case 1290:
case 501:
case 2335:
case 1675:
case 37:
case 2112:
case 1667:
case 959:
case 1096:
case 826:
case 3208:
case 4013:
case 2435:
case 3086:
case 301:
case 1211:
case 1461:
case 2778:
case 57:
case 1797:
case 2531:
case 1709:
case 3454:
case 2980:
case 1361:
case 3534:
case 1656:
case 2097:
case 703:
case 2666:
case 1078:
case 3128:
case 3286:
case 1552:
case 806:
case 1747:
case 1432:
case 3856:
case 483:
case 2562:
case 3779:
case 1332:
case 3080:
case 2129:
case 75:
case 546:
case 2047:
case 1446:
case 2927:
case 2170:
case 2881:
case 2148:
case 3644:
case 1189:
case 1411:
case 914:
case 2616:
case 3720:
case 1311:
case 1894:
case 3254:
case 3107:
case 4004:
case 3027:
case 2512:
case 801:
case 3694:
case 2035:
case 1496:
case 1232:
case 691:
case 1735:
case 2691:
case 1844:
case 1396:
case 1773:
case 541:
case 743:
case 2131:
case 1751:
case 2761:
case 963:
case 3817:
case 1061:
case 3764:
case 733:
case 2397:
case 3726:
case 326:
case 3583:
case 3134:
case 1378:
case 836:
case 3308:
case 506:
case 3480:
case 2954:
case 2732:
case 268:
case 1032:
case 3380:
case 2235:
case 284:
case 3639:
case 3408:
case 2347:
case 470:
case 497:
case 1818:
case 21:
case 2423:
case 3712:
case 3196:
case 2300:
case 1186:
case 3365:
case 3243:
case 3215:
case 409:
case 1625:
case 3465:
case 2400:
case 1527:
case 2619:
case 1349:
case 387:
case 789:
case 180:
case 3146:
case 3825:
case 1307:
case 1399:
case 156:
case 1228:
case 3630:
case 3389:
case 1407:
case 1283:
case 2306:
case 1871:
case 4081:
case 2179:
case 3015:
case 3532:
case 1108:
case 3352:
case 2187:
case 2915:
case 615:
case 2943:
case 424:
case 3140:
case 2674:
case 1028:
case 1334:
case 111:
case 465:
case 2728:
case 1434:
case 3801:
case 603:
case 3636:
case 3798:
case 3882:
case 3596:
case 1586:
case 2749:
case 1723:
case 1127:
case 3077:
case 3642:
case 439:
case 3755:
case 2088:
case 2206:
case 1049:
case 444:
case 3511:
case 3770:
case 2799:
case 2103:
case 1007:
case 3546:
case 2965:
case 1234:
case 3923:
case 1099:
case 3692:
case 215:
case 3089:
case 1998:
case 4002:
case 2288:
case 3315:
case 1580:
case 3277:
case 3762:
case 2669:
case 985:
case 1931:
case 928:
case 3052:
case 1706:
case 1508:
case 1659:
case 3161:
case 1383:
case 3906:
case 3578:
case 593:
case 3776:
case 3289:
case 2685:
case 3859:
case 655:
case 1207:
case 2734:
case 1154:
case 1483:
case 1428:
case 151:
case 2952:
case 2164:
case 2813:
case 1116:
case 2550:
case 2268:
case 252:
case 3855:
case 1295:
case 2092:
case 2689:
case 859:
case 1800:
case 1742:
case 2899:
case 3870:
case 1191:
case 1557:
case 240:
case 1363:
case 1437:
case 3848:
case 2353:
case 2567:
case 3600:
case 3623:
case 1337:
case 2575:
case 230:
case 2677:
case 1982:
case 854:
case 3992:
case 1698:
case 2533:
case 3688:
case 514:
case 2807:
case 1566:
case 1768:
case 2471:
case 4046:
case 49:
case 717:
case 2292:
case 2758:
case 1138:
case 2556:
case 1095:
case 2969:
case 2371:
case 1631:
case 3502:
case 975:
case 3474:
case 2068:
case 2336:
case 1959:
case 612:
case 600:
case 3606:
case 1045:
case 563:
case 1404:
case 2242:
case 3759:
case 1572:
case 3876:
case 1013:
case 3069:
case 3422:
case 1662:
case 3968:
case 2745:
case 877:
case 118:
case 2492:
case 1160:
case 774:
case 2271:
case 2150:
case 798:
case 2392:
case 559:
case 3725:
case 4032:
case 170:
case 779:
case 1204:
case 2442:
case 200:
case 1753:
case 2133:
case 1037:
case 2584:
case 554:
case 2342:
case 1510:
case 2156:
case 3385:
case 1166:
case 1901:
case 936:
case 2230:
case 2468:
case 2218:
case 757:
case 1358:
case 921:
case 3102:
case 2036:
case 354:
case 3485:
case 1629:
case 863:
case 2615:
case 982:
case 97:
case 1313:
case 2974:
case 220:
case 2883:
case 1004:
case 359:
case 640:
case 2253:
case 1445:
case 3936:
case 2525:
case 1519:
case 3944:
case 2239:
case 3635:
case 3537:
case 3803:
case 2781:
case 328:
case 2916:
case 129:
case 385:
case 3784:
case 720:
case 3357:
case 2941:
case 3563:
case 2405:
case 2182:
case 3238:
case 508:
case 2044:
case 165:
case 838:
case 266:
case 1984:
case 2991:
case 1873:
case 848:
case 661:
case 3360:
case 257:
case 124:
case 1835:
case 1744:
case 2861:
case 3472:
case 3717:
case 1281:
case 993:
case 109:
case 3504:
case 1851:
case 3291:
case 1739:
case 872:
case 2501:
case 2039:
case 3113:
case 2938:
case 3158:
case 2654:
case 1664:
case 298:
case 3466:
case 1626:
case 617:
case 2421:
case 480:
case 1574:
case 3366:
case 467:
case 1917:
case 679:
case 2846:
case 2125:
case 1119:
case 3767:
case 3391:
case 1381:
case 3163:
case 3733:
case 3224:
case 1614:
case 3750:
case 538:
case 3416:
case 3266:
case 38:
case 2896:
case 3441:
case 1705:
case 548:
case 3316:
case 1967:
case 2221:
case 3341:
case 217:
case 3887:
case 2439:
case 3104:
case 3257:
case 2559:
case 3921:
case 139:
case 4049:
case 58:
case 2878:
case 572:
case 3072:
case 1122:
case 2339:
case 960:
case 2966:
case 348:
case 3647:
case 740:
case 2021:
case 2890:
case 134:
case 2205:
case 3260:
case 3756:
case 1687:
case 666:
case 3310:
case 885:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1743494401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,];
var gg_b = "1743494401/";

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
