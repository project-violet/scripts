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
case 2633:
case 2771:
case 1975:
case 672:
case 551:
case 281:
case 2901:
case 2843:
case 1006:
case 2145:
case 2252:
case 3979:
case 1138:
case 3320:
case 3974:
case 3709:
case 3093:
case 515:
case 2285:
case 1960:
case 3118:
case 2287:
case 2729:
case 3372:
case 1383:
case 1433:
case 865:
case 2328:
case 3413:
case 2300:
case 249:
case 566:
case 344:
case 3197:
case 2147:
case 484:
case 278:
case 3921:
case 1707:
case 2550:
case 1977:
case 299:
case 1601:
case 2675:
case 3376:
case 2545:
case 1933:
case 3913:
case 856:
case 205:
case 78:
case 1477:
case 1594:
case 530:
case 1599:
case 3421:
case 3158:
case 2064:
case 2150:
case 1002:
case 3453:
case 4074:
case 1475:
case 4053:
case 3474:
case 2677:
case 1460:
case 2256:
case 544:
case 870:
case 1170:
case 733:
case 1526:
case 1881:
case 1657:
case 1063:
case 693:
case 2792:
case 3742:
case 2917:
case 1682:
case 2593:
case 187:
case 3543:
case 6:
case 3948:
case 2457:
case 107:
case 2939:
case 315:
case 3391:
case 2341:
case 1565:
case 1030:
case 1686:
case 3047:
case 2097:
case 1208:
case 4048:
case 1126:
case 2384:
case 2434:
case 3569:
case 2439:
case 3564:
case 419:
case 3845:
case 798:
case 1049:
case 2955:
case 2486:
case 2336:
case 3635:
case 594:
case 355:
case 2796:
case 113:
case 2417:
case 3045:
case 1849:
case 3619:
case 638:
case 3762:
case 101:
case 303:
case 1043:
case 2960:
case 1285:
case 3284:
case 2199:
case 3613:
case 443:
case 3727:
case 364:
case 2705:
case 357:
case 2194:
case 962:
case 2361:
case 178:
case 3236:
case 2977:
case 1729:
case 3968:
case 2383:
case 1300:
case 3826:
case 3563:
case 1724:
case 891:
case 149:
case 1212:
case 317:
case 2477:
case 1660:
case 3867:
case 3674:
case 3022:
case 4068:
case 2599:
case 3679:
case 2078:
case 2538:
case 3067:
case 841:
case 2601:
case 199:
case 3653:
case 3468:
case 1545:
case 3163:
case 53:
case 2460:
case 1864:
case 1256:
case 809:
case 3766:
case 3530:
case 3065:
case 3621:
case 1064:
case 3181:
case 895:
case 1069:
case 3865:
case 2291:
case 3241:
case 700:
case 493:
case 3454:
case 2657:
case 1940:
case 3459:
case 1917:
case 1792:
case 814:
case 2276:
case 2863:
case 1332:
case 3102:
case 2081:
case 1457:
case 406:
case 522:
case 1939:
case 1058:
case 503:
case 2122:
case 2682:
case 287:
case 1593:
case 486:
case 1915:
case 2167:
case 1998:
case 768:
case 87:
case 253:
case 3356:
case 2655:
case 3414:
case 1384:
case 2830:
case 2126:
case 1788:
case 3502:
case 663:
case 2570:
case 1897:
case 1389:
case 2723:
case 3690:
case 4014:
case 2565:
case 2030:
case 867:
case 3352:
case 396:
case 4019:
case 2686:
case 2220:
case 1415:
case 132:
case 1796:
case 3228:
case 3200:
case 3387:
case 3437:
case 3899:
case 2272:
case 2634:
case 1018:
case 472:
case 3894:
case 2567:
case 2639:
case 727:
case 1895:
case 2698:
case 2049:
case 3703:
case 2751:
case 4037:
case 1955:
case 3838:
case 1336:
case 1486:
case 2044:
case 3094:
case 3316:
case 752:
case 860:
case 3032:
case 125:
case 2350:
case 376:
case 2278:
case 1561:
case 3222:
case 2923:
case 1812:
case 1757:
case 769:
case 1988:
case 3572:
case 1583:
case 1782:
case 3773:
case 3508:
case 1755:
case 3265:
case 1056:
case 3176:
case 2891:
case 2202:
case 492:
case 3754:
case 2091:
case 3041:
case 1856:
case 531:
case 1269:
case 510:
case 3759:
case 323:
case 3884:
case 2100:
case 2451:
case 3403:
case 2310:
case 1183:
case 121:
case 1243:
case 18:
case 3397:
case 1085:
case 302:
case 1852:
case 1992:
case 1161:
case 3084:
case 1717:
case 1740:
case 1885:
case 3089:
case 442:
case 2688:
case 10:
case 1887:
case 3036:
case 1394:
case 1734:
case 1087:
case 3646:
case 3395:
case 1816:
case 2423:
case 535:
case 3108:
case 3836:
case 1338:
case 1488:
case 4025:
case 2671:
case 2733:
case 2541:
case 3591:
case 2820:
case 3604:
case 2407:
case 148:
case 2230:
case 3609:
case 2393:
case 1297:
case 2072:
case 3028:
case 4062:
case 707:
case 919:
case 2405:
case 576:
case 1607:
case 2184:
case 3966:
case 3462:
case 439:
case 2532:
case 4027:
case 3294:
case 658:
case 3927:
case 2076:
case 350:
case 1971:
case 4066:
case 2760:
case 2281:
case 1322:
case 227:
case 2589:
case 2132:
case 871:
case 502:
case 426:
case 3768:
case 1258:
case 252:
case 2777:
case 3925:
case 2907:
case 1923:
case 2812:
case 4031:
case 2988:
case 1528:
case 1500:
case 2583:
case 1692:
case 225:
case 3381:
case 1278:
case 701:
case 749:
case 1091:
case 2856:
case 840:
case 3980:
case 1951:
case 2056:
case 778:
case 1891:
case 4042:
case 2852:
case 2161:
case 2992:
case 3446:
case 1206:
case 2740:
case 1688:
case 2885:
case 877:
case 2183:
case 1310:
case 221:
case 55:
case 890:
case 1347:
case 705:
case 100:
case 1345:
case 1696:
case 1423:
case 2739:
case 2338:
case 2651:
case 180:
case 3748:
case 2798:
case 3603:
case 2715:
case 424:
case 2016:
case 3210:
case 3187:
case 3556:
case 1407:
case 1230:
case 1008:
case 1393:
case 3247:
case 2297:
case 3713:
case 1733:
case 972:
case 279:
case 1808:
case 3306:
case 1184:
case 3883:
case 1249:
case 1189:
case 3512:
case 3409:
case 1532:
case 3152:
case 2295:
case 3245:
case 3083:
case 1629:
case 3861:
case 2471:
case 4009:
case 2218:
case 1624:
case 1760:
case 3516:
case 1281:
case 3909:
case 1536:
case 986:
case 1876:
case 3753:
case 906:
case 3156:
case 1775:
case 1777:
case 834:
case 3666:
case 1589:
case 3112:
case 2370:
case 3302:
case 2924:
case 2929:
case 2258:
case 437:
case 3274:
case 1260:
case 2456:
case 3279:
case 3842:
case 3524:
case 3253:
case 3042:
case 1275:
case 1166:
case 1011:
case 2373:
case 2504:
case 1562:
case 3221:
case 177:
case 3571:
case 2359:
case 190:
case 1730:
case 791:
case 983:
case 1566:
case 0:
case 3747:
case 2797:
case 1823:
case 1685:
case 957:
case 1125:
case 1233:
case 140:
case 16:
case 1023:
case 922:
case 2452:
case 2896:
case 3171:
case 3846:
case 1051:
case 745:
case 1127:
case 3636:
case 1687:
case 2096:
case 2314:
case 24:
case 2319:
case 3804:
case 4061:
case 3809:
case 1005:
case 2240:
case 3290:
case 134:
case 271:
case 827:
case 4083:
case 1807:
case 3628:
case 3600:
case 288:
case 2024:
case 2239:
case 3248:
case 2829:
case 1007:
case 3188:
case 1420:
case 1408:
case 2824:
case 77:
case 868:
case 2131:
case 676:
case 3596:
case 2546:
case 1374:
case 275:
case 1920:
case 1908:
case 1379:
case 562:
case 2764:
case 1702:
case 2769:
case 1476:
case 1972:
case 3377:
case 1321:
case 728:
case 3961:
case 1201:
case 3989:
case 3357:
case 2763:
case 1092:
case 2491:
case 2166:
case 136:
case 1985:
case 761:
case 2525:
case 1892:
case 4041:
case 2811:
case 821:
case 1354:
case 4032:
case 2527:
case 290:
case 573:
case 1916:
case 3936:
case 2277:
case 1504:
case 2656:
case 65:
case 3107:
case 240:
case 3317:
case 129:
case 4036:
case 2652:
case 674:
case 2566:
case 765:
case 1912:
case 2823:
case 3386:
case 1888:
case 3436:
case 3932:
case 3334:
case 2851:
case 1104:
case 1795:
case 402:
case 716:
case 3738:
case 3799:
case 1956:
case 2744:
case 2616:
case 3794:
case 2127:
case 1485:
case 482:
case 171:
case 3062:
case 4028:
case 4000:
case 1286:
case 1531:
case 3151:
case 3400:
case 1217:
case 1071:
case 3237:
case 3862:
case 2005:
case 1240:
case 2706:
case 339:
case 1298:
case 108:
case 911:
case 3661:
case 1829:
case 3025:
case 930:
case 3123:
case 2408:
case 1215:
case 2420:
case 1029:
case 410:
case 3683:
case 592:
case 1024:
case 3219:
case 1239:
case 326:
case 175:
case 3551:
case 2379:
case 3722:
case 2778:
case 542:
case 2353:
case 3111:
case 966:
case 1282:
case 3273:
case 637:
case 3765:
case 1255:
case 3770:
case 848:
case 1764:
case 3523:
case 951:
case 3928:
case 1769:
case 3866:
case 770:
case 2972:
case 2559:
case 1148:
case 109:
case 1288:
case 2114:
case 2978:
case 2304:
case 2573:
case 189:
case 2643:
case 195:
case 2772:
case 790:
case 655:
case 3329:
case 1296:
case 3700:
case 2902:
case 2406:
case 506:
case 1964:
case 3970:
case 338:
case 343:
case 3965:
case 1325:
case 483:
case 2137:
case 1443:
case 586:
case 457:
case 464:
case 2519:
case 2860:
case 1001:
case 1464:
case 3470:
case 4065:
case 2776:
case 1801:
case 2060:
case 4070:
case 2875:
case 393:
case 1548:
case 2159:
case 3465:
case 191:
case 651:
case 1602:
case 417:
case 3467:
case 572:
case 2877:
case 801:
case 3068:
case 4022:
case 937:
case 2077:
case 145:
case 1366:
case 615:
case 2478:
case 3926:
case 3650:
case 3732:
case 2168:
case 694:
case 734:
case 1663:
case 386:
case 1057:
case 446:
case 1458:
case 1121:
case 3854:
case 2331:
case 3994:
case 95:
case 2944:
case 3073:
case 3175:
case 1055:
case 3266:
case 1756:
case 3999:
case 1882:
case 154:
case 3873:
case 3938:
case 1995:
case 3533:
case 2791:
case 3741:
case 832:
case 1855:
case 3059:
case 1630:
case 3262:
case 3837:
case 3647:
case 2697:
case 3494:
case 2444:
case 5:
case 1017:
case 1418:
case 4094:
case 3227:
case 3133:
case 3814:
case 1649:
case 128:
case 1098:
case 1579:
case 1834:
case 2380:
case 114:
case 1015:
case 3736:
case 3560:
case 1716:
case 1574:
case 1839:
case 2695:
case 3396:
case 1958:
case 1229:
case 3835:
case 1553:
case 496:
case 91:
case 3019:
case 1114:
case 1833:
case 363:
case 161:
case 1573:
case 384:
case 3582:
case 559:
case 1119:
case 1708:
case 1643:
case 1720:
case 736:
case 982:
case 295:
case 3139:
case 3198:
case 1559:
case 923:
case 1033:
case 3305:
case 2606:
case 1554:
case 304:
case 209:
case 79:
case 3117:
case 2325:
case 1137:
case 3307:
case 241:
case 2443:
case 2190:
case 1772:
case 3783:
case 2969:
case 3246:
case 2296:
case 1902:
case 3186:
case 4093:
case 2964:
case 820:
case 3853:
case 165:
case 1875:
case 3182:
case 1519:
case 976:
case 1906:
case 1860:
case 729:
case 1514:
case 1776:
case 3155:
case 2469:
case 3534:
case 1077:
case 1211:
case 245:
case 3231:
case 3021:
case 2366:
case 3670:
case 1664:
case 3540:
case 760:
case 646:
case 1537:
case 935:
case 2458:
case 415:
case 2857:
case 2997:
case 3947:
case 2712:
case 950:
case 584:
case 254:
case 2918:
case 466:
case 3945:
case 788:
case 1791:
case 2179:
case 2513:
case 1481:
case 3101:
case 2153:
case 1944:
case 2082:
case 2055:
case 708:
case 3445:
case 1568:
case 931:
case 887:
case 2040:
case 603:
case 1963:
case 3323:
case 1205:
case 2418:
case 807:
case 4045:
case 657:
case 2630:
case 430:
case 2521:
case 2785:
case 1981:
case 3209:
case 1697:
case 683:
case 3890:
case 2034:
case 2898:
case 3848:
case 1695:
case 3638:
case 197:
case 3501:
case 1207:
case 3699:
case 3048:
case 2649:
case 2098:
case 1430:
case 1380:
case 2834:
case 3351:
case 319:
case 2015:
case 3694:
case 300:
case 2576:
case 2395:
case 2646:
case 3345:
case 3696:
case 858:
case 3423:
case 2120:
case 2719:
case 2680:
case 1748:
case 4023:
case 1344:
case 688:
case 46:
case 2735:
case 1446:
case 1942:
case 552:
case 995:
case 671:
case 2089:
case 3688:
case 3347:
case 909:
case 2397:
case 527:
case 202:
case 717:
case 1946:
case 1442:
case 818:
case 2520:
case 2773:
case 2265:
case 824:
case 2903:
case 764:
case 2267:
case 991:
case 568:
case 3692:
case 2572:
case 512:
case 477:
case 276:
case 1381:
case 722:
case 3278:
case 967:
case 954:
case 1585:
case 1721:
case 1552:
case 15:
case 3589:
case 1112:
case 3584:
case 3760:
case 500:
case 3141:
case 69:
case 2466:
case 3263:
case 1753:
case 636:
case 3076:
case 1625:
case 2462:
case 368:
case 2966:
case 1883:
case 3189:
case 660:
case 1512:
case 3244:
case 2294:
case 1083:
case 3072:
case 928:
case 1152:
case 2000:
case 2427:
case 3624:
case 1185:
case 231:
case 1187:
case 2425:
case 1210:
case 629:
case 3020:
case 2609:
case 1247:
case 3393:
case 1713:
case 3541:
case 1306:
case 3808:
case 3136:
case 3820:
case 3887:
case 3399:
case 3651:
case 2748:
case 3798:
case 2603:
case 2344:
case 3016:
case 2931:
case 429:
case 3734:
case 1714:
case 1395:
case 1646:
case 1318:
case 1120:
case 3488:
case 1836:
case 2480:
case 3052:
case 1403:
case 2293:
case 102:
case 44:
case 1737:
case 3496:
case 1084:
case 598:
case 3740:
case 3623:
case 30:
case 3885:
case 794:
case 49:
case 579:
case 1773:
case 1631:
case 2980:
case 1265:
case 3056:
case 436:
case 3264:
case 744:
case 1041:
case 1759:
case 3996:
case 2946:
case 3269:
case 548:
case 1032:
case 176:
case 2431:
case 3012:
case 1222:
case 3561:
case 3988:
case 2363:
case 842:
case 2112:
case 25:
case 475:
case 1369:
case 730:
case 690:
case 50:
case 839:
case 677:
case 2666:
case 398:
case 1927:
case 2156:
case 3971:
case 2250:
case 2774:
case 947:
case 2779:
case 2904:
case 3322:
case 2378:
case 2083:
case 471:
case 3471:
case 1000:
case 826:
case 1238:
case 715:
case 1427:
case 3218:
case 525:
case 2185:
case 3326:
case 751:
case 2625:
case 1800:
case 1299:
case 4071:
case 970:
case 1966:
case 2512:
case 2409:
case 21:
case 997:
case 2713:
case 1591:
case 408:
case 3605:
case 274:
case 379:
case 2556:
case 2210:
case 348:
case 333:
case 1609:
case 2247:
case 1343:
case 1163:
case 3677:
case 2474:
case 2597:
case 3510:
case 990:
case 3256:
case 1621:
case 3869:
case 1065:
case 1530:
case 1070:
case 1181:
case 491:
case 2668:
case 117:
case 3212:
case 1867:
case 1544:
case 2421:
case 1549:
case 399:
case 843:
case 3545:
case 1822:
case 1026:
case 1725:
case 697:
case 2921:
case 3216:
case 670:
case 1236:
case 3287:
case 1826:
case 3328:
case 349:
case 1563:
case 489:
case 893:
case 2197:
case 3147:
case 3145:
case 301:
case 2195:
case 2979:
case 2320:
case 2308:
case 3285:
case 96:
case 2118:
case 3043:
case 2093:
case 183:
case 3633:
case 441:
case 381:
case 2893:
case 3843:
case 32:
case 1727:
case 1289:
case 164:
case 2953:
case 230:
case 3417:
case 806:
case 2746:
case 1200:
case 1228:
case 1959:
case 2283:
case 3095:
case 1899:
case 2045:
case 211:
case 2143:
case 2619:
case 1038:
case 2490:
case 2845:
case 1648:
case 1099:
case 1578:
case 3955:
case 2261:
case 886:
case 2780:
case 47:
case 1838:
case 3336:
case 2635:
case 1106:
case 585:
case 4040:
case 1316:
case 255:
case 1414:
case 2810:
case 2637:
case 3384:
case 3434:
case 661:
case 1419:
case 3389:
case 2847:
case 3498:
case 4034:
case 1385:
case 934:
case 332:
case 4039:
case 3415:
case 1919:
case 3939:
case 2391:
case 872:
case 2543:
case 2731:
case 52:
case 3915:
case 71:
case 3998:
case 581:
case 3858:
case 4082:
case 3792:
case 2742:
case 665:
case 1459:
case 266:
case 3332:
case 3986:
case 454:
case 1312:
case 467:
case 3455:
case 2169:
case 863:
case 4060:
case 1668:
case 2865:
case 884:
case 2241:
case 1474:
case 1597:
case 2766:
case 4075:
case 1479:
case 2530:
case 2067:
case 1518:
case 4077:
case 782:
case 2653:
case 2468:
case 1595:
case 1913:
case 217:
case 3594:
case 2544:
case 2022:
case 2679:
case 3078:
case 1372:
case 3383:
case 614:
case 320:
case 1413:
case 2826:
case 628:
case 2026:
case 3361:
case 4033:
case 960:
case 2725:
case 3707:
case 1921:
case 2581:
case 3977:
case 2236:
case 3975:
case 283:
case 2613:
case 3199:
case 3705:
case 257:
case 587:
case 2727:
case 2289:
case 264:
case 3006:
case 3194:
case 1195:
case 67:
case 203:
case 1704:
case 1979:
case 3806:
case 776:
case 3138:
case 929:
case 1118:
case 3960:
case 1974:
case 1709:
case 2099:
case 1845:
case 2703:
case 988:
case 3049:
case 2578:
case 3522:
case 1780:
case 3751:
case 3044:
case 2973:
case 2106:
case 155:
case 3615:
case 313:
case 1614:
case 1746:
case 2200:
case 111:
case 1143:
case 641:
case 3567:
case 3639:
case 2894:
case 3565:
case 609:
case 470:
case 1010:
case 1047:
case 3686:
case 735:
case 497:
case 3617:
case 689:
case 1637:
case 3830:
case 971:
case 3640:
case 2690:
case 23:
case 387:
case 2935:
case 1731:
case 569:
case 3682:
case 3711:
case 2356:
case 1654:
case 1659:
case 2914:
case 645:
case 2178:
case 3122:
case 166:
case 2102:
case 3081:
case 3170:
case 520:
case 731:
case 3526:
case 3657:
case 1850:
case 3881:
case 1990:
case 2459:
case 3165:
case 2937:
case 1157:
case 3077:
case 3211:
case 1231:
case 742:
case 3478:
case 1021:
case 2926:
case 2422:
case 316:
case 1540:
case 3664:
case 1517:
case 4078:
case 3669:
case 1821:
case 3060:
case 1074:
case 1993:
case 1515:
case 1598:
case 570:
case 293:
case 1622:
case 3906:
case 3173:
case 3519:
case 3402:
case 2470:
case 1539:
case 1874:
case 3776:
case 3514:
case 3075:
case 3251:
case 2965:
case 1117:
case 894:
case 1307:
case 3137:
case 2203:
case 547:
case 1140:
case 469:
case 2329:
case 1783:
case 1246:
case 3406:
case 1186:
case 3902:
case 3978:
case 3114:
case 3833:
case 1813:
case 1134:
case 2922:
case 1555:
case 3643:
case 2693:
case 3708:
case 1582:
case 3573:
case 3119:
case 90:
case 3559:
case 1198:
case 632:
case 3033:
case 3223:
case 3135:
case 1305:
case 98:
case 1115:
case 2645:
case 866:
case 4030:
case 1501:
case 1638:
case 3618:
case 2019:
case 678:
case 3207:
case 2133:
case 2225:
case 2814:
case 1351:
case 649:
case 1048:
case 2819:
case 2035:
case 1694:
case 933:
case 948:
case 2784:
case 4049:
case 3963:
case 2388:
case 2438:
case 1090:
case 2789:
case 3205:
case 1323:
case 2610:
case 815:
case 62:
case 2262:
case 2499:
case 413:
case 1950:
case 681:
case 2577:
case 3444:
case 2647:
case 4081:
case 2873:
case 159:
case 2054:
case 3791:
case 2741:
case 2533:
case 998:
case 2059:
case 561:
case 2854:
case 3331:
case 4063:
case 2994:
case 2175:
case 2999:
case 286:
case 556:
case 739:
case 2392:
case 605:
case 453:
case 830:
case 1947:
case 773:
case 685:
case 3930:
case 3590:
case 2540:
case 1:
case 653:
case 2670:
case 1467:
case 2517:
case 2821:
case 822:
case 687:
case 2586:
case 883:
case 2231:
case 499:
case 2665:
case 1868:
case 864:
case 514:
case 2182:
case 2667:
case 1470:
case 3464:
case 3292:
case 528:
case 2155:
case 2242:
case 2074:
case 3943:
case 2853:
case 2598:
case 1465:
case 3548:
case 193:
case 3678:
case 4069:
case 391:
case 2783:
case 1700:
case 1728:
case 401:
case 4043:
case 1324:
case 1970:
case 3964:
case 1965:
case 481:
case 2280:
case 143:
case 2117:
case 2307:
case 3325:
case 2140:
case 613:
case 1371:
case 2305:
case 204:
case 2115:
case 3288:
case 1967:
case 3362:
case 263:
case 758:
case 2555:
case 1922:
case 567:
case 1693:
case 284:
case 449:
case 395:
case 1814:
case 2410:
case 3579:
case 3834:
case 2699:
case 2048:
case 3649:
case 3098:
case 219:
case 3015:
case 314:
case 3574:
case 3644:
case 912:
case 3716:
case 2694:
case 1396:
case 1014:
case 2638:
case 432:
case 1835:
case 3039:
case 1019:
case 3224:
case 3815:
case 4095:
case 2204:
case 1837:
case 3521:
case 669:
case 1262:
case 2209:
case 3785:
case 2890:
case 4018:
case 3840:
case 1494:
case 172:
case 1647:
case 1037:
case 3017:
case 846:
case 3886:
case 1438:
case 37:
case 545:
case 927:
case 3153:
case 3055:
case 1859:
case 367:
case 259:
case 1873:
case 3918:
case 1160:
case 3995:
case 3179:
case 896:
case 3857:
case 3681:
case 1650:
case 106:
case 186:
case 3663:
case 1177:
case 3057:
case 1392:
case 541:
case 3121:
case 2046:
case 3096:
case 3104:
case 2880:
case 421:
case 4052:
case 1484:
case 1334:
case 3795:
case 1803:
case 360:
case 1941:
case 3718:
case 575:
case 1489:
case 668:
case 1738:
case 1799:
case 612:
case 2171:
case 40:
case 142:
case 1794:
case 3335:
case 3485:
case 3337:
case 1107:
case 1317:
case 2213:
case 2689:
case 329:
case 3088:
case 4016:
case 1340:
case 4087:
case 2710:
case 2129:
case 3416:
case 3912:
case 1932:
case 969:
case 1436:
case 2124:
case 4012:
case 3354:
case 823:
case 1268:
case 802:
case 3987:
case 2641:
case 652:
case 2031:
case 3412:
case 3509:
case 1432:
case 1936:
case 627:
case 3201:
case 1989:
case 2253:
case 1357:
case 508:
case 3092:
case 2042:
case 2529:
case 192:
case 784:
case 2750:
case 2632:
case 2274:
case 3456:
case 3892:
case 588:
case 3282:
case 1273:
case 907:
case 719:
case 1066:
case 3255:
case 1523:
case 3764:
case 1770:
case 810:
case 831:
case 1928:
case 1900:
case 953:
case 2983:
case 1866:
case 375:
case 2360:
case 126:
case 1551:
case 560:
case 1111:
case 3257:
case 2375:
case 3676:
case 3546:
case 2248:
case 3298:
case 308:
case 1726:
case 913:
case 3829:
case 1661:
case 1123:
case 850:
case 2188:
case 3215:
case 2628:
case 3029:
case 388:
case 2592:
case 3672:
case 3234:
case 680:
case 1219:
case 371:
case 173:
case 2196:
case 3146:
case 3286:
case 3620:
case 2009:
case 3743:
case 2793:
case 3608:
case 3217:
case 3071:
case 2333:
case 2483:
case 1862:
case 1027:
case 2809:
case 3240:
case 2799:
case 3749:
case 2003:
case 1171:
case 3348:
case 3616:
case 949:
case 3127:
case 1046:
case 2484:
case 2334:
case 1880:
case 2803:
case 3162:
case 7:
case 2738:
case 679:
case 837:
case 3566:
case 793:
case 400:
case 1129:
case 162:
case 1747:
case 2932:
case 1124:
case 92:
case 2436:
case 480:
case 3125:
case 2107:
case 901:
case 1213:
case 36:
case 633:
case 2340:
case 1031:
case 2432:
case 3011:
case 3277:
case 738:
case 743:
case 698:
case 2505:
case 1831:
case 2268:
case 1641:
case 985:
case 3612:
case 292:
case 999:
case 1632:
case 3781:
case 1750:
case 158:
case 1253:
case 2357:
case 905:
case 1042:
case 3491:
case 2523:
case 2770:
case 1588:
case 2273:
case 1377:
case 2066:
case 874:
case 2765:
case 3353:
case 2111:
case 452:
case 81:
case 1375:
case 1596:
case 772:
case 1360:
case 3920:
case 2722:
case 3379:
case 3778:
case 1628:
case 3807:
case 1592:
case 2219:
case 4020:
case 4008:
case 1248:
case 2025:
case 2235:
case 468:
case 2428:
case 1804:
case 3103:
case 2237:
case 3976:
case 68:
case 932:
case 3005:
case 621:
case 334:
case 239:
case 786:
case 1290:
case 2062:
case 1461:
case 85:
case 273:
case 4072:
case 1009:
case 3805:
case 2827:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1744844401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,];
var gg_b = "1744844401/";

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
