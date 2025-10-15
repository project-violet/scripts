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
case 2401:
case 1293:
case 1273:
case 4082:
case 1725:
case 2127:
case 1380:
case 1462:
case 2925:
case 176:
case 2649:
case 677:
case 2444:
case 2099:
case 1456:
case 1340:
case 2079:
case 565:
case 3490:
case 1355:
case 3549:
case 3068:
case 3470:
case 1851:
case 2428:
case 3714:
case 2730:
case 1631:
case 1860:
case 2990:
case 502:
case 2004:
case 3103:
case 1039:
case 2970:
case 2162:
case 3334:
case 3249:
case 3944:
case 2081:
case 1790:
case 1414:
case 1770:
case 2691:
case 2671:
case 325:
case 1903:
case 1128:
case 3289:
case 3901:
case 2156:
case 3591:
case 1619:
case 693:
case 3571:
case 2703:
case 189:
case 2065:
case 3484:
case 2271:
case 1403:
case 1531:
case 1022:
case 4007:
case 485:
case 396:
case 820:
case 2130:
case 3114:
case 2013:
case 2892:
case 555:
case 3925:
case 2357:
case 1374:
case 2068:
case 1394:
case 2853:
case 3200:
case 401:
case 2727:
case 1914:
case 1219:
case 1125:
case 3730:
case 1956:
case 1309:
case 1430:
case 3162:
case 1083:
case 3970:
case 3500:
case 3990:
case 1519:
case 225:
case 3671:
case 2756:
case 1673:
case 3310:
case 80:
case 1693:
case 976:
case 1652:
case 246:
case 3156:
case 1962:
case 2984:
case 1170:
case 850:
case 410:
case 2425:
case 1358:
case 1701:
case 2762:
case 525:
case 3703:
case 484:
case 39:
case 2318:
case 1778:
case 3839:
case 2883:
case 2135:
case 258:
case 903:
case 2937:
case 3264:
case 3920:
case 2508:
case 3659:
case 2843:
case 2475:
case 11:
case 2495:
case 368:
case 730:
case 3608:
case 2396:
case 3512:
case 309:
case 307:
case 2916:
case 2387:
case 961:
case 254:
case 751:
case 1120:
case 892:
case 558:
case 2363:
case 2822:
case 3186:
case 1435:
case 1946:
case 2259:
case 1388:
case 71:
case 1813:
case 721:
case 224:
case 3811:
case 3138:
case 3051:
case 2797:
case 1175:
case 3146:
case 1053:
case 2786:
case 1977:
case 1324:
case 524:
case 3060:
case 1507:
case 3564:
case 4031:
case 2208:
case 2605:
case 761:
case 3867:
case 951:
case 1804:
case 1720:
case 1881:
case 29:
case 4066:
case 1385:
case 930:
case 1497:
case 3998:
case 507:
case 2920:
case 1282:
case 17:
case 2264:
case 2969:
case 3347:
case 4093:
case 2608:
case 4052:
case 59:
case 2512:
case 1345:
case 3559:
case 1841:
case 268:
case 2454:
case 1446:
case 564:
case 1198:
case 2735:
case 1523:
case 1178:
case 1137:
case 1361:
case 3032:
case 3521:
case 1607:
case 3664:
case 2186:
case 1795:
case 1223:
case 2146:
case 1154:
case 3738:
case 2051:
case 77:
case 91:
case 3777:
case 3469:
case 3605:
case 161:
case 3208:
case 2029:
case 328:
case 68:
case 3786:
case 3420:
case 3112:
case 3708:
case 541:
case 3351:
case 1616:
case 2894:
case 1017:
case 748:
case 1353:
case 3286:
case 518:
case 3360:
case 3635:
case 2407:
case 1520:
case 971:
case 214:
case 1569:
case 1048:
case 3297:
case 3329:
case 3277:
case 72:
case 2535:
case 1912:
case 3246:
case 1723:
case 1678:
case 241:
case 744:
case 1637:
case 884:
case 836:
case 2108:
case 2923:
case 1392:
case 100:
case 4090:
case 3015:
case 3442:
case 1857:
case 1905:
case 3546:
case 1459:
case 2697:
case 2705:
case 2942:
case 2858:
case 1421:
case 2332:
case 1826:
case 3164:
case 2063:
case 652:
case 998:
case 2686:
case 3423:
case 144:
case 3002:
case 1834:
case 1782:
case 994:
case 3538:
case 1220:
case 3597:
case 2982:
case 1269:
case 3907:
case 75:
case 2286:
case 605:
case 2840:
case 574:
case 278:
case 3894:
case 3159:
case 3874:
case 2708:
case 2277:
case 198:
case 944:
case 314:
case 4001:
case 1123:
case 1908:
case 2635:
case 1598:
case 2482:
case 92:
case 2721:
case 1405:
case 1669:
case 274:
case 2246:
case 1306:
case 2880:
case 3535:
case 2442:
case 2015:
case 4044:
case 681:
case 3076:
case 3677:
case 95:
case 3697:
case 1412:
case 1045:
case 291:
case 733:
case 2002:
case 3087:
case 1182:
case 1216:
case 3332:
case 239:
case 3942:
case 1061:
case 3705:
case 171:
case 798:
case 3018:
case 1707:
case 662:
case 591:
case 3809:
case 1085:
case 2105:
case 2577:
case 537:
case 1810:
case 1237:
case 1675:
case 3646:
case 2538:
case 1298:
case 2845:
case 2473:
case 3614:
case 2931:
case 3149:
case 1201:
case 604:
case 2850:
case 232:
case 853:
case 3627:
case 315:
case 1802:
case 1731:
case 2861:
case 2789:
case 3733:
case 2630:
case 2365:
case 945:
case 447:
case 8:
case 2527:
case 1400:
case 449:
case 1625:
case 1228:
case 2133:
case 3530:
case 2010:
case 2749:
case 2452:
case 3171:
case 2227:
case 1719:
case 3191:
case 1544:
case 795:
case 4016:
case 1040:
case 1528:
case 3817:
case 3230:
case 1193:
case 1055:
case 3848:
case 3952:
case 1166:
case 3824:
case 1971:
case 4078:
case 1501:
case 1433:
case 1584:
case 2562:
case 3973:
case 1311:
case 380:
case 1670:
case 3313:
case 3888:
case 870:
case 1491:
case 2203:
case 3262:
case 3850:
case 1471:
case 1876:
case 3931:
case 657:
case 2149:
case 2614:
case 3473:
case 659:
case 3845:
case 3365:
case 1058:
case 2733:
case 3861:
case 1887:
case 1863:
case 2627:
case 215:
case 1009:
case 3133:
case 1290:
case 420:
case 3885:
case 2034:
case 1270:
case 3381:
case 885:
case 1367:
case 3304:
case 375:
case 473:
case 515:
case 2419:
case 3010:
case 4095:
case 2368:
case 1449:
case 2817:
case 810:
case 497:
case 1074:
case 3399:
case 3379:
case 3603:
case 2824:
case 2700:
case 431:
case 1684:
case 145:
case 3214:
case 2993:
case 2503:
case 1766:
case 2431:
case 4069:
case 126:
case 627:
case 2836:
case 2966:
case 756:
case 2888:
case 1225:
case 1628:
case 2313:
case 2656:
case 995:
case 3791:
case 280:
case 3771:
case 2064:
case 3424:
case 1947:
case 3448:
case 1337:
case 529:
case 1145:
case 2551:
case 1672:
case 1692:
case 2747:
case 3651:
case 2796:
case 770:
case 910:
case 227:
case 1987:
case 1316:
case 2776:
case 3488:
case 3147:
case 1042:
case 2763:
case 3660:
case 3335:
case 3702:
case 3118:
case 1976:
case 3436:
case 2461:
case 1736:
case 257:
case 3532:
case 290:
case 123:
case 985:
case 2988:
case 1206:
case 753:
case 963:
case 615:
case 3715:
case 2445:
case 2873:
case 3059:
case 1788:
case 2893:
case 3819:
case 2260:
case 2338:
case 2397:
case 559:
case 367:
case 369:
case 2632:
case 1724:
case 7:
case 1785:
case 0:
case 1369:
case 2448:
case 3102:
case 3718:
case 2424:
case 1606:
case 3560:
case 2163:
case 3064:
case 185:
case 1553:
case 13:
case 2176:
case 163:
case 1849:
case 3551:
case 2196:
case 970:
case 1902:
case 329:
case 1592:
case 3776:
case 2488:
case 2651:
case 416:
case 2436:
case 2950:
case 2702:
case 3763:
case 3988:
case 508:
case 632:
case 4067:
case 2532:
case 390:
case 1292:
case 357:
case 826:
case 4083:
case 1476:
case 1117:
case 2715:
case 1891:
case 3936:
case 1395:
case 1871:
case 3450:
case 3346:
case 3377:
case 3229:
case 4043:
case 3397:
case 3115:
case 504:
case 3852:
case 3948:
case 953:
case 1447:
case 1418:
case 1253:
case 785:
case 1136:
case 267:
case 845:
case 1426:
case 691:
case 184:
case 1325:
case 2681:
case 2213:
case 3565:
case 1174:
case 1859:
case 639:
case 637:
case 2071:
case 136:
case 352:
case 3757:
case 1543:
case 41:
case 1808:
case 1755:
case 262:
case 3327:
case 3994:
case 2955:
case 3504:
case 2268:
case 2330:
case 1434:
case 2665:
case 2409:
case 82:
case 1158:
case 451:
case 2126:
case 2807:
case 1267:
case 3599:
case 3440:
case 4092:
case 3613:
case 581:
case 3281:
case 848:
case 2494:
case 2568:
case 2679:
case 505:
case 3842:
case 2699:
case 3958:
case 1457:
case 4053:
case 3110:
case 784:
case 2134:
case 844:
case 1109:
case 3362:
case 3480:
case 1031:
case 322:
case 1243:
case 1522:
case 3213:
case 1066:
case 3604:
case 1211:
case 1683:
case 1140:
case 894:
case 833:
case 2757:
case 3091:
case 2541:
case 3980:
case 47:
case 362:
case 1052:
case 482:
case 1774:
case 1410:
case 3409:
case 3268:
case 2581:
case 3955:
case 2000:
case 2299:
case 898:
case 2327:
case 1622:
case 3807:
case 2882:
case 3126:
case 1864:
case 1709:
case 4006:
case 3494:
case 1328:
case 3474:
case 3710:
case 2356:
case 1344:
case 1239:
case 1934:
case 2599:
case 403:
case 614:
case 2265:
case 988:
case 3513:
case 1926:
case 2958:
case 2842:
case 3303:
case 222:
case 2362:
case 461:
case 1384:
case 871:
case 3134:
case 2241:
case 1301:
case 3089:
case 1965:
case 2226:
case 706:
case 3943:
case 1331:
case 1167:
case 2003:
case 3062:
case 58:
case 1835:
case 2781:
case 3837:
case 2869:
case 1739:
case 3878:
case 572:
case 2820:
case 2704:
case 1143:
case 28:
case 400:
case 1090:
case 1904:
case 1468:
case 3141:
case 1070:
case 942:
case 1574:
case 3768:
case 2113:
case 2779:
case 664:
case 1319:
case 3300:
case 3439:
case 3626:
case 2483:
case 444:
case 1999:
case 2534:
case 851:
case 792:
case 2526:
case 411:
case 1025:
case 42:
case 3922:
case 2168:
case 607:
case 3713:
case 2610:
case 2443:
case 2391:
case 1711:
case 3854:
case 3179:
case 1674:
case 882:
case 1694:
case 3741:
case 3226:
case 1743:
case 498:
case 2062:
case 1580:
case 1139:
case 3422:
case 2181:
case 2333:
case 3765:
case 1001:
case 2898:
case 335:
case 64:
case 3820:
case 2878:
case 1767:
case 3869:
case 2837:
case 2165:
case 1028:
case 3234:
case 2967:
case 3939:
case 906:
case 2657:
case 1499:
case 1540:
case 1111:
case 4045:
case 1897:
case 4050:
case 1877:
case 1658:
case 3534:
case 4061:
case 471:
case 1968:
case 3467:
case 658:
case 1465:
case 3257:
case 2179:
case 654:
case 3895:
case 3371:
case 3875:
case 3443:
case 3391:
case 803:
case 3168:
case 1441:
case 1753:
case 113:
case 2676:
case 950:
case 2097:
case 2696:
case 3729:
case 931:
case 625:
case 1827:
case 3760:
case 2129:
case 149:
case 1323:
case 334:
case 3563:
case 2160:
case 2972:
case 386:
case 495:
case 2046:
case 3576:
case 90:
case 2312:
case 2151:
case 466:
case 3906:
case 876:
case 1545:
case 1617:
case 243:
case 3492:
case 4040:
case 517:
case 3472:
case 1261:
case 2202:
case 3287:
case 1932:
case 3263:
case 747:
case 749:
case 3035:
case 2406:
case 2801:
case 2732:
case 3276:
case 3296:
case 377:
case 1098:
case 1429:
case 1636:
case 3890:
case 1451:
case 2828:
case 3870:
case 1856:
case 713:
case 973:
case 3453:
case 2308:
case 1172:
case 1645:
case 1960:
case 3077:
case 238:
case 1650:
case 593:
case 1929:
case 534:
case 586:
case 3663:
case 2760:
case 1951:
case 4058:
case 3687:
case 3086:
case 1217:
case 3972:
case 1706:
case 2563:
case 3160:
case 731:
case 234:
case 3618:
case 293:
case 1288:
case 2906:
case 960:
case 2359:
case 2596:
case 3312:
case 799:
case 3151:
case 797:
case 1153:
case 286:
case 913:
case 197:
case 2263:
case 3515:
case 4094:
case 2472:
case 2492:
case 1588:
case 343:
case 131:
case 683:
case 1536:
case 2296:
case 279:
case 3801:
case 3406:
case 1548:
case 2132:
case 319:
case 1307:
case 3364:
case 947:
case 3844:
case 2615:
case 577:
case 3828:
case 3804:
case 2778:
case 2623:
case 521:
case 3881:
case 3769:
case 2737:
case 835:
case 1978:
case 3477:
case 3497:
case 4071:
case 1508:
case 1937:
case 37:
case 3282:
case 1347:
case 2207:
case 3841:
case 1376:
case 2716:
case 1396:
case 3935:
case 1559:
case 382:
case 1843:
case 1495:
case 3178:
case 2120:
case 1032:
case 1521:
case 2169:
case 3361:
case 2336:
case 1259:
case 2946:
case 251:
case 1822:
case 3006:
case 1664:
case 3542:
case 124:
case 230:
case 2754:
case 2092:
case 2813:
case 2175:
case 2053:
case 2868:
case 758:
case 2986:
case 1797:
case 2938:
case 361:
case 1605:
case 1469:
case 530:
case 2324:
case 2977:
case 1420:
case 1786:
case 481:
case 3582:
case 2881:
case 3798:
case 2486:
case 2804:
case 2720:
case 3778:
case 3207:
case 1264:
case 1969:
case 27:
case 2438:
case 2282:
case 2497:
case 812:
case 2350:
case 2446:
case 1454:
case 168:
case 282:
case 321:
case 1205:
case 1512:
case 2137:
case 4000:
case 928:
case 2865:
case 57:
case 3120:
case 2523:
case 3682:
case 2607:
case 561:
case 3813:
case 692:
case 3072:
case 203:
case 1416:
case 3388:
case 3092:
case 768:
case 2223:
case 2542:
case 3986:
case 1146:
case 3053:
case 3642:
case 3175:
case 2899:
case 2582:
case 3997:
case 1498:
case 79:
case 3977:
case 3938:
case 1437:
case 1029:
case 697:
case 2462:
case 2380:
case 1127:
case 1533:
case 2293:
case 1401:
case 4064:
case 631:
case 183:
case 1114:
case 946:
case 2851:
case 1428:
case 3927:
case 429:
case 3914:
case 3219:
case 2860:
case 2252:
case 1730:
case 3309:
case 3430:
case 1081:
case 2039:
case 3067:
case 459:
case 3666:
case 1500:
case 490:
case 1004:
case 819:
case 457:
case 1162:
case 817:
case 3083:
case 3744:
case 4012:
case 2552:
case 3693:
case 1310:
case 587:
case 3231:
case 1156:
case 102:
case 843:
case 3043:
case 620:
case 2903:
case 1041:
case 2593:
case 3190:
case 3962:
case 2128:
case 3832:
case 765:
case 673:
case 287:
case 3784:
case 3725:
case 1130:
case 893:
case 834:
case 3462:
case 3380:
case 1271:
case 2531:
case 2403:
case 376:
case 3266:
case 1013:
case 746:
case 1892:
case 216:
case 3930:
case 3456:
case 3851:
case 1714:
case 902:
case 2927:
case 838:
case 2394:
case 1549:
case 3355:
case 725:
case 3252:
case 155:
case 660:
case 1727:
case 3427:
case 3184:
case 3039:
case 1103:
case 996:
case 4021:
case 613:
case 1944:
case 2309:
case 404:
case 2728:
case 2673:
case 3770:
case 2693:
case 3790:
case 125:
case 983:
case 4059:
case 3573:
case 3128:
case 408:
case 3593:
case 3903:
case 647:
case 146:
case 1571:
case 4008:
case 2652:
case 1901:
case 1591:
case 2231:
case 3566:
case 1600:
case 469:
case 1425:
case 2701:
case 356:
case 4077:
case 3491:
case 3896:
case 3876:
case 1493:
case 3525:
case 1789:
case 1861:
case 3058:
case 4086:
case 566:
case 2731:
case 2802:
case 3887:
case 1381:
case 2228:
case 3009:
case 1527:
case 2339:
case 2949:
case 2244:
case 3818:
case 266:
case 3847:
case 2528:
case 2055:
case 3590:
case 3094:
case 3900:
case 3449:
case 1379:
case 3752:
case 443:
case 2544:
case 3684:
case 63:
case 663:
case 1214:
case 1919:
case 915:
case 3601:
case 326:
case 2080:
case 2584:
case 859:
case 890:
case 3322:
case 419:
case 3489:
case 2433:
case 2501:
case 2991:
case 3225:
case 732:
case 3773:
case 3628:
case 601:
case 3793:
case 2152:
case 3119:
case 1791:
case 840:
case 2876:
case 3201:
case 623:
case 780:
case 1614:
case 2896:
case 2343:
case 1203:
case 2933:
case 3284:
case 3989:
case 2471:
case 256:
case 3731:
case 3802:
case 670:
case 2525:
case 3949:
case 556:
case 2290:
case 3625:
case 3228:
case 366:
case 1419:
case 1191:
case 526:
case 1171:
case 2752:
case 3719:
case 2094:
case 2900:
case 1817:
case 2449:
case 3055:
case 2590:
case 3193:
case 2074:
case 932:
case 2570:
case 3528:
case 808:
case 1848:
case 4035:
case 869:
case 3166:
case 479:
case 867:
case 245:
case 1662:
case 3433:
case 3501:
case 2489:
case 653:
case 1836:
case 1503:
case 1993:
case 3584:
case 226:
case 1973:
case 1057:
case 2644:
case 1656:
case 2119:
case 3152:
case 2793:
case 2628:
case 2773:
case 2225:
case 1874:
case 472:
case 2616:
case 1894:
case 2048:
case 2569:
case 4003:
case 3908:
case 3464:
case 3598:
case 2024:
case 3669:
case 141:
case 3959:
case 3254:
case 2295:
case 2912:
case 2678:
case 2275:
case 118:
case 36:
case 200:
case 1712:
case 48:
case 2088:
case 2459:
case 511:
case 1677:
case 718:
case 1076:
case 978:
case 1638:
case 3554:
case 52:
case 3050:
case 2742:
case 2575:
case 881:
case 1063:
case 2826:
case 3182:
case 1686:
case 371:
case 3216:
case 1942:
case 1764:
case 3707:
case 1018:
case 211:
case 714:
case 805:
case 1809:
case 3085:
case 3810:
case 2408:
case 1982:
case 248:
case 3298:
case 2654:
case 3675:
case 1855:
case 1112:
case 1286:
case 178:
case 3353:
case 3520:
case 3024:
case 1238:
case 2464:
case 56:
case 1635:
case 1277:
case 1329:
case 533:
case 1297:
case 3048:
case 4062:
case 298:
case 737:
case 3723:
case 3295:
case 1880:
case 1246:
case 2306:
case 2669:
case 2405:
case 3036:
case 3088:
case 233:
case 852:
case 412:
case 2516:
case 1759:
case 3857:
case 684:
case 1546:
case 191:
case 3905:
case 2554:
case 2412:
case 2216:
case 4027:
case 914:
case 137:
case 2061:
case 1423:
case 344:
case 1164:
case 3826:
case 3107:
case 2085:
case 941:
case 3782:
case 3220:
case 2142:
case 2695:
case 918:
case 1577:
case 571:
case 2325:
case 1458:
case 3957:
case 2426:
case 3211:
case 3683:
case 2780:
case 3066:
case 284:
case 781:
case 2639:
case 1604:
case 2543:
case 1091:
case 1980:
case 818:
case 2859:
case 3812:
case 458:
case 3155:
case 671:
case 2194:
case 3052:
case 2019:
case 162:
case 584:
case 3643:
case 2808:
case 3774:
case 3794:
case 2755:
case 922:
case 1409:
case 454:
case 1268:
case 3180:
case 4032:
case 3539:
case 2567:
case 3864:
case 3622:
case 2158:
case 952:
case 762:
case 1710:
case 1474:
case 2370:
case 424:
case 3344:
case 2267:
case 3239:
case 44:
case 3926:
case 3511:
case 2457:
case 1699:
case 66:
case 3805:
case 428:
case 1089:
case 3301:
case 3758:
case 1134:
case 2066:
case 3426:
case 2683:
case 3780:
case 874:
case 3821:
case 2957:
case 722:
case 1541:
case 3194:
case 2155:
case 3174:
case 3859:
case 2073:
case 1757:
case 2140:
case 3543:
case 3222:
case 611:
case 3755:
case 878:
case 1314:
case 62:
case 3019:
case 2052:
case 3567:
case 2539:
case 409:
case 981:
case 1299:
case 1000:
case 1504:
case 407:
case 3583:
case 1581:
case 3158:
case 2622:
case 3910:
case 1599:
case 3267:
case 2239:
case 2934:
case 1204:
case 1909:
case 1440:
case 3283:
case 1281:
case 2328:
case 1668:
case 891:
case 2301:
case 1241:
case 2758:
case 4060:
case 122:
case 3243:
case 837:
case 3369:
case 875:
case 2161:
case 465:
case 904:
case 2947:
case 3785:
case 1529:
case 553:
case 2398:
case 1560:
case 2082:
case 385:
case 1747:
case 483:
case 1551:
case 2145:
case 3849:
case 363:
case 2415:
case 4079:
case 127:
case 1796:
case 3902:
case 3592:
case 3761:
case 301:
case 2185:
case 2506:
case 790:
case 4081:
case 2402:
case 1866:
case 656:
case 157:
case 1461:
case 159:
case 223:
case 4004:
case 1893:
case 2788:
case 2354:
case 1450:
case 3375:
case 727:
case 270:
case 3891:
case 1397:
case 1229:
case 1924:
case 1377:
case 2717:
case 402:
case 1260:
case 3447:
case 1948:
case 4041:
case 310:
case 1115:
case 3253:
case 570:
case 2800:
case 1917:
case 2748:
case 1632:
case 1485:
case 1187:
case 3082:
case 769:
case 2007:
case 1163:
case 990:
case 2606:
case 3161:
case 3947:
case 3:
case 2849:
case 708:
case 3145:
case 1488:
case 1232:
case 353:
case 2572:
case 3963:
case 2745:
case 3042:
case 3415:
case 140:
case 4068:
case 1961:
case 1147:
case 3653:
case 1831:
case 1702:
case 1660:
case 1945:
case 3996:
case 1335:
case 1629:
case 563:
case 815:
case 2761:
case 455:
case 201:
case 2292:
case 1532:
case 1021:
case 323:
case 2148:
case 3023:
case 3402:
case 104:
case 2463:
case 1715:
case 3206:
case 2871:
case 740:
case 425:
case 2496:
case 210:
case 929:
case 2447:
case 446:
case 1008:
case 167:
case 2136:
case 3724:
case 3800:
case 549:
case 3192:
case 1077:
case 213:
case 547:
case 1696:
case 3645:
case 3929:
case 1038:
case 717:
case 1086:
case 719:
case 3830:
case 1953:
case 3661:
case 320:
case 1502:
case 1160:
case 3706:
case 513:
case 249:
case 1129:
case 3685:
case 2561:
case 2545:
case 3236:
case 1312:
case 883:
case 3153:
case 2550:
case 4010:
case 1046:
case 1647:
case 2054:
case 743:
case 2932:
case 399:
case 1202:
case 2342:
case 143:
case 938:
case 2261:
case 1801:
case 1305:
case 2245:
case 2648:
case 2624:
case 560:
case 2250:
case 1884:
case 2862:
case 2429:
case 119:
case 3069:
case 934:
case 3020:
case 2098:
case 3307:
case 1364:
case 2382:
case 260:
case 30:
case 3517:
case 2688:
case 3753:
case 2650:
case 138:
case 943:
case 520:
case 2960:
case 1751:
case 2172:
case 3814:
case 1308:
case 313:
case 2661:
case 415:
case 4026:
case 1729:
case 2217:
case 1518:
case 347:
case 3561:
case 2685:
case 1563:
case 2706:
case 779:
case 4034:
case 3323:
case 193:
case 134:
case 777:
case 2153:
case 3550:
case 3772:
case 2236:
case 1359:
case 1906:
case 273:
case 3261:
case 3016:
case 786:
case 2588:
case 1492:
case 297:
case 1287:
case 3250:
case 3862:
case 1035:
case 1296:
case 3648:
case 231:
case 3245:
case 734:
case 177:
case 179:
case 3460:
case 597:
case 3098:
case 2020:
case 2069:
case 3429:
case 1132:
case 1870:
case 825:
case 4057:
case 738:
case 20:
case 1453:
case 360:
case 3856:
case 2655:
case 3694:
case 3743:
case 2965:
case 1557:
case 1226:
case 2941:
case 1003:
case 2331:
case 2183:
case 3580:
case 292:
case 854:
case 603:
case 1389:
case 1820:
case 1704:
case 2739:
case 3783:
case 441:
case 1869:
case 1781:
case 2594:
case 2468:
case 1234:
case 1939:
case 2904:
case 2209:
case 592:
case 2090:
case 3555:
case 3479:
case 18:
case 3111:
case 3838:
case 3352:
case 2319:
case 1779:
case 3877:
case 3897:
case 1113:
case 84:
case 3658:
case 2294:
case 1030:
case 4087:
case 4063:
case 3481:
case 3968:
case 3886:
case 3404:
case 506:
case 3609:
case 4018:
case 1911:
case 2025:
case 3366:
case 3722:
case 1526:
case 1391:
case 1895:
case 1371:
case 3846:
case 3441:
case 1168:
case 3393:
case 912:
case 772:
case 1411:
case 3965:
case 3413:
case 868:
case 1816:
case 3258:
case 1333:
case 3183:
case 2580:
case 1062:
case 809:
case 3331:
case 3941:
case 2139:
case 3167:
case 1210:
case 1837:
case 1165:
case 2767:
case 3981:
case 112:
case 2499:
case 1056:
case 3574:
case 3904:
case 4015:
case 3090:
case 1141:
case 3468:
case 1967:
case 1014:
case 2877:
case 2111:
case 2838:
case 437:
case 3122:
case 1439:
case 2968:
case 3979:
case 2481:
case 2255:
case 3999:
case 3294:
case 2913:
case 2722:
case 61:
case 1634:
case 621:
case 2373:
case 2441:
case 2393:
case 2280:
case 3711:
case 1854:
case 2846:
case 242:
case 1199:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1760526001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,];
var gg_b = "1760526001/";

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
