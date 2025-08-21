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
case 1276:
case 2100:
case 2763:
case 2677:
case 159:
case 1596:
case 2361:
case 4082:
case 2973:
case 51:
case 1239:
case 3480:
case 4029:
case 426:
case 2820:
case 3852:
case 2429:
case 253:
case 3417:
case 856:
case 3328:
case 2814:
case 1703:
case 2299:
case 528:
case 2925:
case 2579:
case 2630:
case 3816:
case 381:
case 1710:
case 2482:
case 3265:
case 3358:
case 494:
case 104:
case 1046:
case 1010:
case 1372:
case 787:
case 3171:
case 3660:
case 2235:
case 2081:
case 580:
case 918:
case 1473:
case 515:
case 2662:
case 3218:
case 1054:
case 1929:
case 1575:
case 1132:
case 3397:
case 1982:
case 92:
case 3733:
case 1087:
case 3190:
case 2063:
case 1181:
case 1092:
case 1931:
case 3359:
case 642:
case 2103:
case 1997:
case 2853:
case 2146:
case 645:
case 2110:
case 1864:
case 3483:
case 81:
case 629:
case 2823:
case 2317:
case 2428:
case 2380:
case 380:
case 3806:
case 3762:
case 1311:
case 2154:
case 3407:
case 1713:
case 2633:
case 3972:
case 2497:
case 1958:
case 1542:
case 1013:
case 581:
case 1520:
case 2431:
case 812:
case 3777:
case 1000:
case 289:
case 2227:
case 3062:
case 162:
case 1928:
case 3219:
case 1470:
case 64:
case 1437:
case 1644:
case 1491:
case 3730:
case 3208:
case 1221:
case 1514:
case 1792:
case 3193:
case 4031:
case 1362:
case 2574:
case 973:
case 3426:
case 2505:
case 342:
case 3857:
case 3300:
case 3107:
case 2055:
case 786:
case 288:
case 2886:
case 3313:
case 4010:
case 3296:
case 3827:
case 329:
case 345:
case 3576:
case 2424:
case 3884:
case 2487:
case 2672:
case 4024:
case 84:
case 1782:
case 2410:
case 2128:
case 4087:
case 2302:
case 612:
case 2403:
case 3444:
case 4054:
case 1481:
case 6:
case 3045:
case 1683:
case 1266:
case 2773:
case 3745:
case 2371:
case 628:
case 1954:
case 3493:
case 3898:
case 3253:
case 1059:
case 2288:
case 3392:
case 34:
case 3223:
case 1082:
case 1191:
case 751:
case 1661:
case 61:
case 829:
case 534:
case 474:
case 2755:
case 764:
case 842:
case 2131:
case 3204:
case 2344:
case 2159:
case 1728:
case 775:
case 462:
case 2182:
case 2645:
case 2091:
case 2515:
case 3072:
case 465:
case 772:
case 334:
case 3310:
case 3977:
case 483:
case 2413:
case 1869:
case 54:
case 3180:
case 2356:
case 3930:
case 235:
case 1031:
case 3387:
case 232:
case 2326:
case 3149:
case 1285:
case 966:
case 2770:
case 2541:
case 984:
case 3250:
case 1125:
case 2568:
case 1649:
case 1805:
case 656:
case 1874:
case 1586:
case 1155:
case 46:
case 1547:
case 23:
case 3772:
case 1913:
case 557:
case 529:
case 1173:
case 1058:
case 3214:
case 750:
case 3001:
case 2222:
case 1028:
case 2393:
case 2216:
case 221:
case 2737:
case 1900:
case 1502:
case 2258:
case 1089:
case 2893:
case 2498:
case 1623:
case 3778:
case 2664:
case 622:
case 28:
case 1927:
case 1040:
case 2228:
case 101:
case 1134:
case 3666:
case 1984:
case 649:
case 3941:
case 3283:
case 503:
case 2785:
case 2562:
case 1374:
case 3196:
case 1305:
case 934:
case 743:
case 3261:
case 2194:
case 848:
case 2231:
case 2143:
case 2812:
case 348:
case 3486:
case 3854:
case 2826:
case 169:
case 3419:
case 2484:
case 1590:
case 210:
case 1270:
case 2106:
case 819:
case 3887:
case 3532:
case 799:
case 2318:
case 2085:
case 3824:
case 1369:
case 1722:
case 1291:
case 4084:
case 2188:
case 3810:
case 263:
case 1716:
case 3846:
case 171:
case 417:
case 384:
case 2530:
case 2309:
case 1421:
case 693:
case 3335:
case 1166:
case 3634:
case 3803:
case 116:
case 4057:
case 2844:
case 1789:
case 3408:
case 3563:
case 2890:
case 1476:
case 1556:
case 147:
case 155:
case 1642:
case 1185:
case 3249:
case 584:
case 1794:
case 1043:
case 1439:
case 1877:
case 152:
case 803:
case 3969:
case 942:
case 708:
case 3581:
case 1544:
case 3892:
case 2282:
case 957:
case 945:
case 3398:
case 3064:
case 1088:
case 2678:
case 3409:
case 297:
case 468:
case 2140:
case 1788:
case 15:
case 2034:
case 2122:
case 2347:
case 519:
case 2766:
case 2939:
case 1273:
case 3905:
case 1593:
case 2802:
case 3974:
case 667:
case 3036:
case 303:
case 873:
case 3120:
case 3384:
case 566:
case 3327:
case 1094:
case 3813:
case 4035:
case 736:
case 2533:
case 1225:
case 490:
case 170:
case 1706:
case 3800:
case 2051:
case 915:
case 133:
case 1583:
case 593:
case 2199:
case 980:
case 2501:
case 518:
case 1845:
case 3715:
case 3202:
case 1798:
case 239:
case 2396:
case 1057:
case 416:
case 1989:
case 52:
case 1139:
case 761:
case 3041:
case 754:
case 3068:
case 1084:
case 191:
case 1618:
case 1940:
case 1027:
case 531:
case 117:
case 471:
case 2038:
case 3450:
case 4016:
case 1727:
case 1811:
case 4022:
case 91:
case 1784:
case 3639:
case 330:
case 3420:
case 3442:
case 2880:
case 367:
case 4052:
case 3978:
case 525:
case 1098:
case 1665:
case 549:
case 2452:
case 3388:
case 2416:
case 3271:
case 2135:
case 2440:
case 522:
case 3109:
case 709:
case 2422:
case 2095:
case 2641:
case 3774:
case 3831:
case 3705:
case 1619:
case 296:
case 2739:
case 2966:
case 3226:
case 322:
case 3069:
case 1580:
case 1686:
case 1138:
case 168:
case 2287:
case 2776:
case 349:
case 666:
case 2224:
case 325:
case 981:
case 567:
case 3621:
case 1608:
case 1906:
case 2246:
case 470:
case 3651:
case 3244:
case 831:
case 1281:
case 760:
case 1943:
case 3293:
case 3858:
case 3340:
case 331:
case 648:
case 1994:
case 1121:
case 3573:
case 3147:
case 3322:
case 452:
case 1466:
case 32:
case 3389:
case 3828:
case 3352:
case 2883:
case 1867:
case 240:
case 3119:
case 825:
case 2934:
case 2127:
case 318:
case 3638:
case 3186:
case 3936:
case 2350:
case 2848:
case 2443:
case 3555:
case 3475:
case 3404:
case 956:
case 2861:
case 3074:
case 2157:
case 3005:
case 2039:
case 3697:
case 1424:
case 3749:
case 2463:
case 3631:
case 686:
case 1505:
case 1574:
case 2362:
case 1454:
case 1294:
case 188:
case 3780:
case 892:
case 1158:
case 1073:
case 587:
case 3279:
case 1672:
case 3167:
case 1446:
case 144:
case 895:
case 2234:
case 3599:
case 715:
case 2759:
case 1128:
case 3851:
case 1288:
case 2987:
case 2137:
case 1963:
case 2924:
case 2191:
case 3956:
case 395:
case 2683:
case 2815:
case 2266:
case 728:
case 2518:
case 1569:
case 1243:
case 1390:
case 1725:
case 2377:
case 71:
case 2170:
case 2661:
case 120:
case 1206:
case 3838:
case 2946:
case 2910:
case 2607:
case 960:
case 3598:
case 2728:
case 1037:
case 3381:
case 3990:
case 3783:
case 1809:
case 1645:
case 675:
case 1182:
case 3462:
case 592:
case 1070:
case 1413:
case 2097:
case 2869:
case 913:
case 998:
case 4060:
case 3363:
case 3557:
case 2874:
case 2805:
case 2586:
case 2155:
case 3007:
case 414:
case 1770:
case 67:
case 3527:
case 2680:
case 1541:
case 523:
case 2519:
case 3083:
case 605:
case 1216:
case 121:
case 1240:
case 1393:
case 2900:
case 2617:
case 3659:
case 2508:
case 602:
case 1492:
case 13:
case 59:
case 3205:
case 3274:
case 2754:
case 372:
case 2276:
case 227:
case 1100:
case 259:
case 1677:
case 3162:
case 805:
case 1348:
case 1850:
case 1307:
case 1361:
case 1579:
case 1482:
case 2710:
case 1630:
case 274:
case 30:
case 1955:
case 1429:
case 2301:
case 1383:
case 1781:
case 2160:
case 1192:
case 3793:
case 3391:
case 2473:
case 3130:
case 2878:
case 4055:
case 488:
case 2010:
case 687:
case 37:
case 1564:
case 3588:
case 2602:
case 2523:
case 2982:
case 305:
case 2132:
case 999:
case 3613:
case 1063:
case 2087:
case 2959:
case 3506:
case 350:
case 3917:
case 3269:
case 2054:
case 302:
case 1662:
case 872:
case 3543:
case 2504:
case 4073:
case 2295:
case 1110:
case 3401:
case 2864:
case 1146:
case 851:
case 729:
case 502:
case 1428:
case 757:
case 2693:
case 550:
case 2931:
case 3866:
case 386:
case 3215:
case 2997:
case 1578:
case 864:
case 505:
case 2311:
case 1349:
case 43:
case 1633:
case 1032:
case 1937:
case 2700:
case 74:
case 2000:
case 1896:
case 189:
case 2928:
case 4037:
case 1284:
case 3268:
case 3355:
case 2550:
case 3133:
case 4091:
case 3983:
case 3241:
case 2656:
case 265:
case 3624:
case 1257:
case 2013:
case 1431:
case 2520:
case 692:
case 3961:
case 3472:
case 435:
case 2514:
case 3589:
case 2792:
case 2221:
case 886:
case 1060:
case 2437:
case 2644:
case 2345:
case 351:
case 3873:
case 2260:
case 2609:
case 3478:
case 2798:
case 3008:
case 3920:
case 3334:
case 410:
case 836:
case 2336:
case 3950:
case 233:
case 485:
case 1199:
case 4085:
case 2084:
case 3019:
case 1669:
case 2940:
case 2485:
case 1738:
case 463:
case 2176:
case 217:
case 3086:
case 986:
case 308:
case 878:
case 2952:
case 2507:
case 3105:
case 2057:
case 1213:
case 2139:
case 3914:
case 2989:
case 2195:
case 3531:
case 3169:
case 1880:
case 3786:
case 3277:
case 3597:
case 48:
case 1038:
case 1375:
case 2727:
case 1605:
case 1674:
case 2811:
case 1849:
case 2232:
case 3719:
case 2784:
case 1135:
case 1440:
case 1416:
case 141:
case 1353:
case 1751:
case 1422:
case 2098:
case 2665:
case 1489:
case 1572:
case 2364:
case 1452:
case 3699:
case 2988:
case 497:
case 2686:
case 2138:
case 268:
case 2263:
case 3870:
case 411:
case 177:
case 90:
case 2549:
case 3923:
case 1511:
case 476:
case 536:
case 1641:
case 698:
case 1254:
case 3385:
case 3627:
case 1494:
case 1203:
case 3529:
case 2872:
case 3904:
case 2281:
case 2035:
case 3891:
case 2799:
case 3582:
case 2906:
case 290:
case 3559:
case 3479:
case 3765:
case 975:
case 2151:
case 399:
case 3065:
case 905:
case 1488:
case 2801:
case 950:
case 3464:
case 1615:
case 508:
case 3709:
case 2099:
case 2994:
case 246:
case 1350:
case 1807:
case 1861:
case 406:
case 1157:
case 1795:
case 1039:
case 140:
case 3233:
case 1406:
case 1184:
case 1342:
case 107:
case 2927:
case 4038:
case 749:
case 725:
case 2040:
case 1228:
case 3919:
case 2134:
case 3179:
case 2089:
case 722:
case 509:
case 2502:
case 2957:
case 3986:
case 398:
case 3136:
case 3688:
case 3020:
case 3606:
case 337:
case 3042:
case 2675:
case 2438:
case 1785:
case 3050:
case 2374:
case 1562:
case 1951:
case 3468:
case 2590:
case 4051:
case 3441:
case 3395:
case 2270:
case 699:
case 1427:
case 561:
case 72:
case 1318:
case 2369:
case 3750:
case 1856:
case 1143:
case 1231:
case 837:
case 554:
case 1297:
case 731:
case 3720:
case 269:
case 860:
case 1577:
case 2421:
case 813:
case 3714:
case 2166:
case 216:
case 3881:
case 1679:
case 987:
case 2716:
case 1938:
case 163:
case 2043:
case 3004:
case 2650:
case 3474:
case 2526:
case 2620:
case 1890:
case 2006:
case 200:
case 2476:
case 3524:
case 2185:
case 3832:
case 1734:
case 3023:
case 99:
case 1499:
case 3510:
case 354:
case 4076:
case 2315:
case 1259:
case 3053:
case 361:
case 2830:
case 3918:
case 608:
case 3622:
case 1066:
case 1995:
case 4039:
case 2544:
case 4095:
case 1189:
case 1939:
case 176:
case 2593:
case 730:
case 3753:
case 1152:
case 861:
case 678:
case 197:
case 1976:
case 3321:
case 1678:
case 854:
case 1116:
case 537:
case 1140:
case 560:
case 1122:
case 1308:
case 138:
case 995:
case 2862:
case 3965:
case 636:
case 879:
case 270:
case 2255:
case 2341:
case 2094:
case 3775:
case 3469:
case 992:
case 3122:
case 3347:
case 3308:
case 2079:
case 3678:
case 397:
case 3976:
case 2764:
case 3116:
case 2036:
case 203:
case 376:
case 806:
case 2114:
case 3189:
case 1245:
case 2905:
case 3802:
case 443:
case 1775:
case 1469:
case 2142:
case 2120:
case 3319:
case 109:
case 2357:
case 3386:
case 338:
case 3533:
case 2150:
case 1211:
case 838:
case 1832:
case 944:
case 499:
case 4065:
case 1796:
case 2280:
case 1405:
case 1338:
case 1622:
case 988:
case 876:
case 3066:
case 3229:
case 510:
case 2892:
case 1178:
case 2217:
case 1918:
case 273:
case 1640:
case 161:
case 154:
case 3499:
case 2064:
case 3259:
case 1652:
case 3734:
case 791:
case 3871:
case 2398:
case 1023:
case 4047:
case 4008:
case 382:
case 3577:
case 3457:
case 2104:
case 746:
case 2915:
case 2486:
case 2532:
case 3427:
case 385:
case 3856:
case 3318:
case 2824:
case 3085:
case 3484:
case 2419:
case 506:
case 1441:
case 607:
case 88:
case 2810:
case 3188:
case 2846:
case 2123:
case 640:
case 2803:
case 1714:
case 1272:
case 1881:
case 2408:
case 2447:
case 3530:
case 2078:
case 3309:
case 408:
case 2778:
case 2399:
case 478:
case 113:
case 3664:
case 1688:
case 1415:
case 1014:
case 3365:
case 3258:
case 696:
case 2560:
case 1201:
case 768:
case 2666:
case 2968:
case 1919:
case 1179:
case 3228:
case 624:
case 3562:
case 810:
case 576:
case 2196:
case 436:
case 1643:
case 885:
case 1050:
case 511:
case 3921:
case 3194:
case 1042:
case 1513:
case 2207:
case 2248:
case 882:
case 2261:
case 160:
case 2108:
case 2322:
case 4075:
case 2858:
case 2340:
case 2316:
case 3545:
case 769:
case 2453:
case 3488:
case 2352:
case 1709:
case 22:
case 199:
case 610:
case 539:
case 1065:
case 2389:
case 3076:
case 340:
case 3406:
case 3320:
case 4023:
case 771:
case 2074:
case 3795:
case 3157:
case 716:
case 2638:
case 2936:
case 4053:
case 3807:
case 293:
case 1718:
case 3443:
case 2475:
case 3861:
case 2897:
case 3254:
case 1018:
case 1385:
case 2069:
case 1627:
case 3494:
case 1953:
case 3641:
case 2831:
case 1684:
case 396:
case 3966:
case 249:
case 1923:
case 840:
case 3224:
case 225:
case 3511:
case 3287:
case 807:
case 377:
case 68:
case 1837:
case 3246:
case 409:
case 324:
case 3210:
case 2621:
case 2244:
case 1115:
case 143:
case 3203:
case 1975:
case 3674:
case 75:
case 2450:
case 3304:
case 2290:
case 3375:
case 697:
case 178:
case 1786:
case 1277:
case 2118:
case 2442:
case 267:
case 498:
case 1597:
case 413:
case 2978:
case 4014:
case 230:
case 839:
case 1531:
case 2015:
case 3452:
case 2388:
case 437:
case 4042:
case 3292:
case 1708:
case 1747:
case 2414:
case 460:
case 1366:
case 2537:
case 2859:
case 3422:
case 3416:
case 3985:
case 2271:
case 2882:
case 3440:
case 3353:
case 770:
case 2591:
case 1950:
case 3199:
case 2165:
case 540:
case 1334:
case 1920:
case 1873:
case 3021:
case 2202:
case 1478:
case 3213:
case 1174:
case 1914:
case 606:
case 108:
case 1855:
case 3669:
case 2394:
case 2068:
case 1825:
case 1687:
case 228:
case 2286:
case 2777:
case 1325:
case 1624:
case 2894:
case 3284:
case 2967:
case 1133:
case 389:
case 2062:
case 941:
case 1654:
case 814:
case 1540:
case 1522:
case 1834:
case 1589:
case 2730:
case 1907:
case 2247:
case 1961:
case 1472:
case 3458:
case 4061:
case 4048:
case 3298:
case 4007:
case 3853:
case 1702:
case 2359:
case 3760:
case 1866:
case 3823:
case 3428:
case 3970:
case 1467:
case 280:
case 2806:
case 3937:
case 4083:
case 644:
case 215:
case 2156:
case 2585:
case 2407:
case 3875:
case 2:
case 2126:
case 907:
case 2209:
case 1949:
case 3235:
case 3564:
case 1130:
case 256:
case 758:
case 2566:
case 1337:
case 3192:
case 514:
case 423:
case 102:
case 3662:
case 1026:
case 1177:
case 1269:
case 2331:
case 2190:
case 150:
case 2397:
case 1056:
case 1613:
case 2733:
case 3850:
case 3307:
case 924:
case 1756:
case 495:
case 3100:
case 3763:
case 1162:
case 4017:
case 172:
case 2632:
case 1712:
case 1205:
case 2102:
case 3781:
case 2417:
case 589:
case 996:
case 2852:
case 635:
case 3536:
case 3383:
case 281:
case 3482:
case 3299:
case 2534:
case 1692:
case 977:
case 3925:
case 632:
case 3579:
case 2822:
case 2250:
case 3568:
case 1584:
case 4071:
case 1876:
case 187:
case 1061:
case 544:
case 1048:
case 1007:
case 835:
case 2242:
case 1477:
case 3611:
case 982:
case 1682:
case 1430:
case 3492:
case 3865:
case 4090:
case 3737:
case 1083:
case 2899:
case 910:
case 2001:
case 1629:
case 727:
case 3809:
case 2835:
case 3182:
case 3645:
case 2673:
case 3932:
case 3344:
case 3037:
case 2402:
case 2117:
case 83:
case 3515:
case 520:
case 2310:
case 4002:
case 2387:
case 653:
case 464:
case 1707:
case 2324:
case 2180:
case 3356:
case 335:
case 3312:
case 3326:
case 2354:
case 98:
case 1111:
case 3400:
case 1628:
case 2253:
case 2898:
case 1017:
case 472:
case 532:
case 3667:
case 1172:
case 3773:
case 2745:
case 475:
case 535:
case 24:
case 1956:
case 195:
case 844:
case 1433:
case 1838:
case 40:
case 2595:
case 4093:
case 3981:
case 3390:
case 1080:
case 888:
case 976:
case 2161:
case 2670:
case 2412:
case 388:
case 3574:
case 3454:
case 242:
case 76:
case 2539:
case 3294:
case 3025:
case 3819:
case 1631:
case 3487:
case 2711:
case 820:
case 245:
case 257:
case 2456:
case 2576:
case 450:
case 4056:
case 2933:
case 1101:
case 1599:
case 344:
case 2045:
case 3158:
case 123:
case 1236:
case 2444:
case 2637:
case 402:
case 3808:
case 1717:
case 3847:
case 3801:
case 3735:
case 2464:
case 2698:
case 3151:
case 890:
case 1423:
case 299:
case 2996:
case 1828:
case 1108:
case 3466:
case 782:
case 517:
case 131:
case 1340:
case 1573:
case 3994:
case 3121:
case 616:
case 1936:
case 2718:
case 193:
case 1638:
case 1404:
case 533:
case 868:
case 2233:
case 1979:
case 904:
case 763:
case 2168:
case 2657:
case 78:
case 3549:
case 2923:
case 149:
case 125:
case 1256:
case 974:
case 4079:
case 1964:
case 3138:
case 368:
case 3263:
case 2385:
case 1226:
case 403:
case 3580:
case 1212:
case 3619:
case 2436:
case 2529:
case 3872:
case 3281:
case 2975:
case 2837:
case 3906:
case 390:
case 3647:
case 3434:
case 3035:
case 959:
case 2009:
case 927:
case 3799:
case 1442:
case 776:
case 1978:
case 3757:
case 1306:
case 130:
case 466:
case 797:
case 1741:
case 711:
case 3784:
case 2719:
case 1768:
case 891:
case 1290:
case 817:
case 3727:
case 1537:
case 2366:
case 1882:
case 833:
case 1271:
case 1109:
case 3364:
case 1015:
case 2699:
case 3098:
case 2708:
case 2230:
case 965:
case 3798:
case 2008:
case 2942:
case 2635:
case 2873:
case 3845:
case 2478:
case 2558:
case 448:
case 3583:
case 3336:
case 333:
case 647:
case 2528:
case 3916:
case 1394:
case 484:
case 317:
case 546:
case 1695:
case 1041:
case 2825:
case 3057:
case 2174:
case 4078:
case 2086:
case 3952:
case 3548:
case 2753:
case 1036:
case 3273:
case 1114:
case 2245:
case 1974:
case 1905:
case 3593:
case 994:
case 2723:
case 425:
case 2321:
case 1409:
case 2965:
case 209:
case 2096:
case 800:
case 847:
case 3999:
case 3225:
case 3094:
case 2775:
case 501:
case 1685:
case 2469:
case 926:
case 3255:
case 1384:
case 852:
case 3439:
case 1280:
case 3526:
case 3512:
case 3794:
case 3043:
case 2004:
case 2338:
case 2211:
case 355:
case 2832:
case 3185:
case 1249:
case 1563:
case 2587:
case 516:
case 300:
case 2510:
case 617:
case 2652:
case 1064:
case 2689:
case 3614:
case 1465:
case 569:
case 1779:
case 2023:
case 2053:
case 493:
case 2178:
case 261:
case 3830:
case 2918:
case 2640:
case 1969:
case 2750:
case 3270:
case 2395:
case 1854:
case 3696:
case 1175:
case 148:
case 2592:
case 2714:
case 1634:
case 1408:
case 2881:
case 3421:
case 1078:
case 1153:
case 555:
case 547:
case 3237:
case 3716:
case 1810:
case 2164:
case 4041:
case 552:
case 4068:
case 3451:
case 707:
case 3984:
case 3134:
case 2201:
case 1941:
case 777:
case 2267:
case 3016:
case 3040:
case 1399:
case 2415:
case 213:
case 2136:
case 2014:
case 3089:
case 816:
case 1560:
case 4015:
case 1207:
case 2947:
case 869:
case 260:
case 1261:
case 2339:
case 2500:
case 690:
case 1196:
case 3374:
case 3833:
case 3333:
case 4030:
case 2061:
case 3797:
case 3155:
case 2557:
case 3649:
case 3874:
case 1250:
case 3519:
case 2527:
case 604:
case 1962:
case 1551:
case 480:
case 3617:
case 1899:
case 2629:
case 1001:
case 1772:
case 3173:
case 2430:
case 1521:
case 4077:
case 412:
case 1977:
case 428:
case 1117:
case 1310:
case 134:
case 2783:
case 1673:
case 1835:
case 1303:
case 2990:
case 2381:
case 674:
case 3285:
case 901:
case 1625:
case 2363:
case 753:
case 3097:
case 2707:
case 2535:
case 789:
case 3924:
case 2658:
case 4033:
case 3330:
case 2956:
case 3082:
case 3059:
case 3987:
case 3137:
case 2628:
case 1898:
case 1253:
case 3683:
case 2172:
case 3815:
case 1745:
case 3266:
case 2912:
case 326:
case 3903:
case 683:
case 2080:
case 3607:
case 95:
case 3377:
case 1011:
case 2749:
case 1711:
case 2631:
case 129:
case 1313:
case 1576:
case 1456:
case 66:
case 1670:
case 1161:
case 1107:
case 1412:
case 1148:
case 1426:
case 3362:
case 1857:
case 952:
case 223:
case 2236:
case 2717:
case 1637:
case 2360:
case 2851:
case 947:
case 955:
case 2279:
case 1183:
case 1933:
case 2167:
case 2101:
case 2599:
case 3612:
case 1901:
case 1219:
case 2268:
case 3550:
case 2983:
case 2241:
case 3000:
case 2654:
case 2325:
case 128:
case 1286:
case 3656:
case 4072:
case 626:
case 3958:
case 3542:
case 3013:
case 2589:
case 3514:
case 3792:
case 383:
case 2948:
case 3836:
case 1730:
case 2961:
case 2552:
case 2472:
case 1247:
case 694:
case 2373:
case 3491:
case 3251:
case 251:
case 11:
case 3879:
case 2522:
case 720:
case 2771:
case 3693:
case 1888:
case 1329:
case 2467:
case 1483:
case 883:
case 1030:
case 3997:
case 3931:
case 3181:
case 865:
case 1448:
case 1972:
case 1461:
case 504:
case 1843:
case 3713:
case 3311:
case 1077:
case 3700:
case 744:
case 3238:
case 4001:
case 1585:
case 2980:
case 3553:
case 2445:
case 442:
case 1566:
case 1911:
case 3602:
case 1171:
case 304:
case 445:
case 457:
case 3372:
case 2588:
case 1190:
case 827:
case 1331:
case 3959:
case 859:
case 250:
case 2056:
case 1397:
case 721:
case 3982:
case 2885:
case 3132:
case 1733:
case 2613:
case 3455:
case 3575:
case 2012:
case 2543:
case 3504:
case 946:
case 2917:
case 2600:
case 73:
case 1218:
case 202:
case 2177:
case 3754:
case 2726:
case 2594:
case 3239:
case 1632:
case 2205:
case 2274:
case 44:
case 3724:
case 990:
case 3787:
case 3276:
case 2411:
case 359:
case 3596:
case 2162:
case 374:
case 804:
case 732:
case 181:
case 2692:
case 562:
case 1417:
case 3160:
case 1328:
case 3671:
case 1889:
case 2744:
case 3301:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1755763201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,];
var gg_b = "1755763201/";

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
