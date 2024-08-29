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
case 2837:
case 2252:
case 1333:
case 23:
case 2650:
case 953:
case 1844:
case 1435:
case 2231:
case 2092:
case 855:
case 979:
case 3120:
case 1964:
case 1193:
case 3606:
case 3997:
case 1714:
case 1772:
case 775:
case 2862:
case 1169:
case 4003:
case 1228:
case 3750:
case 1290:
case 2172:
case 1438:
case 119:
case 931:
case 3880:
case 397:
case 3175:
case 1258:
case 150:
case 145:
case 3702:
case 4029:
case 2800:
case 802:
case 2434:
case 1838:
case 3315:
case 2157:
case 181:
case 1392:
case 3871:
case 3522:
case 376:
case 2891:
case 300:
case 1778:
case 3316:
case 2014:
case 2391:
case 2980:
case 2176:
case 2523:
case 1885:
case 1449:
case 2900:
case 2813:
case 2780:
case 1223:
case 2343:
case 198:
case 3453:
case 2509:
case 1784:
case 19:
case 1076:
case 605:
case 928:
case 4045:
case 2211:
case 3138:
case 3319:
case 2576:
case 1876:
case 2481:
case 2597:
case 807:
case 3371:
case 3825:
case 1061:
case 3387:
case 2841:
case 72:
case 1542:
case 3800:
case 1553:
case 2973:
case 4046:
case 3096:
case 3716:
case 2646:
case 2149:
case 1176:
case 2748:
case 2226:
case 3196:
case 1980:
case 2997:
case 873:
case 1787:
case 353:
case 2021:
case 2212:
case 3579:
case 1510:
case 2766:
case 2085:
case 3115:
case 1262:
case 716:
case 1971:
case 2110:
case 3246:
case 336:
case 1687:
case 1545:
case 1256:
case 342:
case 3395:
case 2591:
case 1812:
case 1636:
case 3490:
case 2398:
case 1508:
case 3774:
case 656:
case 2094:
case 2436:
case 1304:
case 3338:
case 2286:
case 2442:
case 1112:
case 976:
case 3708:
case 1938:
case 3226:
case 2902:
case 1087:
case 0:
case 2698:
case 1187:
case 1239:
case 1677:
case 2401:
case 865:
case 2529:
case 2313:
case 2964:
case 1018:
case 3552:
case 470:
case 3971:
case 834:
case 3885:
case 690:
case 1427:
case 3085:
case 933:
case 702:
case 3442:
case 1387:
case 1899:
case 3601:
case 1881:
case 4005:
case 185:
case 1842:
case 2877:
case 1557:
case 3306:
case 2061:
case 2767:
case 2492:
case 3171:
case 364:
case 1266:
case 3223:
case 646:
case 2447:
case 1178:
case 1436:
case 1386:
case 2757:
case 2109:
case 1172:
case 572:
case 1575:
case 2995:
case 2410:
case 1953:
case 3952:
case 1925:
case 2904:
case 3081:
case 2043:
case 2982:
case 1460:
case 3370:
case 2050:
case 2216:
case 1760:
case 1643:
case 1145:
case 1937:
case 2334:
case 4052:
case 486:
case 2614:
case 1655:
case 3498:
case 548:
case 1570:
case 3580:
case 3599:
case 405:
case 1467:
case 3341:
case 3220:
case 2237:
case 829:
case 609:
case 1318:
case 2898:
case 278:
case 3258:
case 1741:
case 2606:
case 1580:
case 2730:
case 2679:
case 194:
case 1357:
case 299:
case 333:
case 511:
case 4027:
case 3835:
case 3699:
case 1044:
case 640:
case 373:
case 1352:
case 849:
case 3692:
case 3987:
case 1067:
case 1801:
case 793:
case 1138:
case 3568:
case 1720:
case 3493:
case 108:
case 1561:
case 1414:
case 3963:
case 3137:
case 1293:
case 3961:
case 3287:
case 2789:
case 3149:
case 3015:
case 1813:
case 3013:
case 3964:
case 723:
case 1029:
case 2769:
case 200:
case 1278:
case 2511:
case 1722:
case 2825:
case 6:
case 3976:
case 3043:
case 375:
case 1857:
case 3900:
case 3247:
case 458:
case 1206:
case 3299:
case 4002:
case 3035:
case 1098:
case 546:
case 47:
case 2938:
case 866:
case 2030:
case 1280:
case 3159:
case 3934:
case 1305:
case 371:
case 1650:
case 859:
case 1433:
case 255:
case 821:
case 3616:
case 382:
case 2699:
case 2542:
case 2869:
case 2294:
case 902:
case 992:
case 3170:
case 698:
case 3796:
case 1428:
case 2627:
case 2755:
case 297:
case 41:
case 50:
case 3457:
case 2593:
case 3169:
case 3049:
case 3243:
case 1483:
case 3456:
case 599:
case 4014:
case 3865:
case 1499:
case 827:
case 3720:
case 296:
case 3535:
case 2421:
case 1531:
case 3253:
case 685:
case 600:
case 242:
case 1361:
case 4089:
case 3485:
case 1855:
case 3386:
case 2175:
case 602:
case 3451:
case 3132:
case 647:
case 1121:
case 1588:
case 2709:
case 2178:
case 1403:
case 1466:
case 728:
case 4018:
case 3461:
case 1659:
case 1984:
case 3228:
case 2404:
case 1037:
case 781:
case 3548:
case 160:
case 554:
case 3784:
case 3240:
case 2171:
case 2885:
case 4054:
case 1731:
case 1402:
case 911:
case 573:
case 1002:
case 480:
case 3110:
case 421:
case 4040:
case 2120:
case 241:
case 3775:
case 1594:
case 1532:
case 2011:
case 1638:
case 703:
case 574:
case 1303:
case 2665:
case 1511:
case 1785:
case 3724:
case 1334:
case 3858:
case 1664:
case 4010:
case 1133:
case 1724:
case 787:
case 2439:
case 1915:
case 796:
case 1453:
case 2:
case 2026:
case 1411:
case 2413:
case 2519:
case 2141:
case 941:
case 2192:
case 2227:
case 2806:
case 409:
case 2843:
case 3821:
case 1063:
case 833:
case 1571:
case 3487:
case 1682:
case 2700:
case 3390:
case 978:
case 2737:
case 1324:
case 3300:
case 3824:
case 1480:
case 2555:
case 2675:
case 3711:
case 954:
case 830:
case 3468:
case 1689:
case 828:
case 903:
case 3505:
case 67:
case 4050:
case 1527:
case 1578:
case 2820:
case 250:
case 147:
case 1309:
case 772:
case 1140:
case 883:
case 651:
case 485:
case 1452:
case 3314:
case 2086:
case 1377:
case 1514:
case 2827:
case 1861:
case 692:
case 3125:
case 1967:
case 1581:
case 3303:
case 3630:
case 3730:
case 3134:
case 1851:
case 1947:
case 1344:
case 917:
case 1484:
case 291:
case 2084:
case 2798:
case 1314:
case 3819:
case 3359:
case 919:
case 4006:
case 1406:
case 2643:
case 3154:
case 3868:
case 2035:
case 868:
case 2140:
case 1409:
case 582:
case 3917:
case 549:
case 2839:
case 2802:
case 1765:
case 68:
case 2936:
case 2280:
case 4015:
case 436:
case 1512:
case 488:
case 3000:
case 3213:
case 729:
case 3051:
case 186:
case 2479:
case 881:
case 501:
case 3263:
case 3007:
case 1647:
case 3856:
case 2126:
case 1880:
case 1248:
case 1478:
case 1407:
case 1886:
case 484:
case 1292:
case 2531:
case 3482:
case 25:
case 2543:
case 301:
case 4086:
case 2624:
case 3241:
case 3860:
case 1083:
case 3234:
case 1766:
case 1075:
case 2137:
case 390:
case 2215:
case 3640:
case 3420:
case 3553:
case 587:
case 1931:
case 2327:
case 3705:
case 3891:
case 136:
case 3364:
case 2797:
case 628:
case 2574:
case 2942:
case 806:
case 2560:
case 1102:
case 4083:
case 378:
case 2319:
case 3852:
case 1115:
case 2209:
case 2771:
case 680:
case 2889:
case 3829:
case 955:
case 254:
case 2794:
case 2358:
case 1180:
case 730:
case 3177:
case 1136:
case 463:
case 778:
case 1461:
case 3512:
case 2604:
case 1221:
case 1286:
case 3563:
case 2441:
case 260:
case 1927:
case 3551:
case 3751:
case 997:
case 545:
case 3203:
case 92:
case 2568:
case 3428:
case 566:
case 385:
case 1965:
case 2660:
case 3790:
case 2350:
case 1170:
case 3924:
case 1127:
case 142:
case 1062:
case 3808:
case 956:
case 533:
case 212:
case 3745:
case 1501:
case 4022:
case 137:
case 3042:
case 2493:
case 2719:
case 2435:
case 4068:
case 2520:
case 1012:
case 1976:
case 3591:
case 3633:
case 4065:
case 2058:
case 3347:
case 75:
case 1183:
case 1935:
case 3669:
case 1679:
case 473:
case 3090:
case 1644:
case 1568:
case 2269:
case 1585:
case 1041:
case 3595:
case 4055:
case 2756:
case 358:
case 4090:
case 4080:
case 1244:
case 857:
case 1841:
case 450:
case 2465:
case 1049:
case 1458:
case 1439:
case 1051:
case 1645:
case 864:
case 207:
case 1652:
case 2048:
case 3050:
case 721:
case 359:
case 2218:
case 544:
case 1455:
case 3881:
case 681:
case 2430:
case 735:
case 2338:
case 2527:
case 542:
case 2457:
case 2570:
case 2731:
case 3184:
case 3955:
case 3950:
case 2378:
case 3289:
case 12:
case 3157:
case 2954:
case 2273:
case 154:
case 513:
case 984:
case 3861:
case 3700:
case 3259:
case 3877:
case 3164:
case 3229:
case 1814:
case 1633:
case 1418:
case 3882:
case 1389:
case 1125:
case 1730:
case 151:
case 2582:
case 819:
case 2944:
case 3506:
case 2559:
case 3391:
case 1948:
case 3684:
case 1612:
case 1022:
case 394:
case 2433:
case 140:
case 2538:
case 3167:
case 1762:
case 1009:
case 1950:
case 3833:
case 583:
case 3991:
case 3106:
case 93:
case 2601:
case 3663:
case 4001:
case 2854:
case 1515:
case 3029:
case 952:
case 2778:
case 2471:
case 2124:
case 3765:
case 1287:
case 1092:
case 3527:
case 412:
case 1747:
case 743:
case 1540:
case 1074:
case 664:
case 132:
case 3763:
case 908:
case 924:
case 3529:
case 3836:
case 3427:
case 2200:
case 1498:
case 3199:
case 3264:
case 2751:
case 3405:
case 17:
case 3542:
case 2371:
case 3918:
case 3232:
case 921:
case 3472:
case 459:
case 1894:
case 2926:
case 442:
case 1671:
case 3643:
case 3839:
case 783:
case 2733:
case 2186:
case 3346:
case 890:
case 3753:
case 995:
case 1177:
case 2828:
case 1718:
case 3082:
case 1036:
case 3594:
case 2758:
case 1859:
case 3067:
case 1943:
case 2248:
case 2694:
case 2177:
case 3254:
case 3619:
case 1632:
case 3617:
case 2156:
case 2956:
case 1879:
case 2500:
case 3008:
case 3365:
case 2253:
case 2962:
case 3465:
case 2136:
case 27:
case 2987:
case 2858:
case 633:
case 1462:
case 1214:
case 623:
case 1660:
case 2921:
case 1896:
case 3260:
case 2502:
case 3632:
case 874:
case 2484:
case 3875:
case 292:
case 2075:
case 3102:
case 1696:
case 4061:
case 1275:
case 2671:
case 813:
case 994:
case 3018:
case 3621:
case 2641:
case 1166:
case 1358:
case 2894:
case 1852:
case 3533:
case 3953:
case 1064:
case 2121:
case 948:
case 1056:
case 2688:
case 1673:
case 2362:
case 2403:
case 316:
case 1697:
case 950:
case 344:
case 1090:
case 65:
case 2725:
case 3816:
case 3058:
case 2967:
case 1820:
case 957:
case 805:
case 165:
case 3968:
case 3813:
case 389:
case 330:
case 419:
case 3151:
case 3846:
case 2935:
case 11:
case 3645:
case 2501:
case 3873:
case 1981:
case 2955:
case 517:
case 2722:
case 853:
case 2753:
case 3739:
case 906:
case 3471:
case 1013:
case 3153:
case 2930:
case 762:
case 423:
case 2114:
case 1252:
case 3012:
case 1251:
case 310:
case 2533:
case 1197:
case 1050:
case 380:
case 117:
case 30:
case 524:
case 269:
case 1343:
case 4017:
case 836:
case 1185:
case 1738:
case 448:
case 754:
case 2331:
case 876:
case 3148:
case 3662:
case 464:
case 2506:
case 2355:
case 1306:
case 607:
case 2235:
case 1226:
case 1956:
case 2194:
case 930:
case 182:
case 3657:
case 16:
case 2003:
case 923:
case 1080:
case 746:
case 3718:
case 1128:
case 4051:
case 2053:
case 3249:
case 2329:
case 3237:
case 466:
case 2763:
case 2878:
case 1656:
case 570:
case 3517:
case 73:
case 564:
case 1157:
case 3155:
case 1902:
case 1526:
case 666:
case 60:
case 2197:
case 3854:
case 71:
case 3211:
case 1497:
case 2361:
case 601:
case 1159:
case 1408:
case 2840:
case 2738:
case 3034:
case 761:
case 3659:
case 1849:
case 77:
case 938:
case 2233:
case 3725:
case 2842:
case 3693:
case 2472:
case 1057:
case 3560:
case 2449:
case 2004:
case 1028:
case 424:
case 1188:
case 1983:
case 2309:
case 523:
case 3867:
case 3400:
case 2807:
case 590:
case 3903:
case 3417:
case 2656:
case 2245:
case 3266:
case 932:
case 3108:
case 3749:
case 3101:
case 2602:
case 3282:
case 3130:
case 2969:
case 3073:
case 1419:
case 2374:
case 863:
case 197:
case 2295:
case 1198:
case 958:
case 3799:
case 3958:
case 1327:
case 1342:
case 4043:
case 3135:
case 1958:
case 2250:
case 809:
case 2633:
case 1777:
case 3163:
case 338:
case 2427:
case 1686:
case 3131:
case 1616:
case 2259:
case 2397:
case 128:
case 2946:
case 2741:
case 2649:
case 1856:
case 337:
case 2154:
case 2162:
case 3078:
case 2676:
case 1261:
case 3136:
case 1960:
case 3109:
case 687:
case 1634:
case 1179:
case 2682:
case 210:
case 1255:
case 724:
case 1901:
case 1530:
case 2706:
case 3651:
case 3797:
case 2873:
case 3499:
case 492:
case 2653:
case 2257:
case 46:
case 959:
case 969:
case 3422:
case 96:
case 1269:
case 141:
case 2819:
case 3941:
case 3231:
case 1821:
case 2776:
case 1130:
case 2893:
case 1111:
case 3680:
case 3093:
case 38:
case 356:
case 1887:
case 845:
case 4007:
case 387:
case 2581:
case 1703:
case 752:
case 3140:
case 429:
case 3636:
case 237:
case 3379:
case 406:
case 2195:
case 209:
case 3995:
case 603:
case 2852:
case 3564:
case 2514:
case 3225:
case 3318:
case 438:
case 3648:
case 2082:
case 1743:
case 2684:
case 610:
case 3062:
case 97:
case 1708:
case 2971:
case 1739:
case 1030:
case 2686:
case 1672:
case 1150:
case 804:
case 2340:
case 2503:
case 3099:
case 2034:
case 3994:
case 1733:
case 4024:
case 1903:
case 3069:
case 1907:
case 622:
case 2713:
case 2623:
case 1824:
case 2999:
case 3585:
case 1834:
case 1860:
case 585:
case 4072:
case 3283:
case 2635:
case 2868:
case 1601:
case 3439:
case 2803:
case 348:
case 3911:
case 3349:
case 346:
case 904:
case 2847:
case 2301:
case 284:
case 49:
case 617:
case 1929:
case 2666:
case 2742:
case 2585:
case 3116:
case 483:
case 1874:
case 481:
case 918:
case 534:
case 3244:
case 1:
case 2712:
case 2402:
case 2740:
case 1767:
case 2244:
case 3588:
case 3277:
case 2418:
case 3778:
case 823:
case 2478:
case 528:
case 3216:
case 312:
case 3687:
case 1240:
case 1620:
case 3785:
case 2228:
case 2381:
case 966:
case 2522:
case 39:
case 577:
case 18:
case 967:
case 3378:
case 1559:
case 3398:
case 712:
case 691:
case 1736:
case 1889:
case 2528:
case 1716:
case 1890:
case 648:
case 1487:
case 2594:
case 2505:
case 1101:
case 175:
case 3416:
case 1603:
case 608:
case 971:
case 888:
case 1582:
case 82:
case 2306:
case 803:
case 1113:
case 1528:
case 2752:
case 349:
case 893:
case 3486:
case 770:
case 112:
case 86:
case 1871:
case 3565:
case 3613:
case 2621:
case 3454:
case 287:
case 3462:
case 846:
case 1434:
case 324:
case 3030:
case 543:
case 1974:
case 2919:
case 2341:
case 1928:
case 219:
case 4085:
case 3286:
case 916:
case 3576:
case 3893:
case 2008:
case 1472:
case 2915:
case 3045:
case 2539:
case 3201:
case 2198:
case 1606:
case 3556:
case 3521:
case 159:
case 21:
case 2409:
case 2949:
case 3652:
case 2864:
case 3998:
case 744:
case 2452:
case 3494:
case 3278:
case 1576:
case 2134:
case 2277:
case 1875:
case 1749:
case 499:
case 1726:
case 1847:
case 1569:
case 2927:
case 1404:
case 2914:
case 2214:
case 89:
case 1792:
case 3297:
case 3727:
case 3712:
case 3389:
case 538:
case 3281:
case 1456:
case 3879:
case 2821:
case 367:
case 1485:
case 2315:
case 3569:
case 2474:
case 1045:
case 2353:
case 1773:
case 946:
case 3768:
case 224:
case 3092:
case 3419:
case 1752:
case 2773:
case 407:
case 2440:
case 1383:
case 794:
case 990:
case 3361:
case 3890:
case 3921:
case 1495:
case 461:
case 2105:
case 1284:
case 2865:
case 3838:
case 2151:
case 1431:
case 2466:
case 1312:
case 3192:
case 56:
case 1837:
case 2844:
case 826:
case 3337:
case 1908:
case 3782:
case 2222:
case 1229:
case 3206:
case 645:
case 2622:
case 2032:
case 1242:
case 536:
case 3830:
case 190:
case 1000:
case 3033:
case 236:
case 1843:
case 183:
case 3932:
case 2834:
case 225:
case 2356:
case 1721:
case 2760:
case 1065:
case 1015:
case 2768:
case 2822:
case 3257:
case 52:
case 2024:
case 764:
case 500:
case 2890:
case 2744:
case 4066:
case 1246:
case 1737:
case 525:
case 869:
case 1335:
case 307:
case 3611:
case 1360:
case 910:
case 2064:
case 3063:
case 2988:
case 597:
case 2992:
case 2349:
case 1143:
case 191:
case 3577:
case 162:
case 2165:
case 3581:
case 1596:
case 2631:
case 3350:
case 1479:
case 852:
case 1369:
case 2817:
case 3351:
case 792:
case 3087:
case 742:
case 1917:
case 3197:
case 3224:
case 53:
case 2047:
case 1978:
case 3298:
case 3926:
case 453:
case 3086:
case 2823:
case 2853:
case 3744:
case 3547:
case 3931:
case 2480:
case 2775:
case 2261:
case 2561:
case 3065:
case 1241:
case 2550:
case 3755:
case 2765:
case 1613:
case 1142:
case 2459:
case 2838:
case 2577:
case 3104:
case 3956:
case 109:
case 769:
case 3786:
case 430:
case 2052:
case 1830:
case 303:
case 1882:
case 3832:
case 3677:
case 3445:
case 2979:
case 1337:
case 650:
case 1207:
case 7:
case 697:
case 939:
case 3366:
case 2477:
case 256:
case 2903:
case 196:
case 2836:
case 3103:
case 3695:
case 3783:
case 3764:
case 1955:
case 3571:
case 3729:
case 309:
case 604:
case 3612:
case 2994:
case 674:
case 3587:
case 1675:
case 3670:
case 2044:
case 4064:
case 1079:
case 55:
case 3070:
case 1564:
case 3554:
case 565:
case 3923:
case 3780:
case 179:
case 2342:
case 1426:
case 3036:
case 3793:
case 3150:
case 425:
case 1011:
case 3173:
case 2504:
case 2508:
case 1391:
case 3715:
case 1848:
case 2174:
case 2324:
case 1376:
case 2727:
case 120:
case 251:
case 850:
case 335:
case 1104:
case 365:
case 3322:
case 3026:
case 2875:
case 776:
case 396:
case 431:
case 2832:
case 2298:
case 1911:
case 54:
case 319:
case 3713:
case 3910:
case 3182:
case 2857:
case 3766:
case 26:
case 1151:
case 2365:
case 2242:
case 812:
case 2337:
case 3597:
case 960:
case 2483:
case 3809:
case 2272:
case 2808:
case 3080:
case 2307:
case 20:
case 3726:
case 1058:
case 1572:
case 1522:
case 2835:
case 2056:
case 2256:
case 1424:
case 1770:
case 329:
case 2846:
case 327:
case 2068:
case 326:
case 81:
case 2262:
case 4060:
case 3767:
case 2332:
case 2658:
case 2210:
case 472:
case 1024:
case 838:
case 1774:
case 451:
case 3593:
case 1216:
case 1078:
case 3160:
case 3671:
case 482:
case 1900:
case 2906:
case 1884:
case 1270:
case 3694:
case 2750:
case 1454:
case 4030:
case 2770:
case 2584:
case 3992:
case 2892:
case 3532:
case 3172:
case 1793:
case 208:
case 1296:
case 1827:
case 2788:
case 4008:
case 2122:
case 639:
case 91:
case 3118:
case 1535:
case 161:
case 2912:
case 741:
case 1153:
case 3728:
case 2945:
case 579:
case 2049:
case 738:
case 2400:
case 468:
case 2370:
case 654:
case 2670:
case 1866:
case 1840:
case 3121:
case 3683:
case 1110:
case 1420:
case 1390:
case 1997:
case 1547:
case 69:
case 514:
case 3165:
case 1186:
case 3207:
case 3650:
case 1243:
case 810:
case 2708:
case 3227:
case 790:
case 3208:
case 3122:
case 613:
case 2364:
case 758:
case 1505:
case 3166:
case 2615:
case 3629:
case 285:
case 2662:
case 2661:
case 3691:
case 2939:
case 3218:
case 3288:
case 2346:
case 2344:
case 1892:
case 3969:
case 1758:
case 469:
case 2009:
case 638:
case 927:
case 2782:
case 3235:
case 3710:
case 1577:
case 791:
case 1877:
case 2078:
case 2062:
case 1551:
case 561:
case 2042:
case 3185:
case 1027:
case 1906:
case 636:
case 2213:
case 2575:
case 3176:
case 3573:
case 2876:
case 736:
case 2314:
case 3112:
case 295:
case 3734:
case 2916:
case 3791:
case 3484:
case 1858:
case 1401:
case 1492:
case 689:
case 361:
case 3999:
case 964:
case 1137:
case 1122:
case 1607:
case 949:
case 3539:
case 3284:
case 345:
case 1520:
case 2051:
case 2485:
case 1463:
case 818:
case 780:
case 3776:
case 2160:
case 2486:
case 3896:
case 915:
case 253:
case 1519:
case 1347:
case 1348:
case 1683:
case 4062:
case 1167:
case 2940:
case 1888:
case 1001:
case 1349:
case 996:
case 1782:
case 1781:
case 1442:
case 1350:
case 4081:
case 1816:
case 3470:
case 991:
case 1073:
case 1362:
case 1430:
case 3325:
case 2132:
case 3083:
case 2328:
case 1946:
case 2968:
case 2587:
case 841:
case 3399:
case 2491:
case 798:
case 2321:
case 2998:
case 2985:
case 4049:
case 1315:
case 1786:
case 541:
case 393:
case 2369:
case 2101:
case 3610:
case 3733:
case 1802:
case 3330:
case 3811:
case 2515:
case 2490:
case 2683:
case 3292:
case 1539:
case 1595:
case 3139:
case 355:
case 1670:
case 1593:
case 1543:
case 773:
case 347:
case 48:
case 571:
case 2431:
case 1237:
case 2264:
case 1363:
case 2372:
case 3530:
case 1674:
case 3930:
case 422:
case 2005:
case 4026:
case 3317:
case 3143:
case 879:
case 2512:
case 3678:
case 589:
case 1144:
case 15:
case 1103:
case 2263:
case 1999:
case 381:
case 1192:
case 1400:
case 2107:
case 563:
case 4009:
case 2330:
case 1864:
case 3746:
case 3435:
case 3915:
case 2815:
case 719:
case 3996:
case 2603:
case 110:
case 3044:
case 2091:
case 3296:
case 31:
case 3847:
case 3866:
case 1468:
case 3723:
case 1619:
case 2144:
case 1014:
case 3187:
case 820:
case 3792:
case 2721:
case 747:
case 2541:
case 3023:
case 3795:
case 3841:
case 1068:
case 968:
case 4070:
case 1583:
case 611:
case 980:
case 2636:
case 1756:
case 3423:
case 3951:
case 937:
case 3475:
case 2123:
case 80:
case 354:
case 2637:
case 2498:
case 3280:
case 369:
case 3124:
case 2716:
case 3502:
case 3016:
case 1592:
case 624:
case 2947:
case 3962:
case 816:
case 1047:
case 3989:
case 1336:
case 737:
case 715:
case 58:
case 872:
case 3466:
case 555:
case 3375:
case 3883:
case 34:
case 218:
case 2258:
case 1425:
case 615:
case 1281:
case 2928:
case 1008:
case 2620:
case 444:
case 1963:
case 2033:
case 230:
case 4076:
case 1751:
case 987:
case 3212:
case 3872:
case 1622:
case 1589:
case 1905:
case 1220:
case 588:
case 2613:
case 3205:
case 2461:
case 2717:
case 2726:
case 1695:
case 1661:
case 1010:
case 1538:
case 1059:
case 2296:
case 1681:
case 3516:
case 3032:
case 3409:
case 989:
case 1234:
case 3660:
case 2984:
case 2207:
case 104:
case 1788:
case 891:
case 1202:
case 2855:
case 9:
case 1692:
case 1260:
case 1217:
case 2608:
case 1560:
case 2102:
case 2320:
case 491:
case 2183:
case 1085:
case 2989:
case 3204:
case 363:
case 59:
case 1552:
case 3531:
case 1868:
case 1283:
case 2184:
case 2747:
case 4041:
case 870:
case 3117:
case 4053:
case 2302:
case 249:
case 3869:
case 439:
case 449:
case 3912:
case 3798:
case 925:
case 3549:
case 2544:
case 2013:
case 2685:
case 1688:
case 507:
case 1375:
case 3623:
case 709:
case 2657:
case 2360:
case 3267:
case 2116:
case 2667:
case 1719:
case 171:
case 3655:
case 2791:
case 2810:
case 3191:
case 2961:
case 714:
case 660:
case 3424:
case 2290:
case 2718:
case 1546:
case 2392:
case 2871:
case 1617:
case 2308:
case 612:
case 3076:
case 227:
case 1808:
case 531:
case 400:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1724911201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,];
var gg_b = "1724911201/";

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
      subdomainx = String.fromCharCode(97 + gg_m[x]);
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
